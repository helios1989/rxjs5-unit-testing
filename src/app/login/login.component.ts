import { AuthenticationService } from './../services/authentication.service';
import {Component, EventEmitter, Input, Output} from '@angular/core';

export class User { 
  constructor(public email: string, public password: string) {
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  @Output() loggedIn = new EventEmitter<User>(); 
  @Input() enabled = true; 

  constructor(private auth: AuthenticationService){}
  needsLogin(): boolean {
    return !this.auth.isAuthenticated();
  }
  login(email, password): void { 
    console.log(`Login ${email} ${password}`);
    if (email && password) {
      console.log(`Emitting`);
      this.loggedIn.emit(new User(email, password));
    }
  }
}