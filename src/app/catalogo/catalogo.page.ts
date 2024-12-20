import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {
  productos: any[] = []; // Array para almacenar los productos
  
  constructor(private router: Router, private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.obtenerProductos(); // llama al metodo obtener productos
  }
// Función para volver al menú principal
VolverMenuPrinc() {
  this.router.navigate(['home']);
}

// Función para obtener los productos desde Firebase
obtenerProductos() {
  this.firebaseService.getData('Producto').subscribe((data) => {
    this.productos = data;
  });
}
}