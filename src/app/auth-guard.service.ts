import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    const expectedRole = route.data['expectedRole']; // Obtiene el rol requerido desde las rutas
    const currentRole = this.authService.getRole(); // Obtiene el rol del usuario

    if (this.authService.isAuthenticated() && currentRole === expectedRole) {
      return true; // Permite el acceso si el usuario está autenticado y tiene el rol adecuado
    } else {
      this.router.navigate(['/login']); // Redirige si el usuario no tiene permisos
      return false;
    }
  }
}
