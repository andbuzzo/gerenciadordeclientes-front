import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../Cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-read-desativados',
  templateUrl: './cliente-read-desativados.component.html',
  styleUrls: ['./cliente-read-desativados.component.css']
})
export class ClienteReadDesativadosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'cpfOuCnpj', 'nome', 'acoes'];
  cpfOuCnpj : String =''
  pesquisa: String =''

  clientes: Cliente[] =[]

  private cliente!: Cliente;

  constructor( private clienteService: ClienteService, private activedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.cpfOuCnpj = this.activedRoute.snapshot.paramMap.get('cpfOuCnpj')!
     this.findAll()
  }

  findAll():void{
    this.clienteService.findAllDesativados().subscribe({
      next: (resposta)=>{
        this.clientes = resposta;
      }
    })
  }

  navegarParaCriarCliente():void{
    this.router.navigate(['clientes/create'])
  }

  navegarParaPesquisarCliente():void{
    this.router.navigate([`clientes/read/${this.pesquisa}`])
  }

  findByCpfOuCnpj():void{
    this.clienteService.findByCpfouCnpj(this.cpfOuCnpj).subscribe({
      next:(resposta)=>{
        this.cliente = resposta
      }
    })
  }

  navegarParaPesquisarClientesDesativados():void{
    this.router.navigate(['clientes/read/desativados'])
  }
  

}
