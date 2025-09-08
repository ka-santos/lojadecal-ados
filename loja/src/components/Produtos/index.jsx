import "./Produtos.css";

import bolsa from "../../assets/bolsa.png";
import note from "../../assets/portaNotebook.png";
import sandalia1 from "../../assets/sandalia1.png";
import sandalia2 from "../../assets/sandalia2.png";
import tamanco from "../../assets/tamanco.png";
import tenis from "../../assets/tenis.png";

export default function Produtos() {
  return (
    <section className="produtos">
      <div className="titulos">
        <h2>Novidades</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          asperiores doloribus, nisi eum soluta animi quibusdam mollitia sunt
          earum magni dolor reiciendis itaque eius culpa omnis illum a, tempora
          amet!
        </p>

        <div className="produtos_grid">
          <div className="card">
            <div className="card-image">
              <img src={sandalia1} alt="sandalia" />
              <span className="bandge-venda">Mais Vendido</span>
            </div>

            <div className="card-info">
              <h3>Sandalia de Couro</h3>
              <p className="preco">R$ 349,90</p>
              <button className="btn">Comprar agora</button>
            </div>
          </div>

         <div className="card">
            <div className="card-image">
              <img src={sandalia2} alt="sandalia" />
            </div>

            <div className="card-info">
              <h3>Sándalia Rosa</h3>
              <p className="preco">R$ 229,90</p>
              <button className="btn">Comprar agora</button>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <img src={tamanco} alt="tamanco" />
              <span className="bandge-desconto">-10%</span>
            </div>

            <div className="card-info">
              <h3>Tamanco de Couro</h3>
              <p className="preco">R$ 369,90</p>
              <button className="btn">Comprar agora</button>
            </div>
          </div>

           <div className="card">
            <div className="card-image">
              <img src={bolsa} alt="bolsa" />
              <span className="bandge-desconto">-10%</span>
            </div>

            <div className="card-info">
              <h3>Bolsa Shopper</h3>
              <p className="preco">R$ 269,90</p>
              <button className="btn">Comprar agora</button>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <img src={note} alt="tamanco" />
              <span className="bandge-desconto">-10%</span>
            </div>

            <div className="card-info">
              <h3>Porta Notebook</h3>
              <p className="preco">R$ 369,90</p>
              <button className="btn">Comprar agora</button>
            </div>
          </div>

           <div className="card">
            <div className="card-image">
              <img src={tenis} alt="tenis" />
              <span className="bandge-venda">Mais Vendido</span>
            </div>

            <div className="card-info">
              <h3>Tênis de Couro</h3>
              <p className="preco">R$ 169,90</p>
              <button className="btn">Comprar agora</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
