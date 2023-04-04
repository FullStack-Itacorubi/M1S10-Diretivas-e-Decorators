import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-aula01',
  templateUrl: './aula01.component.html',
  styleUrls: ['./aula01.component.css'],
})
export class Aula01Component implements OnInit {
  //ViewChild e ViewChildren
  @ViewChild('button') tagButton: any;
  @ViewChildren('labels') tagLabels: any;

  //Pipe
  data = '2000/11/19 12:00'; //Formato de data em padrão americano

  constructor() {}

  ngOnInit() {
    console.log(this.tagButton); //undefined - pois o html ainda não foi renderizado
    console.log(this.tagLabels); //undefined - pois o html ainda não foi renderizado
  }

  //Ao usar o viewChild ou viewChildren chame qualquer alteração nesse método
  ngAfterViewInit() {
    //Por ser um ViewChild ele irá capturar a primeira tag com o identificador #button
    console.log('ngAfterViewInit: ', this.tagButton); 

    console.log('ngAfterViewInit: ', this.tagLabels);
    this.tagLabels._results.forEach((element: any) => {
      console.log(element); //Para visualizar tag por tag
    });
  }
}
