import './CampoTexto.css'

const CampoTexto = (props) => {
    const placeholder = `${props.placeholder}...`
    return(
        <div className='main__formulario__campo_texto'>
            <label>
                {props.label}
            </label>
            <input placeholder={placeholder}/>
        </div>
    );
}

export default CampoTexto