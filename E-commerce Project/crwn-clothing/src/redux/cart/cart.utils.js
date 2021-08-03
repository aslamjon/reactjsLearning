export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existigCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if (existigCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id 
            ? {...cartItem, quantity: cartItem.quantity +1}
            : cartItem
            )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )
    // if quantity equal 1 then remove item
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }
    // else if cartItem.id equal payload obj then minus 1
    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id ?
        {...cartItem, quantity: cartItem.quantity - 1} 
        : cartItem
    )
}