<script>
    import { createEventDispatcher } from 'svelte'

    export let options 
    const dispatcher = createEventDispatcher()
</script>

<div>
    {#each options as item, index (item)}
        <button on:click={dispatcher('voted', {voteIndex: index} )}>
            { item.option }
        </button>
    {/each}
</div>