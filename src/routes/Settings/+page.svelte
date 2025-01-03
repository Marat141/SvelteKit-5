<script>
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";

    let menuItems = [
        { title: 'Účet', active: true },
        { title: 'Osobní údaje', active: false },
        { title: 'Oznámení', active: false },
        { title: 'Ochrana soukromí', active: false },
        { title: 'Jazyk', active: false },
        { title: 'Rozšířená nastavení', active: false }
    ];

    function selectItem(index) {
        if (index >= 0 && index < menuItems.length) {
            menuItems = menuItems.map((item, i) => ({
                ...item,
                active: i === Number(index)
            }));
        } else {
            console.error("Invalid index for menuItems:", index);
        }
    }
</script>

<Header />

<main>
    <div class="settings">
        <nav class="settings-menu">
            <!-- PC Menu -->
            <div class="pc-menu">
                {#each menuItems as item, index}
                    <button
                        class="settings-menu__item"
                        class:settings-menu__item--active={item?.active || false}
                        on:click={() => selectItem(index)}
                    >
                        {item?.title || "Unknown"}
                    </button>
                {/each}
            </div>

            <!-- Mobile Dropdown -->
            <select class="dropdown-menu" on:change={(e) => selectItem(e.target.value)}>
                {#each menuItems as item, index}
                    <option value={index} selected={item?.active || false}>
                        {item?.title || "Unknown"}
                    </option>
                {/each}
            </select>
        </nav>

        <section class="settings-content">
            {#if menuItems?.[0]?.active}
                <h2>Účet</h2>
                <p>Jste přihlášeni jako: <strong>email@example.com</strong></p>
                <hr />
                <h3>Váš profil</h3>
                <p>Můžete vylepšit svůj profil, přidávat profilové obrázky a další informace.</p>
                <p><strong>Profilový obrázek:</strong> <em>Obrázek</em></p>
            {/if}

            {#if menuItems?.[1]?.active}
                <h2>Osobní údaje</h2>
                <ul>
                    <li>Jméno: <strong>Jan Novák</strong></li>
                    <li>Email: <strong>email@example.com</strong></li>
                    <li>Telefon: <strong>+420 123 456 789</strong></li>
                </ul>
                <p><button>Editovat údaje</button></p>
            {/if}

            {#if menuItems?.[2]?.active}
                <h2>Oznámení</h2>
                <p>Nastavte, která oznámení chcete dostávat.</p>
            {/if}

            {#if menuItems?.[3]?.active}
                <h2>Ochrana soukromí</h2>
                <p>Nastavení ochrany vašeho soukromí.</p>
            {/if}

            {#if menuItems?.[4]?.active}
                <h2>Jazyk</h2>
                <p>Nastavte preferovaný jazyk rozhraní.</p>
            {/if}

            {#if menuItems?.[5]?.active}
                <h2>Rozšířená nastavení</h2>
                <p>Další pokročilá nastavení účtu.</p>
            {/if}
        </section>
    </div>
</main>

<Footer />

<style lang="scss">
    main {
        min-height: 100vh;
        padding: 2rem 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(135deg, #000000, #800080);
        font-family: 'Arial', sans-serif;
    }

    .settings {
        display: flex;
        gap: 2rem;
        background: rgba(255, 255, 255, 0.9);
        border-radius: 12px;
        box-shadow: 0px 8px 30px rgba(128, 0, 128, 0.7);
        width: 90%;
        max-width: 900px;
        padding: 2rem;
    }

    .pc-menu {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .settings-menu__item {
        all: unset;
        padding: 0.8rem 1rem;
        font-size: 1rem;
        font-weight: bold;
        text-align: left;
        color: #000;
        background: #f0f0f0;
        border: 2px solid transparent;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
            background: #800080;
            color: #fff;
        }
    }

    .settings-menu__item--active {
        background: #800080;
        color: #fff;
        border: 2px solid #b800ff;
    }

    .dropdown-menu {
        display: none; /* Skryté na PC */
    }

    .settings-content {
        flex: 1;
        background: #ffffff;
        border-radius: 12px;
        padding: 2rem;
        box-shadow: 0px 8px 30px rgba(128, 0, 128, 0.5);
    }

    h2 {
        font-size: 1.8rem;
        color: #800080;
        margin-bottom: 1rem;
    }

    /* Responsivní styly */
    @media (max-width: 768px) {
        .settings {
            flex-direction: column;
            gap: 1rem;
        }

        .pc-menu {
            display: none; /* Skryté na mobilních zařízeních */
        }

        .dropdown-menu {
            display: block; /* Viditelné pouze na mobilu */
            width: 100%;
            padding: 0.8rem;
            font-size: 1rem;
            border: 2px solid #800080;
            border-radius: 8px;
            background: #f0f0f0;
            color: #000;
            cursor: pointer;
            transition: all 0.3s ease;

            &:focus {
                border-color: #b800ff;
                box-shadow: 0px 0px 10px #b800ff;
            }
        }
    }
</style>
