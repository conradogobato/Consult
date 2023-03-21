import './contact.css'
import { useState } from 'react'
const Contact = ()=>{
    const [valor, setValor] = useState('')
    const digit = (evento)=>{
        setValor(evento.target.value)
        console.log(valor)
    }
    const onsave = (event)=>{
        event.preventDefault()
        console.log('Form enviado!')
    }
    return(
        <section className='section6'>
            <h1>Entre em contato!</h1>
            <form onSubmit={onsave}>
                <label>Nome...</label>
                <input onChange={digit}></input>
                <label>Email...</label>
                <input onChange={digit}></input>
                <label>Whats app...</label>
                <input onChange={digit}></input>
                <label>Faturamento...</label>
                <input onChange={digit}></input>
                <button>Enviar</button>
            </form>
        </section>
    )
}

export default Contact