import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventosArtista } from '../interfaces/eventos-artista';

@Injectable({
  providedIn: 'root'
})
export class EventosArtistaService {
  private apiURL = "http://localhost:3000/evento_artistas/";

  constructor( private http: HttpClient ) {}

  obtenerEventosArtistas(): Observable<EventosArtista[]> {
    return this.http.get<EventosArtista[]>(this.apiURL);
  }

  obtenerEventosArtistaPorId(id:number): Observable<EventosArtista> {
    return this.http.get<EventosArtista>(`${this.apiURL}/${id}`);
  }

  crearEventosArtista(eventosartista: EventosArtista): Observable<EventosArtista> {
    return this.http.post<EventosArtista>(this.apiURL, eventosartista);
  }

  actualizarEventosArtista(id: number, eventosartista: EventosArtista): Observable<EventosArtista> {
    return this.http.put<EventosArtista>(`${this.apiURL}/${id}`, eventosartista);
  }

  eliminarEventosArtista(id: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
