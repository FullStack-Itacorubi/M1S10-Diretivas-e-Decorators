import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aula03',
  templateUrl: './aula03.component.html',
  styleUrls: ['./aula03.component.css'],
})
export class Aula03Component implements OnInit {
  condicao: string = 'danger'; // Tente alterar este valor para warning e vejá o badge mudar sua cor
  clicou: boolean = false;
  selected: boolean = false;

  ativo: boolean = true;
  tamanho: number = 22;
  cor: string = 'blue';

  valor: string = '';

  constructor() {}

  ngOnInit(): void {}
}
