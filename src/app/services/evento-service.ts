import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evento } from '../interfaces/evento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  private apiURL = "http://localhost:3000/eventos";

  constructor( private http: HttpClient ) {}

  obtenerEventos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(this.apiURL);
  }

  obtenerEventoPorId(id:number) {
    return this.http.get<Evento>(`${this.apiURL}/${id}`);
  }

  crearEvento(evento: FormData){
    return this.http.post(this.apiURL, evento);
  }

  actualizarEvento(id: number, evento: FormData) {
    return this.http.put(`${this.apiURL}/${id}`, evento);
  }

  eliminarEvento(id: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
