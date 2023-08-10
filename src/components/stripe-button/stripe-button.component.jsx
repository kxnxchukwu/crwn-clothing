import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';
import { toast } from "react-toastify";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51KTLtgCGRVU8CKHqKT2iAIDdUiI5RE31ncXEAbGfgcktUAW3EvYH59tZ7PgUMePyrAWhVChP8x9iUDfaKK1kvrJA00yOgjOknz";

    const onToken = token => {
        axios({
            url: "payment",
            method: "post",
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            toast("Payment Successful.", { type: "success" });
        }).catch(error => {
            toast(
                "Something went wrong, There was an issue with your payment. Please ensure you are using the provided credit card.",
                { type: "error" }
            );
            console.log("Payment Error: ", JSON.parse(error));
        })
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
            currency="EUR"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;