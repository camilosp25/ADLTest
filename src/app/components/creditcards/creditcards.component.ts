import {Component, Input, OnInit} from '@angular/core';
import {Products} from '../../interface/products';

@Component({
  selector: 'app-creditcards',
  templateUrl: './creditcards.component.html',
  styleUrls: ['./creditcards.component.css']
})
export class CreditcardsComponent implements OnInit {

  @Input() product: Products;
  balancePercentage: number;

  constructor() {
  }

  ngOnInit() {
    debugger;
    this.balancePercentage = (this.product.productAccountBalances.pago_total_pesos.amount * 100) /
      this.product.productAccountBalances.cupo_total.amount;
  }

}
