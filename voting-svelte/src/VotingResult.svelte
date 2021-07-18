<script>
    export let votes

    function perc(index) {
        let total = votes.reduce((sum, item) => {return sum + item.count}, 0)
        return (votes[index].count/total*100).toFixed(2)
    }
</script>

<div>
    <ol>
        {#each votes as item, index (item)}
            <li>
                {item.option}: {item.count} votes ({perc(index)}%)
            </li>
        {/each}
    </ol>
</div>