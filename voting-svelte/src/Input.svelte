<script>
    export let value = ''
    export let label = ''
    export let placeholder = ''
    export let isRequired = false
    export let error = ''
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
                on:input
                on:blur
            />
            <div class="error">{{ error }}</div>
        </div>
    </div>
</main>