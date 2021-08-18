<script>
    import { createEventDispatcher } from 'svelte'
    import * as yup from 'yup'

    import Input from './Input.svelte'

    export let voting
    const dispatcher = createEventDispatcher()
    
    let data = {
            title: voting.title || '',
            option1: 
                voting.votes.length > 0 ? voting.votes[0]['option'] : '',
            option2: 
                voting.votes.length > 1 ? voting.votes[1]['option'] : '',
            option3: 
                voting.votes.length > 2 ? voting.votes[2]['option'] : '',
            option4: 
                voting.votes.length > 3 ? voting.votes[3]['option'] : '',
        }
    let errors = {}

    const schema = yup.object().shape({
            title: yup.string()
                .test('len', 'Título deve ter pelo menos 5 caracteres', val => val.length >= 5)
                .required("Título é obrigatório"),
            option1: yup.string()
                .test('len', 'Opção 1 deve ter pelo menos 2 caracteres', val => val.length >= 2)
                .required("Opção 1 é obrigatória"),
            option2: yup.string()
                .test('len', 'Opção 2 deve ter pelo menos 2 caracteres', val => val.length >= 2)
                .required("Opção 2 é obrigatória"),
            option3: yup.string()
                .test('len', 'Opção 3 deve ter pelo menos 2 caracteres', val => val.length == 0 || val.length >= 2),
            option4: yup.string()
                .test('len', 'Opção 4 deve ter pelo menos 2 caracteres', val => val.length == 0 || val.length >= 2)
        })

    function extractErrors ({inner}) {
        return inner.reduce((acc, err) => {
            return { ...acc, [err.path]: err.message }
        }, {})
    }

    function validate(err) {
        schema
            .validate(data, { abortEarly: false })
            .then(() => errors = {})
            .catch(err => errors = extractErrors(err))
    }

    function onSubmit() {
        schema
            .validate(data, { abortEarly: false })
            .then(() => {
                dispatcher('updated', {
                title: data.title,
                state: voting.state,
                votes: [data.option1,data.option2,data.option3,data.option4]
                            .map(element => { return {option:element,count:0}})
                            .filter(element => element.option.trim() !== '')
        })
            })
            .catch(err => {
                errors = extractErrors(err)
            })
    }

</script>

<main>
    <form on:submit|preventDefault={onSubmit}>
        <Input label="Título"
            placeholder="Insira o título"
            isRequired="true"
            bind:error={errors.title}
            bind:value={data.title}
            on:validate={validate}
        />
        <Input label="Opção 1"
            placeholder="Insira a opção 1"
            isRequired="true"
            bind:error={errors.option1}
            bind:value={data.option1}
            on:validate={validate}
        />
        <Input label="Opção 2"
            placeholder="Insira a opção 2"
            isRequired="true"
            bind:error={errors.option2}
            bind:value={data.option2}
            on:validate={validate}
        />
        <Input label="Opção 3"
            placeholder="Insira a opção 3"
            bind:error={errors.option3}
            bind:value={data.option3}
            on:validate={validate}
        />
        <Input label="Opção 4"
            placeholder="Insira a opção 4"
            bind:error={errors.option4}
            bind:value={data.option4}
            on:validate={validate}
        />

        <button type="submit">Enviar</button>
        <button on:click={event => dispatcher('canceled')} type="button">Cancelar</button>
    </form>
</main>