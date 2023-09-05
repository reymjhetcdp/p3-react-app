import { createContext } from 'react';

import slide1 from './assets/imageSlides/slide1.jpg';
import slide2 from './assets/imageSlides/slide2.jpg';
import slide3 from './assets/imageSlides/slide3.jpg';

const SLIDES = [
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

const SlidesContext = createContext({
  allSlides: SLIDES,
});

export default SlidesContext;
