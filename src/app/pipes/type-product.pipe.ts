import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeProduct'
})
export class TypeProductPipe implements PipeTransform {

  typeProducts: any = {CERTIFIED_DEPOSIT_TERM : 'CDT',
    CREDIT_CARD : 'Tarjeta de Crédito',
    CREDIT: 'Crédito',
    CURRENT_ACCOUNT: 'Cuenta Corriente',
    DEPOSIT_ACCOUNT: 'Cuenta de Ahorros'};

  transform(value: any, ...args: any[]): any {
    return this.typeProducts[value];
  }

}
