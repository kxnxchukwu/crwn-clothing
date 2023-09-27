import { ReactElement } from "react";
import "./collection.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";
import { useSelector } from "react-redux";
import {
  selectCollection,
  selectIsCollectionsLoaded,
} from "../../features/shop-slice";
import { useParams } from "react-router-dom";
import { Item } from "../../features/cart-slice";
import Spinner from "../spinner/spinner.component";

export default function CollectionPageContainer(): ReactElement {
  const { collectionId } = useParams();
  if (!collectionId) {
    throw new Error("Collection ID is Not Found");
  }

  const isLoading = useSelector(selectIsCollectionsLoaded);

  const collection = useSelector(selectCollection(collectionId));
  if (isLoading) {
    return <Spinner />;
  }

  if (!collection) {
    throw new Error("Collection is Not Found");
  }
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item: Item) => (
          <CollectionItem key={item.id} item={item} title="title" />
        ))}
      </div>
    </div>
  );
}
