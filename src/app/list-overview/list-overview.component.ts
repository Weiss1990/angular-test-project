import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { DataService } from "../data.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-list-overview',
  templateUrl: './list-overview.component.html',
  styleUrls: ['./list-overview.component.css'],
  providers: [DataService]
})
export class ListOverviewComponent implements OnInit {

  private categoryId: number;
  private list:any[] = [];

  constructor(private activatedRoute: ActivatedRoute, private DataService: DataService, private router: Router) {
    activatedRoute.params.subscribe(params => {
      this.categoryId = params['categoryId'];

      this.DataService.getList().subscribe((data) => {
        this.list = data["products"].filter((product) => {
          return product.category === this.categoryId;
        })
      });
    });
  }

  viewDetails(product) {
    this.router.navigate(['/product'], {
      queryParams: {
        name: product.name
      }
    });
  }

  ngOnInit() {

  }

}
