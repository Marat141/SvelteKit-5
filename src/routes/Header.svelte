<script>
    import { Hamburger } from 'svelte-hamburgers';

    const menu_list = [
        { name: "Domov", url: "./" },
        { name: "Login", url: "/Login" },
        { name: "Register", url: "/Register" },
    ];

    let {
        title = 'Davinci Web',
        subtitle = '',
        className = ''
    } = $props();

    let menuOpen = $state(false);

    const toggleMenu = () => {
        menuOpen = !menuOpen;
    };
</script>

<header class={className}>
    <div class="header-content">
        <a href="/"><h1>{title}</h1></a>
        {#if subtitle}
            <h2>{subtitle}</h2>
        {/if}

        <!-- Desktop Navigation Links -->
        <div class="links desktop-links">
            {#each menu_list as menu}
                <a href={menu.url}>{menu.name}</a>
            {/each}
        </div>

        <!-- Hamburger for mobile -->
        <div class="hamburger-container">
            <Hamburger 
                toggled={menuOpen} 
                toggle={toggleMenu} 
                color="#000" 
                size={30} 
            />
        </div>

        <!-- Mobile Navigation Links with Slide Effect -->
        <div class="links mobile-links {menuOpen ? 'open' : ''}">
            {#each menu_list as menu}
                <a href={menu.url}>{menu.name}</a>
            {/each}
        </div>
    </div>
</header>

<style lang="scss">
header {
    padding: 20px 0;
    background-color: #be72e9c0;

    .header-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
        position: relative;

        @media (max-width: 768px) {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
        }

        a {
            text-decoration: none;
            color: inherit;
        }

        h1 {
            margin: 0;
            font-size: 2rem;
            color: #000;

            @media (max-width: 768px) {
                font-size: 1.5rem;
            }
        }

        h2 {
            margin: 0;
            font-size: 1.2rem;
            color: #000;

            @media (max-width: 768px) {
                font-size: 1rem;
            }
        }

        /* Desktop Navigation Links */
        .desktop-links {
            display: flex;
            gap: 20px;
            align-items: center;

            a {
                font-size: 1.5rem;
                font-weight: bold;
                color: #000;

                &:hover {
                    color: red;
                }

                @media (max-width: 768px) {
                    font-size: 1.2rem;
                }
            }

            @media (max-width: 768px) {
                display: none;
            }
        }

        /* Mobile Navigation Links with Slide Effect */
        .mobile-links {
            position: fixed;
            top: 0;
            right: 0;
            height: 100vh;
            width: 200px;
            background: white;
            box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
            display: flex;
            flex-direction: column;
            gap: 20px;
            padding: 20px;
            transform: translateX(100%);
            transition: transform 0.3s ease-in-out;

            &.open {
                transform: translateX(0);
            }

            a {
                font-size: 1.5rem;
                font-weight: bold;
                color: #000;

                &:hover {
                    color: red;
                }

                @media (max-width: 768px) {
                    font-size: 1.2rem;
                }
            }
        }

        /* Hamburger Container */
        .hamburger-container {
            display: none;

            @media (max-width: 768px) {
                display: flex;
                position: absolute;
                right: 20px;
            }
        }
    }
}
</style>
