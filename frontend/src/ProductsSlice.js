import { createSlice } from "@reduxjs/toolkit";

import exemplo1 from "./images/exemplo1.jpeg"
import exemplo2 from "./images/exemplo2.jpeg"
import exemplo3 from "./images/exemplo3.jpeg"
import exemplo4 from "./images/exemplo4.jpeg"

const initialProducts = [
    {
        id: 1,
        images: [exemplo1],
        name: "Cabelo Loiro",
        price: 30.00,
        seller: "Cabeleireiro A",
      },
      {
        id: 2,
        images: [exemplo2],
        name: "Cabelo Curto",
        price: 45.00,
        seller: "Cabeleireiro B",
      },
      {
        id: 3,
        images: [exemplo3],
        name: "Cabelo Cacheado",
        price: 37.50,
        seller: "Cabeleireiro C",
      },
      {
        id: 4,
        images: [exemplo4],
        name: "Cabelo Curto Liso",
        price: 100.00,
        seller: "Cabeleireiro D",
      },
      {
        id: 5,
        images: [exemplo1],
        name: "Cabelo Comprido",
        price: 80.00,
        seller: "Cabeleireiro E",
      },
];

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

export const productsSlice = createSlice({
    name: 'products',
    initialState: initialProducts,
    reducers: {
        addProduct: (state, action) => addProductReducer(state, action.payload),
        updateProduct: (state, action) => updateProductReducer(state, action.payload),
        deleteProduct: (state, action) => deleteProductReducer(state, action.payload)
    }
})

export const { addProduct, updateProduct, deleteProduct } = productsSlice.actions
export default productsSlice.reducer