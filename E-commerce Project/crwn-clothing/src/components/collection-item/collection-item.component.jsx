import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.action';

import { CollectionItemStyles, ImageStyle, CollectionFooterStyle, NameSpanStyle, PriceSpanStyle, AddItemStyle } from './collection.item.style';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
    <CollectionItemStyles>
        <ImageStyle className='image' imageUrl={imageUrl}/>
        <CollectionFooterStyle>
            <NameSpanStyle>{name}</NameSpanStyle>
            <PriceSpanStyle>${price}</PriceSpanStyle>
        </CollectionFooterStyle>
    <AddItemStyle onClick={() => addItem(item)} inverted> Add to cart </AddItemStyle>
    </CollectionItemStyles>
)}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);