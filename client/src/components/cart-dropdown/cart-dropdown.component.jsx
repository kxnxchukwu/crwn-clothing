import React from "react";
import CartItem from "../cart-item/cart-item.component";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { useHistory } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import Button from '../button/button.component';

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles';

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <CartDropdownContainer>
        <CartItems>
            {
                cartItems.length ? (
                cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem}/>)))
                :
                (
                    <EmptyMessage>Your Cart is Empty</EmptyMessage>
                )
            }
        </CartItems>
        <Button 
        onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
        }}
        >GO TO CHECKOUT
        </Button>
    </CartDropdownContainer>
    );
}

export default CartDropdown;