import './Colecoes.css'

import verao from '../../assets/verao.jpg'
import scarpins from '../../assets/scarpins.jpg'
import bolsas from '../../assets/bolsas.jpg'

export default function Colecoes(){
    return(
        <section className='colecoes'>
            <div className='titulos'>
                <h2>Colecões 2026</h2>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quisquam perspiciatis iusto consequuntur voluptatibus perferendis delectus minima voluptate eum autem quibusdam facere temporibus enim fugit dicta veritatis dignissimos, sit error.</p>
                 <button className='btn'>Comprar agora</button>
            </div>

            <div className='grid-colecoes'>
                <div className='item'>
                    <img src={verao} alt='colecao verao'/>
                </div>

                <div className='item grande'>
                    <img src={bolsas} alt='colecao verao'/>
                </div>

                <div className='item'>
                    <img src={scarpins} alt='colecao verao'/>
                </div>
            </div>
        </section>
    )
}
