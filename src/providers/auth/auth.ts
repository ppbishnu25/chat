import { Injectable } from '@angular/core';
import { UserDetails } from '../../models/UserDetails';
import { AngularFireAuth } from 'angularfire2/auth';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public afireauth: AngularFireAuth) {
 
  }
 
/*
    For logging in a particular user. Called from the login.ts file.
  
*/  
  
  login(credentials: UserDetails) {
    var promise = new Promise((resolve, reject) => {
      this.afireauth.auth.signInWithEmailAndPassword(credentials.email, credentials.password).then(() => {
        resolve(true);
      }).catch((err) => {
        reject(err);
       })
    })
 
    return promise;
    
  }
 
}
