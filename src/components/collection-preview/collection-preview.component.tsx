import React, { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.component";

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from "./collection-preview.styles";
import { Item } from "../../redux/cart/cart.actions";

export interface CollectionPreviewProps {
  title: string;
  items: Item[];
}

export default function CollectionPreview({
  title,
  items,
}: CollectionPreviewProps): ReactElement {
  const navigate = useNavigate();

  return (
    <CollectionPreviewContainer>
      <TitleContainer onClick={() => navigate(`${title.toLowerCase()}`)}>
        {title.toUpperCase()}
      </TitleContainer>
      <PreviewContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
}
