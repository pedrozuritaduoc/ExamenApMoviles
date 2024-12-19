import { Component, OnInit } from '@angular/core';
//aut
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { environment } from 'src/environments/environment';
//alert
import { AlertController, NavController } from '@ionic/angular';

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

  public alertButtons = [
    {
      text: 'Cancel'
    },
    {
      text: 'Reset',
      handler: (data: any) =>{
        this.resetPassword(data)
      }
    }
  ];
  public alertInputs = [
    {
      name:'email',
      placeholder: 'Email',
      type: 'email'
    }
  ];


  constructor(
    private alertController: AlertController,
    private navController: NavController
  ) { }

  ngOnInit() {
  }

  loginUser() {
    signInWithEmailAndPassword(this.oAuth, this.gEmail, this.gPassword)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        if (user.uid != undefined && user.uid != '') {
          this.navController.navigateRoot('/home');
        } else {
          this.presentAlert('Inicio de sesión inválido');
        }
  
        console.log(user);
        console.log("Usuario correcto");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
  
        // Log error y mostrar alerta
        console.log(errorCode);
        console.log(errorMessage);
  
        // Mostrar una alerta con el mensaje de error
        this.presentAlert('Error user o password incorrecto: ' + errorMessage);
      });
  }
  


  resetPassword(data: any){
    console.log(data)

    sendPasswordResetEmail(this.oAuth, data.email)
      .then(() => {
        // Password reset email sent!
        // ..
        this.presentAlert('Enviamos un link a tu correo para que cambies tu password!')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
      }

    async presentAlert(msg: string) {
        const alert = await this.alertController.create({
          message: msg,
          buttons: ['OK'],
        });
        await alert.present();
      }

}
