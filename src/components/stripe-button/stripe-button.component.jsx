import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51KTLtgCGRVU8CKHqKT2iAIDdUiI5RE31ncXEAbGfgcktUAW3EvYH59tZ7PgUMePyrAWhVChP8x9iUDfaKK1kvrJA00yOgjOknz";

    const onToken = token => {
        console.log(token);
        alert("Payment Successful");
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Limited"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is €${price}`}
            amount={priceForStripe}
            currency="eur"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;