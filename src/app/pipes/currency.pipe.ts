import { Pipe, PipeTransform } from '@angular/core';

const currencySigns = new Map<string, string>([
  ['RUR', '₽'],
  ['USD', '$'],
  ['EUR', '€'],
  ['CUP', '-'],
]);

@Pipe({
  name: 'currency',
})
export class CurrencyPipe implements PipeTransform {
  transform(value: number, format: string): string {
    return (
      currencySigns.get(format) +
      ' ' +
      this.calculateSum(value, format).toFixed(2)
    );
  }

  private calculateSum(value: number, currency: string): number {
    return value / CurrencyPipe.getCurs(currency);
  }

  private static getCurs(currency: string): number {
    switch (currency) {
      case 'USD':
        return 70;
      case 'EUR':
        return 80;
      case 'RUR':
        return 1;
    }
    return 1;
  }
}
