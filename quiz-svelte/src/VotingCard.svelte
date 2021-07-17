<script>
    import VotingResult from './VotingResult.svelte'
    import VotingBooth from './VotingBooth.svelte'
    
    export let title
    export let state
    export let votes

    function vote(voteIndex) {
        votes[voteIndex]['count'] = votes[voteIndex]['count'] + 1
        state = 'closed'
        console.log(state)
    }
</script>

<main>
    <div>
        <h3><b>{ title }</b></h3>
        {#if state === 'open'}
            <VotingBooth votes={ votes } on:vote={vote} />
        {:else if state === 'closed'}
            <VotingResult options={ votes } />
        {:else}
            <p>[wrong state] { state }</p>
        {/if}
    </div>
</main>