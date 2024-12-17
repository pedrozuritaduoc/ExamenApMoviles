import { Component } from '@angular/core';
//nuevos imports
import { Router } from '@angular/router'; // Importa el servicio Router
import { NavController } from '@ionic/angular';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombreProducto: string = '';
  constructor(private router: Router, private navCtrl: NavController, private firebaseService: FirebaseService) {}

  irPagina2(){
    //absoluta
    this.router.navigate(['pagina2']);
  }

 



}
