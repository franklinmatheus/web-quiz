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

    data

    ngOnInit() {
        this.data = {title:'',options:[]}
        this.data.title = this.voting.title || ''
        this.data.options = ['','','','']
        this.voting.votes.forEach((value,index) => this.data.options[index] = value['option'])
    }

    onSubmit() {
        let tempVotes = this.data.options.map(
            (option) => { 
                return {option:option,count:0}
            }).filter(
                (item) => item.option.trim() !== ''
            )
        
        this.voting.title = this.data.title
        this.voting.votes = tempVotes

        this.updated.emit(this.voting)
    }
}