import VotingForm from "./VotingForm.vue";

export default {
    title: 'Voting/VotingForm',
    component: VotingForm
}

const Template = (args) => ({
    components: { VotingForm },
    setup() {
        return { args }
    },
    template: '<VotingForm v-bind="args" />'
})

export const Blank = Template.bind({})
Blank.args = {
    voting:{title:'',state:'open',votes:[]}
}