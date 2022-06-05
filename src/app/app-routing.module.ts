import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CidadeCreateComponent } from './components/views/cidade/cidade-create/cidade-create.component';
import { CidadeDeleteComponent } from './components/views/cidade/cidade-delete/cidade-delete.component';
import { CidadeReadComponent } from './components/views/cidade/cidade-read/cidade-read.component';
import { CidadeUpdateComponent } from './components/views/cidade/cidade-update/cidade-update.component';
import { ClienteCreateComponent } from './components/views/cliente/cliente-create/cliente-create.component';
import { ClienteReadCidadeComponent } from './components/views/cliente/cliente-read-cidade/cliente-read-cidade.component';
import { ClienteReadCpfoucnpjComponent } from './components/views/cliente/cliente-read-cpfoucnpj/cliente-read-cpfoucnpj.component';
import { ClienteReadFullComponent } from './components/views/cliente/cliente-read-full/cliente-read-full.component';
import { ClienteReadComponent } from './components/views/cliente/cliente-read/cliente-read.component';
import { ClienteUpdateComponent } from './components/views/cliente/cliente-update/cliente-update.component';
import { HomeComponent } from './components/views/home/home.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'cidades',
    component: CidadeReadComponent
  },
  {
    path:'cidades/create',
    component: CidadeCreateComponent

  },
  {
    path:'cidades/delete/:id',
    component: CidadeDeleteComponent
  },
  {
    path:'cidades/update/:id',
    component: CidadeUpdateComponent
  },
  {
    path:'cidades/clientes/cidades/:id',
    component: ClienteReadCidadeComponent
  },
  {
    path:'clientes',
    component: ClienteReadComponent
  },
  {
    path:'clientes/create',
    component: ClienteCreateComponent
  },
  {
    path:'clientes/read/:cpfOuCnpj',
    component: ClienteReadCpfoucnpjComponent
  },
  {
    path:'clientes/read/full/:id',
    component: ClienteReadFullComponent
  },
  {
    path:'clientes/update/:id',
    component: ClienteUpdateComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
