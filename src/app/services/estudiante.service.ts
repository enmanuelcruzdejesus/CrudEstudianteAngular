import { HttpClientHelper } from './HttpClientHelper';
import { HttpHeaderResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudiante } from '../model/Estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private httpOptions = {
    headers : new HttpHeaders({"Content-Type":"application/json"})
  };
  constructor(private httpClient: HttpClient) { }

  getEstudiantes(): Observable<Estudiante[]>{
    return this.httpClient.get<Estudiante[]>(`${HttpClientHelper.baseURL}/getEstudianteList`,this.httpOptions);
  }

  getEstudianteById(id: number){

    return this.httpClient.get<Estudiante>(`${HttpClientHelper.baseURL}/getEstudianteById/`+id,this.httpOptions);
  }

  saveEstudiante(product: Estudiante): Observable<any>{
    return this.httpClient.post<Estudiante>(`${HttpClientHelper.baseURL}/saveEstudiante/`,product);
  }

  deleteEstudiante(id: number) :Observable<any>{
      return this.httpClient.delete(`${HttpClientHelper.baseURL}/deleteEstudiante/`+id,this.httpOptions);
      
  }
}
