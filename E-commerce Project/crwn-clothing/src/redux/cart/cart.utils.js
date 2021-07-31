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