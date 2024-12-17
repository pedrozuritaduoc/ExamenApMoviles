import { Component, OnInit } from '@angular/core';
// Imports nuevos
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router'; // Importa el servicio Router

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {
  productos: any[] = []; // Array para almacenar los productos
  nombreProducto: string = ''; // Input para el nombre del producto

  constructor(private router: Router, private firebaseService: FirebaseService) {}

  ngOnInit() {
    // Obtén los productos al inicializar la página
    this.obtenerProductos();
  }

  // Función para agregar un producto
  agregarP() {
    if (this.nombreProducto.trim()) {
      this.firebaseService
        .addItem('Producto', { name: this.nombreProducto })
        .then(() => {
          console.log('Producto agregado con éxito');
          this.nombreProducto = '';
          this.obtenerProductos(); // Actualiza los productos
        })
        .catch((error) => {
          console.error('Error al agregar el Producto:', error);
        });
    } else {
      console.log('El nombre no puede estar vacío');
    }
  }

  // Función para obtener los productos desde Firebase
  obtenerProductos() {
    this.firebaseService.getData('Producto').subscribe((data) => {
      this.productos = data;
    });
  }

  // Función para modificar un producto
  modificarProducto(id: string, nombreActual: string) {
    const nuevoNombre = prompt('Introduce el nuevo nombre del producto:', nombreActual);
    if (nuevoNombre && nuevoNombre.trim()) {
      this.firebaseService
        .updateItem('Producto', id, { name: nuevoNombre })
        .then(() => {
          console.log('Producto modificado con éxito');
          this.obtenerProductos(); // Actualiza los productos
        })
        .catch((error) => {
          console.error('Error al modificar el producto:', error);
        });
    } else {
      console.log('El nombre no puede estar vacío');
    }
  }

  // Función para eliminar un producto
  eliminarProducto(id: string) {
    if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      this.firebaseService
        .deleteItem('Producto', id)
        .then(() => {
          console.log('Producto eliminado con éxito');
          this.obtenerProductos(); // Actualiza los productos
        })
        .catch((error) => {
          console.error('Error al eliminar el producto:', error);
        });
    }
  }

  // Función para volver al menú principal
  VolverMenuPrinc() {
    this.router.navigate(['home']);
  }
}
