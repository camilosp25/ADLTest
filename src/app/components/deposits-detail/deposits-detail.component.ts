import { Component, OnInit } from '@angular/core';
import {Products} from '../../interface/products';
import {Router} from '@angular/router';

@Component({
  selector: 'app-deposits-detail',
  templateUrl: './deposits-detail.component.html',
  styleUrls: ['./deposits-detail.component.css']
})
export class DepositsDetailComponent implements OnInit {

  product: Products;

  constructor(private router: Router) {
    this.product = this.router.getCurrentNavigation().extras.state.product as Products;
    console.log(this.product);
  }

  ngOnInit() {
  }

}
