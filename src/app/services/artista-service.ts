import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artista } from '../interfaces/artista'

@Injectable({
  providedIn: 'root'
})
export class ArtistaService {
  private apiURL = "http://localhost:3000/artistas";

  constructor(private http: HttpClient) { }

  obtenerArtistas(): Observable<Artista[]> {
    return this.http.get<Artista[]>(this.apiURL);
  }

  obtenerArtistaPorId(id: number){
    return this.http.get<Artista>(`${this.apiURL}/${id}`);
  }

  crearArtista(artista: FormData) {
    return this.http.post(`${this.apiURL}`, artista);
  }

  actualizarArtista(id: number, artista: FormData) {
    return this.http.put(`${this.apiURL}/${id}`, artista);
  }

  eliminarArtista(id: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}