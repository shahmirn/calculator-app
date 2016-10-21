import { browser, element, by, ElementFinder } from 'protractor';

import { CalculatorAppPage } from './app.po';

describe('calculator-app App', function() {
  let page: CalculatorAppPage;

  beforeEach(() => {
    page = new CalculatorAppPage();
  });

  it('should add two numbers successfully', () => {
    page.navigateTo();

    let number1: ElementFinder = element(by.id('number1'));
    let number2: ElementFinder = element(by.id('number2'));

    let addBtn: ElementFinder = element(by.id('addBtn'));

    number1.sendKeys('1');
    number2.sendKeys('2');

    addBtn.click();
    browser.pause();

    let calcResult: ElementFinder = element(by.id('calcResult'));

    expect(calcResult.getText()).toBe('3');
  });
});
