import {Component, Input, OnInit} from '@angular/core';
import {Products} from '../../interface/products';
import {Router} from '@angular/router';

@Component({
  selector: 'app-creditcards-detail',
  templateUrl: './creditcards-detail.component.html',
  styleUrls: ['./creditcards-detail.component.css']
})
export class CreditcardsDetailComponent implements OnInit {

  product: Products;

  constructor(private router: Router) {
    this.product = this.router.getCurrentNavigation().extras.state.product as Products;
  }

  ngOnInit() {
  }

}
