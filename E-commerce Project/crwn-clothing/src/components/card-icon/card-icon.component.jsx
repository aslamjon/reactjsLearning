import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.action';
import { selectCartItemCount } from '../../redux/cart/cart.selectors';

import { CartIconStyle, ShoppingIcon, ItemCount } from './card-icon.style';

const CardIcon = ({ toggleCartHidden, itemCount }) => (
    <CartIconStyle onClick={toggleCartHidden}>
        <ShoppingIcon />
        <ItemCount>{itemCount}</ItemCount>
    </CartIconStyle>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CardIcon);