import { Book } from './../model/book';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class BookService {
  read(book: Book) {
    throw new Error('Method not implemented.');
  }

  // tslint:disable-next-line:member-ordering
  private unreadBooks: Array<Book> = [];
  // tslint:disable-next-line:member-ordering
  private readBooks: Array<Book> = [];

  // tslint:disable-next-line:member-ordering
  private unreadBooksObs = new BehaviorSubject<Array<Book>>([]);
  // tslint:disable-next-line:member-ordering
  private readBooksObs = new BehaviorSubject<Array<Book>>([]);


  constructor() {
    this.unreadBooks = [
      {title: 'Lalka', authorName: 'Bolesław', authorSurname: 'Prus', isRead: false},
      {title: 'Dziady', authorName: 'Adam', authorSurname: 'Mickiewicz', isRead: false},
      {title: 'Cham', authorName: 'Eliza', authorSurname: 'Orzeszkowa', isRead: false},
      {title: 'Persepolis', authorName: 'Marjane', authorSurname: 'Satrapi', isRead: false},
      {title: 'Kurczak ze śliwkami', authorName: 'Marjane', authorSurname: 'Satrapi', isRead: false},
      {title: 'Zasypie wszystko, zawieje', authorName: 'Włodzimierz', authorSurname: 'Odojewski', isRead: false}
    ];
    this.unreadBooksObs.next(this.unreadBooks);
  }

  add(book: Book) {
    this.unreadBooks.push(book);
    this.unreadBooksObs.next(this.unreadBooks);
  }

  remove(book: Book) {
    this.unreadBooks = this.unreadBooks.filter(e => e !== book);
    this.unreadBooksObs.next(this.unreadBooks);
  }

  readed(book: Book) {
    this.readBooks.push(book);
    this.remove(book);
    this.readBooksObs.next(this.readBooks);
  }

  getUnreadBookObs(): Observable<Array<Book>> {
    return this.unreadBooksObs.asObservable();
  }

  getReadBooksObs(): Observable<Array<Book>> {
    return this.readBooksObs.asObservable();
  }

}
