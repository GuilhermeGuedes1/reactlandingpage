function Trabalho(props){
    return(
           <div class="trabalho">
              <div class="container-descricao">
                <span>{props.tech}</span>
                <div class="nomeTrabalho">{props.tituloTrabalho}</div>
                <p class="descricao-trabalho">
                 {props.descricaoTrabalho}
                </p>
                <div class="botao">{props.callToAction} </div>
              </div>
              <div class="container-img">
                <img src={props.img} alt="foto-do-trabalho" />
              </div>
            </div>
    )
}


function Cases (){
    return(
        <section class="cases">
        <div class="cases-container">
          <div class="titulo-container">
            <h2 class="titulo">Case Studies</h2>
            <h3 class="subtitulo">
              Solving user & business problems since last 15+ years. <br />Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </h3>
          </div>

          <div class="trabalhos">
                    <Trabalho tech="Fintech" tituloTrabalho="Work Name Here" descricaoTrabalho="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione neque modi maxime consequatur sint, quidem laborum
                    eligendi dicta iure velit tenetur hic nostrum beatae
                    exercitationem mollitia quis suscipit? Sunt, quam." callToAction="View case study >" img="src/images/trabalho-1.jpg" />


                    <Trabalho tech="Edtech" tituloTrabalho="Work Name Here" descricaoTrabalho="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione neque modi maxime consequatur sint, quidem laborum
                    eligendi dicta iure velit tenetur hic nostrum beatae
                    exercitationem mollitia quis suscipit? Sunt, quam." callToAction="View case study >" img="src/images/trabalho-2.jpg"  />

                    <Trabalho tech="Pharma" tituloTrabalho="Work Name Here" descricaoTrabalho="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione neque modi maxime consequatur sint, quidem laborum
                    eligendi dicta iure velit tenetur hic nostrum beatae
                    exercitationem mollitia quis suscipit? Sunt, quam." callToAction="View case study >" img="src/images/trabalho-3.jpg" />
          </div>
        </div>
      </section>
    )
}

export default Cases