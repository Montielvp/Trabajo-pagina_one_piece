import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  getPersonajes() {
    return this.http.get<any[]>(environment.apiUrl);
  }

  getPersonajeById(id: number) {
    return this.http.get<any>(`${environment.apiUrl}/${id}`);
  }
}
