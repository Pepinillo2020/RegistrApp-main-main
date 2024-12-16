import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Class } from '../models/class.model';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  private apiUrl = 'https://76192139-5628-4007-9beb-ceff7b82d048-00-3keu6cfe7yrs2.janeway.replit.dev/classes'; // Aquí está la URL del json-server

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }

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
    return this.http.post<Class>(this.apiUrl, newClass, this.httpOptions);
  }

  // Actualizar una clase
  updateClass(classId: string, updatedClassData: any) {
    const url = `${this.apiUrl}/${classId}`;  // Usar la base URL correctamente
    return this.http.put(url, updatedClassData, this.httpOptions);
  }
  
  // Eliminar una clase
  deleteClass(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, this.httpOptions);
  }
}
