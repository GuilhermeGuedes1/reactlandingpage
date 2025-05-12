function TrabalhosRecentes(){


  function Trabalho(props){
    return(
      <div className="trabalho">
                <img src={props.imagem} alt="Foto-do-trabalho" />
                <h4 className="nome-trabalho-recente">{props.nomeTrabalho}</h4>
                <p>{props.descricaoTrabalhoRecente}</p>
                <div className="saiba-mais">{props.saibaMais}</div>
              </div>
    )
  }

    return(
        <section className="trabalhos-recentes">
          <div className="conteudo">
            <div className="titulo-container">
              <h2 className="titulo" >Recent Work</h2>
              <h3 className="subtitulo">Solving user & business problems since last 15+ years. <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h3>
            </div>
            <div className="trabalhos-container">
             <ion-icon name="arrow-back-circle-outline"></ion-icon>
             <ion-icon name="arrow-forward-circle-outline"></ion-icon>

              <Trabalho imagem="src/images/trabalhos-recentes/trabalho-recente-2.jpg" nomeTrabalho="Work Name Here" descricaoTrabalhoRecente="Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna." saibaMais="Know more" />

              <Trabalho imagem="src/images/trabalhos-recentes/trabalho-recente-1.jpg" nomeTrabalho="Work Name Here" descricaoTrabalhoRecente="Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna." saibaMais="Know more" />
              
              <Trabalho imagem="src/images/trabalhos-recentes/trabalho-recente-3.jpg" nomeTrabalho="Work Name Here" descricaoTrabalhoRecente="Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna." saibaMais="Know more" />

              <Trabalho imagem="src/images/trabalhos-recentes/trabalho-recente-4.jpg" nomeTrabalho="Work Name Here" descricaoTrabalhoRecente="Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna." saibaMais="Know more" />

            </div>
          </div>

        </section>
    )
}


export default TrabalhosRecentes