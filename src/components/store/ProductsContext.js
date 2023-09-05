import { createContext } from 'react';

import bp1 from '../../assets/productImages/bp1.jpg';
import bp2 from '../../assets/productImages/bp2.jpg';
import bp3 from '../../assets/productImages/bp3.jpg';
import bp4 from '../../assets/productImages/bp4.jpg';
import d1 from '../../assets/productImages/d1.jpg';
import d2 from '../../assets/productImages/d2.jpg';
import d3 from '../../assets/productImages/d3.jpg';
import d4 from '../../assets/productImages/d4.jpg';
import m1 from '../../assets/productImages/m1.jpg';
import m2 from '../../assets/productImages/m2.jpg';
import m3 from '../../assets/productImages/m3.jpg';
import m4 from '../../assets/productImages/m4.jpg';
import m5 from '../../assets/productImages/m5.jpg';
import s1 from '../../assets/productImages/s1.jpg';
import s2 from '../../assets/productImages/s2.jpg';
import v1 from '../../assets/productImages/v1.jpg';
import v2 from '../../assets/productImages/v2.jpg';
import v3 from '../../assets/productImages/v3.jpg';

const PRODUCTS = [
  //breads and pastries
  {
    id: 1,
    productName: 'Croissant',
    productImage: bp1,
    category: 'Appetizer',
    price: 5,
  },
  {
    id: 2,
    productName: 'Croque Madame',
    productImage: bp2,
    category: 'Appetizer',
    price: 3,
  },
  {
    id: 3,
    productName: 'Jambon Beurre',
    productImage: bp3,
    category: 'Appetizer',
    price: 5,
  },
  {
    id: 4,
    productName: 'Quiche Lorraine',
    productImage: bp4,
    category: 'Appetizer',
    price: 10,
  },
  //dessert
  {
    id: 5,
    productName: 'Chocolate Soufflé',
    productImage: d1,
    category: 'Dessert',
    price: 2,
  },
  {
    id: 6,
    productName: 'Crème Brûlée',
    productImage: d2,
    category: 'Dessert',
    price: 2,
  },
  {
    id: 7,
    productName: 'French Crepes',
    productImage: d3,
    category: 'Dessert',
    price: 5,
  },
  {
    id: 8,
    productName: 'Tarte Tatin',
    productImage: d4,
    category: 'Dessert',
    price: 10,
  },
  //main dishes
  {
    id: 9,
    productName: 'Beef Bourguignon',
    productImage: m1,
    category: 'Main',
    price: 18,
  },
  {
    id: 10,
    productName: 'Coq Au Vin',
    productImage: m2,
    category: 'Main',
    price: 15,
  },
  {
    id: 11,
    productName: 'Pot Au Feu',
    productImage: m3,
    category: 'Main',
    price: 10,
  },
  {
    id: 12,
    productName: 'Rôti De Boeuf',
    productImage: m4,
    category: 'Main',
    price: 25,
  },
  {
    id: 13,
    productName: 'Sausage Cassoulet',
    productImage: m5,
    category: 'Main',
    price: 15,
  },
  //Soup
  {
    id: 14,
    productName: 'Bouillabaisse',
    productImage: s1,
    category: 'Soup',
    price: 8,
  },
  {
    id: 15,
    productName: 'French Onion Soup',
    productImage: s2,
    category: 'Soup',
    price: 8,
  },
  {
    id: 16,
    productName: 'Cauliflower Gratin',
    productImage: v1,
    category: 'Salad',
    price: 10,
  },
  //Veggies
  {
    id: 17,
    productName: 'Ratatouille',
    productImage: v2,
    category: 'Salad',
    price: 12,
  },
  {
    id: 18,
    productName: 'Salad Niçoise',
    productImage: v3,
    category: 'Salad',
    price: 15,
  },
];

const ProductsContext = createContext({
  allProducts: PRODUCTS,
});

export default ProductsContext;
