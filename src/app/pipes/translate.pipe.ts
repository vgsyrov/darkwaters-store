import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  private translate = new Map<string, string> ([
    ['OUTOFSTOCK', 'Отсутствует'],
    ['INSTOCK', 'Доступен'],
    ['LOWSTOCK', 'Остатки']
  ]);

  transform(value: string): string {
    if (this.translate.has(value)) {
      return <string>this.translate.get(value);
    } else {
      return value;
    }
  }
}
