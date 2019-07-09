import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const publishableKey = 'pk_test_ODu2dNfjqVzm2qoTdd0ui22u';

const onToken = token => {
  console.log(token);
  alert('Payment successful');
};

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
