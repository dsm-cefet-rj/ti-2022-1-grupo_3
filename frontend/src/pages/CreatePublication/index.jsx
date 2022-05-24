import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Footer from "../../components/Footer";
import Header from "../../components/Header";

import "../../styles/Schenduling.css";

export default function CreatePublication(props) {

    const [newProduct, setNewProduct] = useState({
        "id": props.products.length,
    });

    let navigate = useNavigate();

    function handleInputChange(e){
        setNewProduct({...newProduct, [e.target.name]: e.target.value})
    }

    function createProduct(e){
        e.preventDefault();
        props.setProducts(props.products.concat(newProduct));
        alert("Publicação Criada com sucesso!");
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