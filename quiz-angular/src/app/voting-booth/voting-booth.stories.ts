import { Story, Meta } from '@storybook/angular/types-6-0'
import { VotingBoothComponent } from './voting-booth.component'

export default {
    title: 'Voting/VotingBooth',
    component: VotingBoothComponent,
} as Meta

const Template: Story<VotingBoothComponent> = (args: VotingBoothComponent) => ({
    component: VotingBoothComponent,
    props: args,
})

export const YesNo = Template.bind({})
YesNo.args = {
    options: [{'option':'Sim','count':10},{'option':'Não','count':2}]
}