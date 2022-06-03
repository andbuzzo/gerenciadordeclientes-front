import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cidade } from './cidade.model';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {


  baseUrl: String = environment.baseUrl;


  constructor(private http: HttpClient) { }

findAll():Observable<Cidade[]> {
  const url = `${this.baseUrl}/cidades`
  return this.http.get<Cidade[]>(url)
}

}
