import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/state/todo.model';
import { ID } from '@datorama/akita';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todos: Todo[];
  @Output() complete = new EventEmitter<Todo>();
  @Output() delete = new EventEmitter<ID>();
  constructor() { }

  ngOnInit() {
  }

  trackByFn(index, todo) {
    return todo.id;
  }

}
