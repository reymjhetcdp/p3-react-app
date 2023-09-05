import { useState } from 'react';

import classes from './CartForm.module.css';

function CartForm(props) {
  return (
    <div className={classes.backdrop} onClick={props.onClose}>
      <div className={classes.modal}>
        <div className={classes.content}>
          <div className={classes.title}>
            <h2>Your order was successfully placed</h2>
          </div>
          <div className={classes.message}>
            <h4>Thank you for your order!</h4>
            <button onClick={props.onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartForm;
