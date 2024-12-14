<script>
    // Žádný JavaScript není potřeba.
  </script>
  
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
    rel="stylesheet"
  />
  
  <footer>
    <div class="footer-content">
      <!-- Odkazy vlevo -->
      <div class="social-links">
        <a href="/"><i class="fab fa-facebook"></i></a>
        <a href="/"><i class="fab fa-instagram"></i></a>
        <a href="/"><i class="fa-regular fa-clipboard"></i></a>
      </div>
  
      <!-- Nadpis uprostřed -->
      <h2>Davinci Web Připojte se k nám</h2>
  
      <!-- Kontakty vpravo -->
      <div class="infomration">
        <h3>Kontakt na nás</h3>
        <p>Telefoní číslo: +420 *** *** ***</p>
        <p>Email: ******@gmail.com</p>
        <p>Pevná linka: 3** *** ***</p>
      </div>
    </div>
  </footer>
  
  <style>
  footer {
    background-color: #212121;
    color: #f5f5f5;
    padding: 40px 20px;
  }
  
  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }
  
  .social-links {
    display: flex;
    flex-direction: column; /* Výchozí: Ikony pod sebou */
    align-items: center;
    gap: 20px;
  }
  
  .social-links a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    color: #f5f5f5;
    font-size: 36px;
    border-radius: 50%;
    background-color: #333;
    text-decoration: none;
    transition: transform 0.3s, color 0.3s, background-color 0.3s;
  }
  
  .social-links a:hover {
    color: #ffcc00;
    background-color: #444;
    transform: scale(1.3);
  }
  
  h2 {
    font-size: 32px;
    color: #ffcc00;
    text-align: center;
  }
  
  .infomration {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
  }
  
  .infomration h3 {
    font-size: 24px;
    color: #ffcc00;
  }
  
  .infomration p {
    margin: 0;
    font-size: 18px;
    line-height: 1.5;
  }
  
  /* Responzivní design */
  @media (max-width: 768px) {
    .footer-content {
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }
  
    .social-links {
      flex-direction: row; /* Ikony vedle sebe */
      gap: 15px;
    }
  
    .social-links a {
      width: 40px; /* Zmenšené ikony */
      height: 40px;
      font-size: 24px;
    }
  
    h2 {
      margin: 20px 0;
    }
  
    .infomration {
      align-items: center;
      text-align: center;
    }
  }
  </style>
  