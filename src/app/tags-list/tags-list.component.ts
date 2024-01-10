import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-tags-list',
  standalone: true,
  imports: [],
  templateUrl: './tags-list.component.html',
  styleUrl: './tags-list.component.css',
})
export class TagsListComponent {
  @HostBinding('class') class = 'tag-list';
}
