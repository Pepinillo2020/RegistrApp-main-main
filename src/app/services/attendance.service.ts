// src/app/services/attendance.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Attendance } from '../models/attendance.model';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  private apiUrl = 'https://76192139-5628-4007-9beb-ceff7b82d048-00-3keu6cfe7yrs2.janeway.replit.dev/Asistencia'; // URL del JSON Server

  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    }

  constructor(private http: HttpClient) {}

  // Registrar asistencia
  registerAttendance(attendance: Attendance): Observable<Attendance> {
    return this.http.post<Attendance>(this.apiUrl, attendance, this.httpOptions);
  }

  // Obtener todas las asistencias
  getAttendances(): Observable<Attendance[]> {
    return this.http.get<Attendance[]>(this.apiUrl);
  }

  // Obtener asistencias de una clase específica
  getClassAttendances(classId: string): Observable<Attendance[]> {
    return this.http.get<Attendance[]>(`${this.apiUrl}?classId=${classId}`);
  }

  // Obtener asistencias de una clase específica por el id
  getAttendanceByClassId(classId: string): Observable<Attendance[]> {
    return this.http.get<Attendance[]>(`http://localhost:3000/Asistencia?classId=${classId}`);
  }
  
  
}
