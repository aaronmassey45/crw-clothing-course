import React from 'react';

import CustomButton from '../custom-button/CustomButton';

import './cart-dropdown.styles.scss';

const CartDropDown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">hi</div>
      <CustomButton>Go to checkout</CustomButton>
    </div>
  );
};

export default CartDropDown;
