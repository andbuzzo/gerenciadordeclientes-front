import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cidade } from '../cidade.model';
import { CidadeService } from '../cidade.service';

@Component({
  selector: 'app-cidade-create',
  templateUrl: './cidade-create.component.html',
  styleUrls: ['./cidade-create.component.css']
})
export class CidadeCreateComponent implements OnInit {

  cidade: Cidade ={
    nome: '',
    uf:''
  }

  constructor(private service: CidadeService, private router: Router) { }

  ngOnInit(): void {
  }

  create():void{
    this.service.create(this.cidade).subscribe({
      complete: () => {
        this.router.navigate(['cidades'])
        this.service.mensagem('Cidade adicionada com sucesso')
      },
      error: (e) => this.service.mensagem('Erro ao criar nova cidade: ' + e)
    })
  }


  cancel():void{
    this.router.navigate(['cidades'])
  }

}
