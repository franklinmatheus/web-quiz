import Votings from './Votings.svelte'

export default {
    title: 'Voting/Votings',
    component: Votings,
}

const Template = args => ({
    component: Votings,
    props: args
})

export const Default = Template.bind({})