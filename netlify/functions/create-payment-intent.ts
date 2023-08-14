import type { Handler, HandlerEvent } from "@netlify/functions";
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const handler: Handler = async (event: HandlerEvent) => {
  try {
    const { amount } = JSON.parse(event.body as string);
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "eur",
      payment_method_types: ["card"],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log({ error });
    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
};

export { handler };
