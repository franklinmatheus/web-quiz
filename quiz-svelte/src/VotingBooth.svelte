<script>
    import { createEventDispatcher } from 'svelte'

    export let votes 
    const dispatcher = createEventDispatcher()
</script>

<div>
    {#each votes as item, index (item)}
        <button on:click={dispatcher('voted', {voteIndex: index} )}>
            { item.option }
        </button>
    {/each}
</div>