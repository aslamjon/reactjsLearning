import React from 'react';
import { ReactComponent as Logo } from '../../assets/4.1crown.svg';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils'
import CardIcon from '../card-icon/card-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';


import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.style';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className="logo" />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop" >SHOP</OptionLink>
            <OptionLink to="/shop" >CONTACT</OptionLink>
            {
                currentUser ?
                <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
                :
                <OptionLink to="/signin">SIGN IN</OptionLink>
            }
            <CardIcon />
        </OptionsContainer>
        {hidden ? null : <CartDropdown />}
    </HeaderContainer>
)

const mapStateToProps =  createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);