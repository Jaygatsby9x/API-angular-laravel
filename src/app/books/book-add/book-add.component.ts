import { Component, OnInit } from '@angular/core';
import {BookService} from '../service/book.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {IValidateLaravel} from '../ivalidate-laravel';
import {IResult} from '../iresult';
@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  private bookForm: FormGroup;
  constructor(private bookService: BookService ,
              private fb: FormBuilder,
              private router: Router) {}

  ngOnInit() {
    this.bookForm = this.fb.group({
      name: [''],
      body: [''],
      read: ['']
    });
  }

  onSubmit() {
    this.bookService.create(this.bookForm.value).subscribe((result: IResult) => {
      this.router.navigate(['/']);
    });
  }
}
