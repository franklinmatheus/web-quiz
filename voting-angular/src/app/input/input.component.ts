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

    @Output() changed = new EventEmitter<string>()

    error(elm: NgModel) {
        if (elm.invalid && elm.touched) {
            if (elm.errors.required) return 'Campo obrigatório'
            if (elm.errors.minlength)
                return this.label + ' deve ter pelo menos ' + this.minlength + ' caracteres'
        }
    }
}