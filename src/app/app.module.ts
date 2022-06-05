import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './components/views/home/home.component';
import {MatCardModule} from '@angular/material/card';
import { CidadeReadComponent } from './components/views/cidade/cidade-read/cidade-read.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { CidadeCreateComponent } from './components/views/cidade/cidade-create/cidade-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CidadeDeleteComponent } from './components/views/cidade/cidade-delete/cidade-delete.component';
import { CidadeUpdateComponent } from './components/views/cidade/cidade-update/cidade-update.component';
import { ClienteReadCidadeComponent } from './components/views/cliente/cliente-read-cidade/cliente-read-cidade.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ClienteCreateComponent } from './components/views/cliente/cliente-create/cliente-create.component';
import { ClienteReadComponent } from './components/views/cliente/cliente-read/cliente-read.component';
import {MatSelectModule} from '@angular/material/select';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ClienteReadCpfoucnpjComponent } from './components/views/cliente/cliente-read-cpfoucnpj/cliente-read-cpfoucnpj.component';
import { ClienteReadFullComponent } from './components/views/cliente/cliente-read-full/cliente-read-full.component';
import { ClienteUpdateComponent } from './components/views/cliente/cliente-update/cliente-update.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CidadeReadComponent,
    CidadeCreateComponent,
    CidadeDeleteComponent,
    CidadeUpdateComponent,
    ClienteReadCidadeComponent,
    ClienteCreateComponent,
    ClienteReadComponent,
    ClienteReadCpfoucnpjComponent,
    ClienteReadFullComponent,
    ClienteUpdateComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatTabsModule,
    MatSelectModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    MatCheckboxModule,
    MatSlideToggleModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]

  
})
export class AppModule { }

