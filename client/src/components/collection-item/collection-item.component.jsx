import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import {
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer
  } from './collection-item.styles';
  
const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item;
    return (
        <CollectionItemContainer>
            <BackgroundImage
            className="image"
            style={{backgroundImage: `url(${imageUrl})`
            }}
            />
        <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>€{price}</PriceContainer>
        <AddButton onClick={() => addItem(item)} inverted>Add to Cart</AddButton>
        </CollectionFooterContainer>
        </CollectionItemContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);