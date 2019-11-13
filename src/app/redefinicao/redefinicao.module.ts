import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RedefinicaoPage } from './redefinicao.page';

const routes: Routes = [
  {
    path: '',
    component: RedefinicaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RedefinicaoPage]
})
export class RedefinicaoPageModule {}
