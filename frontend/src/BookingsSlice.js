import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialBookings = []

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

export const fetchBookings = createAsyncThunk('database/fetchBookings', async() =>{
    return await (await fetch('http://localhost:3004/bookings')).json();
});

function fullfillBookingsReducer(productsState, bookingsFetched){
    return bookingsFetched;
}

export const bookingSlice = createSlice({
    name: "bookings",
    initialState: initialBookings,
    reducers:{
        addBooking: (state, action) => addBookingReducer(state, action.payload),
        updateBooking: (state, action) => updateBookingReducer(state, action.payload),
        deleteBooking: (state, action) => deleteBookingReducer(state, action.payload)
    },
    extraReducers: {
        [fetchBookings.fulfilled]: (state, action) => fullfillBookingsReducer(state, action.payload),
    }
})

export const { addBooking, updateBooking, deleteBooking } = bookingSlice.actions
export default bookingSlice.reducer