import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Asiento } from '../interfaces/asiento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsientoService {
  private apiURL = "http://localhost:3000/asientos";

  constructor( private http: HttpClient ) {}

  obtenerAsientos(): Observable<Asiento[]> {
    return this.http.get<Asiento[]>(this.apiURL);
  }

  obtenerAsientoPorId(id:number) {
    return this.http.get<Asiento>(`${this.apiURL}/${id}`);
  }

  crearAsiento(asiento: Asiento): Observable<Asiento> {
    return this.http.post<Asiento>(this.apiURL, asiento);
  }

  actualizarAsiento(id: number, asiento: Asiento) {
    return this.http.put(`${this.apiURL}/${id}`, asiento);
  }

  eliminarAsiento(id: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
