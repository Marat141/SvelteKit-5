<script>
	import Header from '../../lib/components/Header.svelte';
	import Footer from '../../lib/components/Footer.svelte';
	import Button from '../../lib/components/Button.svelte';

	let userName = $state('');
	let userNameError = $state('');
	let email = $state('');
	let emailError = $state('');
	let password = $state('');
	let passwordError = $state('');
	let confirmPassword = $state('');
	let confirmPasswordError = $state('');

	function submitForm() {
		let hasError = false;

		// Kontrola uživatelského jména
		if (!userName.trim()) {
			userNameError = 'Vyplňte Uživatelské jméno';
			hasError = true;
		} else {
			userNameError = '';
		}

		// Kontrola emailu
		if (!email.trim()) {
			emailError = 'Vyplňte Email';
			hasError = true;
		} else {
			emailError = '';
		}

		// Kontrola hesla
		if (!password.trim()) {
			passwordError = 'Vyplňte heslo';
			hasError = true;
		} else {
			passwordError = '';
		}

		// Kontrola potvrzení hesla
		if (!confirmPassword.trim()) {
			confirmPasswordError = 'Vyplňte potvrzení hesla';
			hasError = true;
		} else if (password !== confirmPassword) {
			confirmPasswordError = 'Hesla se neshodují';
			hasError = true;
		} else {
			confirmPasswordError = '';
		}

		// Zpracování formuláře, pokud nejsou chyby
		if (!hasError) {
			console.log('Formulář byl úspěšně odeslán!', {
				userName,
				email,
				password,
			});
		}
	}
</script>

<Header />

<main>
	<div class="window-register">
		<h1>Registrace</h1>
		<div class="inputs">
			<!-- Uživatelské jméno -->
			<input type="text" placeholder="Uživatelské jméno" bind:value={userName} />
			{#if userNameError}
				<div class="error-message">{userNameError}</div>
			{/if}

			<!-- Email -->
			<input type="email" placeholder="Email" bind:value={email} />
			{#if emailError}
				<div class="error-message">{emailError}</div>
			{/if}

			<!-- Heslo -->
			<input type="password" placeholder="Heslo" bind:value={password} />
			{#if passwordError}
				<div class="error-message">{passwordError}</div>
			{/if}

			<!-- Potvrzení hesla -->
			<input type="password" placeholder="Potvrzení hesla" bind:value={confirmPassword} />
			{#if confirmPasswordError}
				<div class="error-message">{confirmPasswordError}</div>
			{/if}
		</div>

		<Button 
			label="Registrace" 
			class="custom-register-button"  
			onClick={submitForm} />
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

.window-register {
	background: rgba(255, 255, 255, 0.9);
	border-radius: 12px;
	box-shadow: 0px 8px 30px rgba(128, 0, 128, 0.7);
	padding: 30px;
	width: 90%;
	max-width: 400px;
	text-align: center;
	animation: glow 3s infinite;
}

.window-register h1 {
	margin-bottom: 25px;
	font-size: 1.8rem;
	color: #000000;
}

.inputs {
	display: flex;
	flex-direction: column;
	gap: 15px;
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

.error-message {
	color: #ff0000;
	font-size: 0.9rem;
	margin-top: 5px;
	text-align: left;
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
