import { Component, Input } from '@angular/core'
import { VotingsService } from '../votings.service'

@Component({
    selector: 'votings',
    templateUrl: './votings.component.html'
})

export class VotingsComponent {
    state = 'listing'
    current = null

    constructor(public votingsService : VotingsService) { /* empty */ }

    newVoting() {
        this.votingsService.createVoting()
        this.current = this.votingsService.votings.length-1
        this.state = 'new'
    }

    editVoting(index) {
        this.current = index
        this.state = 'edit'
    }

    removeVoting(index) {
        this.votingsService.deleteVoting(index)
    }

    openVoting(index) {
        this.current = index
        this.state = 'open'
    }

    updateChanges(voting) {
        this.votingsService.updateVoting(voting,this.current)
        this.state = 'listing'
    }

    cancelChanges() {
        if (this.state === 'new') this.votingsService.deleteVoting(this.votingsService.votings.length-1)
        this.state = 'listing'
    }

    goBack() {
        this.state = 'listing'
    }
}