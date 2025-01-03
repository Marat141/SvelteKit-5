<script>
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Button from "$lib/components/Button.svelte";
  
    let selectedAvatar = $state("male"); // Defaultně mužský avatar
    let userName = $state(""); // Získáno z registrace/loginu
    let email = $state(""); // Získáno z registrace/loginu
    let showSettings = $state(false); // Stav pro zobrazení okénka
  
    // Nastavení avatara
    function selectAvatar(avatar) {
      selectedAvatar = avatar;
    }
  
    // Funkce pro přepínání zobrazení okénka
    function toggleSettings() {
      showSettings = !showSettings
    }
  
    // Funkce pro validaci délky vstupu
    function validateLength(e, field) {
      if (e.target.value.length > 60) {
        e.target.value = e.target.value.slice(0, 60); // Ořeže na maximálně 60 znaků
        if (field === "userName") userName = e.target.value;
        if (field === "email") email = e.target.value;
      }
    }
  </script>
  
  <Header />
  
  <main>
    <h1 class="center-title">Tvůj Profil</h1>
    <div class="profile-container">
      <div class="profile-center">
        <div class="avatar">
          <img 
            src={selectedAvatar === "male" ? "Avatar-male-pic.png" : "Avatar-female-pic.png"} 
            alt="Profilová fotka" 
          />
        </div>
        <h2>{userName || email}</h2>
        <Button label="Změnit" onClick={toggleSettings} customClass="change-button" />
      </div>
    </div>
    <div class="setting">
      <a href="/Settings"> <img class="settings-icon" src="Setting.png" alt="Nastavení" onClick={toggleSettings} /> </a>
    </div>
  
    {#if showSettings}
      <div class="settings-overlay">
        <div class="settings-window">
          <h3>Nastavení Profilu</h3>
          <div class="avatar-options">
            <Button label="Muž" onClick={() => selectAvatar("male")} />
            <Button label="Žena" onClick={() => selectAvatar("female")} />
          </div>
          <div class="user-info">
            <label for="userName">Uživatelské Jméno:</label>
            <input 
              type="text" 
              id="userName" 
              bind:value={userName} 
              placeholder="Zadejte své jméno"
              oninput={(e) => validateLength(e, "userName")}
            />
            <p class="error" style="color: red;" hidden={userName.length <= 60}>
              Uživatelské jméno může mít maximálně 60 znaků.
            </p>
  
            <label for="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              bind:value={email} 
              placeholder="Zadejte svůj email"
              oninput={(e) => validateLength(e, "email")} 
            />
            <p class="error" style="color: red;" hidden={email.length <= 60}>
              Email může mít maximálně 60 znaků.
            </p>
          </div>
          <Button label="Zavřít" onClick={toggleSettings} />
        </div>
      </div>
    {/if}
  </main>
  
  <Footer />
  
  <style lang="scss">
main {
  padding: 20px;
  background: linear-gradient(135deg, #000000, #800080);
  color: #fff;
  overflow: hidden; /* Zabrání přetečení obsahu */
}

.center-title {
  text-align: center;
  margin-bottom: 20px;
}

.profile-container {
  display: flex;
  flex-direction: column; /* Vertikální zarovnání obsahu */
  align-items: center;
  gap: 15px; /* Mezera mezi prvky */
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.05);
  max-width: 400px; /* Maximální šířka na větších obrazovkách */
  margin: 0 auto; /* Horizontální centrování */
}

.profile-center {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.settings-icon {
  position: fixed; /* Použijeme fixed místo absolute */
  top: 80px; /* Vzdálenost od horního okraje okna */
  right: 8px;/* Vzdálenost od pravého okraje okna */
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.avatar img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid #800080;
}

.change-button {
  margin-top: 10px;
  background-color: #800080;
  color: #fff;
  border-radius: 8px;
  padding: 8px 15px;
}

.settings-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.settings-window {
  background: #fff;
  color: #000;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 8px 30px rgba(128, 0, 128, 0.7);
  text-align: center;
  width: 90%;
  max-width: 400px;
  margin: 0 10px;
}

.settings-window h3 {
  margin-bottom: 15px;
}

.avatar-options {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.user-info {
  margin-bottom: 20px;
}

.user-info label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.user-info input {
  width: 90%;
  padding: 10px;
  border: 2px solid #800080;
  border-radius: 8px;
  outline: none;
}

.user-info input:focus {
  border-color: #b800ff;
  box-shadow: 0 0 10px #b800ff;
}

.error {
  margin-top: 5px;
  font-size: 0.875rem;
}

  </style>
  