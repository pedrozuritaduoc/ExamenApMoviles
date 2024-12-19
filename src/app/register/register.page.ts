import { Component, OnInit } from '@angular/core';
//para el registro de user
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
 
  oAuth = getAuth();

  account = { } as any

  constructor() { }

  ngOnInit() {
  }

  registerUser(){
    console.log(this.account)

    createUserWithEmailAndPassword(this.oAuth, this.account.Email, this.account.Password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ..
      });
  }

}
