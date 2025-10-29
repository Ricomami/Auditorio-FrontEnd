import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiURL = "http://localhost:3000/clientes/";
  
    constructor( private http: HttpClient ) {}
  
    obtenerClientes(): Observable<Cliente[]> {
      return this.http.get<Cliente[]>(this.apiURL);
    }
  
    obtenerClientePorId(id:number): Observable<Cliente> {
      return this.http.get<Cliente>(`${this.apiURL}/${id}`);
    }
  
    crearCliente(cliente: Cliente): Observable<Cliente> {
      return this.http.post<Cliente>(this.apiURL, cliente);
    }
  
    actualizarAuditorio(id: number, cliente: Cliente): Observable<Cliente> {
      return this.http.put<Cliente>(`${this.apiURL}/${id}`, cliente);
    }
  
    eliminarAuditorio(id: number): Observable<any> {
      return this.http.delete(`${this.apiURL}/${id}`);
    }
  }
  
