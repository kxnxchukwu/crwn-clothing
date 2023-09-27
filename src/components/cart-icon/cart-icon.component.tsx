import { ReactElement } from "react";
import { ShoppingIcon } from "../shopping-bag/ShoppingBag.component";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleCartHidden,
  selectCartItemsCount,
} from "../../features/cart-slice";
import { CartIconContainer, ItemCount } from "./cart-icon.styles";

export default function CartIcon(): ReactElement {
  const dispatch = useDispatch();
  const itemCount = useSelector(selectCartItemsCount);
  const handleClick = () => {
    dispatch(toggleCartHidden());
  };

  return (
    <CartIconContainer onClick={handleClick}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
  );
}
