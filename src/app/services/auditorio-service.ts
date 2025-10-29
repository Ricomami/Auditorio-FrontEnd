import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auditorio } from '../interfaces/auditorio';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuditorioService {
  private apiURL = "http://localhost:3000/auditorios/";

  constructor( private http: HttpClient ) {}

  obtenerAuditorios(): Observable<Auditorio[]> {
    return this.http.get<Auditorio[]>(this.apiURL);
  }

  obtenerAuditorioPorId(id:number): Observable<Auditorio> {
    return this.http.get<Auditorio>(`${this.apiURL}/${id}`);
  }

  crearAuditorio(auditorio: Auditorio): Observable<Auditorio> {
    return this.http.post<Auditorio>(this.apiURL, auditorio);
  }

  actualizarAuditorio(id: number, auditorio: Auditorio): Observable<Auditorio> {
    return this.http.put<Auditorio>(`${this.apiURL}/${id}`, auditorio);
  }

  eliminarAuditorio(id: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
