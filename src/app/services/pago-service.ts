import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pago } from '../interfaces/pago';

@Injectable({
  providedIn: 'root'
})
export class PagoService {
  private apiURL = "http://localhost:3000/pagos/";

  constructor( private http: HttpClient ) {}

  obtenerPagos(): Observable<Pago[]> {
    return this.http.get<Pago[]>(this.apiURL);
  }

  obtenerPagoPorId(id:number): Observable<Pago> {
    return this.http.get<Pago>(`${this.apiURL}/${id}`);
  }

  crearPago(pago: Pago): Observable<Pago> {
    return this.http.post<Pago>(this.apiURL, pago);
  }

  actualizarPago(id: number, pago: Pago): Observable<Pago> {
    return this.http.put<Pago>(`${this.apiURL}/${id}`, pago);
  }

  eliminarPago(id: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
