import { Component } from '@angular/core';
import { TagsListComponent } from '../tags-list/tags-list.component';
import { ArticleListComponent } from '../article-list/article-list.component';
import { TagSidebarComponent } from '../tag-sidebar/tag-sidebar.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [ArticleListComponent, TagSidebarComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {}
