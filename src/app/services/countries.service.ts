import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';
import { catchError, finalize, map, tap } from 'rxjs/operators';
class Country {
  name: string;
  capital: string;
  region: string;
  population: number;
  currency: string;
  flag: string;
}
@Injectable()
export class CountriesService {
  countryUrl: string = 'https://restcountries.eu/rest/v2/name/united';
  constructor(private http: HttpClient) { }

  getCountry(): Observable<any>{
        return this.http.get<Country[]>(`${this.countryUrl}`)
    .pipe(
      tap((response: any) => {
        // this.logger.log(response);
        console.log(response);
      }),
      map(response => {
        const country: Country = new Country();
        const countryResponse = response[0];
        country.name =  countryResponse.name;
        country.capital =  countryResponse.capital;
        country.region =  countryResponse.region;
        country.population =  countryResponse.population;
        country.currency =  countryResponse.currencies[0].code;
        country.flag = countryResponse.flag;
        return country;
      }),
      catchError(this.handleRemoteError.bind(this)),
      finalize(() => {
        console.log('Clean up your resource here ');
      })
    );
  }
  private handleRemoteError(error: HttpErrorResponse | any): Observable<any> {
    console.error('Error caught while making remote Service call, continue with empty country object', error);
    return of(new Country());
  }
}
