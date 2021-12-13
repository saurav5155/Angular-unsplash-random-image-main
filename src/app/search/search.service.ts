import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchMeal } from './search.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  dishDetail: any;
  search: SearchMeal;

  constructor(private http: HttpClient) { }

  getDishDetail() {
    return this.dishDetail;
  }

  setDishDetail(data: any) {
    this.dishDetail = data;
  }

  searchDish(data: string) {
    let url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + data;
    return this.http.get<SearchMeal>(url, {

    });
  }

  // getDishByName(selectedMeal: string) {
  //   let url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + selectedMeal;
  //   return this.http.get<SearchMeal>(url, {

  //   });
  // }
}
