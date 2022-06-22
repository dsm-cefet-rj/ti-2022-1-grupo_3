import React, { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { deleteSellersServer, updateSellersServer, selectSellersById } from "../../reducers/SellersSlice";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "../../styles/EditSchedule.css";

export default function EditCabeleireiro() {

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

    function editSeller(e){
        e.preventDefault();
        
        if(actionType === 'registerCabeleireiro/updateSeller'){
            dispatch(updateSellersServer(newSeller));
            alert("Cabeleireiro Atualizado com sucesso!");
        }
        
        navigate("/");
    }

    const seller = useSelector(state=>selectSellersById(state,id))
     const status = useSelector(state=>state.sellers.status)
     const error = useSelector(state=>state.sellers.error)

    if (status === 'loading'){
        return (<p>Carregando o Cabeleireiro...</p>);
    }else if (status === 'failed'){
        return(<p>Error: {error}</p>);
    }

    function handleDelete(e){
        e.preventDefault();
        dispatch(deleteSellersServer(id));
        alert("Cabeleireiro excluido!");
        navigate("/");
    }

    function cancelButton(e){
        e.preventDefault();
        navigate("/")
    }

    return(
        <>
        <Header/>

            <div className="main-container">
                <form action="#" id="form-container">
                    <legend>Editar Cabeleireiro</legend>
                    <p>value={seller.id}</p>

                    <label htmlFor="name" className="form-content">Nome:</label>
                    <input type="text" name="name" className="form-content" value={newSeller.name} onChange={handleInputChange} required/>

                    <label htmlFor="username" className="form-content">Username:</label>
                    <input type="text" name="username" className="form-content" value={newSeller.username} onChange={handleInputChange} required/>

                    <label htmlFor="birthday" className="form-content">Data de Nascimento:</label>
                    <input type="text" name="birthday" className="form-content" value={newSeller.birthday} onChange={handleInputChange} required/>

                    <label htmlFor="email" className="form-content">E-mail:</label>
                    <input type="text" name="email" className="form-content" value={newSeller.email} onChange={handleInputChange} required/>

                    <label htmlFor="password" className="form-content">Senha:</label>
                    <input type="password" name="password" className="form-content" value={newSeller.password} onChange={handleInputChange} required/>

                    <div className="button-container">
                        <button type="submit" id="submit" onClick={(e)=>cancelButton(e)} >Cancelar</button>
                        <button type="submit" id="submit" onClick={(e)=>editSeller(e)}>Editar</button>
                        <button type="submit" id="submit" onClick={handleDelete}>Excluir Cabeleireiro</button>
                    </div>
                </form>
            </div>

        <Footer/>
        </>
    )
}
