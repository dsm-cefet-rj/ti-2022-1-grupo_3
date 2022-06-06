import { createSlice } from "@reduxjs/toolkit";

import exemplo1 from "./images/exemplo1.jpeg"
import exemplo2 from "./images/exemplo2.jpeg"
import exemplo3 from "./images/exemplo3.jpeg"

const initialBookings = [
    {
        id: 1,
        images: [exemplo1],
        name: "Cabelo Loiro",
        price: 30.00,
        seller: "Cabeleireiro Top",
        date: "25/05/2022",
        time: "21:28",
        pay: "Dinheiro",
        location: "Casa",
      },
      {
        id: 2,
        images: [exemplo2],
        name: "Cabelo Curto",
        price: 45.00,
        seller: "Cabeleireiro Legal",
        date: "25/05/2022",
        time: "21:28",
        pay: "Dinheiro",
        location: "Casa",
      },
      {
        id: 3,
        images: [exemplo3],
        name: "Cabelo Cacheado",
        price: 37.50,
        seller: "Cabeleireiro Trem",
        date: "25/05/2022",
        time: "21:28",
        pay: "Dinheiro",
        location: "Casa",
      },
];

function addBookingReducer(bookings, booking) {
    let proxId = 1 + booking.map(booking => booking.id).reduce((x, y) => Math.max(x, y));
    return bookings.concat([{...booking, id: proxId}]);
}

function deleteBookingReducer(bookings, id) {
    return bookings.filter((booking) => booking.id !== id);
}

function updateBookingReducer(bookings, booking) {
    let index = booking.map(booking => booking.id).indexOF(booking.id);
    bookings.splice(index, 1, booking);
    return bookings;
}

export const bookingSlice = createSlice({
    name: 'bookings',
    initialState: initialBookings,
    reducers:{
        addBooking: (state, action) => addBookingReducer(state, action.payload),
        updateBooking: (state, action) => updateBookingReducer(state, action.payload),
        deleteBooking: (state, action) => deleteBookingReducer(state, action.payload)
    }
})

export const { addBooking, updateBooking, deleteBooking } = bookingSlice.actions
export default bookingSlice.reducer