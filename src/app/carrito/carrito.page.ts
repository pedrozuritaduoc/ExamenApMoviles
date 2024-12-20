import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  carrito: any[] = []; // Productos en el carrito
  total: number = 0; // Total del carrito

  constructor(private router: Router) {
    // Obtén los datos del carrito desde el estado de la navegación
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state?.['carrito']) {
      this.carrito = navigation.extras.state['carrito']; // Corrección aquí
      this.calcularTotal();
    }
  }

  ngOnInit() {}

  // Calcula el total del carrito
  calcularTotal() {
    this.total = this.carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
  }

  // Función para volver al catálogo
  volverAlCatalogo() {
    this.router.navigate(['/catalogo']);
  }

  // Función para eliminar un producto del carrito
  eliminarDelCarrito(producto: any) {
    this.carrito = this.carrito.filter((item) => item.id !== producto.id);
    this.calcularTotal();
  }
}