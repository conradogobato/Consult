import Info_box from '../info_box'
import './our_services.css'
import logo_strategy from '../imagens/estrategia.png'
import logo_marketing from '../imagens/digital-marketing.png'
import logo_traffic from '../imagens/midia-social.png'



const Our_services = () =>{
    return(
        <section className='Section2'>
            <h2>NOSSOS SERVIÇOS</h2>
            <h1>Trabalhamos com fortalecimento de 3 pilares fundamentais do seu negócio</h1>
            <div className='boxes'>
                <Info_box image={logo_marketing} title='Tráfego pago' text='Permita que as pessoas conheçam o que você vende através de campanhas que captam o seu público ideal e o instiga a escolher sua empresa ao invés do concorrente.'></Info_box>
                <Info_box image={logo_traffic} title='Acessoria de conteúdo' text='Marque presença nas redes sociais, com propósito e estratégia, para não correr o risco de perder oportunidades e espaço de mercado diante dos clientes.'></Info_box>
                <Info_box image={logo_strategy} title='Estratégia' text='Deixe que nossas soft skills e hard skills elevem a sua empresa para outro nível. Afinal, postar e impulsionar sem estratégia não é marketing.'></Info_box>
            </div>
        </section>
    )
}

export default Our_services