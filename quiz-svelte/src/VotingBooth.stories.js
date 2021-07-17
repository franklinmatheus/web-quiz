import VotingBooth from './VotingBooth.svelte'

export default {
    title: 'Voting/VotingBooth',
    component: VotingBooth,
}

const Template = args => ({
    component: VotingBooth,
    props: args
})

export const YesNo = Template.bind({})
YesNo.args = {
    options: [{option:'Sim',count:10},{option:'Não',count:2}]
}