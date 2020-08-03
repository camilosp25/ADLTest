import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard'
})
export class CreditCardPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    let numsbyfour: string[] = [];
    let auxNum: string = '';

    for (let i = 0; i < value.length; i++) {
      let currentNum = value.charAt(i);
      if(i < 12){
        currentNum = '●';
      }
      if ((i + 1) % 4 === 0){
        auxNum += currentNum;
        numsbyfour.push(auxNum);
        auxNum = '';
      } else {
        auxNum += currentNum;
      }
    }

    return numsbyfour.join(' ');
  }

}
