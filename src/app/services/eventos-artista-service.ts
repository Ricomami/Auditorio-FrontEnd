import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventosArtista } from '../interfaces/eventos-artista';

@Injectable({
  providedIn: 'root'
})
export class EventosArtistaService {
  private apiURL = "http://localhost:3000/evento_artistas";

  constructor( private http: HttpClient ) {}

  obtenerEventosArtistas(): Observable<EventosArtista[]> {
    return this.http.get<EventosArtista[]>(this.apiURL);
  }

  obtenerEventosArtistaPorId(evento_id:number, artista_id:number): Observable<EventosArtista> {
    return this.http.get<EventosArtista>(`${this.apiURL}/${evento_id}/${artista_id}`);
  }

  crearEventosArtista(eventosartista: EventosArtista): Observable<EventosArtista> {
    return this.http.post<EventosArtista>(this.apiURL, eventosartista);
  }

  actualizarEventosArtista(evento_id: number, artista_id: number, eventosartista: EventosArtista): Observable<EventosArtista> {
    return this.http.put<EventosArtista>(`${this.apiURL}/${evento_id}/${artista_id}`, eventosartista);
  }

  eliminarEventosArtista(evento_id: number, artista_id:number): Observable<any> {
    return this.http.delete(`${this.apiURL}/${evento_id}/${artista_id}`);
  }
}
