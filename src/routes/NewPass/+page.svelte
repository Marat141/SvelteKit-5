<script>
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Button from "$lib/components/Button.svelte";

    let oldPassword = $state('');
    let newPassword = $state('');
    let confirmNewPassword = $state('');
    let oldPasswordError = $state('');
    let newPasswordError = $state('');
    let confirmPasswordError = $state('');

    function submitForm() {
        let hasError = false;

        // Ověření starého hesla
        if (!oldPassword.trim()) {
            oldPasswordError = 'Vyplňte správně staré heslo';
            hasError = true;
        } else {
            oldPasswordError = '';
        }

        // Ověření nového hesla
        if (!newPassword.trim()) {
            newPasswordError = 'Vyplňte nové heslo';
            hasError = true;
        } else if (newPassword.length < 8) {
            newPasswordError = 'Heslo musí mít alespoň 8 znaků';
            hasError = true;
        } else {
            newPasswordError = '';
        }

        // Ověření potvrzení hesla
        if (!confirmNewPassword.trim()) {
            confirmPasswordError = 'Vyplňte potvrzení hesla';
            hasError = true;
        } else if (newPassword !== confirmNewPassword) {
            confirmPasswordError = 'Hesla se neshodují';
            hasError = true;
        } else {
            confirmPasswordError = '';
        }

        if (!hasError) {
            console.log('Heslo bylo úspěšně změněno!');
        }
    }
</script>

<Header />

<main>
    <div class="window-reset">
        <h1>Obnovit heslo</h1>
        <div class="inputs">
            <!-- Vstup pro staré heslo -->
            <input type="password" placeholder="Staré heslo" bind:value={oldPassword}>
            {#if oldPasswordError}
                <div class="error-message">{oldPasswordError}</div>
            {/if}

            <!-- Vstup pro nové heslo -->
            <input type="password" placeholder="Nové heslo" bind:value={newPassword}>
            {#if newPasswordError}
                <div class="error-message">{newPasswordError}</div>
            {/if}

            <!-- Vstup pro potvrzení hesla -->
            <input type="password" placeholder="Potvrdit nové heslo" bind:value={confirmNewPassword}>
            {#if confirmPasswordError}
                <div class="error-message">{confirmPasswordError}</div>
            {/if}
        </div>

        <Button label="Obnovit heslo" onClick={submitForm} />
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
    background: linear-gradient(135deg, #000000, #800080);
}

.window-reset {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 12px;
    box-shadow: 0px 8px 30px rgba(128, 0, 128, 0.7);
    padding: 25px;
    width: 90%;
    max-width: 400px;
    text-align: center;
    animation: glow 3s infinite;
}

.window-reset h1 {
    margin-bottom: 25px;
    font-size: 1.8rem;
    color: #000000;
}

.inputs {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
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

.error-message {
    color: #ff0000;
    font-size: 0.9rem;
    margin-top: 5px;
    text-align: left;
}

@keyframes glow {
    0% {
        box-shadow: 0px 8px 30px rgba(128, 0, 128, 0.7);
    }
    50% {
        box-shadow: 0px 8px 40px rgba(186, 85, 211, 0.9);
    }
    100% {
        box-shadow: 0px 8px 30px rgba(128, 0, 128, 0.7);
    }
}

@media (max-width: 768px) {
    .window-reset {
        padding: 20px;
        margin: 0 10px;
    }

    .inputs input {
        font-size: 1rem;
        padding: 12px;
    }
}
</style>
