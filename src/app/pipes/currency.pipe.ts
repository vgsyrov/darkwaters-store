import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  private currencySigns = new Map<string, string> ([
    ['RUR', '₽'],
    ['USD', '$'],
    ['EUR', '€'],
    ['CUP', '-']
  ]);

  transform(value: number, format: string): string {
    return this.currencySigns.get(format) + ' ' + this.calculateSum(value, format).toFixed(2);
  }

  private calculateSum(value: number, currency: string): number {
    return value / CurrencyPipe.getCurs(currency);
  }

  // TODO передалеать на имитацию получения курса валют из сервиса
  private static getCurs(currency: string) :number {
    switch (currency) {
      case 'USD': return 70;
      case 'EUR': return 80;
      case 'RUR': return 1;
    }
    return 1;
  }

}
