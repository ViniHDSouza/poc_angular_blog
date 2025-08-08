# Blog em Angular

Este é um projeto de blog desenvolvido em Angular, demonstrando diversos conceitos fundamentais do framework.

## Estrutura do Projeto

```
src/
├── app/
│   ├── components/      # Componentes reutilizáveis
│   ├── data/           # Dados mockados
│   └── pages/          # Componentes de páginas
```

## Conceitos do Angular Utilizados

### 1. Componentes
O projeto utiliza a arquitetura baseada em componentes do Angular, divididos em:

#### Componentes de Layout
- `menu-bar`: Barra de navegação do blog
- `menu-title`: Título principal do blog
- `big-card`: Card principal com destaque
- `small-card`: Cards menores para artigos secundários

#### Componentes de Página
- `home`: Página inicial que organiza os cards
- `content`: Página de conteúdo individual do artigo

### 2. Decorators
- `@Component`: Utilizado para definir metadados dos componentes
  ```typescript
  @Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
  })
  ```

### 3. Data Binding
- **Property Binding**: Usado para passar dados para os componentes
  ```html
  [Id]="article.id"
  [photoCover]="article.photoCover"
  [cardTitle]="article.title"
  ```

### 4. Diretivas Estruturais
- `*ngFor`: Utilizado para repetir elementos baseados em arrays
  ```html
  <app-small-card 
    *ngFor="let article of otherArticles"
    [Id]="article.id"
    [cardTitle]="article.title"
    [photoCover]="article.photoCover">
  </app-small-card>
  ```

### 5. Modularização
- `app.module.ts`: Módulo principal que declara todos os componentes
- Separação de responsabilidades entre componentes e páginas

### 6. Gerenciamento de Dados
- `dataFake.ts`: Simulação de uma API com dados mockados
  ```typescript
  export const dataFake = [
    {
      "id": "1",
      "title": "...",
      "description": "...",
      "photoCover": "..."
    }
    // ...
  ]
  ```

### 7. Roteamento
- `app-routing.module.ts`: Configuração das rotas da aplicação
- Navegação entre a página inicial e páginas de conteúdo

### 8. CSS e Estilização
- Arquivos CSS individuais para cada componente
- CSS responsivo (exemplo: menu-title.responsive.component.css)

## Componentes Detalhados

### Home Component
- **Função**: Página principal que exibe os artigos
- **Implementação**:
  ```typescript
  export class HomeComponent implements OnInit {
    articles = dataFake;
    mainArticle = this.articles[0];
    otherArticles = this.articles.slice(1, 4);
  }
  ```
- **Responsabilidades**:
  - Gerencia os dados dos artigos
  - Separa artigo principal dos secundários
  - Organiza o layout da página inicial

### Big Card Component
- **Função**: Exibe o artigo principal em destaque
- **Características**:
  - Recebe dados via @Input()
  - Exibe imagem, título e descrição
  - Estilo diferenciado para destaque

### Small Card Component
- **Função**: Exibe artigos secundários
- **Características**:
  - Formato mais compacto
  - Recebe dados via @Input()
  - Usado em lista com *ngFor

## Boas Práticas Implementadas

1. **Componentização**: Separação clara de responsabilidades
2. **Reutilização**: Componentes genéricos e reutilizáveis
3. **Organização**: Estrutura de pastas clara e organizada
4. **Tipagem**: Uso do TypeScript para maior segurança
5. **Responsividade**: Consideração de diferentes tamanhos de tela

## Como o Projeto Funciona

1. O `dataFake.ts` simula uma API fornecendo dados dos artigos
2. `HomeComponent` gerencia esses dados e os distribui
3. `big-card` e `small-card` recebem e exibem os dados
4. O sistema de rotas permite navegar entre artigos
5. Cada componente mantém seu próprio estilo e lógica

Este projeto serve como um excelente exemplo de como construir aplicações Angular organizadas e escaláveis, utilizando os principais conceitos do framework.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
