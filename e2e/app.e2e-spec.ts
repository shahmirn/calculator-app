import { CalculatorAppPage } from './app.po';

describe('calculator-app App', function() {
  let page: CalculatorAppPage;

  beforeEach(() => {
    page = new CalculatorAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
