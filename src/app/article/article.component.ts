import { Component, Input } from '@angular/core';
import { TagsListComponent } from '../tags-list/tags-list.component';
import { FavoriteButtonComponent } from '../favorite-button/favorite-button.component';
import { DatePipe } from '@angular/common';
import { Article } from '../model/article';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [TagsListComponent, FavoriteButtonComponent, DatePipe],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css',
})
export class ArticleComponent {
  @Input({ required: true }) article!: Article;
}
