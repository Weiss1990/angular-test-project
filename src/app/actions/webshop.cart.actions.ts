import {Action} from '@ngrx/store';
import {Product} from "../models/product.model";

export enum ActionTypes {
  AddProduct = 'add_product_to_cart',
  RemoveProduct = 'remove_product_from_cart',
  ProductAmount = 'products_count'
}

export class AddProduct implements Action {
  readonly type = ActionTypes.AddProduct;
  constructor(public payload:Product) {};
}

export class RemoveProduct implements Action {
  readonly type = ActionTypes.RemoveProduct;
  constructor(public payload: string) {};
}

export class ProductAmount implements Action {
  readonly type = ActionTypes.ProductAmount;
}
