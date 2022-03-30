import React from "react";
import './collection.styles.scss';
import CollectionItem from "../collection-item/collection-item.component";
import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const CollectionPage = () => {
    const {collectionId} = useParams();
    const collection = useSelector(selectCollection(collectionId));
    const {title, items} = collection;
    console.log(collection);
    return (
        <div className="collection-page">
        <h2 className="title">{title}</h2>
        <div className="items">
        {items.map(item => (
            <CollectionItem key={item.id} item={item} />
        ))}
        </div>
        </div>
    );
};

export default CollectionPage;