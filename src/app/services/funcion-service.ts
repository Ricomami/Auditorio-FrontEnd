import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Funcion } from '../interfaces/funcion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionService {
  private apiURL = "http://localhost:3000/funciones/";

  constructor( private http: HttpClient ) {}

  obtenerFunciones(): Observable<Funcion[]> {
    return this.http.get<Funcion[]>(this.apiURL);
  }

  obtenerFuncionPorId(id:number): Observable<Funcion> {
    return this.http.get<Funcion>(`${this.apiURL}/${id}`);
  }

  crearFuncion(funcion: Funcion): Observable<Funcion> {
    return this.http.post<Funcion>(this.apiURL, funcion);
  }

  actualizarFuncion(id: number, funcion: Funcion): Observable<Funcion> {
    return this.http.put<Funcion>(`${this.apiURL}/${id}`, funcion);
  }

  eliminarFuncion(id: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
