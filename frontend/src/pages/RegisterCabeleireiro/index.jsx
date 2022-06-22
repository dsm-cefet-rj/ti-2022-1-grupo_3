import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addSellersServer, selectSellersById } from "../../reducers/SellerSlice";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

import "../../styles/Register.css";

export default function Register() {

    let { id } = useParams();
    id = parseInt(id);

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
            dispatch(addSellersServer(newSeller));
            alert("Cabeleireiro Cadastrado com sucesso!");
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
            <form action="#" id="form-container">
                <legend>Cadastrar Cabeleireiro</legend>

                <label for="name" className="form-content">Nome:</label>
                <input type="text" name="name" className="form-content" value={newSeller.name} onChange={handleInputChange} required/>

                <label for="username" className="form-content">Username:</label>
                <input type="text" name="username" className="form-content" value={newSeller.username} onChange={handleInputChange} required/>

                <label for="birthday" className="form-content">Data de Nascimento:</label>
                <input type="text" name="birthday" className="form-content" value={newSeller.birthday} onChange={handleInputChange} required/>

                <label for="email" className="form-content">E-mail:</label>
                <input type="text" name="email" className="form-content" value={newSeller.email} onChange={handleInputChange} required/>

                <label for="password" className="form-content">Senha:</label>
                <input type="password" name="password" className="form-content" value={newSeller.password} onChange={handleInputChange} required/>

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