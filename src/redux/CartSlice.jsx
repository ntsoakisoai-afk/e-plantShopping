import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,

    reducers: {
        addToCart: (state, action) => {
        const product = action.payload;

        const existingItem = state.items.find(
            (item) => item.id === product.id
        );

        if (existingItem) {
            existingItem.quantity += 1;
            existingItem.totalPrice =
            existingItem.quantity * existingItem.price;
        } else {
            state.items.push({
            ...product,
            quantity: 1,
            totalPrice: product.price,
            });
        }

        state.totalQuantity += 1;
        state.totalAmount += product.price;
        },

        increaseQuantity: (state, action) => {
        const item = state.items.find(
            (item) => item.id === action.payload
        );

        if (item) {
            item.quantity += 1;
            item.totalPrice = item.quantity * item.price;

            state.totalQuantity += 1;
            state.totalAmount += item.price;
        }
        },

        decreaseQuantity: (state, action) => {
        const item = state.items.find(
            (item) => item.id === action.payload
        );

        if (item && item.quantity > 1) {
            item.quantity -= 1;
            item.totalPrice = item.quantity * item.price;

            state.totalQuantity -= 1;
            state.totalAmount -= item.price;
        }
        },

        removeFromCart: (state, action) => {
        const item = state.items.find(
            (item) => item.id === action.payload
        );

        if (item) {
            state.totalQuantity -= item.quantity;
            state.totalAmount -= item.totalPrice;

            state.items = state.items.filter(
            (cartItem) => cartItem.id !== action.payload
            );
        }
        },
    },
});

export const {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;