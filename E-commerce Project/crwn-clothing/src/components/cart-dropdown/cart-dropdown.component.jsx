import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.action';

import { CartDropdownStyle, CartItemsStyle, EmptyMessage, CartDropDownButton } from './cart-dropdown.style';
// Props ni ichida dispatch bor. shuni chaqiramiz
const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropdownStyle>
        <CartItemsStyle > 
        {
            cartItems.length ?
            cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem}/>
            ))
            :
            <EmptyMessage>Your cart is empty</EmptyMessage>
        }
        </CartItemsStyle>
        <CartDropDownButton onClick={() => {
            history.push('/checkout')
            dispatch(toggleCartHidden())
            }}>GO TO CHECKOUT</CartDropDownButton>
            {/* dispatch yordamida card.actiondagi 'toggleCartHidden' ni chaqiramiz */}
    </CartDropdownStyle>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));