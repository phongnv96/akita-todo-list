import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { VISIBILITY_FILTER, TodoFilter } from 'src/app/models/filter.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.css']
})
export class TodoFilterComponent implements OnInit, OnDestroy {
  @Input() active: VISIBILITY_FILTER;
  @Input() filters: TodoFilter[];
  @Output() update = new EventEmitter<VISIBILITY_FILTER>();
  subject = new Subject();
  control: FormControl;

  ngOnInit() {
    this.control = new FormControl(this.active);

    this.control.valueChanges.pipe(takeUntil(this.subject)).subscribe(c => {
      this.update.emit(c);
    });
  }

  ngOnDestroy(): void {}
}
