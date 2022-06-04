import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CidadeCreateComponent } from './components/views/cidade/cidade-create/cidade-create.component';
import { CidadeDeleteComponent } from './components/views/cidade/cidade-delete/cidade-delete.component';
import { CidadeReadComponent } from './components/views/cidade/cidade-read/cidade-read.component';
import { CidadeUpdateComponent } from './components/views/cidade/cidade-update/cidade-update.component';
import { ClienteCreateComponent } from './components/views/cliente/cliente-create/cliente-create.component';
import { ClienteReadCidadeComponent } from './components/views/cliente/cliente-read-cidade/cliente-read-cidade.component';
import { ClienteReadComponent } from './components/views/cliente/cliente-read/cliente-read.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
