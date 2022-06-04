import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CidadeCreateComponent } from './components/views/cidade/cidade-create/cidade-create.component';
import { CidadeReadComponent } from './components/views/cidade/cidade-read/cidade-read.component';
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

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
