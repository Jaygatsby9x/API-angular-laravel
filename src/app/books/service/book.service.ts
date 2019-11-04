import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IBook} from '../ibook';
import {Observable} from 'rxjs';
import {IResult} from '../iresult';
import {NgForm} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly API_URL = 'http://localhost:8000/api';
  constructor(private http: HttpClient) {}
  getAll(): Observable<IResult> {
    return this.http.get<IResult>(this.API_URL + '/books');
  }
  delete(id) {
    return  this.http.delete(this.API_URL + '/books/' + id);
  }
  create(data) {
    return this.http.post(this.API_URL + '/books', data );
  }
  edit(book: IBook, id): Observable<IResult> {
    return this.http.post<IResult>(this.API_URL + '/books/' + id , book);
  }
  findById(id) {
    return this.http.get(this.API_URL + '/books/' + id);
  }
}
