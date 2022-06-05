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

  findAllDesativados():Observable<Cliente[]>{
    const url =`${this.baseUrl}/clientes/desativados`
    return this.http.get<Cliente[]>(url)
  }

  findByCpfouCnpj(cpfOuCnpj: String):Observable<Cliente>{
    const url=`${this.baseUrl}/clientes/c/${cpfOuCnpj}`
    return this.http.get<Cliente>(url)
  }

  findById(id: String):Observable<Cliente>{
    const url=`${this.baseUrl}/clientes/${id}`
    return this.http.get<Cliente>(url)
  }

  create(cliente: Cliente):Observable<Cliente>{
    console.log(cliente)
    const url=`${this.baseUrl}/clientes/`
    return this.http.post<Cliente>(url, cliente)
  }

  update(cliente: Cliente):Observable<void>{
    const url = `${this.baseUrl}/clientes/${cliente.id}`
    return this.http.put<void>(url, cliente)
  }

  mensagem(msg: String): void{
    this._snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }

}
