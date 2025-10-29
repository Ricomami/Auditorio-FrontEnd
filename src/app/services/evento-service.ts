import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evento } from '../interfaces/evento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  private apiURL = "http://localhost:3000/eventos/";

  constructor( private http: HttpClient ) {}

  obtenerEventos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(this.apiURL);
  }

  obtenerEventoPorId(id:number): Observable<Evento> {
    return this.http.get<Evento>(`${this.apiURL}/${id}`);
  }

  crearEvento(evento: Evento): Observable<Evento> {
    return this.http.post<Evento>(this.apiURL, evento);
  }

  actualizarEvento(id: number, evento: Evento): Observable<Evento> {
    return this.http.put<Evento>(`${this.apiURL}/${id}`, evento);
  }

  eliminarEvento(id: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
