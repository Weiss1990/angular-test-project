import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { DataService } from "../data.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers: [DataService]
})
export class ProductDetailsComponent implements OnInit {

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
    alert('ordered!');
  }

  ngOnInit() {
  }

}
