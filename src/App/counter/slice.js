// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";
import Swal from 'sweetalert2'

const initialState={
    value:0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment:(state) => {
            state.value += 1
        },
        decrement:(state) => {
            state.value -= 1
        },
    },
})

const initialCartState = {
    cart: [],
  }

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        addProduct: (state, action) => {
            const newProduct = {
                id: action.payload.id,
                title: action.payload.title,
                img: action.payload.img,
                author: action.payload.author,
                price: action.payload.price,
            };
            const isPresent = state.cart.some(product => product.id === action.payload.id);
            // The some() method is an array method in JavaScript. It checks if at least one element in the array passes the test implemented by the provided function.
            if (!isPresent) {
                state.cart.push(newProduct);
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Item already present!",
                  });
            }
        },
          removeProduct: (state, action) => {
            state.cart = state.cart.filter(product => product.id !== action.payload);
          },
    }
})

// Action creators for slice
export const {increment, decrement} = counterSlice.actions;
export const {addProduct, removeProduct} = cartSlice.actions;

// Combine all slices into a single reducer object
export const rootReducer = {
    counter: counterSlice.reducer,
    cart: cartSlice.reducer,
  };
