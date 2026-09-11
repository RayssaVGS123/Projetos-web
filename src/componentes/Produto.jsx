import '../styles/Produto.css'
import Favoritar from './Favoritar.jsx';
import { useState} from 'react';

function Produto({nome, valor, imagem, aoClicar}){
const [quantidade, setQuantidade] = useState(1);

    return(
        <article className='card'>
            <img src={imagem} alt={nome} />
            <h2>{nome}</h2>
            <div className='valor'>R${valor}</div>
            <div>
                <button className='adicionar'
                onClick={() => setQuantidade(quantidade + 1)}>+</button>
                <span>{quantidade}</span>
                <button className='tirar' onClick={() => setQuantidade(quantidade - 1)} disable={quantidade === 1}>-</button>
            </div>
            <div className='botoes'>
            <button className='compra' onClick={aoClicar}>Comprar</button>
            <Favoritar />
            </div>
        </article>
    );
}
export default Produto;