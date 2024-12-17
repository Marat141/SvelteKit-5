<script>
	import Header from './../Header.svelte';
    import Footer from './../Footer.svelte';
    import Button from './../Button.svelte';
    let {
        userName = '', 
        Password = ''
        } = $props();
</script>

<Header />

<main>
    <div class="window-login">
        <h1>Login</h1>
        <div class="inputs">
            <input type="text" placeholder="Jméno nebo Email">
            <input type="password" placeholder="Heslo">
        </div>
        <a href="./ForgetPassword" class="forgot-password">Zapomenuté heslo</a>
        <Button label="Přihlásit se" />
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

.window-login {
    background: rgba(255, 255, 255, 0.9); 
    border-radius: 12px; 
    box-shadow: 0px 8px 30px rgba(128, 0, 128, 0.7); 
    padding: 25px; 
    width: 90%; 
    max-width: 400px; 
    text-align: center;
    animation: glow 3s infinite; // Jemná animace
}

.window-login h1 {
    margin-bottom: 25px; 
    font-size: 1.8rem; 
    color: #000000; 
}

.inputs {
    display: flex; 
    flex-direction: column; 
    gap: 20px; 
    margin-bottom: 10px; // Menší mezera nad odkazem
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

.forgot-password {
    display: block;
    margin: 10px 0 20px; // Mezera nad i pod odkazem
    font-size: 0.9rem;
    color: #800080;
    text-decoration: none;
    transition: color 0.3s ease;
}

.forgot-password:hover {
    color: #b800ff; // Světlejší fialová při najetí
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
    .window-login {
        padding: 20px;
        margin: 0 10px;
    }

    .inputs input {
        font-size: 1rem;
        padding: 12px;
    }

    .forgot-password {
        font-size: 0.8rem;
    }
}
</style>
