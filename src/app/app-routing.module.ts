import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
