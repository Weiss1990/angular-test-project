import { Component, OnInit } from '@angular/core';
import { WebStoreCartComponent } from '../web-store-cart';
import { DataService } from "../data.service";
import { Category } from "../category";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [DataService]
})
export class HeaderComponent implements OnInit {

  constructor(private DataService: DataService) {
  }
  headerItems:string[] = [];

  ngOnInit() {
    this.DataService.getCategories().subscribe((data: Category) => {
      this.headerItems = data["categories"];
    }, (error) => {
      console.log(error);
    })
  }

}
