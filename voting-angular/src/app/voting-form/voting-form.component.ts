import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

interface VotingType {
    title: string
    state: boolean
    votes: []
  }

@Component({
    selector: 'voting-form',
    templateUrl: './voting-form.component.html'
})

export class VotingFormComponent implements OnInit {
    @Input() voting: VotingType
    
    @Output() canceled = new EventEmitter()
    @Output() updated = new EventEmitter()

    title
    options

    ngOnInit() {
        this.title = this.voting.title || ''
        this.options = ['','','','']
        this.voting.votes.forEach((value,index) => this.options[index] = value['option'])
    }

    onSubmit() {
        console.log(this.options)
        
        let tempVotes = this.options.map(
            (option) => { 
                return {option:option,count:0}
            }).filter(
                (item) => item.option.trim() !== ''
            )
        
        this.voting.title = this.title
        this.voting.votes = tempVotes

        this.updated.emit(this.voting)
    }
}