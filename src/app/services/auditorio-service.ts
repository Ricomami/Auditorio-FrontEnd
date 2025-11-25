import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auditorio, CrearAuditorioRespuesta } from '../interfaces/auditorio';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuditorioService {
  private apiURL = "http://localhost:3000/auditorios";

  constructor( private http: HttpClient ) {}

  obtenerAuditorios(): Observable<Auditorio[]> {
    return this.http.get<Auditorio[]>(this.apiURL);
  }

  obtenerAuditorioPorId(id:number){
    return this.http.get<Auditorio>(`${this.apiURL}/${id}`);
  }

  crearAuditorio(auditorio: FormData) {
    return this.http.post(this.apiURL, auditorio);
  }

  actualizarAuditorio(id: number, auditorio: FormData) {
    return this.http.put(`${this.apiURL}/${id}`, auditorio);
  }

  eliminarAuditorio(id: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
