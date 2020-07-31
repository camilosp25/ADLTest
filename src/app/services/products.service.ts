import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Products} from '../interface/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Products[]>('/assets/data/data.json');
  }
}
