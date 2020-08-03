import {Component, Input, OnInit} from '@angular/core';
import {Products} from '../../interface/products';

@Component({
  selector: 'app-currents',
  templateUrl: './currents.component.html',
  styleUrls: ['./currents.component.css']
})
export class CurrentsComponent implements OnInit {

  @Input() products: Products[];

  constructor() { }

  ngOnInit() {
  }

}
