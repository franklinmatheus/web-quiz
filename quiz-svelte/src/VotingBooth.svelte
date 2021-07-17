<script>
    import { createEventDispatcher } from 'svelte'

    export let votes 
    const dispatcher = createEventDispatcher()
</script>

<main>
    <div>
        {#each votes as item, index (item)}
            <button on:click={dispatcher('vote', index)}>
                { item.option }
            </button>
        {/each}
    </div>
</main>