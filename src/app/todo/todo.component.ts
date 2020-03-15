import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../state/todo.model';
import { ID } from '@datorama/akita';
import { Observable } from 'rxjs';
import { VISIBILITY_FILTER, initialFilters } from '../models/filter.model';
import { TodosQuery } from '../state/todos.query';
import { TodosService } from '../state/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos$: Observable<Todo[]>;
  activeFilter$: Observable<VISIBILITY_FILTER>;
  filters = initialFilters;

  constructor(private todosQuery: TodosQuery,
              private todosService: TodosService) {
  }

  ngOnInit() {
    this.todos$ = this.todosQuery.selectVisibleTodos$;
    this.activeFilter$ = this.todosQuery.selectVisibilityFilter$;
    this.todos$.subscribe(res => {
      console.log(res);
    });
  }


  add(input: HTMLInputElement) {
    if (!input.value) {
      return;
    }
    this.todosService.add(input.value);
    input.value = '';
  }

  complete(todo: Todo) {
    this.todosService.complete(todo);
  }

  delete(id: ID) {
    this.todosService.delete(id);
  }

  changeFilter(filter: VISIBILITY_FILTER) {
    this.todosService.updateFilter(filter);
  }

}
