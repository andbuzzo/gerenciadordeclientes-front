import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cidade } from '../../cidade/cidade.model';
import { CidadeService } from '../../cidade/cidade.service';
import { Cliente } from '../Cliente.model';
import { ClienteService } from '../cliente.service';
import { validate, format, generate } from 'cnpj';


@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

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

  

  cidades: Cidade[] = []

  id_cidade: String = ''

  cnpj: string =''

  nome = new FormControl('', [Validators.minLength(5), Validators.maxLength(100)])
  cpfOuCnpj = new FormControl('', [Validators.minLength(10),Validators.maxLength(18)])
  
  constructor(private cidadeService: CidadeService, private clienteService: ClienteService, private router: Router, private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
  
   this.preencherSelect()

  }


create():void{
  if(this.clienteService.isValidCPF(this.cliente.cpfOuCnpj) == true || validate(this.cliente.cpfOuCnpj) == true){
    this.clienteService.create(this.cliente).subscribe({
      next:(resposta) =>{ 
        console.log(resposta)
        console.log(resposta)
        this.cliente = resposta
      },
      complete:() => {
        this.router.navigate(['clientes'])
        this.clienteService.mensagem("Cliente adicionado com sucesso!")
      }
    })
  }else{
    this.clienteService.mensagem("CPF ou CNPJ inválido!!")
  }
}


  preencherSelect():void{
    this.cidadeService.findAll().subscribe({
      next: (resposta) => {
        this.cidades = resposta
      }
    })
  }

  getMessage(){
    if(this.nome.invalid){
      return 'O Campo Nome deve conter entre 3 e 100 caracteres';
    }
    if(this.cpfOuCnpj.invalid){
      return 'O Campo CPF/CNPJ deve conter entre 11 e 14 números';
    }
    return false;
  }

  

}
