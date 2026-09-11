import '../styles/Card.css'
import Favoritar from './Favoritar.jsx';
import { useState } from 'react';

function Card({ nome, imagem }) {


    return (
        <article className='items'>
            <div className='sla'>

            <div className='card'>
                <img src={imagem} alt={nome} />
                <h2>{nome}</h2>
                <div className='botoes'>

                    <Favoritar />
                </div>
            </div>

            </div>
        </article>
    );
}
export default Card;