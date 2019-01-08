import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WebStoreCartComponent } from './web-store-cart/web-store-cart.component';

import { HttpClientModule } from '@angular/common/http';
import { ListOverviewComponent } from './list-overview/list-overview.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { HomeComponent } from './home/home.component';

import { StoreModule } from '@ngrx/store';
import { cartReducer } from "./reducers/webshop.cart.reducer";

const appRoutes: Routes=[
  { path: 'list/:categoryId', component: ListOverviewComponent },
  { path: 'product', component: ProductDetailsComponent},
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WebStoreCartComponent,
    ListOverviewComponent,
    ProductDetailsComponent,
    OrderFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {onSameUrlNavigation:'reload'}),
    StoreModule.forRoot({cart: cartReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
