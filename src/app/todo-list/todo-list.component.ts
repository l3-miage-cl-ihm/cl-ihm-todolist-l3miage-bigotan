import { BehaviorSubject, Observable } from 'rxjs';
import { TodolistService, TodoList, TodoItem } from './../todolist.service';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { AuthentificationComponent } from '../authentification';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

type fctfilter = (item:TodoItem) => boolean;


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TodoListComponent implements OnInit {

  readonly filterAll : fctfilter = () => true;
  readonly filterActives: fctfilter = (item) => !item.isDone;
  readonly filterCompleted : fctfilter = (item) => item.isDone
  f: fctfilter = this.filterAll;
  filter!: fctfilter;
  private fc = new BehaviorSubject<fctfilter>(this.filterAll);
  filtreActif: string=""

  readonly ObsTodoService: Observable<TodoList>
  @Input() logout!: AuthentificationComponent

  constructor(private todoListService: TodolistService, public firebaseUserAuth: AngularFireAuth) {
    this.ObsTodoService = this.todoListService.observable;
  }

  ngOnInit(): void {
  }
  // create(...labels: readonly string[])
  addTask(...v: readonly string[]): void{
    this.todoListService.create(...v);
    console.log("I'm in add task " + v);

  }

  delete(...items: readonly TodoItem[]): void{
    this.todoListService.delete(...items);

  }

  update(data: Partial<TodoItem>, ...items: readonly TodoItem[]): void{

    this.todoListService.update(data, ...items);
  }

  logoutButton():void{
    this.logout.logout();
  }

  setfilter(f :fctfilter){
    this.fc.next(f);
  }

  trackById(i: number){
    return i;
  }

}
