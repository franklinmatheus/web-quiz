import VotingResult from './VotingResult.svelte'

export default {
    title: 'Voting/VotingResult',
    component: VotingResult,
}

const Template = args => ({
    component: VotingResult,
    props: args
})

export const YesNo = Template.bind({})
YesNo.args = {
    votes: [{option:'Sim',count:10},{option:'Não',count:2}]
}