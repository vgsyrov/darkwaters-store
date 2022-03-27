import { Pipe, PipeTransform } from '@angular/core';

const translate = new Map<string, string>([
  ['OUTOFSTOCK', 'Отсутствует'],
  ['INSTOCK', 'Доступен'],
  ['LOWSTOCK', 'Остатки'],
]);

@Pipe({
  name: 'translate',
})
export class TranslatePipe implements PipeTransform {
  transform(value: string): string {
    if (translate.has(value)) {
      return <string>translate.get(value);
    }
    return value;
  }
}
