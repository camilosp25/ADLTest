import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Products} from '../../interface/products';

@Component({
  selector: 'app-currents-detail',
  templateUrl: './currents-detail.component.html',
  styleUrls: ['./currents-detail.component.css']
})
export class CurrentsDetailComponent implements OnInit {

  product: Products;

  constructor(private router: Router) {
    this.product = this.router.getCurrentNavigation().extras.state.product as Products;
  }

  ngOnInit() {
  }

}
