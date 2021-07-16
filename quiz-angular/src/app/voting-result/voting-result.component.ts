import { Component, Input } from '@angular/core';

@Component({
  selector: 'voting-result',
  templateUrl: './voting-result.component.html'
})

export class VotingResultComponent {
  @Input() votes: []
  constructor() { }
}
