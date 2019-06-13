import { Book } from './../model/book';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BookService } from '../services/book.service';


@Component({
  selector: 'app-unreadbooks',
  templateUrl: './unreadBooks.component.html',
  styleUrls: ['./unreadBooks.component.css']
})
export class UnreadBooksComponent implements OnInit {
  unreadBooks: Array<Book> = [];


  constructor(private bookService: BookService) {
    this.bookService.getUnreadBookObs().subscribe((books: Array<Book>) => {
      this.unreadBooks = books.slice();
    });
  }

  ngOnInit() {}

  remove(book: Book) {
    this.bookService.remove(book);
  }

  add(book: Book) {

    this.bookService.add(book);
  }

  readed(book: Book) {
    this.bookService.readed(book);
  }

  getColor(): string {
    return this.unreadBooks.length >= 5 ? 'red' : 'green';
  }

}
