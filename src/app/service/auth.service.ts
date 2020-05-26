import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { User } from 'src/app/class/user';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$ = this.afAuth.user;

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    ) {
    }

    signUp(email: string, password: string) {
      this.afAuth.auth
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
          console.log('Successfully signed up!', res);
        })
        .catch(error => {
          console.log('Something is wrong:', error.message);
        });
    }

  login(email: string, password: string): void {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(user => {
        this.router.navigate(['/home', user]);
        console.log(user);
      });
      this.router.navigate(['/home']);
  }
  logout(): void {
    this.afAuth.auth.signOut()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(error => console.error(error));
  }
}
