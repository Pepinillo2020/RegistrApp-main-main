// src/app/services/attendance.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Attendance } from '../models/attendance.model';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  private apiUrl = 'http://localhost:3000/Asistencia'; // URL del JSON Server

  constructor(private http: HttpClient) {}

  // Registrar asistencia
  registerAttendance(attendance: Attendance): Observable<Attendance> {
    return this.http.post<Attendance>(this.apiUrl, attendance);
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
