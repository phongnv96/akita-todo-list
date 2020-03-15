import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { TodosStore } from './todos.store';
import { Todo, createTodo } from './todo.model';
import { tap } from 'rxjs/operators';
import { VISIBILITY_FILTER } from '../models/filter.model';

@Injectable({ providedIn: 'root' })
export class TodosService {

  constructor(private todosStore: TodosStore,
              private http: HttpClient) {
  }

  get() {
    return this.http.get<Todo[]>('https://api.com').pipe(tap(entities => {
      this.todosStore.set(entities);
    }));
  }

  updateFilter(filter: VISIBILITY_FILTER) {
    this.todosStore.update({
      ui: {
        filter
      }
    });
  }

  complete({ id, completed }: Todo) {
    this.todosStore.update(id, { completed });
  }

  add(title: string) {
    const todo = createTodo(title);
    this.todosStore.add(todo);
  }

  delete(id: ID) {
    this.todosStore.remove(id);
  }
}
