import { createSelector } from "reselect";
import { Item } from "./cart.actions";

/* eslint-disable  @typescript-eslint/no-explicit-any */
const selectCart = (state: { cart: any }) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCardHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuantity: number, cartItems: Item) =>
        accumalatedQuantity + cartItems.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumalatedQuantity: number, cartItems: Item) =>
      accumalatedQuantity + cartItems.quantity * cartItems.price,
    0
  )
);
