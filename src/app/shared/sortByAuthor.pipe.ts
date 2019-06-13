
import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../model/book';

@Pipe({
  name: 'sortByAuthor'
})
export class SortByAuthorPipe implements PipeTransform {

  transform(value: Array<Book>, args?: any): Array<Book> {
    return value.sort((a, b) => {
      if (a.authorSurname.toLowerCase() > b.authorSurname.toLowerCase()) {
        return 1;
      } else {
        return -1;
      }
    });
  }

}
