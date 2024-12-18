<script>
    let {href, color, children} = $props();
</script>

<a href={href} class="Link {color}">
    {@render children()}
</a>

<style lang="scss">
    .Link{
        width: 50px;
    }

    .white{
        color: white;
    }
</style>