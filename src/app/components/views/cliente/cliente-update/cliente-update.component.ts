import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cidade } from '../../cidade/cidade.model';
import { CidadeService } from '../../cidade/cidade.service';
import { Cliente } from '../Cliente.model';
import { ClienteService } from '../cliente.service';
import { validate, format, generate } from 'cnpj';


@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {

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
  btnAtivaDesativa: String =''

  nome = new FormControl('', [Validators.minLength(5), Validators.maxLength(100)])
  cpfOuCnpj = new FormControl('', [Validators.minLength(10),Validators.maxLength(18)])
  
  constructor(private cidadeService: CidadeService, private clienteService: ClienteService, private router: Router, private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
   this.cliente.id = this.activeRouter.snapshot.paramMap.get('id')!
   this.preencherSelect()
   this.findById()
   
  }

  update():void{
    if(this.clienteService.isValidCPF(this.cliente.cpfOuCnpj) == true || validate(this.cliente.cpfOuCnpj) == true){
    this.clienteService.update(this.cliente).subscribe({
      next: () => this.router.navigate(['clientes']),
      complete: () => this.clienteService.mensagem('Cliente atualizado com sucesso'),
      error: () => this.clienteService.mensagem('Erro ao tentar atualizar o cliente, tente novamente mais tarde!')
    })
  }else{
    this.clienteService.mensagem("CPF ou CNPJ inválido!!")
  }
  }

  findById():void {
    this.clienteService.findById(this.cliente.id!).subscribe({
      next: (resposta)=>{
        this.cliente = resposta
        this.btnAtivaDesativaCliente()
        console.log(this.cliente.ativo)
      }
    })
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

  btnAtivaDesativaCliente(){
    if(this.cliente.ativo == true){
      this.btnAtivaDesativa ='DESATIVAR CLIENTE'
    }else if(this.cliente.ativo == false){
      this.btnAtivaDesativa = 'ATIVAR CLIENTE'
    }
  }

  ativarDesativarCliente(){
    if(this.cliente.ativo == true){
      this.cliente.ativo = false
      this.btnAtivaDesativaCliente()
      console.log(this.cliente.ativo)
    }else if(this.cliente.ativo == false){
      this.cliente.ativo = true
      this.btnAtivaDesativaCliente()
      console.log(this.cliente.ativo)
  }
}
  

}
