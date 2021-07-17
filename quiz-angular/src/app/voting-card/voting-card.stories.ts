

import { CommonModule } from '@angular/common'
import { moduleMetadata } from '@storybook/angular'
import { Story, Meta } from '@storybook/angular/types-6-0'
import { VotingBoothComponent } from '../voting-booth/voting-booth.component'
import { VotingResultComponent } from '../voting-result/voting-result.component'
import { VotingCardComponent } from './voting-card.component'

export default {
    title: 'Voting/VotingCard',
    component: VotingCardComponent,
    decorators: [
        moduleMetadata({
            declarations: [VotingCardComponent, VotingBoothComponent, VotingResultComponent],
            imports: [CommonModule]
        })
    ],
    argTypes: {
        state: {
            options: ['open', 'closed'],
            control: {type:'radio'}
        }
    }
} as Meta

const Template: Story<VotingCardComponent> = (args: VotingCardComponent) => ({
    component: VotingCardComponent,
    props: args,
  })
export const PinkFloyd = Template.bind({})
PinkFloyd.args = {
    title: 'Pink Floyd é a melhor banda de Rock britânica?',
    state: 'open',
    votes: [{'option':'Sim','count':10},{'option':'Não','count':2}]
}