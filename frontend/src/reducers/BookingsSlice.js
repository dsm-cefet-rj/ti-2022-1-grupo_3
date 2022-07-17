import {createAsyncThunk, createSlice, createEntityAdapter} from '@reduxjs/toolkit';
import { httpDelete, httpGet, httpPost, httpPut } from '../utils';

const bookingsAdapter = createEntityAdapter()

const initialBookings = bookingsAdapter.getInitialState({
    status: 'not_loaded',
    error: null,
})

const baseUrl = 'http://localhost:3004';

export const fetchBookings = createAsyncThunk('database/fetchBookings', async() =>{
    return await httpGet(`${baseUrl}/bookings`)
}, {
    condition: () => {
      const stored = localStorage.getItem('persist:bookings');
      return !stored;
    },
});

export const addBookingServer = createAsyncThunk('database/addBookingServer', async (booking)=>{
    return await httpPost(`${baseUrl}/bookings`,booking)
});

export const deleteBookingServer = createAsyncThunk('database/deleteBooking',async (id)=>{
    await httpDelete(`${baseUrl}/bookings/${id}`)
    return id;
});

export const updateBookingServer = createAsyncThunk('database/updateBookingServer',async (booking)=>{
    return await httpPut(`${baseUrl}/bookings/${booking.id}`,booking)
});

export const bookingsSlice = createSlice({
    name: "bookings",
    initialState: initialBookings,
    extraReducers: {
        [fetchBookings.fulfilled]: (state,{ payload}) =>{ bookingsAdapter.setAll(state,payload);state.status ='loaded'},
        [fetchBookings.pending]: (state)=>{state.status = 'loading'},
        [fetchBookings.rejected]: (state,{error})=>{state.status='failed'; state.error = error.message},
        [addBookingServer.fulfilled]:(state,{payload:booking})=>{state.status="saved"; bookingsAdapter.addOne(state,booking)},
        [deleteBookingServer.fulfilled]:(state,{payload: id})=>{state.status='deleted';bookingsAdapter.removeOne(state,id)},
        [updateBookingServer.fulfilled]: (state,{payload})=>{state.status='updated';bookingsAdapter.upsertOne(state,payload)},
        [deleteBookingServer.pending]:(state)=>{state.status = 'loading'},
        [addBookingServer.pending]:(state)=>{state.status = 'loading'},
        [updateBookingServer.pending]: (state)=>{state.status = 'loading'}
    }
})

export default bookingsSlice.reducer

export const {
    selectAll : selectALLBookings,
    selectById: selectBookingById,
    selectEntities: selectBookingEntities,
    selectTotal: selectBookingsTotal,
} = bookingsAdapter.getSelectors(state=>state.bookings)