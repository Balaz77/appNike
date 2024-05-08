import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinhaNovaPaginaPageRoutingModule } from './minha-nova-pagina-routing.module';

import { MinhaNovaPaginaPage } from './minha-nova-pagina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinhaNovaPaginaPageRoutingModule
  ],
  declarations: [MinhaNovaPaginaPage]
})
export class MinhaNovaPaginaPageModule {}
