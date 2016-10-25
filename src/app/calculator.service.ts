import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CalculatorService {

  constructor() { }

  public add(number1: number, number2: number): number {
      return number1 + number2;
  }

  public subtract(number1: number, number2: number): number {
      return number1 - number2;
  }

  public multiply(number1: number, number2: number): number {
      return number1 * number2;
  }

  public addAsync(number1: number, number2: number): Observable<number> {
      return Observable.of(number1 + number2);
  }

  public addAsyncWithDelay(number1: number, number2: number): Observable<number> {
      return Observable.of(number1 + number2).delay(100);
  }
}
