import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Products} from '../../interface/products';

@Component({
  selector: 'app-cdts-detail',
  templateUrl: './cdts-detail.component.html',
  styleUrls: ['./cdts-detail.component.css']
})
export class CdtsDetailComponent implements OnInit {

  product: Products;

  constructor(private router: Router) {
    this.product = this.router.getCurrentNavigation().extras.state.product as Products;
  }

  ngOnInit() {
  }

}
