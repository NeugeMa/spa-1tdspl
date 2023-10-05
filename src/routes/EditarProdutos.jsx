import { useNavigate, useParams } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";
import { useState } from "react";

export default function EditarProdutos() {

  document.title = "Editar Produtos";

  //Criando um mecanismo de navegação com useNavigate()
  const navigate = useNavigate();

  //Receber o ID do produto pelo HOOK useParams( );
  const {id} = useParams();

  //Recuperar o produto na lista pelo ID.
  const produtoRecuperado = ListaProdutos.filter( produto => produto.id == id );

  const [produto,setProduto] = useState({
    id: produtoRecuperado[0].id,
    nome: produtoRecuperado[0].nome,
    desc: produtoRecuperado[0].desc,
    preco: produtoRecuperado[0].preco,
    img: produtoRecuperado[0].img,
  });

  const handleChange = (event) =>{
  
    //Executando uma desestruturação no elemento que disparou a ação.
    const {name, value} = event.target;

    //Utilizando as propriedades desestruturadas eu vou setar elas no objeto produto
    // utilizando o SPREAD.
    setProduto({...produto,[name]:value});
  }
  
  const handleSubmit = (event) =>{
    event.preventDefault();
    
    let indice;

    indice = ListaProdutos.findIndex((item) => item.id === produto.id);
    
    ListaProdutos.splice(indice, 1, produto);

    alert("Produto alterado com sucesso!");

    navigate("/produtos")
  }
  

  return (
      <div>
        <h1>Editar Produtos</h1> 
  
        <div>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Produto a ser Editado</legend>
              <div>
                <input type="hidden" name="id" value={produto.id}/>
              </div>
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
                <input type="text" name="preco" id="idPreco" value={produto.preco} onChange={handleChange}/>
              </div>
              <div>
                <button>EDITAR</button>
              </div>

            </fieldset>
          </form>
        </div>

          <div>
            <p>Nome: {produto.nome}</p>
            <p>Desc: {produto.desc}</p>
            <p>Preço: {produto.preco}</p>
          </div>


      </div>
  )
}
