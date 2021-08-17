import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { moduleMetadata } from '@storybook/angular'
import { Story, Meta } from '@storybook/angular/types-6-0'
import { InputComponent } from '../input/input.component'
import { VotingFormComponent } from './voting-form.component'

export default {
    title: 'Voting/VotingForm',
    component: VotingFormComponent,
    decorators: [
        moduleMetadata({
            declarations: [
                InputComponent,
                VotingFormComponent
              ],
            imports: [
                FormsModule,
                ReactiveFormsModule
            ]
        })
    ]
} as Meta

const Template: Story<VotingFormComponent> = (args: VotingFormComponent) => ({
    component: VotingFormComponent,
    props: args,
})

export const Blank = Template.bind({})
Blank.args = {
    voting:{title:'',state:'open',votes:[]}
}