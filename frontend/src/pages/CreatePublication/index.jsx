import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addProductsServer, selectProductsById } from '../../reducers/ProductsSlice';

import Footer from "../../components/Footer";
import Header from "../../components/Header";

import defaultProfile from "../../images/defaultProfile.jpeg";

import "../../styles/Scheduling.css";

export default function CreatePublication() {
    let { id } = useParams();

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

    function createProduct(e){
        e.preventDefault();
        
        if(actionType === 'formPublication/addProduct'){
            newProduct.images = [defaultProfile];
            dispatch(addProductsServer(newProduct));
            alert("Produto Cadastrado com sucesso!");
        } 
        
        navigate("/");
    }

    function cancelButton(e){
        e.preventDefault();
        navigate("/")
    }

    return (
        <>
        <Header/>
            <div className="main-container">
                <form action="#" method="post" id="form-container">
                    <legend>Criar Publicação</legend>

                    <label htmlFor="title" className="form-content">Título:</label>
                    <input type="text" name="name" className="form-content" value={newProduct.name} onChange={handleInputChange} required/>

                    <label htmlFor="price" className="form-content">Preço:</label>
                    <input type="number" name="price" className="form-content" value={newProduct.price} onChange={handleInputChange} required/>

                    <label htmlFor="images" className="form-content">Image:</label>
                    <input type="file" name="images" className="form-content" value={newProduct.images} onChange={handleInputChange} required/>

                    <div className="button-container">
                        <button type="submit" id="submit" onClick={(e)=>cancelButton(e)}>Cancelar</button>
                        <button type="submit" id="submit" onClick={(e)=>createProduct(e)}>Publicar</button>
                    </div>
                </form>
            </div>
        <Footer/>
        </>
    );
}