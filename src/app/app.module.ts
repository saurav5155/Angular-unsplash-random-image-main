import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PhotoShowComponent } from './photo-show/photo-show.component';
import { PhotoService } from './photo.service';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { SearchItemDetailsComponent } from './search-item-details/search-item-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoShowComponent,
    SearchComponent,
    HeaderComponent,
    SearchItemDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
