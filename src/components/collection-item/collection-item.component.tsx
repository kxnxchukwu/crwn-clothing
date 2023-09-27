import { ReactElement } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItem, Item } from "../../features/cart-slice";
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
  title: string;
}

export default function CollectionItem({
  item,
  title,
}: CollectionItemProps): ReactElement {
  const { name, price, imageUrl, id } = item;
  const dispatch = useDispatch();
  return (
    <CollectionItemContainer>
      <BackgroundImage
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
        imageUrl={imageUrl}
      />
      <CollectionFooterContainer>
        <Link to={`/shop/${title.toLowerCase()}/${id}`}>
          <NameContainer>{name}</NameContainer>
        </Link>
        <PriceContainer>€{price}</PriceContainer>
        <AddButton onClick={() => dispatch(addItem({ item }))} inverted>
          Add to Cart
        </AddButton>
      </CollectionFooterContainer>
    </CollectionItemContainer>
  );
}
