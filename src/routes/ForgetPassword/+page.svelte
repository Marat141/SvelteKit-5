<script>
    import Header from '../../lib/components/Header.svelte';
    import Footer from '../../lib/components/Footer.svelte';
    import Button from '../../lib/components/Button.svelte';

    let email = $state(''); // Reaktivní stav pro email
    let showError = $state(false); // Reaktivní stav pro zobrazení chyby
    let errorMessage = $state(''); // Reaktivní chybová zpráva

    // Funkce na validaci emailu
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Efekt sledující změnu emailu a jeho validitu
    $effect(() => {
        if (showError) {
            if (!email.trim()) {
                errorMessage = 'Zadejte email prosím.'; // Chybí email
            } else if (!isValidEmail(email)) {
                errorMessage = 'Zadejte platný email, například: uzivatel@gmail.com'; // Neplatný formát
            } else {
                errorMessage = ''; // Email je platný
            }
        }
    });

    function handleSubmit() {
        if (!email.trim() || !isValidEmail(email)) {
            showError = true;
        } else {
            showError = false;
            console.log('Email odeslán:', email);
            // Další zpracování, např. volání API
        }
    }
</script>

<Header />

<main>
    <div class="window-forget-password">
        <h1>Zapomenuté heslo</h1>
        <div class="inputs">
            <input 
                type="text" 
                placeholder="Email" 
                bind:value={email} 
                class:error={showError} 
            />
            {#if showError && errorMessage}
                <p class="error-text">{errorMessage}</p>
            {/if}
            <Button label="Odeslat" class="custom-forget-button" onClick={handleSubmit} />
        </div>
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

.window-forget-password {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 12px;
    box-shadow: 0px 8px 30px rgba(128, 0, 128, 0.7);
    padding: 30px;
    width: 90%;
    max-width: 400px;
    text-align: center;
    animation: glow 3s infinite; // Jemná animace záře
}

.window-forget-password h1 {
    margin-bottom: 25px;
    font-size: 1.8rem;
    color: #000000;
}

.inputs {
    display: flex;
    flex-direction: column;
    gap: 15px; // Menší mezery mezi inputy
    margin-bottom: 20px;
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

.inputs input.error {
    border-color: #ff0000; /* Červený okraj při chybě */
    box-shadow: 0px 0px 10px #ff0000;
}

.error-text {
    color: #ff0000;
    font-size: 0.9rem;
    margin: 0;
}

.custom-forget-button {
    margin-top: 20px;
}

@media (max-width: 768px) {
    .window-forget-password {
        padding: 20px;
        margin: 0 10px;
    }

    .inputs input {
        font-size: 1rem;
        padding: 12px;
    }
}
</style>
