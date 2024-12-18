<script>
	import Header from '../../lib/components/Header.svelte';
    import Footer from '../../lib/components/Footer.svelte';
    import Button from '../../lib/components/Button.svelte';

    let userName = $state('');
    let Email = $state('');
    let Password = $state('');
    let confirmPassword = $state('');

    function handleRegister() {
        if (Password === confirmPassword) {
            console.log('Registrace úspěšná:', { userName, Email, Password });
        } else {
            console.error('Hesla se neshodují.');
        }
    }
</script>

<Header />

<main>
    <div class="window-register">
        <h1>Registrace</h1>
        <div class="inputs">
            <input type="text" placeholder="Uživatelské jméno" bind:value={userName} />
            <input type="email" placeholder="Email" bind:value={Email} />
            <input type="password" placeholder="Heslo" bind:value={Password} />
            <input type="password" placeholder="Potvrzení hesla" bind:value={confirmPassword} />
        </div>

        <Button 
            label="Registrace" 
            class="custom-register-button"  
            onclick={handleRegister} />
    </div>
</main>

<Footer />


<style lang="scss">
main {
    padding: 0;
    margin: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #000000, #800080); // Přechod mezi černou a fialovou
}

.window-register {
    background: rgba(255, 255, 255, 0.9); 
    border-radius: 12px;
    box-shadow: 0px 8px 30px rgba(128, 0, 128, 0.7); 
    padding: 30px;
    width: 90%;
    max-width: 400px;
    text-align: center;
    animation: glow 3s infinite; // Jemná animace záře
}

.window-register h1 {
    margin-bottom: 25px;
    font-size: 1.8rem;
    color: #000000;
}

.inputs {
    display: flex;
    flex-direction: column;
    gap: 15px; // Menší mezery mezi inputy
    margin-top: 20px;
}



.inputs input {
    padding: 15px; 
    border: 2px solid #800080; 
    border-radius: 10px; 
    font-size: 1.2rem;
    width: 100%;
    box-sizing: border-box;
    outline: none;
    transition: all 0.3s ease;
}

.inputs input:focus {
    border-color: #b800ff; 
    box-shadow: 0px 0px 10px #b800ff; 
}

@media (max-width: 768px) {
    .window-register {
        padding: 20px;
        margin: 0 10px;
    }

    .inputs input {
        font-size: 1rem;
        padding: 12px;
    }
}
</style>
