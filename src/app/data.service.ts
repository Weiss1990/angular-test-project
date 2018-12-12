import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}
  url: string = 'http://localhost:4200/assets/'

  getCategories() {
    return this.http.get(`${this.url}categories.json`);
  }
}
