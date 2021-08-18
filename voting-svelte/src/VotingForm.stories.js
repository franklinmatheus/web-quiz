import VotingForm from './VotingForm.svelte'

export default {
    title: 'Voting/VotingForm',
    component: VotingForm,
}

const Template = args => ({
    component: VotingForm,
    props: args
})

export const Blank = Template.bind({})
Blank.args = {
    voting:{title:'',state:'open',votes:[]}
}