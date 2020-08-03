import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {Products} from '../../interface/products';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Products[] = [];
  filteredProducts: Products[] = [];
  otherBankProducts = false;

  constructor(private productsServices: ProductsService, private router: Router) { }

  ngOnInit() {
    this.productsServices.getProducts().subscribe(
      resp => {
        //debugger;
        this.products = resp;
        this.onlyBankProducts();
      });
  }

  toogleOtherBankProducts(event) {
    event.preventDefault();
    if (this.otherBankProducts) {
      this.filteredProducts = this.products;
    } else {
      this.onlyBankProducts();
    }
  }

  onlyBankProducts() {
    this.filteredProducts = this.products.sort((a, b) => a.typeAccount.localeCompare(b.typeAccount))
      .filter((data: Products) => data.accountInformation.bank === 'BANCO_1');
  }

  filterByType(typeAccount: string) {
    return this.filteredProducts.filter((data: Products) => data.typeAccount === typeAccount);
  }

}
