import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../app/guard/auth.guard';  

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]  // Proteger la ruta 'home'
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'pagina2',
    loadChildren: () => import('./pagina2/pagina2.module').then( m => m.Pagina2PageModule),
    canActivate: [AuthGuard]  // Proteger la ruta 'pagina2'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'quienes-somos',
    loadChildren: () => import('./quienes-somos/quienes-somos.module').then( m => m.QuienesSomosPageModule),
    canActivate: [AuthGuard]  // Proteger la ruta quienes-somos'
  },
  {
    path: 'contacto',
    loadChildren: () => import('./contacto/contacto.module').then( m => m.ContactoPageModule)
  },
  {
    path: 'catalogo',
    loadChildren: () => import('./catalogo/catalogo.module').then( m => m.CatalogoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
