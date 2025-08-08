/*
 * Componente do Título do Menu
 *
 * Este é um componente de apresentação simples que:
 * - Exibe o título principal do blog
 * - Usa estilos específicos (menu-title.component.css)
 * - Implementa responsividade (menu-title.responsive.component.css)
 *
 * Padrões Angular:
 * - @Component: Decorator para definição do componente
 * - OnInit: Interface para hook de ciclo de vida
 * - styleUrls: Array permitindo múltiplos arquivos CSS
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-title',
  templateUrl: './menu-title.component.html',
  styleUrls: ['./menu-title.component.css']
})
export class MenuTitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
