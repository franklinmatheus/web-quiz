import VotingBooth from "./VotingBooth";

export default {
    title: 'Voting/VotingBooth',
    component: VotingBooth,
}

const Template = args => <VotingBooth {...args} />

export const YesNo = Template.bind({})
YesNo.args = {
    options: ['Sim','Não'],
}