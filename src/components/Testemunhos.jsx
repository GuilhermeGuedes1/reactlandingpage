function TestemunhosModelo(props){
    return(
        <div>
            <div class="testemunhos">
                <div class="testemunho-container">
                    <span>“</span>
                    <p class="depoimento">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    <div class="perfil-testemunho">
                        <img src={props.imagem} alt="foto-cliente" />
                        <div class="nome-cliente">{props.nomeCliente}</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

function Testemunhos (){

    return(
        <section class="section-testemunhos" id="testemunhos">
            <div class="titulo-container">
                <h2 class="titulo">Testemunhos</h2>
                <h3 class="subtitulo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
            </div>
            <div className="testemunhos">
                <TestemunhosModelo nomeCliente="Catarina Jones" imagem="src/images/testemunhas/testemunha1.jpg" />
                <TestemunhosModelo nomeCliente="Emanuela Silva" imagem="src/images/testemunhas/testemunha2.jpg" />
                <TestemunhosModelo nomeCliente="Narah Jones" imagem="src/images/testemunhas/testemunha3.jpg" />
                <TestemunhosModelo nomeCliente="Bella Campos" imagem="src/images/testemunhas/testemunha4.jpg" />

            </div>
        </section>
    )

}

export default Testemunhos
