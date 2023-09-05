import { Link } from 'react-router-dom';
import classes from './Home.module.css';
import Slides from './Slides';

import slide1 from '../../../assets/imageSlides/slide1.jpg';
import slide2 from '../../../assets/imageSlides/slide2.jpg';
import slide3 from '../../../assets/imageSlides/slide3.jpg';

function Home() {
  const slides = [
    {
      url: slide1,
      title: 'Paris',
    },
    {
      url: slide2,
      title: 'Restaurant',
    },
    {
      url: slide3,
      title: 'Cooking',
    },
  ];

  return (
    <div className={classes.home}>
      <div className={classes.title}>
        <h1>La Cuisine Partout</h1>
        <p>French cuisine at your doorstep</p>
      </div>
      <div className={classes.slideContainer}>
        <Slides slides={slides} />
      </div>
      <Link to="/menu">
        <h1>Explore our Menu!</h1>
      </Link>
    </div>
  );
}

export default Home;
