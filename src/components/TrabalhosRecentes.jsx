import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from "react-slick"

function TrabalhosRecentes(){

  const trabalhos = [
    {
      nomeTrabalhoRecente: 'Work Name Here',
      descricaoTrabalho: 'Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.', 
      imagem: 'src/images/trabalhos-recentes/trabalho-recente-3.jpg'
    },
    {
      nomeTrabalhoRecente: 'Work Name Here',
      descricaoTrabalho: 'Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.',
      imagem: 'src/images/trabalhos-recentes/trabalho-recente-4.jpg'
    },
    {
      nomeTrabalhoRecente: 'Work Name Here',
      descricaoTrabalho: 'Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.',
      imagem: 'src/images/trabalhos-recentes/trabalho-recente-1.jpg'
    },
    {
      nomeTrabalhoRecente: 'Work Name Here',
      descricaoTrabalho: 'Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.',
      imagem: 'src/images/trabalhos-recentes/trabalho-recente-2.jpg'
    },

  ]

  function Trabalho(props){
    
    return(
      <div className="trabalho">
        <img src={props.imagem} alt="Foto-do-trabalho" />
        <h4 className="nome-trabalho-recente">{props.nomeTrabalho}</h4>
        <p>{props.descricaoTrabalhoRecente}</p>
        <div className="saiba-mais">Know More</div>
      </div>
    )
  }

 function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        position: 'absolute',
        right: '-50px',
        top: '50%',
        cursor: 'pointer',
        zIndex: 2,
        color: '#c9c9c9',
        fontSize: '50px',
      }}
    >
      <ion-icon name="arrow-forward-circle-outline"></ion-icon>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        position: 'absolute',
        left: '-50px',
        top: '50%',
        cursor: 'pointer',
        zIndex: 2,
        color: '#c9c9c9',
        fontSize: '50px',
      }}
    >
      <ion-icon name="arrow-back-circle-outline"></ion-icon>
    </div>
  );
}

  function SimpleSlider(){
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrow: true, 
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,

    };
    return(
      <Slider {...settings}>
        {trabalhos.map(trabalho => ( 
                <Trabalho 
                imagem={trabalho.imagem} 
                nomeTrabalho={trabalho.nomeTrabalhoRecente} 
                descricaoTrabalhoRecente={trabalho.descricaoTrabalho}
                />)
              )}

      </Slider>

    )
  }

    return(
        <section className="trabalhos-recentes" id='trabalhosRecentes'>
          <div className="conteudo">
            <div className="titulo-container">
              <h2 className="titulo" >Recent Work</h2>
              <h3 className="subtitulo">Solving user & business problems since last 15+ years. <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h3>
            </div>
            <div className="trabalhos-container">

             <SimpleSlider />
      
            </div>
          </div>

        </section>
    )
}


export default TrabalhosRecentes