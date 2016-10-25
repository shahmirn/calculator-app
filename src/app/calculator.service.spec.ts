/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';

describe('Service: Calculator', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculatorService]
    });
  });

  it('should initialize successfully', inject([CalculatorService], (calculatorService: CalculatorService) => {
      expect(calculatorService).toBeTruthy();
  }));

  it('should add two numbers successfully', inject([CalculatorService], (calculatorService: CalculatorService) => {
      expect(calculatorService.add(2, 2)).toBe(4);
  }));

  it('should subtract two numbers successfully', inject([CalculatorService], (calculatorService: CalculatorService) => {
      expect(calculatorService.subtract(2, 2)).toBe(0);
  }));

  it('should multiply two numbers successfully', inject([CalculatorService], (calculatorService: CalculatorService) => {
      expect(calculatorService.multiply(4, 2)).toBe(8);
  }));

  it('should add two numbers successfully - observable', async(inject([CalculatorService], (service: CalculatorService) => {
      service.addAsync(2, 2).subscribe(
        value => expect(value).toBe(4)
      );
  })));

  it('should add two numbers successfully - observable with delay', done => {
    inject([CalculatorService], (service: CalculatorService) => {
        service.addAsyncWithDelay(2, 2).subscribe(value => {
            expect(value).toBe(4);
            done();
        });
    })();
  });
});
