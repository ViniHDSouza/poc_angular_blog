/*
 * Componente de Card Grande
 *
 * @Component: Decorator que define um componente Angular
 * - selector: Define como o componente será usado em templates (app-big-card)
 * - templateUrl: Arquivo HTML do componente
 * - styleUrls: Arquivos CSS específicos do componente
 *
 * @Input(): Decorator que marca propriedades que podem receber dados do componente pai
 * - photoCover: URL da imagem de capa
 * - cardTitle: Título do card
 * - cardDescription: Descrição do conteúdo
 * - Id: Identificador único do card
 *
 * implements OnInit: Interface que força a implementação do método ngOnInit
 * - Usado para inicializações do componente
 */
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()  photoCover:string = "";
  @Input() cardTitle:string = "";
  @Input() cardDescription:string = "";
  @Input() Id:string = "0";

  constructor() { }

  ngOnInit(): void {
  }

}
