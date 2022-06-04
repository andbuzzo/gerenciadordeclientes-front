import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../Cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements OnInit {

  displayedColumns: string[] = ['id', 'cpfOuCnpj', 'nome', 'acoes'];

  clientes: Cliente[] =[]

  constructor( private clienteService: ClienteService, private activedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
     this.findAll()
  }

  findAll():void{
    this.clienteService.findAll().subscribe({
      next: (resposta)=>{
        this.clientes = resposta;
        console.log(this.clientes)
      }
    })
  }

  navegarParaCriarCliente():void{
    this.router.navigate(['clientes/create'])
  }

}
