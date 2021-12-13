import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';
import { SearchMeal } from '../search/search.model';
import { SearchService } from './search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  mealName: string;
  searchMeal: SearchMeal;
  searchData: string;

  constructor(private photoService: PhotoService, private searchService: SearchService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.searchService.getDishDetail());
    this.searchMeal = this.searchService.getDishDetail()
  }

  // public searchDish() {
  //   this.photoService.searchDish().subscribe((result) => {
  //     this.searchMeal = result;
  //     console.log('Search Result show', result);

  //   });
  // }


  // goToSearchResult(searchInput: string) {
  //   console.log(searchInput);
  // }
  onSelect(itemId: string): void {
    console.log('Testing',itemId);
    this.router.navigate(['/search/' + itemId]); 
  }
}
