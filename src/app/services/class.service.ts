import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Class } from '../models/class.model';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  private apiUrl = 'http://localhost:3000/classes'; // Aquí está la URL del json-server

  constructor(private http: HttpClient) {}

  // Obtener todas las clases
  getClasses(): Observable<Class[]> {
    return this.http.get<Class[]>(this.apiUrl);
  }

  // Obtener una clase por ID
  getClass(id: string): Observable<Class> {
    return this.http.get<Class>(`${this.apiUrl}/${id}`);
  }
  // Crear una nueva clase
  createClass(newClass: Class): Observable<Class> {
    return this.http.post<Class>(this.apiUrl, newClass);
  }

  // Actualizar una clase
  updateClass(classId: string, updatedClassData: any) {
    const url = `${this.apiUrl}/${classId}`;  // Usar la base URL correctamente
    return this.http.put(url, updatedClassData);
  }
  
  // Eliminar una clase
  deleteClass(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
