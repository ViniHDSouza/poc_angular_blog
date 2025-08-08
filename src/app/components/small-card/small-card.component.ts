/*
 * Componente de Card Pequeno
 *
 * Este componente representa um card menor para listagem de artigos:
 *
 * Recursos Angular:
 * - @Component: Define este arquivo como um componente Angular
 * - @Input(): Propriedades que recebem dados do componente pai:
 *   * photoCover: Imagem do artigo
 *   * cardTitle: Título do artigo
 *   * Id: Identificador único usado para navegação
 *
 * Este componente é usado em conjunto com *ngFor no HomeComponent
 * para criar uma lista de artigos secundários
 */
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input() photoCover: string = "";
  @Input() cardTitle: string = "";
  @Input() Id: string = "0";
  constructor() { }

  ngOnInit(): void {
  }

}
