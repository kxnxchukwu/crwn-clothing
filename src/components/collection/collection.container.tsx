import { ReactElement } from "react";
import "./collection.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";
import { useSelector } from "react-redux";
import {
  selectCollection,
  selectIsCollectionFetching,
} from "../../features/shop-slice";
import { useParams } from "react-router-dom";
import { Item } from "../../features/cart-slice";
import Spinner from "../spinner/spinner.component";

export default function CollectionPageContainer(): ReactElement {
  const { id } = useParams();

  const isFetching = useSelector(selectIsCollectionFetching);

  const collection = useSelector(selectCollection(id as string));
  if (isFetching) {
    return <Spinner />;
  }

  console.log(collection);
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title.toUpperCase()}</h2>
      <div className="items">
        {items.map((item: Item) => (
          <CollectionItem key={item.id} item={item} title={title} />
        ))}
      </div>
    </div>
  );
}
