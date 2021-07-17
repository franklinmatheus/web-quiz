import VotingBooth from "./VotingBooth.vue";

export default {
    title: 'Voting/VotingBooth',
    component: VotingBooth
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { VotingBooth },
    template: '<VotingBooth v-bind="$props" />'
})

export const YesNo = Template.bind({})
YesNo.args = {
    options: [{'option':'Sim','count':10},{'option':'Não','count':2}]
}