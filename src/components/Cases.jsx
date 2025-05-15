
const cases = [
  {
    caseTech: "EdTech",
    nomeCase: 'Work Name Here', 
    descricaoCase: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione neque modi maxime consequatur sint, quidem laborum eligendi dicta iure velit tenetur hic nostrum beatae exercitationem mollitia quis suscipit? Suntuam." ,
    srcCase : "src/images/trabalho-1.jpg"
  },
  {
    caseTech: "Pharma",
    nomeCase: 'Work Name Here', 
    descricaoCase: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione neque modi maxime consequatur sint, quidem laborum eligendi dicta iure velit tenetur hic nostrum beatae exercitationem mollitia quis suscipit? Suntuam." ,
    srcCase : "src/images/trabalho-3.jpg"

  }, 
  {
    caseTech: "EdTech",
    nomeCase: 'Work Name Here', 
    descricaoCase: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione neque modi maxime consequatur sint, quidem laborum eligendi dicta iure velit tenetur hic nostrum beatae exercitationem mollitia quis suscipit? Suntuam." ,
    srcCase : "src/images/trabalho-3.jpg"

  }
                    
]

function CaseModelo(props){
    return(
           <div class="trabalho">
              <div class="container-descricao">
                <span>{props.caseTech}</span>
                <div class="nomeTrabalho">{props.caseTitulo}</div>
                <p class="descricao-trabalho">
                 {props.caseDescricao}
                </p>
                <div class="botao">View Case Here</div>
              </div>
              <div class="container-img">
                <img src={props.caseSrc} alt="foto-do-trabalho" />
              </div>
            </div>
    )
}

function Cases(){
    return(
        <section class="cases" id="cases">
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

            {cases.map(value => ( 
              <CaseModelo caseTech={value.caseTech}
              caseTitulo={value.nomeCase}
              caseDescricao={value.descricaoCase} 
              caseSrc={value.srcCase}
              />
            ))}             

          </div>
        </div>
      </section>
    )
}

export default Cases