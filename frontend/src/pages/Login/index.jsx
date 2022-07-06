import { Link } from 'react-router-dom';
import { React } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllUsers } from "../../reducers/UserSlice";

import "../../styles/Register.css";

export default function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function loginUser() {
        alert("Autenticado com sucesso!");
        navigate("/");
    }

    function cancelButton(e) {
        e.preventDefault();
        navigate("/");
    }

    return(
        <>
            <div className="main-container">
                <form id="form-container" >
                    <legend>Login</legend>

                    <label htmlFor="username" className="form-content">Username:</label>
                    <input type="text" name="username" className="form-content" required/>

                    <label htmlFor="email" className="form-content">E-mail:</label>
                    <input type="text" name="email" className="form-content" required/>

                    <label htmlFor="password" className="form-content">Senha:</label>
                    <input type="password" name="password" className="form-content" required/>

                    <div className="button-container">
                        <button type="submit" id="submit" onClick={(e)=>cancelButton(e)}>Cancelar</button>
                        <button type="submit" id="submit" onClick={(e)=>loginUser(e)}>Login</button>
                    </div>

                    <br></br>
                    <a>
                        <Link to="/userRegister">Não possuo login.</Link>
                    </a>
                </form>
            </div>
        </>
    )
}