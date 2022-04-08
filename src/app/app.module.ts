import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AuthentificationComponent } from './authentification/authentification.component';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from "@angular/fire/compat";

import { appRoutingModule } from './app.routing';




@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    AuthentificationComponent,
  ],
  imports: [
    ReactiveFormsModule,
    appRoutingModule,
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase)
    ],
    
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
