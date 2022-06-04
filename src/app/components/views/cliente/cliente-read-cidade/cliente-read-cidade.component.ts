import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cidade } from '../../cidade/cidade.model';
import { CidadeService } from '../../cidade/cidade.service';
import { Cliente } from '../Cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-read-cidade',
  templateUrl: './cliente-read-cidade.component.html',
  styleUrls: ['./cliente-read-cidade.component.css']
})
export class ClienteReadCidadeComponent implements OnInit {

  constructor(private clienteService: ClienteService, private cidadeService: CidadeService, private activedRoute: ActivatedRoute, private router: Router) { }

  displayedColumns: string[] = ['id', 'cpfOuCnpj', 'nome', 'acoes'];

  id_cidade: String = ''
  clientes: Cliente[] =[]
  cidade: Cidade = {
    id:'',
    nome:'',
    uf:''
  }

  ngOnInit(): void {
    this.id_cidade = this.activedRoute.snapshot.paramMap.get('id')!
    this.findByCidade()
    this.buscaNomeCidade()
  }


  findByCidade():void{
    this.clienteService.findByCidade(this.id_cidade).subscribe({
      next: (resposta)=>{
        this.clientes = resposta;
        console.log(this.clientes)
      }
    })
  }

  buscaNomeCidade():void{
    this.cidadeService.findById(this.id_cidade).subscribe({
      next:(reposta) => this.cidade = reposta
    })
  }

  title():String{
    return "Clientes de " + this.cidade.nome + "/" + this.cidade.uf;
  }

  navegarParaCriarCliente():void{
    this.router.navigate(['clientes/create'])
  }


}
