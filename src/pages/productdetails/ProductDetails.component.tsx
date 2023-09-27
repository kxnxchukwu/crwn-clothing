import { ReactElement, useMemo } from "react";
import Button from "../../components/button/button.component";
import "./productdetails.styles.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCollection,
  selectIsCollectionFetching,
} from "../../features/shop-slice";
import { Item, addItem } from "../../features/cart-slice";
import Spinner from "../../components/spinner/spinner.component";

export default function ProductDetailsPage(): ReactElement {
  const dispatch = useDispatch();
  const { id, productId } = useParams();
  console.log(id, productId);
  if (!id || !productId) {
    throw new Error("Can not find Collection or Product ID");
  }
  const isFetching = useSelector(selectIsCollectionFetching);

  const collections = useSelector(selectCollection(id.toLowerCase()));

  const { items } = collections;

  const item = useMemo(
    () => items.find(({ id }) => id === parseInt(productId)) as Item,
    [items, productId]
  );

  if (isFetching) {
    return <Spinner />;
  }

  return (
    <div className="product-details-container">
      <div className="col-8">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <div className="col-4">
        <div>
          <div>
            <p>New Season</p>
            <h1>
              {item.name}
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </h1>
          </div>
          <div>
            <p>€{item.price}</p>
            <p>VAT included</p>
          </div>
          <div>
            <Button
              onClick={() => dispatch(addItem({ item }))}
              buttonType="base"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
