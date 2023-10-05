import style from "./ExcluirProdutos.module.css";
import "./ExcluirProdutos.scss"
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ExcluirProdutos() {

document.title = "Excluir Produtos";

            const navigate = useNavigate(); 
              //recebendo o ID do produto pelo Hook useParams();          
            const { id } = useParams();

              const [produto, setProduto] = useState(null); // Estado para o produto selecionado
              // Criando função de Exclusão | criei essa função para carregar o produto com base no ID
                useEffect(() => {
                fetch(`http://localhost:5000/produtos/${id}`)
                .then((response) => response.json())
                .then((data) => {
                    setProduto(data);
                })
                .catch((error) => {
                    console.error("Erro ao carregar o produto:", error);
                });
            }, [id]);

          // Excluindo Produto !!!
            const handleExcluirProduto = () => {
            fetch(`http://localhost:5000/produtos/${id}`, {
                method: "DELETE",
                headers: {
                "Content-Type": "application/json",
                },
            }) // Utilizando agora status de servidor para me guiar
            .then((response) => {
                    if (response.status === 204) { // Condição verdadeira 
                        alert("Erro ao excluir o produto. Tente novamente.");
                            navigate("/produtos");
            
                        } else {    
                            alert("Produto excluido ;D");   }   })  // Condição Falsa
        
                            .catch((error) => {
                                console.error("Erro ao excluir o produto:", error);
                                        alert("Erro ao excluir o produto. Tente novamente.");
                                                                                                }); };
    
            if (!produto) {
                return <p>Carregando...</p>;
                }

return (
<>

</>

); 
}
