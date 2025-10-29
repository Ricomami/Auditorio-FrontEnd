import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Asiento } from '../interfaces/asiento';

@Injectable({
  providedIn: 'root'
})
export class AsientoService {
  private apiURL = "http://localhost:3000/asientos/";

  constructor( private http: HttpClient ) {}

  obtenerAsientos(): Observable<Asiento[]> {
    return this.http.get<Asiento[]>(this.apiURL);
  }

  obtenerAsientoPorId(id:number): Observable<Asiento> {
    return this.http.get<Asiento>(`${this.apiURL}/${id}`);
  }

  crearAsiento(auditorio: Asiento): Observable<Asiento> {
    return this.http.post<Asiento>(this.apiURL, auditorio);
  }

  actualizarAsiento(id: number, auditorio: Asiento): Observable<Asiento> {
    return this.http.put<Asiento>(`${this.apiURL}/${id}`, auditorio);
  }

  eliminarAsiento(id: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
