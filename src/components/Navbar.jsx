import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import classes from './Navbar.module.css';
import CartButton from './Pages/Cart/CartButton/CartButton';

function Navbar() {
  return (
    <header className={classes.navbar}>
      <div className={classes.logo}>
        <img src={Logo} alt="La Cuisine Partout" />
      </div>
      <div className={classes.nav}>
        <ul className={classes.list}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <Link to="/cart">
            <CartButton />
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
