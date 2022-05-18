import Card from "../../components/Card"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

import "../../styles/Home.css"

export default function Home() {
    return (
        <>
        <Header/>
            <section>
                <div id="feed-container">
                    <Card image="./exemplo1.jpeg" preco="R$ 30,00"/>
                    <Card image="./exemplo2.jpeg" preco="R$ 50,00"/>
                    <Card image="./exemplo3.jpeg" preco="R$ 100,00"/>
                    <Card image="./exemplo4.jpeg" preco="R$ 46,00"/>
                    <Card image="./exemplo1.jpeg" preco="R$ 30,00"/>
                    <Card image="./exemplo2.jpeg" preco="R$ 50,00"/>
                    <Card image="./exemplo3.jpeg" preco="R$ 100,00"/>
                    <Card image="./exemplo4.jpeg" preco="R$ 46,00"/>
                </div>
            </section>
        <Footer/>
        </>
    )
}