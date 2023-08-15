import { ReactElement } from "react";
import { useDispatch } from "react-redux";
import { Item, addItem } from "../../redux/cart/cart.actions";
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from "./collection-item.styles";

export interface CollectionItemProps {
  item: Item;
}

export default function CollectionItem({
  item,
}: CollectionItemProps): ReactElement {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();
  return (
    <CollectionItemContainer>
      <BackgroundImage
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
        imageUrl={imageUrl}
      />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>€{price}</PriceContainer>
        <AddButton onClick={() => dispatch(addItem(item))} inverted>
          Add to Cart
        </AddButton>
      </CollectionFooterContainer>
    </CollectionItemContainer>
  );
}
