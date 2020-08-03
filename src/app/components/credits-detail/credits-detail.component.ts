import { Component, OnInit } from '@angular/core';
import {Products} from '../../interface/products';
import {Router} from '@angular/router';

@Component({
  selector: 'app-credits-detail',
  templateUrl: './credits-detail.component.html',
  styleUrls: ['./credits-detail.component.css']
})
export class CreditsDetailComponent implements OnInit {

  product: Products;

  constructor(private router: Router) {
    this.product = this.router.getCurrentNavigation().extras.state.product as Products;
  }

  ngOnInit() {
  }

}
