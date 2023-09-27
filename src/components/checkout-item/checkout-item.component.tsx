import { ReactElement } from "react";
import { useDispatch } from "react-redux";
import {
  addItem,
  clearItemFromCart,
  removeCartItem as removeItem,
  Item,
} from "../../features/cart-slice";
import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from "./checkout-item.styles";

export interface CheckoutItemProps {
  cartItem: Item;
}

export default function CheckoutItem({
  cartItem,
}: CheckoutItemProps): ReactElement {
  const dispatch = useDispatch();
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div
          className="arrow"
          onClick={() => dispatch(removeItem({ item: cartItem }))}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div
          className="arrow"
          onClick={() => dispatch(addItem({ item: cartItem }))}
        >
          &#10095;
        </div>
      </QuantityContainer>
      <TextContainer className="price">€{price}</TextContainer>
      <RemoveButtonContainer
        onClick={() => dispatch(clearItemFromCart({ item: cartItem }))}
      >
        &#10006;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
}
