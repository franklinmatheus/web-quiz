import Input from "./Input.vue";

export default {
    title: 'Voting/Input',
    component: Input,
    argTypes: {
        isRequired: {
            options: ['true', ''],
            control: {type:'radio'}
        }
    }
}

const Template = (args) => ({
    components: { Input },
    setup() {
        return { args }
    },
    template: '<Input v-bind="args" />'
})

export const Title = Template.bind({})
Title.args = {
    label:'Título',
    name:'title',
    placeholder:'Insira o título',
    isRequired:true,
    touched:{},
    error:''
}