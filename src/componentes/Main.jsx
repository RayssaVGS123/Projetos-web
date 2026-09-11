// import '../styles/Main.css'
import Produto from './Produto.jsx';
function Main({ produtos, aoAdicionar }) {

    return (
        <main className="conteudo-principal">
            <h1>Cardápio</h1>            
            <section className="vitrine">
                {produtos.map(produto => (
                    <Produto
                        key={produto.id} 
                        id={produto.id}
                        nome={produto.nome}
                        preco={produto.preco}
                        imagem={produto.imagem}
                        aoClicar={aoAdicionar}
                    />
                ))}
            </section>
        </main>
    );
}

export default Main;