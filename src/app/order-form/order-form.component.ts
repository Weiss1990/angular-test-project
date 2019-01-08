import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from "../app.state";
import { Product } from "../models/product.model";
import { Observable } from 'rxjs';
import { AddProduct } from "../actions/webshop.cart.actions";
import { ActionTypes } from "../actions/webshop.cart.actions";

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnChanges {

  @Input() orderAccepted: boolean;
  @Input() productData: Product;

  constructor(private store: Store<AppState>) { }

  moveProductToCart() {
    this.store.dispatch(new AddProduct({
      category: this.productData.category,
      name: this.productData.name,
      image : this.productData.image,
      shortDescription: this.productData.shortDescription,
      fullDescription: this.productData.fullDescription,
      price: this.productData.price
    }));
  }

  ngOnChanges() {

    console.log(this.productData);
  }

}
