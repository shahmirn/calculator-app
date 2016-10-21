import { Injectable } from '@angular/core';

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

}

