import VotingResult from './VotingResult'

export default {
    title: 'Voting/VotingResult',
    component: VotingResult,
}

const Template = (args) => ({
    components: { VotingResult },
    setup() {
        return { args }
    },
    template: '<VotingResult v-bind="args" />'
})

export const YesNo = Template.bind({})
YesNo.args = {
    votes: [{'option':'Sim','count':10},{'option':'Não','count':2}]
}