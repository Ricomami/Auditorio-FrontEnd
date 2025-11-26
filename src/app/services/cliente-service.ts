import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiURL = "http://localhost:3000/clientes";
  
    constructor( private http: HttpClient ) {}
  
    obtenerClientes(): Observable<Cliente[]> {
      return this.http.get<Cliente[]>(this.apiURL);
    }
  
    obtenerClientePorId(id:number) {
      return this.http.get<Cliente>(`${this.apiURL}/${id}`);
    }
  
    crearCliente(cliente: FormData) {
      return this.http.post(this.apiURL, cliente);
    }
  
    actualizarCliente(id: number, cliente: FormData) {
      return this.http.put(`${this.apiURL}/${id}`, cliente);
    }
  
    eliminarCliente(id: number): Observable<any> {
      return this.http.delete(`${this.apiURL}/${id}`);
    }
  }
  
