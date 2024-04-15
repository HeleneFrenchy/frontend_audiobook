import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 123
    },
    {
      id: 124
    },
  ],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [
        ...state.items,
        action.payload
      ];
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
