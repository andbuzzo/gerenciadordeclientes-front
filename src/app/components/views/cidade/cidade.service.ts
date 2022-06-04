import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cidade } from './cidade.model';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {


  baseUrl: String = environment.baseUrl;


  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

findAll():Observable<Cidade[]> {
  const url = `${this.baseUrl}/cidades`
  return this.http.get<Cidade[]>(url)
}

create(cidade: Cidade): Observable<Cidade>{
  const url = `${this.baseUrl}/cidades`
  return this.http.post<Cidade>(url, cidade);
}

mensagem(msg: String): void{
  this._snack.open(`${msg}`, 'OK', {
    horizontalPosition: 'end',
    verticalPosition: 'top',
    duration: 3000
  })
}

}
