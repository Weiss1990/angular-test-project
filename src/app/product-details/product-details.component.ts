import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { DataService } from "../data.service";
import { OrderFormComponent } from "../order-form/order-form.component";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers: [DataService]
})
export class ProductDetailsComponent implements OnInit {

  orderAccepted: boolean = false;
  detailInfo: any;

  constructor(private ActivatedRoute: ActivatedRoute, private DataService: DataService) {
    ActivatedRoute.queryParams.subscribe(params => {
      this.DataService.getList().subscribe((data) => {
        this.detailInfo = data["products"].find((product) => {
          return product.name === params.name;
        })
      });
    })
  }

  makeOrder() {
    this.orderAccepted = true;
  }

  ngOnInit() {
  }

}
