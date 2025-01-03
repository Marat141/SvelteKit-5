<script>
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";

    let menuItems = [
        { title: 'Účet', active: true },
        { title: 'Osobní údaje', active: false },
        { title: 'Oznámení', active: false },
        { title: 'Ochrana soukromí', active: false },
        { title: 'Jazyk', active: false },
        { title: 'Fakturace a platby', active: false },
        { title: 'Rozšířená nastavení', active: false }
    ];

    function selectItem(index) {
        menuItems = menuItems.map((item, i) => ({
            ...item,
            active: i === index
        }));
    }
</script>

<Header />

<main>
    <div class="settings">
        <!-- Navigace vlevo -->
        <nav class="settings-menu">
            {#each menuItems as item, index}
                <button
                    class="settings-menu__item"
                    class:settings-menu__item--active={item.active}
                    onclick={() => selectItem(index)}
                >
                    {item.title}
                </button>
            {/each}
        </nav>

        <!-- Obsah vpravo -->
        <section class="settings-content">
            {#if menuItems[0].active}
                <h2>Účet</h2>
                <p>Jste přihlášeni jako: Email jak jsem se přihlasil</p>
                <hr />
                <h3>Váš profil</h3>
                <p>Můžete vylepšit svůj profil, přidávat profilové obrázky a další informace.</p>
                <p><strong>Profilový obrázek:</strong> Obrazek</p>
            {/if}

            {#if menuItems[1].active}
                <h2>Osobní údaje</h2>
                <ul>
                    <li>Jméno: Jméno</li>
                    <li>Email: Email</li>
                    <li>Telefon: číslo</li>
                </ul>
                <p><button>Editovat údaje</button></p>
            {/if}

            {#if menuItems[2].active}
                <h2>Oznámení</h2>
                <p>Nastavte, která oznámení chcete dostávat.</p>
            {/if}

            {#if menuItems[3].active}
                <h2>Ochrana soukromí</h2>
                <p>Nastavení ochrany vašeho soukromí.</p>
            {/if}

            {#if menuItems[4].active}
                <h2>Jazyk</h2>
                <p>Nastavte preferovaný jazyk rozhraní.</p>
            {/if}

            {#if menuItems[5].active}
                <h2>Fakturace a platby</h2>
                <p>Nastavte své platební metody a fakturační údaje.</p>
            {/if}

            {#if menuItems[6].active}
                <h2>Rozšířená nastavení</h2>
                <p>Další pokročilá nastavení účtu.</p>
            {/if}
        </section>
    </div>
</main>

<Footer />

<style lang="scss">
    main {
        background-color: #121212;
        color: #fff;
        min-height: 100vh;
        padding: 2rem;
    }

    .settings {
        display: flex;
        gap: 2rem;
    }

    .settings-menu {
        flex: 0 0 200px;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .settings-menu__item {
        all: unset;
        display: block;
        padding: 1rem;
        font-size: 1rem;
        font-weight: bold;
        text-align: left;
        background-color: transparent;
        color: #fff;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 0.2s ease;

        &:hover {
            background-color: #333;
        }
    }

    .settings-menu__item--active {
        background-color: #444;
    }

    .settings-content {
        flex: 1;
        background-color: #1e1e1e;
        border-radius: 8px;
        padding: 2rem;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }

    h2 {
        margin-top: 0;
        font-size: 1.5rem;
    }

    hr {
        border: 0;
        height: 1px;
        background: #333;
        margin: 1rem 0;
    }

    button {
        background-color: #333;
        color: #fff;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
            background-color: #555;
        }
    }
</style>
