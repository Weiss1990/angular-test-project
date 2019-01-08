import { Action } from "@ngrx/store";
import { ActionTypes } from "../actions/webshop.cart.actions";
import {Product} from "../models/product.model";

export const initialState: Product = {
  category: '',
  name: '',
  image: '',
  shortDescription: '',
  fullDescription: '',
  price: ''
}

export function cartReducer(state: Product[] = [], action) {
  switch (action.type) {
    case ActionTypes.AddProduct:
      return [...state, action.payload];
  }
}
