import { Component, HostBinding, Input } from '@angular/core';
import { TagComponent } from '../tag/tag.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tags-list',
  standalone: true,
  imports: [NgFor, TagComponent],
  templateUrl: './tags-list.component.html',
  styleUrl: './tags-list.component.css',
})
export class TagsListComponent {
  @HostBinding('class') class = 'tags-list';
  @Input() tags!: string[];
  @Input() className!: string;
}
