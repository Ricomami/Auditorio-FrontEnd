import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiURL = "http://localhost:3000/usuarios";

  constructor( private http: HttpClient ) {}

  obtenerUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiURL);
  }

  obtenerUsuarioPorId(id:number) {
    return this.http.get<Usuario>(`${this.apiURL}/${id}`);
  }

  crearUsuario(usuario: FormData) {
    return this.http.post(this.apiURL, usuario);
  }

  actualizarUsuario(id: number, usuario: FormData) {
    return this.http.put(`${this.apiURL}/${id}`, usuario);
  }

  eliminarUsuario(id: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
