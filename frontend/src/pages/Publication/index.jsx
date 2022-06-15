import React, { useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { deleteProductsServer, updateProductsServer, selectProductsById } from '../../ProductsSlice';

import Header from "../../components/Header"
import Footer from "../../components/Footer"

import "../../styles/Publication.css"

export default function Publication() {

    let { id } = useParams();
    id = parseInt(id);
    
    const productFound = useSelector(state => selectProductsById(state, id))
    
    const [newProduct, setNewProduct] = useState(id ? productFound ?? {} : {});
    
    const [actionType] = useState(
        id ? 
        productFound
        ? 'formPublication/updateProduct'
        : 'formPublication/addProduct'
        : 'formPublication/addProduct'
    );
        
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleInputChange(e){
        setNewProduct({...newProduct, [e.target.name]: e.target.value})
    }
    
    function editarProduct(e){
        e.preventDefault();
        
        if(actionType === 'formPublication/updateProduct'){
            dispatch(updateProductsServer(newProduct));
            alert("Produto Atualizado com sucesso!");
        }
        
        navigate("/");
    }
    
    // *----------------------------------------------------------------------*

    const product = useSelector(state => selectProductsById(state, id));
    const status = useSelector(state=>state.products.status);
    const error = useSelector(state=>state.products.error);

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

    function cancelButton(e){
        e.preventDefault();
        navigate("/")
    }

    return(
        <>
        <Header/>
        
            <div className="column-left">
                <img id="image-publi" src={product.images} width="40%" height="40%"  alt=""/>
            </div>

            <div className="column-right">
                <p> <span><b>Cabeleireiro: </b>{product.name}</span> </p>
                <input type="text" name="name" value={newProduct.name} onChange={handleInputChange} required/>

                <p> <span><b>R$ </b>{product.price}</span></p>
                <input type="number" name="price" value={newProduct.price} onChange={handleInputChange} required/>

                <p> <span><b>Cabeleireiro: </b> {product.seller} </span></p>
                
                <button type="submit" id="submit" onClick={(e)=>cancelButton(e)} >Cancelar</button>
                <button type="submit" id="submit" onClick={(e)=>editarProduct(e)}>Editar</button>
                <button type="submit" id="submit" onClick={handleDelete}>Excluir Publicação</button>
            </div>
        <Footer/>
        </>
    )
}