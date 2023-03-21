import './slider.css'
import logo_atração from 'C:/Users/Conrado/Desktop/consult/src/components/imagens/u-magnet.png'
import logo_interacao from 'C:/Users/Conrado/Desktop/consult/src/components/imagens/pessoas.png'
import logo_vendas from 'C:/Users/Conrado/Desktop/consult/src/components/imagens/nota-de-dolar.png'
import logo_fidelizacao from 'C:/Users/Conrado/Desktop/consult/src/components/imagens/estrela.png'
import { motion } from 'framer-motion'
import Explanation_box from '../explanation_box';

const Slider = ()=>{
    return(
        <section className='section4'>
            <motion.div className='carousel' whileTap={{ cursor: 'grabbing' }}>
                <motion.div 
                className='hold_boxes' 
                drag='x'
                dragConstraints={{right:0, left: -1150}}
                initial={{ x: -269 }}>            
                    <Explanation_box logo={logo_atração} title='Atração' text='O primeiro aspecto necessário a um projeto de Marketing Digital é ter fontes de Tráfego. Se o seu público não conhecer o seu produto, será impossível gerar vendas.'></Explanation_box>
                    <Explanation_box logo={logo_interacao} title='Interação' text='Quando conquistamos a audiência, precisamos que o público ame o que oferecemos. Por isso, desenvolvemos estratégias para engajar com seu público.'></Explanation_box>
                    <Explanation_box logo={logo_vendas} title='Vendas' text='Com o público engajado, estamos prontos para transformá-lo em vendas! Aplicamos estratégias para que isso aconteça de forma online e offiline.'></Explanation_box>
                    <Explanation_box logo={logo_fidelizacao} title='Fidelização' text='Depois de vendermos, precisamos encontrar maneiras para manter o seu público conectado com seu negócio e assim aumentar as vendas por cliente.'></Explanation_box>
                </motion.div>
            </motion.div>

        </section>
    )
}

export default Slider