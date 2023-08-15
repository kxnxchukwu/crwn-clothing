import React from "react";
import "./cart-item.styles.scss";
import { Item } from "../../redux/cart/cart.actions";

export interface CartItemProps {
  item: Item;
}

const CartItem = ({
  item: { imageUrl, price, name, quantity },
}: CartItemProps) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x €{price}
      </span>
    </div>
  </div>
);

export default React.memo(CartItem);
