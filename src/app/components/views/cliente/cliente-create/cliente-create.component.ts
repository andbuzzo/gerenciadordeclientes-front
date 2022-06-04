import { Component, OnInit } from '@angular/core';
import { Cidade } from '../../cidade/cidade.model';
import { CidadeService } from '../../cidade/cidade.service';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  cidades: Cidade[] = []
  id_cidade: String =''
  cpf_cnpj: String =''
  constructor(private cidadeService: CidadeService) { }

  ngOnInit(): void {
    this.cidadeService.findAll().subscribe({
      next: (resposta) => {
        this.cidades = resposta
        console.log(this.cidades)
      }
    })
  }

  isCPF(): boolean{
    return this.cpf_cnpj == null ? true : this.cpf_cnpj.length < 12 ? true : false;
 }
 
 getCpfCnpjMask(): string{
    return this.isCPF() ? '000.000.000-009' : '00.000.000/0000-00';
 }

}
