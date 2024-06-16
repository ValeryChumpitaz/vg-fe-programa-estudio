import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Celebrant } from '../interfaces/celebrants.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CelebrantsService {
  private apiUrl = 'https://zrnbrt83-8085.brs.devtunnels.ms/api/v1/celebrant';

  constructor(private http: HttpClient) { }

  getAllActivesCelebrant(): Observable<Celebrant[]> {
    return this.http.get<Celebrant[]>(`${this.apiUrl}/active`);
  }

  // Método para obtener celebrants inactivos
  getAllInactiveCelebrant(): Observable<Celebrant[]> {
    return this.http.get<Celebrant[]>(`${this.apiUrl}/inactive`);
  }

  // Método para agregar celebrant
  addCelebrant(celebrant: Celebrant): Observable<Celebrant> {
    const { idCelebrant, ...celebrantData } = celebrant;
    return this.http.post<Celebrant>(`${this.apiUrl}/create`, celebrantData);
  }

  updateCelebrant(id: string, celebrant: Celebrant): Observable<Celebrant> {
    return this.http.put<Celebrant>(`${this.apiUrl}/update/${id}`, celebrant);
}


  // Metodo para Buscar por Id Activos
  getActiveCelebrantById(id: string): Observable<Celebrant> {
    return this.http.get<Celebrant>(`${this.apiUrl}/active/${id}`);
  }

  // Metodo para Buscar por Id Inactivos
  getInactiveCelebrantById(id: string): Observable<Celebrant> {
    return this.http.get<Celebrant>(`${this.apiUrl}/inactive/${id}`);
  }

  inactiveCelebrant(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/inactivate/${id}`);
  }

  activateCelebrant(id: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/activate/${id}`, null);
  }
}