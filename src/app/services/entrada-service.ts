import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entrada } from '../interfaces/entrada';

@Injectable({
  providedIn: 'root'
})
export class EntradaService {
  private apiURL = "http://localhost:3000/entradas/";

  constructor( private http: HttpClient ) {}

  obtenerEntradas(): Observable<Entrada[]> {
    return this.http.get<Entrada[]>(this.apiURL);
  }

  obtenerEntradaPorId(id:number): Observable<Entrada> {
    return this.http.get<Entrada>(`${this.apiURL}/${id}`);
  }

  crearEntrada(entrada: Entrada): Observable<Entrada> {
    return this.http.post<Entrada>(this.apiURL, entrada);
  }

  actualizarEntrada(id: number, entrada: Entrada): Observable<Entrada> {
    return this.http.put<Entrada>(`${this.apiURL}/${id}`, entrada);
  }

  eliminarEntrada(id: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
