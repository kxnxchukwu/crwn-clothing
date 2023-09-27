import { FormEvent, ReactElement, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import {
  PaymentButton,
  PaymentFormContainer,
  FormContainer,
} from "./payment-form.styles";
import { StripeCardElement } from "@stripe/stripe-js";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, selectCartTotal } from "../../features/cart-slice";
import { selectCurrentUser } from "../../features/user-reducer";

export default function PaymentForm(): ReactElement {
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);

  const paymentHandler = async (event: FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement) as StripeCardElement,
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      toast(
        "Something went wrong, There was an issue with your payment. Please ensure you are using the provided credit card.",
        { type: "error" }
      );
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        toast("Payment Successful.", { type: "success" });
        dispatch(clearCart());
      }
    }
  };
  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <PaymentButton isLoading={isProcessingPayment} buttonType="inverted">
          Pay Now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
}
