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
  descripcion: string = ''; // input descripcion prodcucto
  gramaje: string ='';
  precio: string ='';

  constructor(private router: Router, private firebaseService: FirebaseService) {}

  ngOnInit() {
    // Obtén los productos al inicializar la página
    this.obtenerProductos();
  }

  // Función para agregar un producto
  agregarP() {
    if (this.nombreProducto.trim()) {
      this.firebaseService
        .addItem('Producto', { name: this.nombreProducto, descripcion: this.descripcion, gramaje: this.gramaje, precio: this.precio })
        .then(() => {
          console.log('Producto agregado con éxito');
          this.nombreProducto = '';
          this.descripcion = '';
          this.gramaje = '';
          this.precio = '';
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
  modificarProducto(producto: any) {
    const nuevoNombre = prompt('Introduce el nuevo nombre del producto:', producto.name);
    if (nuevoNombre === null || !nuevoNombre.trim()) {
      console.log('El nombre no puede estar vacío');
      return;
    }
  
    const nuevaDescripcion = prompt('Introduce la nueva descripción:', producto.descripcion);
    if (nuevaDescripcion === null || !nuevaDescripcion.trim()) {
      console.log('La descripción no puede estar vacía');
      return;
    }
  
    const nuevoGramaje = prompt('Introduce el nuevo gramaje (número):', producto.gramaje);
    if (nuevoGramaje === null || isNaN(Number(nuevoGramaje)) || !nuevoGramaje.trim()) {
      console.log('El gramaje debe ser un valor numérico válido');
      return;
    }
  
    const nuevoPrecio = prompt('Introduce el nuevo precio (número):', producto.precio);
    if (nuevoPrecio === null || isNaN(Number(nuevoPrecio)) || !nuevoPrecio.trim()) {
      console.log('El precio debe ser un valor numérico válido');
      return;
    }
  
    // Actualizar el producto con los nuevos valores
    const datosActualizados = {
      name: nuevoNombre,
      descripcion: nuevaDescripcion,
      gramaje: Number(nuevoGramaje),
      precio: Number(nuevoPrecio)
    };
  
    this.firebaseService
      .updateItem('Producto', producto.id, datosActualizados)
      .then(() => {
        console.log('Producto modificado con éxito');
        this.obtenerProductos(); // Actualiza la lista
      })
      .catch((error) => {
        console.error('Error al modificar el producto:', error);
      });
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
