import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TodosStore, TodosState } from './todos.store';
import { combineLatest } from 'rxjs';
import { Todo } from './todo.model';
import { VISIBILITY_FILTER } from '../models/filter.model';

@Injectable({ providedIn: 'root' })
export class TodosQuery extends QueryEntity<TodosState> {

  selectVisibilityFilter$ = this.select(state => state.ui.filter);

  selectVisibleTodos$ = combineLatest(
    this.selectVisibilityFilter$,
    this.selectAll(),
    this.getVisibleTodos
  );

  constructor(protected store: TodosStore) {
    super(store);
  }

  private getVisibleTodos(filter, todos): Todo[] {
    switch (filter) {
      case VISIBILITY_FILTER.SHOW_COMPLETED:
        return todos.filter(t => t.completed);
      case VISIBILITY_FILTER.SHOW_ACTIVE:
        return todos.filter(t => !t.completed);
      default:
        return todos;
    }
  }

}
