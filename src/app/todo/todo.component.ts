import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../models/todo.model';
import { TodoDetailsComponent } from './todo-details/todo-details.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule, TodoDetailsComponent],
  templateUrl: './todo.component.html',
})

export class TodoComponent {
  ngOnInit(): void {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      const parsed = JSON.parse(savedTodos);
      this.todoList = parsed.map((t: any) => new Todo(t.id, t.name, t.done, t.createdTime)); // <-- wrap as class
    } else {
      this.todoList = [];
    }
  }

  todoList: Array<Todo> = [];
  newTodo: Todo = new Todo(0, '', false, '');
  isModelOpen: boolean = false;
  createdTime: string = '';
  todo: Todo = new Todo(0, '', false, '');
  currentTodoIndex: number = 0;
  todoData: any = {};

  addTodo() {
    if (this.newTodo) {
      let length = this.todoList.length + 1;
      this.newTodo.id = length;
      this.newTodo.createdTime = new Date().toDateString();
      this.todoList.push(this.newTodo);
      this.createdTime = new Date().toDateString();
      this.newTodo = new Todo(0, '', false, this.createdTime);
      this.saveToLocalStorage();
    }
  }

  saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todoList));
  }

  makeItDelete(i: number) {
    this.todoList.splice(i, 1);
    this.saveToLocalStorage();
  }

  toggleDone(i: number) {
    this.todoList[i].toggle();
    this.saveToLocalStorage();
  }

  showModel(id: number) {
    this.isModelOpen = true;
    this.currentTodoIndex = id;
    this.todoData = this.todoList.find(x => x.id == this.currentTodoIndex);
  }

  handleModalClose() {
    this.isModelOpen = false;
  }
}
