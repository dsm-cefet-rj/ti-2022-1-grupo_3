import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialProducts = []

function addProductReducer(products, product){
    let proxId = 1 + products.map(product => product.id).reduce((x, y) => Math.max(x,y));
    return products.concat([{...product, id: proxId}]);
}

function deleteProductReducer(products, id){
    return products.filter((product) => product.id !== id);  
}

function updateProductReducer(products, product){
    let index = products.map(product => product.id).indexOf(product.id);
    products.splice(index, 1, product);
    return products;
}

export const fetchProducts = createAsyncThunk('database/fetchProducts',
    async () => {
        return await (await fetch ('http://localhost:3004/products')).json();
    }
);

function fullfillProductsReducer(productsState, productsFetched){
    return productsFetched;
}

export const productsSlice = createSlice({
    name: "products",
    initialState: initialProducts,
    reducers: {
        addProduct: (state, action) => addProductReducer(state, action.payload),
        updateProduct: (state, action) => updateProductReducer(state, action.payload),
        deleteProduct: (state, action) => deleteProductReducer(state, action.payload)
    },
    extraReducers: {
        [fetchProducts.fulfilled]: (state, action) => fullfillProductsReducer(state, action.payload),
    }
})

export const { addProduct, updateProduct, deleteProduct } = productsSlice.actions
export default productsSlice.reducer