import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {Products} from '../../interface/products';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Products[] = [];
  filteredProducts: Products[] = [];
  otherBankProducts = false;

  constructor(private productsServices: ProductsService) { }

  ngOnInit() {
    this.productsServices.getProducts().subscribe(
      resp => {
        this.products = resp;
        this.filteredProducts = this.products.sort((a, b) => a.typeAccount.localeCompare(b.typeAccount))
          .filter((data: Products) => data.accountInformation.bank === 'BANCO_1');
      });
  }

  toogleOtherBankProducts(event) {
    event.preventDefault();
    if (this.otherBankProducts) {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.sort((a, b) => a.typeAccount.localeCompare(b.typeAccount))
        .filter((data: Products) => data.accountInformation.bank === 'BANCO_1');
    }
  }

}
