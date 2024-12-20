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

  irQuienesSomos(){
    this.router.navigate(['quienes-somos']);
  }

  irContacto(){
    this.router.navigate(['contacto']);
  }

  irCatalogo(){
    this.router.navigate(['catalogo']);
  }

  irTips(){
    this.router.navigate(['tips']);
  }

  irAdvertencias(){
    this.router.navigate(['advertencia']);
  }
  
  irVision(){
    this.router.navigate(['vision']);
  }

   // Método para cerrar sesión
   async cerrarSesion() {
    try {
      await this.firebaseService.cerrarSesion(); // Usamos el método del servicio Firebase
      this.router.navigate(['/login']); // Redirige al login después de cerrar sesión
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  }
}



