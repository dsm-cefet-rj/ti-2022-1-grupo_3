import React, { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { deleteProductsServer, updateProductsServer, selectProductsById } from '../../reducers/ProductsSlice';
import { selectSellersById } from '../../reducers/SellerSlice';

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "../../styles/EditSchedule.css";

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
    
    function editProduct(e){
        e.preventDefault();
        
        if(actionType === 'formPublication/updateProduct'){
            dispatch(updateProductsServer(newProduct));
            alert("Produto Atualizado com sucesso!");
        }
        
        navigate("/");
    }
   
    const product = useSelector(state => selectProductsById(state, id));
    const seller = useSelector(state=>selectSellersById(state,product.idSeller))
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

            <div className="main-container" id="form-container">
                <legend>Editar Publicação</legend>
                <br></br>
            </div>

            <div className="container-editschedule">

                <div className="column-right">
                    <img id="image-publi" src={product.images} alt="Imagem da publicação"/>
                </div>

                <div className="column-left">

                <table className="table-editschedule">
                        <tr>
                            <td><p><b>Título: </b></p></td>
                            <td><p><span>{product.name}</span></p></td>
                            <td><input type="text" name="name" value={newProduct.name} onChange={handleInputChange} required/></td>
                        </tr>

                        <tr>
                            <td><p><b>R$ </b></p></td>
                            <td><p><span>{product.price}</span></p></td>
                            <input type="number" name="price" value={newProduct.price} onChange={handleInputChange} required/>
                        </tr>

                        <tr>
                            <td><p><b>Cabeleireiro: </b></p></td>
                            <td><p><span>{seller.name}</span></p></td>
                        </tr>
                    </table>
                    
                    <div className="buttom-cardschedule">
                        <button type="submit" id="submit" onClick={(e)=>cancelButton(e)} >Cancelar</button>
                        <button type="submit" id="submit" onClick={(e)=>editProduct(e)}>Editar</button>
                        <button type="submit" id="submit" onClick={handleDelete}>Excluir Publicação</button>
                    </div>
                </div>
            </div>
        
        <Footer/>
        </>
    )
}