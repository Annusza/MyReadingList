import { ReadBooksComponent } from './readBooks/readBooks.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {UnreadBooksComponent} from './unreadBooks/unreadBooks.component';

const routes: Routes = [
{
  path: '',
  redirectTo: '/unreadBooks',
  pathMatch: 'full'
},
{
  path: 'unreadBooks',
  component: UnreadBooksComponent
},
{
  path: 'readBooks',
  component: ReadBooksComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
