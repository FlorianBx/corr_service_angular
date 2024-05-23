import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
private todos: string[] = ['Buy groceries', 'Walk the dog'];

  constructor() {}

  getTodos(): string[] {
    return this.todos;
  }

  addTodo(todo: string): void {
    this.todos.push(todo);
  }

  //...removeTodo, updateTodo, getTodoById
}
