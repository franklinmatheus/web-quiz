<script>
	import VotingCard from './VotingCard.svelte'

	let title = 'Pink Floyd é a melhor banda de Rock britânica?'
    let votes = [{ option: 'Sim', count: 10 },{ option: 'Não', count: 2 }]
	let state = 'open'
</script>

<main>
	<div>
		<VotingCard title={ title } votes={ votes } state={ state } />
	</div>
</main>

<style>

</style>