import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import * as yup from 'yup'

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
    errors

    schema = yup.object().shape({
        title: yup.string()
            .test('len', 'Título deve ter pelo menos 5 caracteres', val => val.length >= 5)
            .required("Título é obrigatório"),
        option1: yup.string()
            .test('len', 'Opção 1 deve ter pelo menos 2 caracteres', val => val.length >= 2)
            .required("Opção 1 é obrigatória"),
        option2: yup.string()
            .test('len', 'Opção 2 deve ter pelo menos 2 caracteres', val => val.length >= 2)
            .required("Opção 2 é obrigatória"),
        option3: yup.string()
            .test('len', 'Opção 3 deve ter pelo menos 2 caracteres', val => val.length == 0 || val.length >= 2),
        option4: yup.string()
            .test('len', 'Opção 4 deve ter pelo menos 2 caracteres', val => val.length == 0 || val.length >= 2)
    })

    extractErrors ({inner}) {
        return inner.reduce((acc, err) => {
            return { ...acc, [err.path]: err.message }
        }, {})
    }

    validate() {
        this.schema
            .validate(this.data, { abortEarly: false })
            .then(() => this.errors = {})
            .catch(err => this.errors = this.extractErrors(err))
    }
    
    ngOnInit() {
        this.data = {}
        this.errors = {}
        this.data.title = this.voting.title || ''
        const options = ['','','','']
        this.voting.votes.forEach((value,index) => options[index] = value['option'])
        this.data.option1 = options[0]
        this.data.option2 = options[1]
        this.data.option3 = options[2]
        this.data.option4 = options[3]
    }

    onSubmit() {
        this.schema
            .validate(this.data, { abortEarly: false })
            .then(() => {
                let tempVotes = [
                    this.data.option1,
                    this.data.option2,
                    this.data.option3,
                    this.data.option4
                ].map(
                    (option) => { 
                        return {option:option,count:0}
                    }).filter(
                        (item) => item.option.trim() !== ''
                    )
            
                this.updated.emit(
                    {
                        title:this.data.title,
                        state:this.voting.state,
                        votes:tempVotes
                    }
                )
            }).catch(err => {
                this.errors = this.extractErrors(err)
            })
    }
}