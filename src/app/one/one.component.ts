import { Component, OnInit } from '@angular/core';
import { CountriesService} from './../services/countries.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],
  providers: [CountriesService]
})
export class OneComponent implements OnInit {

  constructor(private country: CountriesService) { }

  ngOnInit() {
    this.country.getCountry().subscribe((country) => {
      console.log(country);
    })
  }

}
