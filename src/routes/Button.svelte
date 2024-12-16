<script>
    let {
        label = 'Zmační',
        onClick,
        class: customClass = ''
    } = $props();

    function handleClick() {
        if (onClick) {
            onClick();
        }
    }
</script>

<button class={customClass} onclick={handleClick}>
    {label}
</button>

<style>
    button {
        padding: 8px 16px;
        font-size: 16px;
        cursor: pointer;
    }
</style>
