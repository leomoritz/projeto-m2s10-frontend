import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex1a-page',
  templateUrl: './ex1a-page.component.html',
  styleUrls: ['./ex1a-page.component.css']
})
export class Ex1aPageComponent implements OnInit {

  publicacao = {
    titulo: "Título do card",
    descricao: "Descrição do card",
    conteudo: "Utilizando o decorator de comunicação entre componentes @input iremos construir um componente de card que receberá o título, uma descrição e o conteúdo. O intuito é criar 3 atributos com o @input e passar esses dados pelo componente para uma variável e no html do componente de card distribuir essas informações."
  }

  constructor() { }

  ngOnInit(): void {
  }

}
