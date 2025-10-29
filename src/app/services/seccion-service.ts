import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Seccion } from '../interfaces/seccion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeccionService {
  private apiURL = "http://localhost:3000/secciones/";

  constructor( private http: HttpClient ) {}

  obtenerSeccions(): Observable<Seccion[]> {
    return this.http.get<Seccion[]>(this.apiURL);
  }

  obtenerSeccionPorId(id:number): Observable<Seccion> {
    return this.http.get<Seccion>(`${this.apiURL}/${id}`);
  }

  crearSeccion(seccion: Seccion): Observable<Seccion> {
    return this.http.post<Seccion>(this.apiURL, seccion);
  }

  actualizarSeccion(id: number, seccion: Seccion): Observable<Seccion> {
    return this.http.put<Seccion>(`${this.apiURL}/${id}`, seccion);
  }

  eliminarSeccion(id: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}