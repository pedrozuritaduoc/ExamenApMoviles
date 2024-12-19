import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.afAuth.authState.pipe(
      take(1), // Tomar el primer valor (la autenticación del usuario)
      map(user => !!user), // Verificar si el usuario está autenticado
      tap(isAuthenticated => {
        if (!isAuthenticated) {
          this.router.navigate(['/login']); // Redirigir al login si no está autenticado
        }
      })
    );
  }
}
