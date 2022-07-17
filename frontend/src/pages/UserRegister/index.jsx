import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUp } from "../../reducers/UserSlice";

import "../../styles/Register.css";

export default function UserRegister() {    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [newUser, setNewUser] = useState({ name: "", username: "", email: "", password: "", id: "" });

    function handleInputChange(e){
        setNewUser({...newUser, [e.target.name]: e.target.value})
    }

    function createUser(e) {
        e.preventDefault();
        dispatch(signUp({...newUser, isSeller: true}));
        alert("Cadastrado com sucesso! Faça seu login");
        navigate(`/login?username=${newUser.username}`);
    }

    function cancelButton(e) {
        e.preventDefault();
        navigate("/");
    }

    return(
        <>
            <div className="main-container">
                <form action="#" id="form-container">
                    <legend>Registre-se</legend>
                    <label htmlFor="username" className="form-content">Nome:</label>
                    <input type="text" name="username" className="form-content" value={newUser.username} onChange={handleInputChange} required/>

                    <label htmlFor="username" className="form-content">Username:</label>
                    <input type="text" name="username" className="form-content" value={newUser.username} onChange={handleInputChange} required/>

                    <label htmlFor="email" className="form-content">E-mail:</label>
                    <input type="text" name="email" className="form-content" value={newUser.email} onChange={handleInputChange} required/>

                    <label htmlFor="password" className="form-content">Senha:</label>
                    <input type="password" name="password" className="form-content" value={newUser.password} onChange={handleInputChange} required/>

                    <div className="button-container">
                        <button type="submit" id="submit" onClick={(e)=>cancelButton(e)}>Cancelar</button>
                        <button type="submit" id="submit" onClick={(e)=>createUser(e)}>Cadastrar</button>
                    </div>

                    <br></br>
                    <a>
                        <Link to="/login">Já possuo login.</Link>
                    </a>
                </form>
            </div>
        </>
    )
}