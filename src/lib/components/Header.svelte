<script>
  import { Hamburger } from 'svelte-hamburgers';
  
  const menu_list = $state([
    { name: "Domov", url: "./" },
    { name: "Login", url: "/Login" },
    { name: "Register", url: "/Register" },
    { name: "Profil", url: "./" }
  ]);

  let menuOpen = $state(false);

  function toggleMenu() {
    menuOpen = !menuOpen;
  }
</script>

<header>
  <div class="header-content">
    <a href="/"><h1>Davinci Web</h1></a>

    <!-- Desktop Navigation Links -->
    <div class="links desktop-links">
      {#each menu_list as menu}
        <a href={menu.url}>{menu.name}</a>
      {/each}
    </div>

    <!-- Hamburger for mobile -->
    <div class="hamburger-container">
      <Hamburger
        bind:open={menuOpen}
        on:click={toggleMenu}
        type="spin"
        --color="white"
        size={30}
      />
    </div>

    <!-- Mobile Navigation Links with Slide Effect -->
    <div class="mobile-links {menuOpen ? 'open' : ''}">
      {#each menu_list as menu}
        <a href={menu.url}>{menu.name}</a>
      {/each}
    </div>
  </div>
</header>

<style lang="scss">
header {
  padding: 20px 0;
  background: linear-gradient(135deg, #333333, #1a1a1a);
  color: #e0e0e0;

  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;

    a {
      text-decoration: none;
      color: inherit;
    }

    h1 {
      margin: 0;
      font-size: 2rem;
      color: #ff9900;
    }
  }

  /* Desktop Navigation Links */
  .desktop-links {
    display: flex;
    gap: 20px;

    a {
      font-size: 1.5rem;
      font-weight: bold;
      color: #e0e0e0;

      &:hover {
        color: #ff9900;
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
    background: linear-gradient(135deg, #333333, #1a1a1a);
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    padding-top: 80px;

    &.open {
      transform: translateX(0);
    }

    a {
      font-size: 1.5rem;
      font-weight: bold;
      color: #e0e0e0;
      

      &:hover {
        color: #ff9900;
      }
    }
  }

  /* Hamburger Container */
  .hamburger-container {
    display: none;
    z-index: 10;

    @media (max-width: 768px) {
      display: flex;
      position: absolute;
      right: 20px;
    }
  }
}
</style>
