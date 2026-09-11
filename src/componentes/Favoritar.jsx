import '../styles/Card.css'
import { useState} from 'react';


function Favoritar() {
    const [favoritado, setFavoritado] = useState(false);

    function alternarFavorito() {
        setFavoritado(!favoritado);
    }

    return (
        <>
        <button 
            className="botao-favoritar"
            onClick={alternarFavorito}
        >
            {favoritado ? "♥ Favoritado" : "♡ Favoritar"}
        </button>

        <button className='detalhes'>
            Ver Detalhes
        </button>
        </>
        
    );
}

export default Favoritar;