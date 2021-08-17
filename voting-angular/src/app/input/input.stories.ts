import { FormsModule } from '@angular/forms'
import { moduleMetadata } from '@storybook/angular'
import { Story, Meta } from '@storybook/angular/types-6-0'
import { InputComponent } from './input.component'


export default {
    title: 'Voting/Input',
    component: InputComponent,
    decorators: [
        moduleMetadata({
            imports: [
                FormsModule
            ]
        })
    ]
} as Meta

const Template: Story<InputComponent> = (args: InputComponent) => ({
    component: InputComponent,
    props: args,
})

export const Title = Template.bind({})
Title.args = {
    label:'Título',
    name:'title',
    placeholder:'Insira o título',
    isRequired:true,
    minlength:5
}