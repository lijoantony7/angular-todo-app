import { Component, signal } from '@angular/core';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoComponent],
  templateUrl: './app.component.html',
})

export class AppComponent {
  titleSignal = signal('Todo App');
}
