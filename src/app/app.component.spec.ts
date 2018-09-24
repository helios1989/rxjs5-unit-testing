import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AsyncPipeComponent} from "./async-pipe/async-pipe.component";
import {AsyncObservablePipeComponent,} from './async-observable-pipe/async-observable-pipe.component';
import { CapitalizePipe } from './pipe/capitalize.pipe';
describe('AppComponent', () => {
  var originalTimeout;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AsyncPipeComponent,
        AsyncObservablePipeComponent,
        CapitalizePipe
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should have app-sync tag', () => {
    let fixtureApp = TestBed.createComponent(AsyncPipeComponent);
    fixtureApp.detectChanges();
    let asyncapp = fixtureApp.debugElement.nativeElement;
    expect(asyncapp).toBeTruthy();
  });
  it('should have AsyncObservablePipe Tag', ()=> {
    let fixtureApp = TestBed.createComponent(AsyncPipeComponent);
    fixtureApp.detectChanges();
    let asyncapp = fixtureApp.debugElement.nativeElement;
    expect(asyncapp).toBeTruthy();
  })
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('myAppTesting');
  }));
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Myapptesting!');
  });
});
