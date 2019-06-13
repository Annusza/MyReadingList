import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Book } from '../model/book';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {

  readonly URL_DB = 'https://api.mlab.com/api/1/databases/angular_db/collections/tasks';
  readonly param = new HttpParams().set('apiKey', 'wstaw tutaj swój klucz API');


  constructor(private http: HttpClient) {
    this.getTasks();
  }


  getTasks(): Observable<Array<Book>> {
   return this.http.get<Array<Book>>(this.URL_DB, { params: this.param });
  }

  saveTasks(list: Array<Book>) {
    this.http.put(this.URL_DB, list, { params: this.param }).subscribe(data => {
      console.log(data);
    });
  }
}
