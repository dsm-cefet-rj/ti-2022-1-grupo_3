import React from "react"

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import CardSchendule from "../../components/CardSchedule";

export default function Schedule(props) {
    return(
        <>
        <Header/>
            <div className="main-container" id="form-container">
                <legend>Sua Agenda!</legend>
                <br></br>
            </div>

            <div id="feed-container">
                {
                    props.bookings.map((booking)=>{
                        return(
                            <CardSchendule key={booking.id} booking ={booking}/>
                        )
                    })
                }
            </div>

        <Footer/>
        </>
    );
}