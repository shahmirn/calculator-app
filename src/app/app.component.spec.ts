/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CalculatorService } from './calculator.service';

import {
  PanelModule,
  ButtonModule,
  LayoutModule,
  MenuModule,
  SidebarModule,
  TopbarModule
} from '@slb-planck-ui/core-web-components';

describe('App: CalculatorApp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        FormsModule,
        PanelModule,
        ButtonModule
      ],
      providers: [
        CalculatorService
      ]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Calculator'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Calculator');
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Calculator');
  }));

  it('should successfully add two numbers', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled: Element = fixture.debugElement.nativeElement;

    let number1: HTMLInputElement = compiled.querySelector('#number1') as HTMLInputElement;
    let number2: HTMLInputElement = compiled.querySelector('#number2') as HTMLInputElement;
    let addBtn: HTMLButtonElement = compiled.querySelector('#addBtn') as HTMLButtonElement;

    expect(number1).toBeTruthy();
    expect(number2).toBeTruthy();

    number1.value = '1';
    number2.value = '2';

    number1.dispatchEvent(new Event('input')); // tell angular to update ngModel
    number2.dispatchEvent(new Event('input')); // tell angular to update ngModel

    addBtn.click();

    fixture.detectChanges();

    let calResult: HTMLSpanElement = compiled.querySelector('#calcResult') as HTMLSpanElement;
    expect(calResult.innerText).toBe('3');
  }));

  it('should successfully add two numbers', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled: Element = fixture.debugElement.nativeElement;

    let number1: HTMLInputElement = compiled.querySelector('#number1') as HTMLInputElement;
    let number2: HTMLInputElement = compiled.querySelector('#number2') as HTMLInputElement;
    let subBtn: HTMLButtonElement = compiled.querySelector('#subBtn') as HTMLButtonElement;

    number1.value = '2';
    number1.dispatchEvent(new Event('input'));

    number2.value = '1';
    number2.dispatchEvent(new Event('input'));

    subBtn.click();

    fixture.detectChanges();

    let calResult: HTMLSpanElement = compiled.querySelector('#calcResult') as HTMLSpanElement;
    expect(calResult.innerText).toBe('1');
  }));
});
