<script>
    export let options
</script>

<main>
    <div>
        <ol>
            {#each options as item, index (item)}
                <li>
                    {item.option}: {item.count} votes
                </li>
            {/each}
        </ol>
    </div>
</main>