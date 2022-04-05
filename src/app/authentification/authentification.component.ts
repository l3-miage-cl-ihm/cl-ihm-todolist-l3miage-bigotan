import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  //styleUrls: ['./authentification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthentificationComponent implements OnInit {

  constructor(public auth: AngularFireAuth) {
  }

  ngOnInit(): void {
  }

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.auth.signOut();
  }
  


}
