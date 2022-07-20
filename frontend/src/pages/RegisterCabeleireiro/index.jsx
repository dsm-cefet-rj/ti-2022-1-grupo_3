import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addSellersServer, selectSellersById } from "../../reducers/SellersSlice";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

import defaultProfile from "../../images/defaultProfile.jpeg";

import "../../styles/Register.css";

export default function Register() {
    let { id } = useParams();

    const sellerFound = useSelector((state) => selectSellersById(state, id));

    const [newSeller, setNewSeller] = useState(id ? sellerFound ?? {} : {});

    const [actionType] = useState(
        id ?
            sellerFound
            ? "registerCabeleireiro/updateSeller"
            : "registerCabeleireiro/addSeller"
            : "registerCabeleireiro/addSeller"
    );

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleInputChange(e){
        setNewSeller({...newSeller, [e.target.name]: e.target.value})
    }

    function createSeller(e){
        e.preventDefault();
        
        if(actionType === 'registerCabeleireiro/addSeller'){
            newSeller.images = [defaultProfile]
            dispatch(addSellersServer(newSeller));
            alert("Cabeleireiro Cadastrado com sucesso!");
        }
        
        navigate("/cabeleireiros");
    }

    function cancelButton(e){
        e.preventDefault();
        navigate("/")
    }

    return (
        <>
        <Header/>
            <div className="main-container">
            <form action="#" id="form-container">
                <legend>Cadastrar Cabeleireiro</legend>

                <label htmlFor="name" className="form-content">Nome:</label>
                <input type="text" name="name" className="form-content" value={newSeller.name} onChange={handleInputChange} required/>

                <label htmlFor="username" className="form-content">Username:</label>
                <input type="text" name="username" className="form-content" value={newSeller.username} onChange={handleInputChange} required/>


                <label htmlFor="email" className="form-content">E-mail:</label>
                <input type="text" name="email" className="form-content" value={newSeller.email} onChange={handleInputChange} required/>

                <label htmlFor="password" className="form-content">Senha:</label>
                <input type="password" name="password" className="form-content" value={newSeller.password} onChange={handleInputChange} required/>

                <label htmlFor="images" className="form-content">URL da Imagem:</label>
                <input type="text" name="images" className="form-content" placeholder="URL" value={newSeller.images} onChange={handleInputChange} required/>
                
                <div className="button-container">
                    <button type="submit" id="submit" onClick={(e)=>cancelButton(e)}>Cancelar</button>
                    <button type="submit" id="submit" onClick={(e)=>createSeller(e)}>Cadastrar</button>
                </div>
            </form>
        </div>

    <Footer/>
    </>
    );
}