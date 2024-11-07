// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";
import Swal from 'sweetalert2'

// Helper functions for local storage
const loadCartFromLocalStorage = () => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
};

const saveCartToLocalStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
};

const initialCartState = {
    cart: loadCartFromLocalStorage(),
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
                quantity: 1, //initial quantity
            };
            const isPresent = state.cart.some(product => product.id === action.payload.id);
            // The some() method is an array method in JavaScript. It checks if at least one element in the array passes the test implemented by the provided function.
            if (!isPresent) {
                state.cart.push(newProduct);
                saveCartToLocalStorage(state.cart); // Save updated cart
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
            saveCartToLocalStorage(state.cart); // Save updated cart
        },
        incrementQty: (state, action) => {
            const product = state.cart.find(product => product.id === action.payload);
            if (product) {
                product.quantity += 1;
                saveCartToLocalStorage(state.cart); // Save updated cart
            }
        },
        decrementQty: (state, action) => {
            const product = state.cart.find(product => product.id === action.payload);
            if (product && product.quantity > 1) {
                product.quantity -= 1;
            } else if (product && product.quantity === 1) {
                state.cart = state.cart.filter(product => product.id !== action.payload); // Remove product if quantity is 0
            }
            saveCartToLocalStorage(state.cart); // Save updated cart
        },
    }
})

// Action creators for slice
export const { addProduct, removeProduct, incrementQty, decrementQty } = cartSlice.actions;

// Combine all slices into a single reducer object
export const rootReducer = {
    cart: cartSlice.reducer,
  };
