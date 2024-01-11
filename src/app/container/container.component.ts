import { Component } from '@angular/core';
import { TagsListComponent } from '../tags-list/tags-list.component';
import { ArticleListComponent } from '../article-list/article-list.component';
import { TagSidebarComponent } from '../tag-sidebar/tag-sidebar.component';
import { ArticleTabComponent } from '../article-tab/article-tab.component';
import { ArticlePreviewComponent } from '../article-preview/article-preview.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [ArticleTabComponent, ArticlePreviewComponent, TagSidebarComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {}
