import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './components/pages/article-list/article-list.component';
import { ArticleDetailsComponent } from './components/pages/article-details/article-details.component';

const routes: Routes = [
  {path : 'article',component : ArticleListComponent},
  {path : 'article/:id',component : ArticleDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
