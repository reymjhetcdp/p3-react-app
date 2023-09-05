import { createContext } from 'react';

const CartContext = createContext({
  item: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: (id) => {},
});

export default CartContext;
