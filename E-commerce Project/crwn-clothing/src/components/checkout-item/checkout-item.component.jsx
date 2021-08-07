import React from 'react'
import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.action';

import { CheckoutItemContainer, ImageContainer, QuantityContainer, TextContainer, RemoveButtonContainer } from './checkout-item.style';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
    <CheckoutItemContainer>
        <ImageContainer>
            <img src={imageUrl} alt="item" />
        </ImageContainer>
        <TextContainer>{name}</TextContainer>
        <QuantityContainer>
            <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
            <div className="value">{quantity}</div>
            <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
        </QuantityContainer>
        <TextContainer>{price}</TextContainer>
        <RemoveButtonContainer onClick={() => clearItem(cartItem)}>&#10005;</RemoveButtonContainer>
        {/* clearItem orqali to'liq obj ni yuborayapmiz */}
    </CheckoutItemContainer>
)}

const mapDispatchToProps = dispatch => ({
    clearItem: item => {
        // console.log(item);
        // item yuborgan objectga teng 
        // dispatch yordamida action ni chaqirayapmiz
        return dispatch(clearItemFromCart(item))
    },
    addItem: item => dispatch(addItem(item)),
    removeItem: item => {
        console.log(item);
        dispatch(removeItem(item))
    }
})

export default connect(null, mapDispatchToProps)(CheckoutItem);