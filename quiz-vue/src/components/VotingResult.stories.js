import VotingResult from './VotingResult'

export default {
    title: 'Voting/VotingResult',
    component: VotingResult,
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { VotingResult },
    template: '<VotingResult v-bind="$props" />'
})

export const YesNo = Template.bind({})
YesNo.args = {
    votes: [{'option':'Sim','count':10},{'option':'Não','count':2}]
}