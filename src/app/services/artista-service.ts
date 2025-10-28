import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artista } from '../interfaces/artista'

@Injectable({
  providedIn: 'root'
})
export class ArtistaService {
  private apiURL = "http://localhost:3000/artistas/";

  constructor(private http: HttpClient) { }

  obtenerArtistas(): Observable<Artista[]> {
    return this.http.get<Artista[]>(this.apiURL);
  }

  obtenerArtistaPorId(id: number): Observable<Artista> {
    return this.http.get<Artista>(`${this.apiURL}/${id}`);
  }

  crearArtista(artista: Artista): Observable<Artista> {
    return this.http.post<Artista>(this.apiURL, artista);
  }

  actualizarArtista(id: number, artista: Artista): Observable<Artista> {
    return this.http.put<Artista>(`${this.apiURL}/${id}`, artista);
  }

  eliminarArtista(id: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}