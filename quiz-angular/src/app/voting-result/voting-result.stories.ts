import { CommonModule } from '@angular/common'
import { moduleMetadata } from '@storybook/angular'
import { Story, Meta } from '@storybook/angular/types-6-0'
import { VotingResultComponent } from "./voting-result.component"

export default {
    title: 'Voting/VotingResult',
    component: VotingResultComponent,
    decorators: [
        moduleMetadata({
            declarations: [VotingResultComponent],
            imports: [CommonModule]
        })
    ]
} as Meta

const Template: Story<VotingResultComponent> = (args: VotingResultComponent) => ({
    component: VotingResultComponent,
    props: args,
})

export const YesNo = Template.bind({})
YesNo.args = {
    votes: [{'option':'Sim','count':10},{'option':'Não','count':2}]
}