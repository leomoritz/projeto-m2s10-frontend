import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex1b-page',
  templateUrl: './ex1b-page.component.html',
  styleUrls: ['./ex1b-page.component.css']
})
export class Ex1bPageComponent implements OnInit {

  @Input() publicacao: any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
