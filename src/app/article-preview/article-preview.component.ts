import { NgFor } from '@angular/common';
import { Component, HostBinding } from '@angular/core';
import { TagComponent } from '../tag/tag.component';
import { TagsListComponent } from '../tags-list/tags-list.component';
import { FavoriteButtonComponent } from '../favorite-button/favorite-button.component';

@Component({
  selector: 'app-article-preview',
  standalone: true,
  imports: [TagsListComponent, FavoriteButtonComponent],
  templateUrl: './article-preview.component.html',
  styleUrl: './article-preview.component.css',
})
export class ArticlePreviewComponent {
  @HostBinding('class') class = 'article-preview';
  tags = ['enim', 'repellat', 'est', 'eos'];
}