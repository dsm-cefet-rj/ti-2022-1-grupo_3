import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { deleteProductsServer, fetchProducts, updateProductsServer, selectProductsById } from '../../ProductsSlice';

import Header from "../../components/Header"
import Footer from "../../components/Footer"

import "../../styles/Publication.css"

export default function Publication() {

    const navigate = useNavigate();
    let { id } = useParams();
    id = parseInt(id);

    const product = useSelector(state => selectProductsById(state, id));
    const status = useSelector(state=>state.products.status);
    const error = useSelector(state=>state.products.error);
    const dispatch = useDispatch();

    if (status === 'loading'){
        return (<p>Carregando o produto...</p>);
    }else if (status === 'failed'){
        return(<p>Error: {error}</p>);
    }

    function handleDelete(e){
        e.preventDefault();
        dispatch(deleteProductsServer(id));
        alert("Produto excluido!");
        navigate("/");
    }

    return(
        <>
        <Header/>
        
            <div className="column-left">
                <img id="image-publi" src={product.images} width="40%" height="40%"  alt=""/>
            </div>

            <div className="column-right">
                <Link to={`/formPublication/${product.id}`}><p>Editar</p></Link>
                <button type="submit" id="submit" onClick={handleDelete}>Excluir Publicação</button>
            </div>
        <Footer/>
        </>
    )
}