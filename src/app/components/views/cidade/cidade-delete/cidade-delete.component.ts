import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cidade } from '../cidade.model';
import { CidadeService } from '../cidade.service';

@Component({
  selector: 'app-cidade-delete',
  templateUrl: './cidade-delete.component.html',
  styleUrls: ['./cidade-delete.component.css']
})
export class CidadeDeleteComponent implements OnInit {

  cidade: Cidade = {
    id: '',
    nome: '',
    uf: ''
  }

  constructor(private service: CidadeService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.cidade.id = this.activatedRoute.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById():void{
    this.service.findById(this.cidade.id!).subscribe({
      next: (resposta) => this.cidade = resposta,
      error: (error)=> this.service.mensagem('Erro ao buscar a cidade, tente mais tarde!')

    })
  }

  delete():void {
    this.service.delete(this.cidade.id!).subscribe({
      next: () => this.service.mensagem('Cidade deletada com sucesso!!!'),
      error: (e) => this.service.mensagem('Cidade não pode ser deletada, possui clientes associados!'),
      complete: () => this.router.navigate(['cidades'])
    })
  }

  cancel(): void{
    this.router.navigate(['cidades'])
  }
    
  

}
