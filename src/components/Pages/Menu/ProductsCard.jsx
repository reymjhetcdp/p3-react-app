import { useContext } from 'react';

import classes from './ProductsCard.module.css';
import ProductsForm from './ProductsForm';
import CartContext from '../../store/CartContext';

function ProductsCard(props) {
  const contextCart = useContext(CartContext);

  const handleAddToCart = (amount) => {
    contextCart.addItem({
      id: props.id,
      name: props.title,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <div className={classes.card}>
      <div className={classes.cardImg}>
        <img src={props.img} alt={props.title} />
      </div>
      <div className={classes.cardDescription}>
        <p>{props.category}</p>
        <h2>{props.title}</h2>
        <div className={classes.price}>
          <p>Price: ${props.price}</p>
        </div>
        <ProductsForm onAdd={handleAddToCart} />
      </div>
    </div>
  );
}

export default ProductsCard;
