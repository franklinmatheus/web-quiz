import { Component, Input } from '@angular/core';

@Component({
  selector: 'voting-card',
  templateUrl: './voting-card.component.html'
})

export class VotingCardComponent {
  @Input() title: string
  @Input() state: string
  @Input() votes: {}[]
  constructor() { }

  vote(voteIndex: number) {
    this.votes[voteIndex]['count'] = this.votes[voteIndex]['count'] + 1
    this.state = 'closed'
  }
}
