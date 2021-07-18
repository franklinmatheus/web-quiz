<script>
    import VotingResult from './VotingResult.svelte'
    import VotingBooth from './VotingBooth.svelte'
    
    export let title
    export let state
    export let votes

    function vote(event) {
        let voteIndex = event.detail.voteIndex
        votes[voteIndex].count = votes[voteIndex].count + 1
        state = 'closed'
    }
</script>

<div class="vote card" class:result="{state === 'closed'}">
    <h3><b>{ title }</b></h3>
    {#if state === 'open'}
        <VotingBooth options={ votes } on:voted={vote} />
    {:else if state === 'closed'}
        <VotingResult votes={ votes } />
    {:else}
        <p>[wrong state] { state }</p>
    {/if}
</div>