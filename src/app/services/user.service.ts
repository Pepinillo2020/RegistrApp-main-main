import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: string | null = null;

  constructor() { }

  setUser(username: string) {
    this.user = username;
    localStorage.setItem('user', username); // Guardar el usuario en localStorage
  }

  getUser() {
    return this.user || localStorage.getItem('user'); // Recuperar el usuario
  }

  clearUser() {
    this.user = null;
    localStorage.removeItem('user'); // Eliminar el usuario de localStorage
  }
}