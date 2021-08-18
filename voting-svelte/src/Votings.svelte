<script>
    import VotingCard from './VotingCard.svelte'
    import VotingForm from './VotingForm.svelte'
    import { createVotings } from './store/votings.js'

    let state = 'listing'
    let current = null

    let votings = createVotings()
    
    function newVoting() {
        votings.createVoting()
        current = $votings.length-1
        state = 'new'
    }

    function editVoting(index) {
        current = index
        state = 'edit'
    }

    function removeVoting(index) {
        votings.deleteVoting(index)
    }

    function openVoting(index) {
        current = index
        state = 'open'
    }

    function updateChanges(voting) {
        votings.updateVoting(voting.detail,current)
        state = 'listing'
    }

    function cancelChanges() {
        if (state === 'new') votings.deleteVoting($votings.length-1)
        state = 'listing'
    }

    function goBack() {
        state = 'listing'
    }
</script>

<main>
    {#if state === 'open'}
        <div>
            <VotingCard title={$votings[current].title} 
                state={$votings[current].state} 
                votes={$votings[current].votes} 
            />
            <button on:click={goBack}>Voltar</button>
        </div>
    {:else if state === 'new' || state === 'edit'}
        <div>
            <h1>Formulário de votação</h1>
            <VotingForm 
                voting={$votings[current]}
                on:canceled={cancelChanges}
                on:updated={updateChanges}
            />
        </div>
    {:else if state === 'listing'}
        <div>
            <h1>Votações</h1>
            <p><button on:click={newVoting}>Nova votação</button></p>
            {#each $votings as voting,index}
                <p class="vote">
                { voting.title }
                {#each voting.votes as option}
                    <span class="option">
                        { option.option } ({ option.count })
                    </span>
                {/each}
            
                <br/>
                <button class="listing" on:click={event => editVoting(index)}>Editar</button>
                <button class="listing" on:click={event => removeVoting(index)}>Remover</button>
                <button class="listing" on:click={event => openVoting(index)}>Abrir</button>
                </p>
            {/each}
        </div>
    {/if}
</main>