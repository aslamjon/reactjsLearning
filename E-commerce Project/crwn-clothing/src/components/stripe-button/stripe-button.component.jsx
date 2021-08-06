import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JLOOrIDfZ56hiyAwL2cadkndQ2HZLFvxrSmSYXZ66KFJ99LdWOcd8xjnZkSVvDMfIp6qzsWx5lGwk0h78pBmQjj0064LfQXvv';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        // https://github.com/azmenak/react-stripe-checkout
        <StripeCheckout 
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}
export default StripeCheckoutButton;