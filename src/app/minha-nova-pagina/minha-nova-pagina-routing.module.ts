import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinhaNovaPaginaPage } from './minha-nova-pagina.page';

const routes: Routes = [
  {
    path: '',
    component: MinhaNovaPaginaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinhaNovaPaginaPageRoutingModule {}
