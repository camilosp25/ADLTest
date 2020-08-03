import {Component, Input, OnInit} from '@angular/core';
import {Products} from '../../interface/products';

@Component({
  selector: 'app-creditcards',
  templateUrl: './creditcards.component.html',
  styleUrls: ['./creditcards.component.css']
})
export class CreditcardsComponent implements OnInit {

  @Input() products: Products[];

  constructor() {
  }

  ngOnInit() {
  }

  getBalancePercentage(product: Products) {
    return (product.productAccountBalances.pago_total_pesos.amount * 100) /
      product.productAccountBalances.cupo_total.amount;
  }

}
