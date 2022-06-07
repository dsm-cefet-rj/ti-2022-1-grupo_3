import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectAllProducts } from "../../ProductsSlice";

import Card from "../../components/Card"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

import "../../styles/Home.css"

export default function Home(props) {

    const products = useSelector(selectAllProducts)
    const status = useSelector(state => state.products.status)
    const error = useSelector(state => state.products.error)
    const dispatch = useDispatch();

    const renderProduct = (product) => {
        return (
            <React.Fragment>
                {product.status !== "Agendado" && (
                    <Card product={product} key={product.name} />
                )}
            </React.Fragment>
        );
    };

    useEffect(() => {
        if(status === 'not loaded'){
            dispatch(fetchProducts())
        }else if(status === 'not loaded'){
            setTimeout(() => dispatch(fetchProducts()), 5000)
        }
    }, [status, dispatch])
  
    let productList = '';

    if(status === 'loaded' || status === 'saved' || status === 'deleted'){
        productList = products.map(renderProduct);
    }else if (status === 'loading'){
        productList = <div>Carregando Publicações</div>;
    }else if (status === 'failed'){
        productList = <div>Error: {error}</div>;
    }

    return (
        <>
        <Header/>
            <section>
                <div id="feed-container">
                    {productList}
                </div>
            </section>
        <Footer/>
        </>
    )
}