import React from "react"

import Card from "../../components/Card"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

import "../../styles/Home.css"

export default function Home(props) {

    const renderProdcuct = (product) => {
        return (
          <>
            {product.status !== "Agendado" && (
              <Card product={product} key={product.name} />
            )}
          </>
        );
    };

    return (
        <>
        <Header/>
            <section>
                <div id="feed-container">
                    {props.products.map(renderProdcuct)}
                </div>
            </section>
        <Footer/>
        </>
    )
}