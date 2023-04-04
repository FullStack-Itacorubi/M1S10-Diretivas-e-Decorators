import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Aula01Component } from './aula01/aula01.component';
import { Aula02Component } from './aula02/aula02.component';
import { Aula03Component } from './aula03/aula03.component';
import { Aula04Component } from './aula04/aula04.component';

const routes: Routes = [
  { path: 'aula01', component: Aula01Component },
  { path: 'aula02', component: Aula02Component },
  { path: 'aula03', component: Aula03Component },
  { path: 'aula04', component: Aula04Component },
  { path: '**', redirectTo: 'aula01' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
