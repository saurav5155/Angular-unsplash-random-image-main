import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search/search.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  data: string;

  constructor(private searchService: SearchService, private router: Router) { }

  ngOnInit(): void {
  }

  searchData() {
    this.searchService.searchDish(this.data).subscribe(res => {
      this.searchService.setDishDetail(res);
      this.router.navigate(['/search']);  // /search+id
    });
  }

}
