import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

Observable
@Component({
  selector: 'app-async-observable-pipe',
  templateUrl: './async-observable-pipe.component.html',
  styleUrls: ['./async-observable-pipe.component.css']
})
export class AsyncObservablePipeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });
}
