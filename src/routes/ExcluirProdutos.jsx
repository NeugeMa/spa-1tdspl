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

