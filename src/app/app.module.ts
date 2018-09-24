import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { AsyncObservablePipeComponent } from './async-observable-pipe/async-observable-pipe.component';
import { LoginComponent } from './login/login.component';
import { CapitalizePipe } from './pipe/capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    AsyncPipeComponent,
    AsyncObservablePipeComponent,
    LoginComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
