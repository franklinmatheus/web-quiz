import VotingBooth from "./VotingBooth.vue";

export default {
    title: 'Voting/VotingBooth',
    component: VotingBooth
}

const Template = (args) => ({
    components: { VotingBooth },
    setup() {
        return { args }
    },
    template: '<VotingBooth v-bind="args" />'
})

export const YesNo = Template.bind({})
YesNo.args = {
    options: [{'option':'Sim','count':10},{'option':'Não','count':2}]
}