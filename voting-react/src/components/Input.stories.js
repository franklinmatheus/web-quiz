import Input from "./Input";

export default {
    title: 'Voting/Input',
    component: Input,
}

const Template = args => <Input {...args} />

export const Title = Template.bind({})
Title.args = {
    name:'title',
    label:'Título',
    placeholder:'Insira o título',
    isRequired:true,
    errors:{},
    touched:{},
    onChange: (event) => console.log(event),
    onBlur: (event) => console.log(event),
}