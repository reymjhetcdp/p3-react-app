import { useContext, useState } from 'react';
import CartContext from '../../store/CartContext';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import CartForm from './CartForm';

function Cart() {
  const [orderButton, setOrderButton] = useState(false);
  const cartContext = useContext(CartContext);

  const total = cartContext.totalAmount;
  const isCartNotEmpty = cartContext.items.length > 0;

  function removeCartItem(id) {
    cartContext.removeItem(id);
  }

  function addCartItem(item) {
    cartContext.addItem({ ...item, amount: 1 });
  }

  function onOrderClick() {
    setOrderButton(true);
    cartContext.items = [];
    cartContext.totalAmount = 0;
  }

  function onCloseButton() {
    setOrderButton(false);
  }

  const cartItems = (
    <ul>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={removeCartItem.bind(null, item.id)}
          onAdd={addCartItem.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <section className={classes.checkout}>
      <div className={classes.cartTitle}>
        <h1>Checkout!</h1>
      </div>
      <div className={classes.cartInfo}>
        <h2>{isCartNotEmpty ? 'Your Cart:' : 'There no items in your Cart'}</h2>
        <div className={classes.cartItem}>{cartItems}</div>

        <h2>Total:</h2>
        <h3>${total}</h3>

        {isCartNotEmpty && (
          <button className={classes.order} onClick={onOrderClick}>
            Order Now
          </button>
        )}

        {orderButton && <CartForm onClose={onCloseButton} />}
      </div>
    </section>
  );
}

export default Cart;
