import VotingCard from "./VotingCard.vue";
import '../App.css'

export default {
    title: 'Voting/VotingCard',
    component: VotingCard,
    argTypes: {
        state: {
            options: ['open', 'closed'],
            control: {type:'radio'}
        }
    }
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { VotingCard },
    template: '<VotingCard v-bind="$props" />'
})


export const PinkFloyd = Template.bind({})
PinkFloyd.args = {
    title: 'Pink Floyd é a melhor banda de Rock britânica?',
    state: 'open',
    votes: [{option:"Sim",count:10},{option:"Não",count:2}]
}