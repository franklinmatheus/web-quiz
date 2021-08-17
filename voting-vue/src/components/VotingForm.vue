<template>
    <form @submit.prevent="onSubmit">
        <Input
          label="Título"
          v-model="data.title"
          placeholder="Insira o título"
          isRequired="true"
          :error="errors['title']"
          @input="touched['title'] = true"
          @validate="validate('title','Título')"
        />
        
        <Input
          label="Opção 1"
          v-model="data.options[0]"
          placeholder="Insira a opção 1"
          isRequired="true"
          :error="errors['option1']"
          @input="touched['option1'] = true"
          @validate="validate('option1','Opção 1')"
        />

        <Input
          label="Opção 2"
          v-model="data.options[1]"
          placeholder="Insira a opção 2"
          isRequired="true"
          :error="errors['option2']"
          @input="touched['option2'] = true"
          @validate="validate('option2','Opção 2')"
        />

        <Input
          label="Opção 3"
          v-model="data.options[2]"
          placeholder="Insira a opção 3"
          :error="errors['option3']"
          @input="touched['option3'] = true"
          @validate="validate('option3','Opção 3')"
        />

        <Input
          label="Opção 4"
          v-model="data.options[3]"
          placeholder="Insira a opção 4"
          :error="errors['option4']"
          @input="touched['option4'] = true"
          @validate="validate('option4','Opção 4')"
        />
        
        <button type="submit">Enviar</button>
        <button @click="$emit('canceled')" type="button">Cancelar</button>
    </form>
</template>

<script>

import { reactive } from 'vue'

import Input from './Input.vue'
import { minLength, required } from '../form/validation'

export default {
  components: { 
    Input 
  },
  props: ['voting'],
  setup: (props) => {
    const data = {title: props.voting.title || '',options:['','','','']}
    props.voting.votes.forEach((element,index) => {
      data.options[index] = element.option
    })
    
    const errors = reactive({})
    const touched = reactive({})
    
    function onSubmit() {
      const labels = {
       'title':'Título',
       'option1':'Opção 1',
       'option2':'Opção 2',
       'option3':'Opção 3',
       'option4':'Opção 4'
      };

      ['title','option1','option2','option3','option4'].filter(input => {
        this.touched[input] = true
        this.validate(input,labels[input])
        return errors[input] == null ? 0 : 1
      })

      const valid = !Object.values(this.errors).some((value) => value)
      console.log(errors)
      if(valid) {
        const tempVoting = {
          title: this.data.title,
          state: props.voting.state,
          votes: this.data.options.map(
            (option) => { 
                return {option:option,count:0}
            }).filter(
                (item) => item.option.trim() !== ''
            )
        }
        this.$emit('updated',tempVoting)
      } 
    }

    function validate(name,label) {
      if (name == 'title') {
        const error = required(label,this.data.title) || 
                      minLength(label,5,this.data.title)
        errors[name] = this.touched[name] ? error : null
      } else {
        const tempMap = {
          'option1':this.data.options[0],
          'option2':this.data.options[1],
          'option3':this.data.options[2],
          'option4':this.data.options[3]
        }

        if (name == 'option1' || name == 'option2') {
          const error = required(label,tempMap[name]) 
                        || minLength(label,2,tempMap[name])
          errors[name] = this.touched[name] ? error : null
        } else {
          const error = minLength(label,2,tempMap[name])
          errors[name] = this.touched[name] ? error : null
        } 
      }
    }

    return {
      data,
      errors,
      touched,
      onSubmit,
      validate
    }
  },
}
</script>