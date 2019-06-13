import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../model/book';

@Component({
  selector: 'app-readbooks',
  templateUrl: './readBooks.component.html',
  styleUrls: ['./readBooks.component.css']
})
export class ReadBooksComponent implements OnInit {

  readBooks: Array<Book> = [];

  constructor(private bookService: BookService) {
    this.bookService.getReadBooksObs().subscribe((books: Array<Book>) => {
      this.readBooks = books.filter(t => t.isRead === true);
      this.readBooks = books;
    });
  }

  ngOnInit() {
  }


}
