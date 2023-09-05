import { useState } from 'react';
import classes from './Slides.module.css';

function Slides({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideStyles = {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  function previousSlide() {
    const firstSlide = currentIndex === 0;
    const newIndex = firstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  function nextSlide() {
    const lastSlide = currentIndex === slides.length - 1;
    const newIndex = lastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <div className={classes.slidesContainer}>
      <div className={classes.moveLeft} onClick={previousSlide}>
        <h1>⇐</h1>
      </div>
      <div style={slideStyles}></div>
      <div className={classes.moveRight} onClick={nextSlide}>
        <h1>⇒</h1>
      </div>
    </div>
  );
}

export default Slides;
