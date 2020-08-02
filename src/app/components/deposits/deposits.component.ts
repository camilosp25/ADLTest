import {Component, Input, OnInit} from '@angular/core';
import {Products} from '../../interface/products';

@Component({
  selector: 'app-deposits',
  templateUrl: './deposits.component.html',
  styleUrls: ['./deposits.component.css']
})
export class DepositsComponent implements OnInit {

  @Input() product: Products;

  constructor() {
  }

  ngOnInit() {
  }

}
