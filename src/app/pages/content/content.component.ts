/*
 * Componente de Conteúdo do Artigo
 *
 * Este componente é responsável por exibir o conteúdo completo de um artigo:
 *
 * Recursos Angular utilizados:
 * - ActivatedRoute: Serviço para acessar parâmetros da rota atual
 * - Observables: Usado com route.params.subscribe para reagir a mudanças na URL
 * - Injeção de Dependência: ActivatedRoute injetado via construtor
 * - Lifecycle Hooks: ngOnInit para inicialização e carregamento dos dados
 * - Property Binding: Para exibir dados dinâmicos no template
 *
 * Fluxo de Dados:
 * 1. Captura o ID do artigo da URL
 * 2. Busca os dados do artigo no dataFake
 * 3. Atualiza as propriedades do componente
 * 4. Template exibe os dados atualizados
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string="";
  contentTitle:string="";
  contentDescription:string="";
  private id:string | null="0";
  constructor(
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.route.params.subscribe( (params) => {
      console.log(params['id']);
      console.log(params);
      this.id = params['id'];
    });
    this.setValuesToComponent(this.id!);
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter( article => article.id == id)[0];
    console.log('-----------');
    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photoCover = result.photoCover;


  }


}
