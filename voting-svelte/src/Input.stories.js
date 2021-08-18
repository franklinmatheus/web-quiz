import Input from './Input.svelte'

export default {
    title: 'Voting/Input',
    component: Input,
}

const Template = args => ({
    component: Input,
    props: args
})

export const Title = Template.bind({})
Title.args = {
    label:'Título',
    name:'title',
    placeholder:'Insira o título',
    isRequired:true
}