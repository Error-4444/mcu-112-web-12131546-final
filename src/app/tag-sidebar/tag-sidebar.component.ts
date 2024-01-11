import { Component, HostBinding } from '@angular/core';
import { TagsListComponent } from '../tags-list/tags-list.component';

@Component({
  selector: 'app-tag-sidebar',
  standalone: true,
  imports: [TagsListComponent],
  templateUrl: './tag-sidebar.component.html',
  styleUrl: './tag-sidebar.component.css',
})
export class TagSidebarComponent {
  @HostBinding('class') class = 'tag-sidebar';
  tags = ['enim', 'repellat', 'est', 'eos'];
}
