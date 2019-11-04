import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookAddComponent} from './books/book-add/book-add.component';
import {BookListComponent} from './books/book-list/book-list.component';
import {BookEditComponent} from './books/book-edit/book-edit.component';


const routes: Routes = [
  {path: 'create', component: BookAddComponent},
  {path: '' , component: BookListComponent},
  {path: 'edit/:id', component: BookEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
