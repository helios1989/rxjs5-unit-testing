import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { AsyncObservablePipeComponent } from './async-observable-pipe/async-observable-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    AsyncPipeComponent,
    AsyncObservablePipeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
