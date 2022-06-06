import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { addProduct, updateProduct } from '../../ProductsSlice';

import Footer from "../../components/Footer";
import Header from "../../components/Header";

import "../../styles/Schenduling.css";

export default function CreatePublication() {

    const products = useSelector(state => state.products)

    let { id } = useParams();
    id = parseInt(id);

    const [newProduct, setNewProduct] = useState(
        id ? products.filter((product) => product.id === id)[0] ?? {} : {}
    );

    const [actionType, ] = useState(
        id ?
            products.filter((product) => product.id === id)[0]
            ? 'newPublication/updateProduct'
            : 'newPublication/addProduct'
            : 'newPublication/addProduct'
    );

    const dispatch = useDispatch();
    const navigate = useNavigate();


    function handleInputChange(e){
        setNewProduct({...newProduct, [e.target.name]: e.target.value})
    }

    function createProduct(e){
        e.preventDefault();
        if(actionType === 'newPublication/addProduct'){
            dispatch(addProduct(newProduct));
        } else {
            dispatch(updateProduct(newProduct));
        }
        
        alert("Produto Cadastrado com sucesso!");
        navigate("/");
    }

    return (
        <>
        <Header/>
            <div className="main-container">
                <form action="#" method="post" id="form-container">
                    <legend>Criar Publicação</legend>

                    <label for="title" className="form-content">Título:</label>
                    <input type="text" name="name" className="form-content" value={newProduct.name} onChange={handleInputChange} required/>

                    <label for="price" className="form-content">Preço:</label>
                    <input type="number" name="price" className="form-content" value={newProduct.price} onChange={handleInputChange} required/>

                    <label for="images" className="form-content">Image:</label>
                    <input type="file" name="images" className="form-content" value={newProduct.images} onChange={handleInputChange} required/>

                    <button type="submit" id="submit" onClick={(e)=>createProduct(e)}>Publicar</button>
                </form>
            </div>
        <Footer/>
        </>
    );
}