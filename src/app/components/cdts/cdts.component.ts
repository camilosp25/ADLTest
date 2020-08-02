import {Component, Input, OnInit} from '@angular/core';
import {Products} from '../../interface/products';

@Component({
  selector: 'app-cdts',
  templateUrl: './cdts.component.html',
  styleUrls: ['./cdts.component.css']
})
export class CdtsComponent implements OnInit {

  @Input() product: Products;

  constructor() { }

  ngOnInit() {
  }

}
