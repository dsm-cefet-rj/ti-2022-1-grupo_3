import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { httpGet, httpPost, httpDelete, httpPut } from '../utils';

const productsAdapter = createEntityAdapter();

const initialState = productsAdapter.getInitialState({
    status: "not_loaded",
    error: null
});

const baseUrl = 'http://localhost:3004';

export const fetchProducts = createAsyncThunk('database/fetchProducts', async() => {
    return await httpGet(`${baseUrl}/products`);
}, {
    condition: () => {
      const stored = localStorage.getItem('persist:products');
      return !stored;
    },
});

export const deleteProductsServer = createAsyncThunk('database/deleteProductsServer', async(idProduct) => {
    await httpDelete(`${baseUrl}/products/${idProduct}`);
    return idProduct;
});

export const addProductsServer = createAsyncThunk('database/addProductsServer', async(product) => {
    return await httpPost(`${baseUrl}/products`, product);
});

export const updateProductsServer = createAsyncThunk('database/updateProductsServer', async(product) => {
    return await httpPut(`${baseUrl}/products/${product.id}`, product);
})

export const productsSlice = createSlice({
    name: "products",
    initialState: initialState,
    extraReducers: {
        [fetchProducts.pending]: (state, action) => {state.status = "loading"},
        [fetchProducts.fulfilled]: (state, action) => {state.status = "loaded"; productsAdapter.setAll(state, action.payload);},
        [fetchProducts.rejected]: (state, action) => {state.status = "failed"; state.error = action.error.message},
        [deleteProductsServer.pending]: (state, action) => {state.status = "loading"},
        [addProductsServer.pending]: (state, action) => {state.status = "loading"},
        [updateProductsServer.pending]: (state, action) => {state.status = "loading"},
        [deleteProductsServer.fulfilled]: (state,{payload:id}) => {state.status = "deleted"; productsAdapter.removeOne(state, id);},
        [addProductsServer.fulfilled]: (state, action) => {state.status = "saved"; productsAdapter.addOne(state, action.payload);},
        [updateProductsServer.fulfilled]: (state, action) => {state.status = "saved"; productsAdapter.upsertOne(state, action.payload);},
    }
})

export default productsSlice.reducer

export const {
    selectAll: selectAllProducts,
    selectById: selectProductsById,
    selectIds: selectProductsIds
} = productsAdapter.getSelectors(state => state.products)
