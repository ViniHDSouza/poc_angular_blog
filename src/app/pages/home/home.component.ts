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
