import Votings from "./Votings.vue";

export default {
    title: 'Voting/Votings',
    component: Votings
}

const Template = (args) => ({
    components: { Votings },
    setup() {
        return { args }
    },
    template: '<Votings v-bind="args" />'
})

export const YesNo = Template.bind({})