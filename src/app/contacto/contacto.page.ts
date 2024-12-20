import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {

  constructor(private router: Router) { 

  }

  ngOnInit() {
  }
 // Función para volver al menú principal
  VolverMenuPrinc() {
   this.router.navigate(['home']);
}


}
