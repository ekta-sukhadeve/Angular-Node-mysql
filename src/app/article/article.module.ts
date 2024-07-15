import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { LatestArticleComponent } from './components/pages/latest-article/latest-article.component';
import { ArticleListComponent } from './components/pages/article-list/article-list.component';
import { ArticleDetailsComponent } from './components/pages/article-details/article-details.component';
import { ArticleFeaturedComponent } from './components/pages/article-featured/article-featured.component';
import { ArticleCategoryComponent } from './components/pages/article-category/article-category.component';


@NgModule({
  declarations: [
    LatestArticleComponent,
    ArticleListComponent,
    ArticleDetailsComponent,
    ArticleFeaturedComponent,
    ArticleCategoryComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule
  ],
  exports : [LatestArticleComponent]
})
export class ArticleModule { }
