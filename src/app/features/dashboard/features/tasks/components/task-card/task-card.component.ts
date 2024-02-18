import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss',
})
export class TaskCardComponent {
  @Input('task') task: string = '';
  @Input('image') image: string = '';
  @Input('border') border: string = '';
}
