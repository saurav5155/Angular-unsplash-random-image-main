import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meal } from '../photo-show/photo-show.model';
import { SearchService } from '../search/search.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Ingredient, ItemDetailsModel } from './search-item-details.model';

@Component({
  selector: 'app-search-item-details',
  templateUrl: './search-item-details.component.html',
  styleUrls: ['./search-item-details.component.css']
})
export class SearchItemDetailsComponent implements OnInit {
  itemDetailsModel: ItemDetailsModel;
  searchMeal: any;
  ingredient: Ingredient[] = [];
  food: Meal;

  constructor(private searchService: SearchService, private router: Router, private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.searchMeal = this.searchService.getDishDetail();

    let url = this.router.url.split('/');
    console.log('trial',this.searchMeal);
    for(let dish  of this.searchMeal.meals) {
      if(dish.idMeal == url[2]) {
        this.food = dish;
      }

    }
    
  }

  itemDetails() {
    this.searchService.getDishDetail().subscribe((res : any) => {
      this.itemDetailsModel=res;
      this.setIngredients();
    })
  }

  setIngredients() {
    if (this.food.strIngredient1.length > 0) {
      this.ingredient.push({
        name: this.food.strIngredient1,
        measure: this.food.strMeasure1,
      });
    }
    if (this.searchMeal.meals[0].strIngredient2.length > 0) {
      this.ingredient.push({
        name: this.searchMeal.meals[0].strIngredient2,
        measure: this.searchMeal.meals[0].strMeasure2,
      });
    }
    if (this.searchMeal.meals[0].strIngredient3.length > 0) {
      this.ingredient.push({
        name: this.searchMeal.meals[0].strIngredient3,
        measure: this.searchMeal.meals[0].strMeasure3,
      });
    }
    if (this.searchMeal.meals[0].strIngredient1.length > 0) {
      this.ingredient.push({
        name: this.searchMeal.meals[0].strIngredient4,
        measure: this.searchMeal.meals[0].strMeasure4,
      });
    }
    if (this.searchMeal.meals[0].strIngredient5.length > 0) {
      this.ingredient.push({
        name: this.searchMeal.meals[0].strIngredient5,
        measure: this.searchMeal.meals[0].strMeasure5,
      });
    }
    if (this.searchMeal.meals[0].strIngredient6.length > 0) {
      this.ingredient.push({
        name: this.searchMeal.meals[0].strIngredient6,
        measure: this.searchMeal.meals[0].strMeasure6,
      });
    }
    if (this.searchMeal.meals[0].strIngredient7.length > 0) {
      this.ingredient.push({
        name: this.searchMeal.meals[0].strIngredient7,
        measure: this.searchMeal.meals[0].strMeasure7,
      });
    }
    if (this.searchMeal.meals[0].strIngredient8.length > 0) {
      this.ingredient.push({
        name: this.searchMeal.meals[0].strIngredient8,
        measure: this.searchMeal.meals[0].strMeasure8,
      });
    }
    if (this.searchMeal.meals[0].strIngredient9.length > 0) {
      this.ingredient.push({
        name: this.searchMeal.meals[0].strIngredient9,
        measure: this.searchMeal.meals[0].strMeasure9,
      });
    }
    if (this.searchMeal.meals[0].strIngredient10.length > 0) {
      this.ingredient.push({
        name: this.searchMeal.meals[0].strIngredient10,
        measure: this.searchMeal.meals[0].strMeasure10,
      });
    }
    if (this.searchMeal.meals[0].strIngredient11.length > 0) {
      this.ingredient.push({
        name: this.searchMeal.meals[0].strIngredient11,
        measure: this.searchMeal.meals[0].strMeasure11,
      });
    }
    if (this.searchMeal.meals[0].strIngredient12.length > 0) {
      this.ingredient.push({
        name: this.searchMeal.meals[0].strIngredient12,
        measure: this.searchMeal.meals[0].strMeasure12,
      });
    }
    if (this.searchMeal.meals[0].strIngredient13.length > 0) {
      this.ingredient.push({
        name: this.searchMeal.meals[0].strIngredient13,
        measure: this.searchMeal.meals[0].strMeasure13,
      });
    }
    if (this.searchMeal.meals[0].strIngredient14.length > 0) {
      this.ingredient.push({
        name: this.searchMeal.meals[0].strIngredient14,
        measure: this.searchMeal.meals[0].strMeasure14,
      });
    }
    if (this.searchMeal.meals[0].strIngredient15.length > 0) {
      this.ingredient.push({
        name: this.searchMeal.meals[0].strIngredient15,
        measure: this.searchMeal.meals[0].strMeasure15,
      });
    }
    if (this.searchMeal.meals[0].strIngredient16.length > 0) {
      this.ingredient.push({
        name: this.searchMeal.meals[0].strIngredient16,
        measure: this.searchMeal.meals[0].strMeasure16,
      });
    }
    if (this.searchMeal.meals[0].strIngredient17.length > 0) {
      this.ingredient.push({
        name: this.searchMeal.meals[0].strIngredient17,
        measure: this.searchMeal.meals[0].strMeasure17,
      });
    }
    if (this.searchMeal.meals[0].strIngredient18.length > 0) {
      this.ingredient.push({
        name: this.searchMeal.meals[0].strIngredient18,
        measure: this.searchMeal.meals[0].strMeasure18,
      });
    }
    if (this.searchMeal.meals[0].strIngredient19.length > 0) {
      this.ingredient.push({
        name: this.searchMeal.meals[0].strIngredient19,
        measure: this.searchMeal.meals[0].strMeasure19,
      });
    }
    if (this.searchMeal.meals[0].strIngredient20.length > 0) {
      this.ingredient.push({
        name: this.searchMeal.meals[0].strIngredient20,
        measure: this.searchMeal.meals[0].strMeasure20,
      });
    }
    // for (let i in this.searchMeal.meals[0]) {
    //   console.log('1234', i);
    // }
  }

  // onSelect(itemName: ItemDetailsModel): void {
  //   this.itemDetailsModel = itemName;
  // }

  getVideoId(url: string) {
    let regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    let match = url?.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
  }
  videoId = this.getVideoId("food.strYoutube");
  embedVideoUrl = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.videoId);


}
