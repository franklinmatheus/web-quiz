import VotingForm from "./VotingForm"

export default {
    title: 'Voting/VotingForm',
    component: VotingForm,
}

const Template = args => <VotingForm {...args} />

export const Blank = Template.bind({})
Blank.args = {
    voting:{title:'',state:'open',votes:[]},
    onUpdate: (event) => {console.log(event)},
    onCancel: (event) => {console.log(event)}
}

export const Filled = Template.bind({})
Filled.args = {
    voting:
        { title:'Segunda votação?',
            state:'open',
            votes: [
            {'option':'Sim','count':10},
            {'option':'Não','count':2},
            {'option':'Talvez','count':2}
            ] 
        },
    onUpdate: (event) => {console.log(event)},
    onCancel: (event) => {console.log(event)}
}