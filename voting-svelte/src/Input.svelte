<script>
    import { createEventDispatcher } from 'svelte'

    export let value = ''
    export let label = ''
    export let placeholder = ''
    export let isRequired = false
    export let error = ''

    const dispatcher = createEventDispatcher()
</script>

<main>
    <div class="form-item">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="label">
            { label }{#if isRequired}<span style="color: red">*</span>{/if}
        </label>
        <div>
            <input
                type="text"
                placeholder={placeholder}
                bind:value={value}
                on:input={event => dispatcher('validate')}
                on:blur={event => dispatcher('validate')}
                on:change={event => dispatcher('validate')}
            />
            {#if error}
                <div class="error">{ error }</div>
            {/if}
        </div>
    </div>
</main>