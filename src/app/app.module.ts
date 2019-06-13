import { BookService } from './services/book.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddBookComponent } from './addBook/addBook.component';
import { UnreadBooksComponent } from './unreadBooks/unreadBooks.component';
import { ReadBooksComponent } from './readBooks/readBooks.component';
import { CheckedDirective } from './shared/checked.directive';
import { SortByAuthorPipe } from './shared/sortByAuthor.pipe';
//
import {HttpClientModule} from '@angular/common/http';
import { HttpService } from './services/http.service';
import { AppRoutingModule } from './app.routing.module';


@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    UnreadBooksComponent,
    ReadBooksComponent,
    CheckedDirective,
    SortByAuthorPipe
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [BookService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
