<script>
    import { createEventDispatcher } from 'svelte'
    import * as yup from 'yup'
    import { createForm } from 'svelte-forms-lib'

    import Input from './Input.svelte'

    export let voting
    const dispatcher = createEventDispatcher()
    
    const {form,state,errors,handleSubmit} = createForm({
        initialValues: {
            title: voting.title || '',
            option1: 
                voting.votes.length > 0 ? voting.votes[0]['option'] : '',
            option2: 
                voting.votes.length > 1 ? voting.votes[1]['option'] : '',
            option3: 
                voting.votes.length > 2 ? voting.votes[2]['option'] : '',
            option4: 
                voting.votes.length > 3 ? voting.votes[3]['option'] : '',
        },
        validationSchema: yup.object().shape({
            title: yup.string().required("Título é obrigatório")
                .test('len', 'Título deve ter pelo menos 5 caracteres', val => val.length > 5),
            option1: yup.string().required("Opção 1 é obrigatória")
                .test('len', 'Opção 1 deve ter pelo menos 2 caracteres', val => val.length > 2),
            option2: yup.string().required("Opção 2 é obrigatória")
                .test('len', 'Opção 2 deve ter pelo menos 2 caracteres', val => val.length > 2),
            option3: yup.string()
                .test('len', 'Opção 3 deve ter pelo menos 2 caracteres', val => val.length > 2),
            option4: yup.string()
                .test('len', 'Opção 4 deve ter pelo menos 2 caracteres', val => val.length > 2)
        }),
        onSubmit: values => {
            console.log(values)
        }
    })

    function onSubmit() {
        dispatcher('updated', {
                title: $form.title,
                state: voting.state,
                votes: [$form.option1,$form.option2,$form.option3,$form.option4]
                            .map(element => { return {option:element,count:0}})
                            .filter(element => element.option.trim() !== '')
        })
    }

</script>

<main>
    <form on:submit|preventDefault={onSubmit}>
        <Input label="Título"
            placeholder="Insira o título"
            isRequired="true"
            bind:error={$errors.title}
            bind:value={$form.title}
        />
        <Input label="Opção 1"
            placeholder="Insira a opção 1"
            isRequired="true"
            bind:error={$errors.option1}
            bind:value={$form.option1}
        />
        <Input label="Opção 2"
            placeholder="Insira a opção 2"
            isRequired="true"
            bind:error={$errors.option2}
            bind:value={$form.option2}
        />
        <Input label="Opção 3"
            placeholder="Insira a opção 3"
            bind:error={$errors.option3}
            bind:value={$form.option3}
        />
        <Input label="Opção 4"
            placeholder="Insira a opção 4"
            bind:error={$errors.option4}
            bind:value={$form.option4}
        />

        <button type="submit">Enviar</button>
        <button on:click={event => dispatcher('canceled')} type="button">Cancelar</button>
    </form>
</main>