import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';
import { Ingredient, RandomPhoto } from './photo-show.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SearchMeal } from '../search/search.model';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css'],
})
export class PhotoShowComponent implements OnInit {
  randomPhotoImg: RandomPhoto;
  safeUrl: SafeResourceUrl;
  ingredient: Ingredient[] = [];
  searchMeal: SearchMeal;

  constructor(
    private _sanitizer: DomSanitizer,
    private photoService: PhotoService
  ) {}

  ngOnInit(): void {
    this.randomPhotoImg = new RandomPhoto();
    this.fetchPhoto();
  }

  getRandomDish() {
    this.fetchPhoto();
  }

  fetchPhoto() {
    this.photoService.getRandomDish().subscribe((result) => {
      this.randomPhotoImg = result;
      this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(
        result.meals[0].strYoutube
      );
      console.log('Result show', result);

      this.setIngredients();
    });
  }
  setIngredients() {
    if (this.randomPhotoImg.meals[0].strIngredient1.length > 0) {
      this.ingredient.push({
        name: this.randomPhotoImg.meals[0].strIngredient1,
        measure: this.randomPhotoImg.meals[0].strMeasure1,
      });
    }
    if (this.randomPhotoImg.meals[0].strIngredient2.length > 0) {
      this.ingredient.push({
        name: this.randomPhotoImg.meals[0].strIngredient2,
        measure: this.randomPhotoImg.meals[0].strMeasure2,
      });
    }
    if (this.randomPhotoImg.meals[0].strIngredient3.length > 0) {
      this.ingredient.push({
        name: this.randomPhotoImg.meals[0].strIngredient3,
        measure: this.randomPhotoImg.meals[0].strMeasure3,
      });
    }
    if (this.randomPhotoImg.meals[0].strIngredient1.length > 0) {
      this.ingredient.push({
        name: this.randomPhotoImg.meals[0].strIngredient4,
        measure: this.randomPhotoImg.meals[0].strMeasure4,
      });
    }
    if (this.randomPhotoImg.meals[0].strIngredient5.length > 0) {
      this.ingredient.push({
        name: this.randomPhotoImg.meals[0].strIngredient5,
        measure: this.randomPhotoImg.meals[0].strMeasure5,
      });
    }
    if (this.randomPhotoImg.meals[0].strIngredient6.length > 0) {
      this.ingredient.push({
        name: this.randomPhotoImg.meals[0].strIngredient6,
        measure: this.randomPhotoImg.meals[0].strMeasure6,
      });
    }
    if (this.randomPhotoImg.meals[0].strIngredient7.length > 0) {
      this.ingredient.push({
        name: this.randomPhotoImg.meals[0].strIngredient7,
        measure: this.randomPhotoImg.meals[0].strMeasure7,
      });
    }
    if (this.randomPhotoImg.meals[0].strIngredient8.length > 0) {
      this.ingredient.push({
        name: this.randomPhotoImg.meals[0].strIngredient8,
        measure: this.randomPhotoImg.meals[0].strMeasure8,
      });
    }
    if (this.randomPhotoImg.meals[0].strIngredient9.length > 0) {
      this.ingredient.push({
        name: this.randomPhotoImg.meals[0].strIngredient9,
        measure: this.randomPhotoImg.meals[0].strMeasure9,
      });
    }
    if (this.randomPhotoImg.meals[0].strIngredient10.length > 0) {
      this.ingredient.push({
        name: this.randomPhotoImg.meals[0].strIngredient10,
        measure: this.randomPhotoImg.meals[0].strMeasure10,
      });
    }
    if (this.randomPhotoImg.meals[0].strIngredient11.length > 0) {
      this.ingredient.push({
        name: this.randomPhotoImg.meals[0].strIngredient11,
        measure: this.randomPhotoImg.meals[0].strMeasure11,
      });
    }
    if (this.randomPhotoImg.meals[0].strIngredient12.length > 0) {
      this.ingredient.push({
        name: this.randomPhotoImg.meals[0].strIngredient12,
        measure: this.randomPhotoImg.meals[0].strMeasure12,
      });
    }
    if (this.randomPhotoImg.meals[0].strIngredient13.length > 0) {
      this.ingredient.push({
        name: this.randomPhotoImg.meals[0].strIngredient13,
        measure: this.randomPhotoImg.meals[0].strMeasure13,
      });
    }
    if (this.randomPhotoImg.meals[0].strIngredient14.length > 0) {
      this.ingredient.push({
        name: this.randomPhotoImg.meals[0].strIngredient14,
        measure: this.randomPhotoImg.meals[0].strMeasure14,
      });
    }
    if (this.randomPhotoImg.meals[0].strIngredient15.length > 0) {
      this.ingredient.push({
        name: this.randomPhotoImg.meals[0].strIngredient15,
        measure: this.randomPhotoImg.meals[0].strMeasure15,
      });
    }
    if (this.randomPhotoImg.meals[0].strIngredient16.length > 0) {
      this.ingredient.push({
        name: this.randomPhotoImg.meals[0].strIngredient16,
        measure: this.randomPhotoImg.meals[0].strMeasure16,
      });
    }
    if (this.randomPhotoImg.meals[0].strIngredient17.length > 0) {
      this.ingredient.push({
        name: this.randomPhotoImg.meals[0].strIngredient17,
        measure: this.randomPhotoImg.meals[0].strMeasure17,
      });
    }
    if (this.randomPhotoImg.meals[0].strIngredient18.length > 0) {
      this.ingredient.push({
        name: this.randomPhotoImg.meals[0].strIngredient18,
        measure: this.randomPhotoImg.meals[0].strMeasure18,
      });
    }
    if (this.randomPhotoImg.meals[0].strIngredient19.length > 0) {
      this.ingredient.push({
        name: this.randomPhotoImg.meals[0].strIngredient19,
        measure: this.randomPhotoImg.meals[0].strMeasure19,
      });
    }
    if (this.randomPhotoImg.meals[0].strIngredient20.length > 0) {
      this.ingredient.push({
        name: this.randomPhotoImg.meals[0].strIngredient20,
        measure: this.randomPhotoImg.meals[0].strMeasure20,
      });
    }
    // for (let i in this.randomPhotoImg.meals[0]) {
    //   console.log('1234', i);
    // }
  }

  getVideoId(url: string) {
    let regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    let match = url?.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
  }
  videoId = this.getVideoId('randomPhotoImg.meals[0].strYoutube');
  embedVideoUrl = this._sanitizer.bypassSecurityTrustResourceUrl(
    'https://www.youtube.com/embed/' + this.videoId
  );
}
