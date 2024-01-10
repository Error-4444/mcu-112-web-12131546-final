import { Component } from '@angular/core';
import { TagsListComponent } from '../tags-list/tags-list.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [TagsListComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {}
