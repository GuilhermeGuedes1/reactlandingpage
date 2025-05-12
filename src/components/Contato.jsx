function Contato(){
    return(
        <section className="contato">
            <h2>Get in Touch</h2>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h3>

            <div className="dados-Contato">
                <form className="formulario">

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Please enter your email"/>

                    <label htmlFor="telefone">Mobile</label>
                    <input type="number" id="telefone" placeholder="Enter mobile"/>

                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="imessage" className="areaTexto" placeholder="Enter your message"></textarea>

                    <div className="submit">Submit</div>
                </form>
            </div>

        </section>
    )
}


export default Contato