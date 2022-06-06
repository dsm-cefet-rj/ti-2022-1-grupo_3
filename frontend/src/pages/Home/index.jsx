import React from "react"
import { useSelector } from "react-redux";

import Card from "../../components/Card"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

import "../../styles/Home.css"

export default function Home(props) {

    const products = useSelector(state => state.products)
    const renderProdcuct = (product) => {
        return (
          <React.Fragment>
            {product.status !== "Agendado" && (
              <Card product={product} key={product.name} />
            )}
          </React.Fragment>
        );
    };

    return (
        <>
        <Header/>
            <section>
                <div id="feed-container">
                    {products.map(renderProdcuct)}
                </div>
            </section>
        <Footer/>
        </>
    )
}