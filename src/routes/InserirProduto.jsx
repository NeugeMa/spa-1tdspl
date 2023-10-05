import { useState } from "react";
import {ListaProdutos} from "../components/ListaProdutos";
import { useNavigate } from "react-router-dom";

export default function InserirProduto() {
    document.title = 'Inserir Produto';
    const navigate = useNavigate();

    // const [produtoId, setProdutoId] = useState(0);
    let idProd = parseInt(ListaProdutos[ListaProdutos.length-1].id) + 1;
    const [produto, setProduto] = useState({
        id:idProd,
        nome:"",
        desc:"",
        preco:0.0,
        img:"" 
    });
    
    const handleChange = (e)=>{
        e.preventDefault();
        const {name,value} = e.target;
        setProduto({...produto,[name]:value});
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        
        // setProdutoId(idProd);
        // const{id} = produto;
        // setProduto({...produto,id:produtoId})

        ListaProdutos.push(produto);

        alert("Produto cadastrado com sucesso...");
        navigate("/produtos")
    };

  return (
    <div>
        <h1>Inserir Produto</h1>
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Cadastrar Produto</legend>
                    <div>
                        <label htmlFor="idNome">Nome:</label>
                        <input type="text" name="nome" id="idNome" value={produto.nome} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="idDesc">Descrição:</label>
                        <input type="text" name="desc" id="idDesc" value={produto.desc} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="idPreco">Preço:</label>
                        <input type="number" name="preco" id="idPreco" value={produto.preco} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="idImg">Imagem:</label>
                        <input type="url" name="img" id="idImg" value={produto.img} onChange={handleChange}/>
                    </div>
                    <div>
                        <button>Cadastrar</button>
                    </div>
                </fieldset>
            </form>
        </div>
    </div>
  )
}
