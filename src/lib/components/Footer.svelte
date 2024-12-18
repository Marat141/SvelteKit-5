<footer>
  <div class="footer-content">
    <!-- Odkazy vlevo -->
    <div class="social-links">
      <a href="https://facebook.com" target="_blank"><i class="fab fa-facebook"></i></a>
      <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
      <a href="https://clipboard.com" target="_blank"><i class="fa-regular fa-clipboard"></i></a>
    </div>

    <!-- Nadpis uprostřed -->
    <h2>Davinci Web - Spojte se s námi</h2>

    <!-- Kontakty vpravo -->
    <div class="information">
      <h3>Kontakt</h3>
      <p>Telefon: +420 *** *** ***</p>
      <p>Email: ******@gmail.com</p>
      <p>Pevná linka: 3** *** ***</p>
    </div>
  </div>
  <p class="footer-bottom">© 2024 Davinci Web. Všechna práva vyhrazena.</p>
</footer>

<link 
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" 
  rel="stylesheet"
/>

<style>
footer {
  background: linear-gradient(135deg, #333333, #1a1a1a); /* Elegantní přechod mezi tmavě šedou */
  color: #e0e0e0; /* Světle šedý text pro kontrast */
  padding: 40px 20px;
  font-family: Arial, sans-serif;
  text-align: center;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.3);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  flex-wrap: wrap;
}

.social-links {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-basis: 100%;
}

.social-links a {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  font-size: 1.5rem;
  color: #e0e0e0;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, background-color 0.3s ease;
  text-decoration: none;
}

.social-links a:hover {
  transform: scale(1.2);
  background-color: #e0e0e0; /* Světle šedé pozadí */
  color: #333333; /* Ikony přejdou na tmavší barvu */
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: #ff9900; /* Jemný akcent oranžové */
  text-transform: uppercase;
}

.information {
  text-align: left;
}

.information h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #ff9900; /* Oranžový akcent */
}

.information p {
  font-size: 1rem;
  line-height: 1.6;
  margin: 5px 0;
}

.footer-bottom {
  margin-top: 30px;
  font-size: 0.9rem;
  color: #bbbbbb;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .information {
    text-align: center;
  }
}
</style>
