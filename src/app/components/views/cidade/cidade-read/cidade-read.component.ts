import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cidade } from '../cidade.model';
import { CidadeService } from '../cidade.service';

@Component({
  selector: 'app-cidade-read',
  templateUrl: './cidade-read.component.html',
  styleUrls: ['./cidade-read.component.css']
})
export class CidadeReadComponent implements OnInit {

  cidade: Cidade[] = []

  displayedColumns: string[] = ['id', 'nome', 'uf', 'clientes', 'acoes'];

  constructor( private service: CidadeService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe({
      next: (resposta) =>{ 
        this.cidade = resposta
        console.log(resposta);
      }
    })
  }

  navegarParaCidadeCreate(): void{
    this.router.navigate(["cidades/create"])
  }

  

}
