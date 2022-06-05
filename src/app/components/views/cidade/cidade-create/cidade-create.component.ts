import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
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

  nome = new FormControl('', [Validators.minLength(5), Validators.maxLength(100)])
  uf = new FormControl('', [Validators.minLength(2),Validators.maxLength(2)])

  constructor(private service: CidadeService, private router: Router) { }

  ngOnInit(): void {
  }

  create():void{
    this.service.create(this.cidade).subscribe({
      complete: () => {
        this.router.navigate(['cidades'])
        this.service.mensagem('Cidade adicionada com sucesso')
      },
      error: () => this.service.mensagem('Erro ao criar nova cidade, verifique todos os campos e tente novamente!')
    })
  }


  cancel():void{
    this.router.navigate(['cidades'])
  }

  getMessage(){
    if(this.nome.invalid){
      return 'O Campo Nome deve conter entre 3 e 100 caracteres';
    }
    if(this.uf.invalid){
      return 'O Campo UF deve conter exatamente 2 caracteres';
    }
    return false;
  }

}
