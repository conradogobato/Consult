import './clients.css'
import logo_kibon from '/components/imagens/kibon1024.png'
import logo_brasvalle from '/components/imagens/BrasValle-removebg-preview.png'

const Clients = ()=>{
    return(
    <div className='clients'>
        <div className='client'>
            <img src={logo_kibon}></img>
            <p>Kibon</p>
        </div>
        <div className='client'>
            <img src={logo_brasvalle}></img>
            <p>BrasValle</p>
        </div>
    </div>
    )
}

export default Clients