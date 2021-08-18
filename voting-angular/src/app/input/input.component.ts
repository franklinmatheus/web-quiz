import { Component, EventEmitter, Input, Output } from '@angular/core'
import { NgModel } from '@angular/forms'

@Component({
    selector: 'custom-input',
    templateUrl: './input.component.html'
})

export class InputComponent {
    @Input() label: string
    @Input() name: string
    @Input() value: string
    @Input() placeholder: string
    @Input() isRequired: boolean
    @Input() minlength?: number
    @Input() error: string

    @Output() valueChange = new EventEmitter<string>()

    errors(elm: NgModel) {
        if (elm.invalid && elm.touched) {
            if (elm.errors.required) return 'Campo obrigatório'
            if (elm.errors.minlength)
                return this.label + ' deve ter pelo menos ' + this.minlength + ' caracteres'
        }
    }

    temp(value) {
        console.log(value) 
        console.log(this.value)
    }
}