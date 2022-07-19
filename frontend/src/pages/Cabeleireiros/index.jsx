import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSellers, selectAllSellers } from "../../reducers/SellersSlice";

import CardCabeleireiro from "../../components/CardCabeleireiro";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "../../styles/Home.css";

export default function Cabeleireiros(props) {
    const sellers = useSelector(selectAllSellers)
    const status = useSelector(state => state.sellers.status)
    const error = useSelector(state => state.sellers.error)
    const dispatch = useDispatch();

    const renderSeller = (seller) => {
        return (
            <CardCabeleireiro sellers={seller} key={seller.id} />
        );
    };

    useEffect(() => {
        if(status !== 'loaded'){
            dispatch(fetchSellers());
        }
    }, [status, dispatch])

    let sellerList = '';

    if(status === 'loaded' || status === 'saved' || status === 'deleted'){
        sellerList = sellers.map(renderSeller);
    }else if (status === 'loading'){
        sellerList = <div>Carregando Caneleireiros</div>;
    }else if (status === 'failed'){
        sellerList = <div>Error: {error}</div>;
    }

    return (
        <>
        <Header/>
            <section>
                <div id="feed-container">
                    {sellerList}
                </div>
            </section>
        <Footer/>
        </>
    )
}