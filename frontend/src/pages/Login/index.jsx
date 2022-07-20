import { Link, Navigate, useNavigate } from 'react-router-dom';
import React, { useMemo, useState } from "react";
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../../reducers/UserSlice";

import { fetchBookings } from '../../reducers/BookingsSlice';
import { fetchSellers } from '../../reducers/SellersSlice';
import { fetchProducts } from '../../reducers/ProductsSlice';
import "../../styles/Register.css";

function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
}

export default function Login() {
    const username = useQuery().get('username') || "";
    const error = useQuery().get('error') || "";

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({ username, password: ""});
    const [isDisabled, setDisabled] = useState(false);

    function handleInputChange(e){
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    async function loginUser(e) {
        e.preventDefault();
        setDisabled(true);

        const response = await dispatch(login(credentials));
        
        if (response.type !== 'user/login/rejected') {
            dispatch(fetchBookings());
            dispatch(fetchSellers());
            dispatch(fetchProducts());
            navigate('/');
            return;
        }

        navigate('/login?error=Login+ou+senha+inválidos');
        setDisabled(false);
    }

    return(
        <>
            <div className="main-container">
                <form id="form-container" >
                    <legend>Login</legend>
                    <p style={{ visibility: error ? 'visible' : 'hidden', color: 'red' }}>{error}</p>

                    <label htmlFor="username" className="form-content">Username:</label>
                    <input type="text" name="username" value={credentials.username} onChange={handleInputChange} className="form-content" required/>

                    <label htmlFor="password" className="form-content">Senha:</label>
                    <input type="password" name="password" value={credentials.password} onChange={handleInputChange} className="form-content" required/>

                    <div className="button-container">
                        <button type="submit" id="submit" onClick={(e)=>loginUser(e)} disabled={isDisabled}>Login</button>
                    </div>

                    <br></br>
                    <Link to="/userRegister">Não possuo login.</Link>
                </form>
            </div>
        </>
    )
}