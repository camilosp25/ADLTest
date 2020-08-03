import {Component, Input, OnInit} from '@angular/core';
import {Products} from '../../interface/products';

@Component({
  selector: 'app-cdts',
  templateUrl: './cdts.component.html',
  styleUrls: ['./cdts.component.css']
})
export class CdtsComponent implements OnInit {

  @Input() products: Products[];

  constructor() { }

  ngOnInit() {
  }

  stringToDate(date) {
    return new Date(date.split(' ').join(''));
  }

}
