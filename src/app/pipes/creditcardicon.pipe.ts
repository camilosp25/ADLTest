import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditcardicon'
})
export class CreditcardiconPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value.slice(0, 1) === '4') {
      return 'assets/images/visa.svg';
    } else if (value.slice(0, 1) === '5') {
      return 'assets/images/master.svg';
    }
  }

}
