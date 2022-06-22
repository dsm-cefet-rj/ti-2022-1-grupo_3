import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { httpGet, httpPost, httpDelete, httpPut } from '../utils';

const sellersAdapter = createEntityAdapter();

const initialState = sellersAdapter.getInitialState({
    status: "not_loaded",
    error: null,
});

const baseUrl = process.env.REACT_APP_BASE_URL;

export const fetchSellers = createAsyncThunk("database/fetchSellers", async () => {
    return await httpGet(`${baseUrl}/sellers`);
});

export const deleteSellersServer = createAsyncThunk("database/deleteSellersServer", async (idSeller) => {
    await httpDelete(`${baseUrl}/sellers/${idSeller}`);
    return idSeller;
});

export const addSellersServer = createAsyncThunk("database/addSellersServer", async (seller) => {
    return await httpPost(`${baseUrl}/sellers`, seller);
});

export const updateSellersServer = createAsyncThunk("database/updateSellersServer", async (seller) => {
    return await httpPut(`${baseUrl}/sellers/${seller.id}`, seller);
});

export const sellersSlice = createSlice({
    name: "sellers",
    initialState: initialState,
    extraReducers: {
        [fetchSellers.pending]: (state, action) => { state.status = "loading";},
        [fetchSellers.fulfilled]: (state, action) => {state.status = "loaded"; sellersAdapter.setAll(state, action.payload);},
        [fetchSellers.rejected]: (state, action) => {state.status = "failed"; state.error = action.error.message;},
        [deleteSellersServer.pending]: (state, action) => {state.status = "loading";},
        [addSellersServer.pending]: (state, action) => {state.status = "loading";},
        [updateSellersServer.pending]: (state, action) => {state.status = "loading";},
        [deleteSellersServer.fulfilled]: (state, { payload: id }) => {state.status = "deleted";sellersAdapter.removeOne(state, id);},
        [addSellersServer.fulfilled]: (state, action) => {state.status = "saved";sellersAdapter.addOne(state, action.payload);},
        [updateSellersServer.fulfilled]: (state, action) => {state.status = "saved";sellersAdapter.upsertOne(state, action.payload);},
    },
  });

  export default sellersSlice.reducer;

  export const {
    selectAll: selectAllSellers,
    selectById: selectSellersById,
    selectIds: selectSellersIds,
  } = sellersAdapter.getSelectors((state) => state.sellers);