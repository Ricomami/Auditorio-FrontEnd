import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Seccion } from '../interfaces/seccion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeccionService {
  private apiURL = "http://localhost:3000/secciones";

  constructor( private http: HttpClient ) {}

  obtenerSecciones(): Observable<Seccion[]> {
    return this.http.get<Seccion[]>(this.apiURL);
  }

  obtenerSeccionPorId(id:number) {
    return this.http.get(`${this.apiURL}/${id}`);
  }

  crearSeccion(seccion: FormData) {
    return this.http.post(this.apiURL, seccion);
  }

  actualizarSeccion(id: number, seccion: FormData) {
    return this.http.put(`${this.apiURL}/${id}`, seccion);
  }

  eliminarSeccion(id: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}