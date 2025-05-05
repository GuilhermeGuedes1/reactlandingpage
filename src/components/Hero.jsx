function Hero (){ 
    return(
        <div>
          <section class="hero">
          <div class="perfil">
            <div class="info">
              <h1 class="nome">Your Name Here</h1>
              <p class="texto">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
                sed nisi mollitia ea sapiente perspiciatis deserunt sunt qui
                aliquam. Dolore eius amet obcaecati explicabo ullam assumenda,
                eaque quam aperiam sapiente!
              </p>
              <div class="botao">Let's get started</div>
            </div>
            <div class="foto">
              <img src="src/images/perfil.jpg" alt="Foto Perfil" />
            </div>
          </div>
          <div class="trabalhoCom">
            <span>
              <h2>Worked with</h2>
            </span>
            <div class="plataformas">
              <a href="#"><i class="bx bxl-upwork">Upwork</i></a>
              <a href="#"><i class="bx bxl-dropbox">Dropbox</i></a>
              <a href="#"><i class="bx bxl-paypal"></i>PayPal</a>
              <a href="#"><i class="bx bxl-stripe"></i>Stripe</a>
              <a href="#"><i class="bx bxs-business"></i>Business</a>
            </div>
          </div>
          </section>
        </div>
    )
}

export default Hero