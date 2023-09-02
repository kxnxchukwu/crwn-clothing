import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Item {
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
  id: number;
}

interface CartState {
  cartItems: Item[];
  hidden: boolean;
}

const initialState: CartState = { cartItems: [], hidden: false } as CartState;

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<{ item: Item }>) => {
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.item.id
      );

      if (existingCartItem) {
        console.log("here");
        const newCartItemsState = state.cartItems.map((cartItem) =>
          cartItem.id === action.payload.item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );

        state.cartItems = newCartItemsState;
      } else {
        const newCartItemsState = [
          ...state.cartItems,
          { ...action.payload.item, quantity: 1 },
        ];

        state.cartItems = newCartItemsState;
      }
    },
    removeCartItem: (state, action: PayloadAction<{ item: Item }>) => {
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.item.id
      );

      if (existingCartItem?.quantity === 1) {
        const newCartItemsState = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.item.id
        );

        state.cartItems = newCartItemsState;
      } else {
        const newCartItemsState = state.cartItems.map((cartItem) =>
          cartItem.id === action.payload.item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
        state.cartItems = newCartItemsState;
      }
    },
    clearItemFromCart: (state, action: PayloadAction<{ item: Item }>) => {
      const newCartItemsState = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.item.id
      );
      state.cartItems = newCartItemsState;
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    toggleCartHidden: (state) => {
      state.hidden = !state.hidden;
    },
  },
});

export const {
  toggleCartHidden,
  addItem,
  removeCartItem,
  clearItemFromCart,
  clearCart,
} = cartSlice.actions;

export const selectCardHidden = (state: { cart: CartState }) =>
  state.cart.hidden;

export const selectCartItems = (state: { cart: CartState }) =>
  state.cart.cartItems;

export const selectCartItemsCount = (state: { cart: CartState }) =>
  state.cart.cartItems.reduce(
    (accumalatedQuantity: number, cartItems: Item) =>
      accumalatedQuantity + cartItems.quantity,
    0
  );

export const selectCartTotal = (state: { cart: CartState }) =>
  state.cart.cartItems.reduce(
    (accumalatedQuantity: number, cartItems: Item) =>
      accumalatedQuantity + cartItems.quantity * cartItems.price,
    0
  );

export default cartSlice.reducer;
