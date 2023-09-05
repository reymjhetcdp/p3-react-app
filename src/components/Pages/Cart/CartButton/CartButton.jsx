import CartIcon from './CartIcon';
import classes from './CartButton.module.css';

function CartButton() {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
    </button>
  );
}

export default CartButton;
