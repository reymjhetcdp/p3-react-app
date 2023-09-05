import { useContext, useEffect, useState } from 'react';
import classes from './Menu.module.css';

import ProductsContext from '../../store/ProductsContext';
import ProductsCard from './ProductsCard';

function Menu() {
  const { allProducts } = useContext(ProductsContext);
  const [category, setCategory] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  useEffect(() => {
    if (category) {
      const filtered = allProducts.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(allProducts);
    }
  }, [allProducts, category]);

  const mapProductsCard = (prod) => {
    return (
      <ProductsCard
        id={prod.id}
        key={prod.id}
        img={prod.productImage}
        category={prod.category}
        title={prod.productName}
        price={prod.price}
      />
    );
  };

  return (
    <section className={classes.menuList}>
      <div className={classes.titleContainer}>
        <h1>Our Menu</h1>
        <p>'De la bonne bouffe et de bons amis'</p>
        <div className={classes.filter}>
          <label>Filter by Category: </label>
          <select
            className={classes.filterOptions}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All</option>
            <option value="Main">Main</option>
            <option value="Dessert">Dessert</option>
            <option value="Appetizer">Appetizer</option>
            <option value="Soup">Soup</option>
            <option value="Salad">Salad</option>
          </select>
        </div>
      </div>
      <div className={classes.menu}>
        {filteredProducts.map(mapProductsCard)}
      </div>
    </section>
  );
}

export default Menu;
