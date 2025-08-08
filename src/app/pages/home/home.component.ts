/*
 * Componente da Página Inicial
 *
 * Este componente gerencia a exibição dos artigos na página principal:
 * - Usa dataFake como fonte de dados (simulando uma API)
 * - Separa os artigos em:
 *   * mainArticle: Primeiro artigo para exibição destacada
 *   * otherArticles: Array com os próximos 3 artigos
 *
 * Padrões Angular utilizados:
 * - Component: Define este arquivo como um componente
 * - OnInit: Interface para inicialização do componente
 * - Property binding: Usado no template para passar dados aos componentes filhos
 * - Structural directives: *ngFor para listar os artigos
 */
import { Component, OnInit } from '@angular/core';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles = dataFake;
  mainArticle = this.articles[0]; // Primeiro artigo para o big-card
  otherArticles = this.articles.slice(1, 4); // Próximos 3 artigos para small-cards

  constructor() { }

  ngOnInit(): void {
  }

}
