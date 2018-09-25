
import {TestBed, ComponentFixture , async} from '@angular/core/testing';
import {LoginComponent, User} from './login.component';
import { FormsModule } from '@angular/forms';
import {By} from '@angular/platform-browser';
import { AuthenticationService } from '../services/authentication.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let elementBtn: HTMLElement;
  let loginEl: HTMLElement;
  let passwordEl: HTMLElement;
  let service: AuthenticationService;
  let spy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [FormsModule],
      providers: [AuthenticationService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    elementBtn = fixture.nativeElement.querySelector('button');
    // service = new AuthenticationService();

    service = TestBed.get(AuthenticationService);
    spyOn(service, 'isAuthenticated');
  });
  afterEach(() => { 
    localStorage.removeItem('token');
    service = null;
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should use ValueService', () => {
    localStorage.setItem('token', '1234');
    console.log('>>> is authetnicated', service.isAuthenticated());
  });

  it('canLogin returns falseA when the user is not authenticated', () => {
    expect(component.needsLogin()).toBeTruthy();
    expect(service.isAuthenticated).toHaveBeenCalled(); 
  });

  it('Setting enabled to false disabled the submit button', async(() => {
    component.enabled = false;
    fixture.detectChanges()
    expect(elementBtn.textContent).toBe('Login');
  }));

  it('User should have value', ()=> {
    let user: User;
    const elementInput = fixture.debugElement.query(By.css('input')).nativeElement;
    elementInput.value = 'vergelbarit35@gmail.com';
    elementInput.dispatchEvent(new Event('input'));
    const elementInput2 = fixture.debugElement.query(By.css('input[type=password]')).nativeElement;
    elementInput2.value = 'mypassword';
    elementInput2.dispatchEvent(new Event('input'));
    
    component.loggedIn.subscribe((value) => user = value);
    elementBtn.click();

  });
  
  it('canLogin returns falseB when the user is not authenticated', () => {
    expect(component.needsLogin()).toBeTruthy();
  });

  it('canLogin returns falseC when the user is not authenticated', () => {
    localStorage.setItem('token', '12345'); 
    expect(component.needsLogin()).toBeTruthy();
  });
});
