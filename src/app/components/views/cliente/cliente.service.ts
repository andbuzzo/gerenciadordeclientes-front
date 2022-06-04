import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from './Cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl : String = environment.baseUrl
  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findByCidade(id: String):Observable<Cliente[]>{
    const url =`${this.baseUrl}/clientes/cidades/${id}`
    return this.http.get<Cliente[]>(url)
  }

  findAll():Observable<Cliente[]>{
    const url =`${this.baseUrl}/clientes`
    return this.http.get<Cliente[]>(url)
  }

}
