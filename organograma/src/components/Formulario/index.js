import CampoTexto from "../CampoTexto";

const Formulario = () => {
    return (
        <section className="main__formulario">
            <form>
                <h2>Fill your data to create a card</h2>
                <CampoTexto label="Name" placeholder="Type your name" />
                <CampoTexto label="Role" placeholder="Type your role" />
                <CampoTexto label="Image" placeholder="Paste the url of your image" />
            </form>
        </section>
    )
}

export default Formulario