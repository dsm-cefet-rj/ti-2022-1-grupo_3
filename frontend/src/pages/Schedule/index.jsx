import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBookings, selectALLBookings } from '../../reducers/BookingsSlice';

import CardSchendule from "../../components/CardSchedule";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Schedule() {

    const bookings = useSelector(selectALLBookings);
    const status = useSelector(state=>state.bookings.status);
    const error = useSelector(state=>state.bookings.error);
    const dispatch = useDispatch();
    
    const renderBooking = (booking) => {
        return (
            <>
                {booking.status !== "Agendado" && (
                    <CardSchendule booking={booking} key={booking.id} />
                )}
            </>
        );
    };

    useEffect(() => {
        if(status === 'not loaded'){
            dispatch(fetchBookings())
        }else if(status === 'not loaded'){
            setTimeout(() => dispatch(fetchBookings()), 5000)
        }
    }, [status, dispatch])
    
    let bookingList = '';

    if(status === 'loaded' || status === 'saved' || status === 'deleted'){
        bookingList = bookings.map(renderBooking);
    }else if (status === 'loading'){
        bookingList = <div>Carregando Agendamento</div>;
    }else if (status === 'failed'){
        bookingList = <div>Error: {error}</div>;
    }

    return(
        <>
        <Header/>
            <div className="main-container" id="form-container">
                <legend>Agendamentos</legend>
                <br></br>
            </div>

            <div id="feed-container">
                {bookingList}
            </div>

        <Footer/>
        </>
    );
}