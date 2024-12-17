import { Component, OnInit } from '@angular/core';
//aut
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // Initialize Firebase
  oApp = initializeApp(environment.firebaseConfig);

  // Initialize Firebase Authentication and get a reference to the service
  oAuth = getAuth(this.oApp);
  gEmail=""
  gPassword=""
  constructor() { }

  ngOnInit() {
  }

  loginUser(){
    signInWithEmailAndPassword(this.oAuth, this.gEmail, this.gPassword)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      console.log("user correcto")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode)
      console.log(errorMessage)
    });
  }
}
