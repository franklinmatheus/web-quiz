import Votings from "./Votings";

export default {
    title: 'Voting/Votings',
    component: Votings,
}

const Template = args => <Votings {...args} />

export const Default = Template.bind({})