<script>
    export let votes
</script>

<div>
    <ol>
        {#each votes as item, index (item)}
            <li>
                {item.option}: {item.count} votes
            </li>
        {/each}
    </ol>
</div>