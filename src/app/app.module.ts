import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { environment } from '../environments/environment';
import { TodoComponent } from './todo/todo.component';
import { TodoFilterComponent } from './todo/todo-filter/todo-filter.component';
import { TodoItemComponent } from './todo/todo-list/todo-item/todo-item.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
   declarations: [
      AppComponent,
      TodoComponent,
      TodoFilterComponent,
      TodoListComponent,
      TodoItemComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ],

})
export class AppModule { }
