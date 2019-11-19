import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' },
  { path: 'destino', loadChildren: './destino/destino.module#DestinoPageModule' },
  { path: 'mensagem', loadChildren: './mensagem/mensagem.module#MensagemPageModule' },
  { path: 'redefinicao', loadChildren: './redefinicao/redefinicao.module#RedefinicaoPageModule' },  { path: 'opcoes', loadChildren: './opcoes/opcoes.module#OpcoesPageModule' },
  { path: 'turmas', loadChildren: './turmas/turmas.module#TurmasPageModule' },
  { path: 'aceitas', loadChildren: './aceitas/aceitas.module#AceitasPageModule' },
  { path: 'confirmadas', loadChildren: './confirmadas/confirmadas.module#ConfirmadasPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
