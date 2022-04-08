import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  //styleUrls: ['./authentification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthentificationComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(public auth: AngularFireAuth, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm= this.fb.group({
      email: [],
      password: [],
    })
  }

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
      (e)=>{
        this.router.navigate(["/todolist"])
      },
      (error)=> {
        window.Error("Erreur de connexion "+ error)
      }
    )
  }

  loginWithEmail() {
    let email= this.loginForm.get('email')?.value;
    let pwd= this.loginForm.get('password')?.value;
    
    this.auth.signInWithEmailAndPassword(email, pwd).then(
      (e)=> {
        this.router.navigate(["/todolist"])
      },
      (error)=> {
        window.Error("Erreur de connexion "+ error)
      }
    )
  }

  logout() {
    this.auth.signOut().then(
      (e)=> {
        this.router.navigate(["/"]);
      },
      (error)=> {
        window.Error("Erreur de déconnexion "+ error);
        this.router.navigate(["/"])

      }
    )
  }
  


}
