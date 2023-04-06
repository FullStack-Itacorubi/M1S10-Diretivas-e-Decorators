import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-aula02',
  templateUrl: './aula02.component.html',
  styleUrls: ['./aula02.component.css'],
})
export class Aula02Component implements OnInit {
  showList: string = '';
  nome: string = '';
  user: any = {
    name: '',
    password: '',
  };

  alunos = ['José', 'Fabíola', 'Icaro', 'Fernanda'];
  jogos: any = [
    {
      imagem:
        'https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg?t=1675178392',
      titulo: 'The Witch 3',
      descricao: 'Jogo do bruxão',
    },
    {
      imagem:
        'https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-screen-03-ps4-us-13jun16?$1600px$',
      titulo: 'God of War',
      descricao: 'Garoto',
    },
    {
      imagem:
        'https://www.ageofempires.com/wp-content/uploads/2019/10/CraigMullins3.jpg',
      titulo: 'Age of Empires',
      descricao: 'É um jogo de estrategia',
    },
    {
      imagem: 'https://i.blogs.es/dfbccc/trucosgtavps4/1366_2000.webp',
      titulo: 'GTA V',
      descricao: 'Não batam nas idosas, mesmo elas tendo muito dinheiro',
    },
    {
      imagem:
        'https://www.ultimaficha.com.br/wp-content/uploads/2021/07/Path-of-Exile-Expedition-780x470.jpg',
      titulo: 'Path of Exile',
      descricao: 'Caminho dos exilados',
    },
    {
      imagem:
        'https://conteudo.imguol.com.br/c/colunas/4a/2022/05/24/chipdale-sonic-1653417132881_v2_900x506.jpg',
      titulo: 'Sonic',
      descricao: 'Vrummmmmmmm',
    },
    {
      imagem:
        'https://sm.ign.com/ign_br/news/t/the-super-/the-super-mario-bros-movie-poster-features-all-of-our-favori_avmn.jpg',
      titulo: 'Mario',
      descricao: 'Melhor jogo de todos os tempo. Vão ver o filme!',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  login() {
    console.log(this.user);
  }
  onSubmit(f: NgForm) {
    console.log(f.value);
  }
  detalhes(objJogo: any) {
    console.log(objJogo);
  }
}
