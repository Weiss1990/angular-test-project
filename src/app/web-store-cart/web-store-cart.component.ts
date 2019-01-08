import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable } from "rxjs/index";
import { Store, select } from "@ngrx/store";
import { Product } from "../models/product.model";
import { AppState } from "../app.state";

@Component({
  selector: 'app-web-store-cart',
  templateUrl: './web-store-cart.component.html',
  styleUrls: ['./web-store-cart.component.css']
})
export class WebStoreCartComponent implements OnInit {

  products:Observable<Product[]>;

  constructor(private store: Store<AppState>) {
    this.products = store.pipe(select('cart'));
    console.log(this.products);
  }

  amount:any = 0;

  ngOnInit() {
  }

}
