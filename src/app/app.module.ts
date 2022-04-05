import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AuthentificationComponent } from './authentification/authentification.component';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from "@angular/fire/compat";



@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    AuthentificationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
