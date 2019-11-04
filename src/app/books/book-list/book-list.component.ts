import { Component, OnInit } from '@angular/core';
import {BookService} from '../service/book.service';
import {Observable} from 'rxjs';
import {IBook} from '../ibook';
import {IResult} from '../iresult';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: IBook[];
  p = 1;
  constructor(private bookService: BookService) { }
  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.bookService.getAll().subscribe((result: IResult) => {
      this.books = result.data;
      console.log(result);
    });
  }
  delete(id) {
    this.bookService.delete(id).subscribe((result: IResult) => {
      this.getAll();
    });
  }
}
