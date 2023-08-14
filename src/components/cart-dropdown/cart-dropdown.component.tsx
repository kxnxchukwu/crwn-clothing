import React, { ReactElement } from "react";
import CartItem from "../cart-item/cart-item.component";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { useNavigate } from "react-router-dom";
import { Item, toggleCartHidden } from "../../redux/cart/cart.actions";
import Button from "../button/button.component";

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";

export default function CartDropdown(): ReactElement {
  const cartItems: Item[] = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your Cart is Empty</EmptyMessage>
        )}
      </CartItems>
      <Button
        onClick={() => {
          navigate("/checkout");
          dispatch(toggleCartHidden());
        }}
        buttonType="base"
      >
        GO TO CHECKOUT
      </Button>
    </CartDropdownContainer>
  );
}
