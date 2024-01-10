import { Component } from '@angular/core';
import { TagsListComponent } from '../tags-list/tags-list.component';
import { ArticleListComponent } from '../article-list/article-list.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [TagsListComponent, ArticleListComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {}
