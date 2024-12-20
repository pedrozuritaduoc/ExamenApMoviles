import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service'; // Importa el servicio de Firebase
import { Router } from '@angular/router'; // Importa el servicio Router

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {
  productos: any[] = []; // Array para almacenar los productos

  constructor(private router: Router, private firebaseService: FirebaseService) {}

  ngOnInit() {
    // Obtén los productos al inicializar la página
    this.obtenerProductos();
  }

  // Función para obtener los productos desde Firebase
  obtenerProductos() {
    this.firebaseService.getData('Producto').subscribe((data) => {
      this.productos = data; // Asigna los productos obtenidos a la variable productos
    });
  }

  // Función para volver al menú principal
  VolverMenuPrinc() {
    this.router.navigate(['home']);
  }
}
