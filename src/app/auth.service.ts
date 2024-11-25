import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private authTokenKey = 'authToken';
  private roleKey = 'userRole';  
  private apiUrl = 'http://localhost:3000/usuarios'; // Asegúrate de que esta URL sea correcta
  private nombreUsuario = 'nombreUsuario';

  constructor(private http: HttpClient) {}

  // Método para verificar credenciales
  login(usuario: string, contraseña: string): Observable<boolean> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((usuarios: any[]) => {
        const user = usuarios.find(u => u.usuario === usuario && u.contraseña === contraseña);
        if (user) {
          this.storeToken('token'); // Guarda un token simulado
          this.storeRole(user.rol); // Guarda el rol del usuario
          this.storeNombreUsuario(user.nombre);
          return true; // Autenticación exitosa
        } else {
          return false; // Autenticación fallida
        }
      }),
      catchError(error => {
        console.error("Error en la autenticación", error);
        return of(false);
      })
    );
  }


  logout(): void {
    this.removeToken(); // Remueve el token y el rol
  }

  storeToken(token: string): void {
    const encodedToken = btoa(token); // Codifica el token en base64
    localStorage.setItem(this.authTokenKey, encodedToken); // Guarda el token en localStorage
  }

  storeRole(role: string): void {
    localStorage.setItem(this.roleKey, role); // Guarda el rol del usuario en localStorage
  }

  storeNombreUsuario(usuario: string): void{
    localStorage.setItem(this.nombreUsuario, usuario);
  }

  getRole(): string {
  return localStorage.getItem(this.roleKey) || ''; // Retorna vacío si no hay rol
  }

  getNombreUsuario(): string{
    return localStorage.getItem(this.nombreUsuario) || '';
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem(this.authTokenKey); // Verifica si hay un token guardado
    return !!token; // Retorna verdadero si el token existe
  }

  removeToken(): void {
    localStorage.removeItem(this.authTokenKey); // Elimina el token
    localStorage.removeItem(this.roleKey); // Elimina el rol del usuario
    localStorage.removeItem(this.nombreUsuario);
  }
}
