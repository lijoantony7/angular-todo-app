import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-details.component.html',
  styles: [`
    .backdrop {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5); /* Only backdrop is dark */
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1050;
    }

    .modal-dialog {
      background: white; /* Make sure modal box is white */
      border-radius: 8px;
      max-width: 500px;
      width: 100%;
      box-shadow: 0 2px 10px rgba(0,0,0,0.3);
    }

    .modal-content {
      background: white; /* Ensure modal-content is pure white */
      padding: 20px;
      border-radius: 8px;
    }
  `]
})
export class TodoDetailsComponent {
  @Output() closed = new EventEmitter<void>();
  @Input() todo: any = {};

  close() {
    this.closed.emit();
  }
}
