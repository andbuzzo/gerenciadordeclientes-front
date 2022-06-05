import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cidade } from '../../cidade/cidade.model';
import { CidadeService } from '../../cidade/cidade.service';
import { Cliente } from '../Cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-read-cpfoucnpj',
  templateUrl: './cliente-read-cpfoucnpj.component.html',
  styleUrls: ['./cliente-read-cpfoucnpj.component.css']
})
export class ClienteReadCpfoucnpjComponent implements OnInit {

  cpfOuCnpj: String =''
  descricao_cidade: String =''
  descricao_uf: String =''
  cliente_status: String =''
  id_cliente: String = ''

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
    cidade:0

  }
  objCidade: Cidade ={
    id:'',
    nome:'',
    uf:''
  }

  constructor(private cidadeService: CidadeService, private clienteService: ClienteService, private activadedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
   
    this.cpfOuCnpj = this.activadedRouter.snapshot.paramMap.get('cpfOuCnpj')!
    this.findByCpfOuCnpj();
  
  }

  findByCpfOuCnpj():void{
    this.clienteService.findByCpfouCnpj(this.cpfOuCnpj).subscribe({
      next:(response) => {
        this.cliente = response
        const values = Object.values(response.cidade)
        this.descricao_cidade = values[1]
        this.descricao_uf = values[2]
        this.id_cliente = this.cliente.id!
        if(this.cliente.ativo == true){
          this.cliente_status = "ATIVO"
        }else {this.cliente_status = "DESATIVADO"}
        this.buscaNomeCidade();
      }
      
      ,
      error:(e) =>{
        this.clienteService.mensagem("CPF/CNPJ não cadastrado")
        this.router.navigate(['clientes'])        
      }
    })
  }

  buscaNomeCidade():void{
    this.cidadeService.findById(this.id_cliente).subscribe({
      next:(reposta) => this.objCidade = reposta
    })
  }

}
