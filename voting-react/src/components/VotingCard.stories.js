import '../App.css'

import React from 'react'
import VotingCard from "./VotingCard";


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

const Template = args => <VotingCard {...args} />

export const PinkFloyd = Template.bind({})
PinkFloyd.args = {
    title: 'Pink Floyd é a melhor banda de Rock britânica?',
    state: 'open',
    votes: [{'option':'Sim','count':10},{'option':'Não','count':2}]
}