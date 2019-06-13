
import { BookService } from './../services/book.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-addbook',
  templateUrl: './addBook.component.html',
  styleUrls: ['./addBook.component.css']
})
export class AddBookComponent implements OnInit {

  newTitle: string;
  newAuthorName: string;
  newAuthorSurname: string;

  constructor(private bookService: BookService) {
   }

  ngOnInit() {
  }

  add() {
    const book: Book = {title: this.newTitle, authorName: this.newAuthorName, authorSurname: this.newAuthorSurname, isRead: false  };
    this.bookService.add(book);
    this.newTitle = '';
    this.newAuthorName = '';
    this.newAuthorSurname = '';

  }

}

