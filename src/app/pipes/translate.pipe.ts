import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'OUTOFSTOCK': return 'Отсутствует';
      case 'INSTOCK': return 'Доступен';
      case 'LOWSTOCK': return 'Остатки';
    }
    console.log(value);
    return value;
  }

}
