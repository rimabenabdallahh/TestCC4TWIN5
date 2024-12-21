import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TeamserviceService {
  baseUrl: string = 'http://localhost:3000/';
  constructor(private _http: HttpClient) {}

  get<T>(endpoint: string, id: number = 0) {
    return id != 0
      ? this._http.get<T>(`${this.baseUrl}${endpoint}/${id}`)
      : this._http.get<T>(`${this.baseUrl}${endpoint}`);
  }

  add<T>(endpoint: string, data: T) {
    return this._http.post<T>(`${this.baseUrl}${endpoint}`, data);
  }
}
