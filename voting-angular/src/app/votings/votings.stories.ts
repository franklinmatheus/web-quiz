import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { moduleMetadata } from '@storybook/angular'
import { Story, Meta } from '@storybook/angular/types-6-0'
import { InputComponent } from '../input/input.component'
import { VotingBoothComponent } from '../voting-booth/voting-booth.component'
import { VotingCardComponent } from '../voting-card/voting-card.component'
import { VotingFormComponent } from '../voting-form/voting-form.component'
import { VotingResultComponent } from '../voting-result/voting-result.component'
import { VotingsComponent } from './votings.component'

export default {
    title: 'Voting/Votings',
    component: VotingsComponent,
    decorators: [
        moduleMetadata({
            declarations: [
                VotingBoothComponent,
                VotingResultComponent,
                VotingCardComponent,
                InputComponent,
                VotingFormComponent,
                VotingsComponent
              ],
            imports: [
                FormsModule,
                ReactiveFormsModule
            ]
        })
    ]
} as Meta

const Template: Story<VotingsComponent> = (args: VotingsComponent) => ({
    component: VotingsComponent,
    props: args,
})

export const Default = Template.bind({})