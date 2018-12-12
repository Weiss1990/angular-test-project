import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-store-cart',
  templateUrl: './web-store-cart.component.html',
  styleUrls: ['./web-store-cart.component.css']
})
export class WebStoreCartComponent implements OnInit {

  constructor() { }

  amount:any = 0;

  ngOnInit() {
  }

}
