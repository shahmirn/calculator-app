import { Component } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  protected title: string = 'Calculator';
  protected calcResult: number;

  protected number1: number;
  protected number2: number;

  private calculatorService: CalculatorService;

  constructor(calculatorService: CalculatorService) {
    this.calculatorService = calculatorService;
  }

  protected add(): void {
    this.calcResult = this.calculatorService.add(Number(this.number1), Number(this.number2));
  }

  protected subtract(): void {
    // todo: implement
    this.calcResult = this.calculatorService.subtract(Number(this.number1), Number(this.number2));
  }
}
