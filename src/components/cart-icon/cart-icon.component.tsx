import { ReactElement } from "react";
import { ShoppingIcon } from "../shopping-bag/ShoppingBag.component";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { CartIconContainer, ItemCount } from "./cart-icon.styles";

export default function CartIcon(): ReactElement {
  const dispatch = useDispatch();
  const itemCount: number = useSelector(selectCartItemsCount);
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
