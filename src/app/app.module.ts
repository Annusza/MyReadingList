import { BookService } from './services/book.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddBookComponent } from './addBook/addBook.component';
import { UnreadBooksComponent } from './unreadBooks/unreadBooks.component';
import { ReadBooksComponent } from './readBooks/readBooks.component';
import { CheckedDirective } from './shared/checked.directive';
// import { DateDirective } from './shared/date.directive';
// import { BookTransformPipe } from './shared/bookTransform.pipe';
import { SortByAuthorPipe } from './shared/sortByAuthor.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    UnreadBooksComponent,
    ReadBooksComponent,
    CheckedDirective,
    // DateDirective,
    // BookTransformPipe,
    SortByAuthorPipe
  ],

  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
