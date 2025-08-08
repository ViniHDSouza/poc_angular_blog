/*
 * Módulo de Roteamento do Angular
 *
 * Este módulo configura as rotas da aplicação:
 * - path: '': Rota raiz que carrega o HomeComponent
 * - path: 'content/:id': Rota dinâmica que aceita um parâmetro id
 *
 * RouterModule.forRoot(): Configura o roteador no nível raiz
 * Routes: Interface que define a estrutura das rotas
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

const routes: Routes = [

  {
    path: '',
    component:HomeComponent,
  },
  {
    path: 'content/:id',
    component: ContentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
