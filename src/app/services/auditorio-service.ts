import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auditorio, CrearAuditorioRespuesta } from '../interfaces/auditorio';
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

  //Esperamos especificamente el retorno de nuestra API backend con Express 
  crearAuditorio(auditorio: Auditorio): Observable<CrearAuditorioRespuesta> {
    return this.http.post<CrearAuditorioRespuesta>(this.apiURL, auditorio);
  }

  actualizarAuditorio(id: number, auditorio: Auditorio): Observable<Auditorio> {
    return this.http.put<Auditorio>(`${this.apiURL}/${id}`, auditorio);
  }

  eliminarAuditorio(id: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
