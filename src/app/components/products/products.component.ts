import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {Products} from '../../interface/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Products[] = [];

  constructor(private productsServices: ProductsService) { }

  ngOnInit() {
    this.productsServices.getProducts().subscribe(
      resp => {
        this.products.push(...resp);
      });
  }

}
