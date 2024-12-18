<script>
	import Header from '../../lib/components/Header.svelte';
	import Footer from '../../lib/components/Footer.svelte';
	import Button from '../../lib/components/Button.svelte';

	let userName = $state('');
	let password = $state('');
	let userNameError = $state('');
	let passwordError = $state('');

	function submitForm() {
		let hasError = false;

		// Ověření uživatelského jména
		if (!userName.trim()) {
			userNameError = 'Vyplňte Uživatelské jméno nebo Email';
			hasError = true;
		} else {
			userNameError = '';
		}

		// Ověření hesla
		if (!password.trim()) {
			passwordError = 'Vyplňte heslo';
			hasError = true;
		} else {
			passwordError = '';
		}

		// Pokud nejsou chyby, zpracuj formulář
		if (!hasError) {
			console.log('Přihlašovací údaje:', userName, password);
		}
	}
</script>

<Header />

<main>
	<div class="window-login">
		<h1>Login</h1>
		<div class="inputs">
			<!-- Vstup pro uživatelské jméno -->
			<input type="text" placeholder="Jméno nebo Email" bind:value={userName}>
			{#if userNameError}
				<div class="error-message">{userNameError}</div>
			{/if}

			<!-- Vstup pro heslo -->
			<input type="password" placeholder="Heslo" bind:value={password}>
			{#if passwordError}
				<div class="error-message">{passwordError}</div>
			{/if}
		</div>

		<a href="./ForgetPassword" class="forgot-password">Zapomenuté heslo</a>
		<!-- Opravené předání handleru do Button -->
		<Button label="Přihlásit se" onClick={submitForm} />
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

.window-login {
	background: rgba(255, 255, 255, 0.9);
	border-radius: 12px;
	box-shadow: 0px 8px 30px rgba(128, 0, 128, 0.7);
	padding: 25px;
	width: 90%;
	max-width: 400px;
	text-align: center;
	animation: glow 3s infinite;
}

.window-login h1 {
	margin-bottom: 25px;
	font-size: 1.8rem;
	color: #000000;
}

.inputs {
	display: flex;
	flex-direction: column;
	gap: 10px; /* Menší mezera mezi poli a chybami */
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
	text-align: left; /* Zarovnání doleva pod vstup */
}

.forgot-password {
	display: block;
	margin: 10px 0 20px;
	font-size: 0.9rem;
	color: #800080;
	text-decoration: none;
	transition: color 0.3s ease;
}

.forgot-password:hover {
	color: #b800ff;
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
