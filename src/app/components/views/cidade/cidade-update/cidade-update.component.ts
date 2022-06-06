import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cidade } from '../cidade.model';
import { CidadeService } from '../cidade.service';

@Component({
  selector: 'app-cidade-update',
  templateUrl: './cidade-update.component.html',
  styleUrls: ['./cidade-update.component.css']
})
export class CidadeUpdateComponent implements OnInit {

  nome = new FormControl('', [Validators.minLength(5), Validators.maxLength(100)])
  uf = new FormControl('', [Validators.minLength(2),Validators.maxLength(2)])

  cidade: Cidade = {
    id:'',
    nome: '',
    uf:''
  }

  constructor(private service: CidadeService, private activatedRoute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.cidade.id = this.activatedRoute.snapshot.paramMap.get('id')!
    this.findById()
  }


  findById():void {
    this.service.findById(this.cidade.id!).subscribe({
      next: (resposta)=>{
        this.cidade.nome = resposta.nome;
        this.cidade.uf = resposta.uf;
      }
    })
  }

  update():void{
   
    this.service.update(this.cidade).subscribe({
      next: () => this.route.navigate(['cidades']),
      complete: () => this.service.mensagem('Cidade atualizada com sucesso'),
      error: () => this.service.mensagem('Erro ao tentar atualizar a cidade, tente novamente mais tarde!')
    })
  }

  cancel():void{
    this.route.navigate(['cidades'])
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
