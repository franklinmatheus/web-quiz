import { Component, Input } from '@angular/core';

@Component({
  selector: 'voting-result',
  templateUrl: './voting-result.component.html'
})

export class VotingResultComponent {
  @Input() votes: []
  constructor() { }

  perc(index: number) {
    let total = this.votes.reduce((sum, item) => {return sum + item['count']}, 0)
    return (this.votes[index]['count']/total*100).toFixed(2)       
  }
}
