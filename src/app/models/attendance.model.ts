// src/app/models/attendance.model.ts

export interface Attendance {
    id: string;        // Identificador único para la asistencia
    classId: string;   // ID de la clase
    studentId: string; // ID del estudiante
    timestamp: string; // Fecha y hora de la asistencia (ISO 8601)
  }
  