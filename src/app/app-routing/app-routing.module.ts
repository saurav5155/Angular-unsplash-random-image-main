import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoShowComponent } from '../photo-show/photo-show.component'
import { SearchItemDetailsComponent } from '../search-item-details/search-item-details.component';
import { SearchComponent } from '../search/search.component';

const routes: Routes = [
{ path: '', component: PhotoShowComponent },
{ path: 'search',  component: SearchComponent },
{ path: 'search/:id', component: SearchItemDetailsComponent },

];

@NgModule({
imports: [
RouterModule.forRoot(routes)
],
exports: [
RouterModule
],
declarations: []
})
export class AppRoutingModule { }
