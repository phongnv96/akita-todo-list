import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Todo } from 'src/app/state/todo.model';
import { ID } from '@datorama/akita';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit, OnDestroy {

  @Input() todo: Todo;
  @Output() complete = new EventEmitter<Todo>();
  @Output() delete = new EventEmitter<ID>();
  subject = new Subject();

  control: FormControl;

  ngOnInit() {
    this.control = new FormControl(this.todo.completed);

    this.control.valueChanges.pipe(takeUntil(this.subject)).subscribe((completed: boolean) => {
      this.complete.emit({ ...this.todo, completed });
    });
  }

  onDeleteHandller(id: ID) {
    this.delete.emit(id);
  }

  ngOnDestroy(): void {
    this.subject.next();
    this.subject.complete();
  }

}
