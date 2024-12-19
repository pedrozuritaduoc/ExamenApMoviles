import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.page.html',
  styleUrls: ['./quienes-somos.page.scss'],
})
export class QuienesSomosPage implements OnInit {

  constructor(private router: Router) { 

  }

  ngOnInit() {
  }

  // Función para volver al menú principal
  VolverMenuPrinc() {
    this.router.navigate(['home']);
  }
}

