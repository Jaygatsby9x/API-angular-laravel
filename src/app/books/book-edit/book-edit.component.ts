import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BookService} from '../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IResult} from '../iresult';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  private id: string;
  bookForm: FormGroup;

  constructor(private fb: FormBuilder,
              private bookService: BookService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.bookForm = this.fb.group({
      id: [''],
      name: [''],
      body: [''],
      read: ['']
    });
    this.findById();
  }

  findById() {
    this.bookService.findById(this.id).subscribe((result: IResult) => {
      this.bookForm.patchValue({
        name: result.data.name,
        body: result.data.body,
        read: result.data.read
      });
    });
  }

  onSubmit() {
    this.bookService.edit(this.bookForm.value, this.id).subscribe(value => {
      this.router.navigate(['/']);
    });
  }
}
