import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cidade } from '../../cidade/cidade.model';
import { CidadeService } from '../../cidade/cidade.service';

import { Cliente } from '../Cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-read-full',
  templateUrl: './cliente-read-full.component.html',
  styleUrls: ['./cliente-read-full.component.css']
})
export class ClienteReadFullComponent implements OnInit {

  id_cliente: String =''
  descricao_cidade: String =''
  descricao_uf: String =''
  cliente_status: String =''


  objCidade: Cidade ={
    id:'',
    nome:'',
    uf:''
  }

  cliente: Cliente ={
    id:'',
    cpfOuCnpj:'',
    nome:'',
    ativo: true,
    bairro:'',
    cep:'',
    email:'',
    endereco: '',
    numero:'',
    telefone:'',
    cidade: 0

  }

  constructor(private cidadeService:CidadeService, private clienteService: ClienteService, private activadedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_cliente = this.activadedRouter.snapshot.paramMap.get('id')!
    this.findById();
    this.buscaNomeCidade();
  }

  findById():void{
    this.clienteService.findById(this.id_cliente).subscribe({
      next:(response) => {
        this.cliente = response
        console.log(response.cidade)
        const values = Object.values(response.cidade)
        this.descricao_cidade = values[1]
        this.descricao_uf = values[2]
        if(this.cliente.ativo == true){
          this.cliente_status = "ATIVO"
        }else
        this.cliente_status = "DESATIVADO"
      }
    })
  }

  buscaNomeCidade():void{
    this.cidadeService.findById(this.id_cliente).subscribe({
      next:(reposta) => this.objCidade = reposta
    })
  }


}
