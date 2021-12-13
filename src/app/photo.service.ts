import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RandomPhoto } from './photo-show/photo-show.model';
import { SearchMeal } from './search/search.model';
// interface UnsplashIterface {
//   urls: {
//     regular: string;
//   }
// }

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  getValue(): any {
    throw new Error('Method not implemented.');
  }

  mealList : SearchMeal[] = [];

  constructor(private http: HttpClient) { }

  getRandomDish() {
    return this.http.get<RandomPhoto>('https://www.themealdb.com/api/json/v1/1/random.php', {
    });
  }

  searchDish() {
    return this.http.get<SearchMeal>('https://www.themealdb.com/api/json/v1/1/search.php?s=ratatouille', {

    });
  }
}
