import { Injectable } from '@angular/core'

@Injectable({providedIn:'root'})
export class VotingsService {
  
    votings = 
    [
        { 
            title:'Pink Floyd é a melhor banda de Rock britânica?',
            state:'open',
            votes: [
                {'option':'Sim','count':10},
                {'option':'Não','count':2}
            ] 
        },
        { 
            title:'Segunda votação?',
            state:'open',
            votes: [
                {'option':'Sim','count':10},
                {'option':'Não','count':2},
                {'option':'Talvez','count':2}
            ] 
        },
    ]

    createVoting() {
        this.votings = [...this.votings, {title:'',state:'open',votes:[]}]
    }

    updateVoting(voting, index) {
        this.votings = [
        ...this.votings.slice(0, index),
        voting,
        ...this.votings.slice(index + 1)
        ]
    }

    deleteVoting(index) {
        this.votings = [...this.votings.slice(0, index),...this.votings.slice(index + 1)]
    }
}
