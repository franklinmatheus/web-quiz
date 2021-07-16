import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <voting-card 
        [title]="title" 
        [state]="state"
        [votes]="votes"
      ></voting-card>
    </div>
  `
})

export class AppComponent {
  title = 'Pink Floyd é a melhor banda de Rock britânica?'
  state = 'open'
  votes = [{'option':'Sim','count':10},{'option':'Não','count':2}]
}
