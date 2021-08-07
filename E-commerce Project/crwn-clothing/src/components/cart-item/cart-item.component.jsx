import React from 'react'

import { CartItemContainer, CartItemImg, CartItemDetails } from './cart-item.style';

const CartItem = ({ item: { imageUrl, price, name, quantity }}) => (
    <CartItemContainer>
        <CartItemImg src={imageUrl} alt="" />
        <CartItemDetails>
            <span className="name">{name}</span>
            <span className="price">
            {quantity} x ${price}
            </span>
        </CartItemDetails>
    </CartItemContainer>
)

export default CartItem