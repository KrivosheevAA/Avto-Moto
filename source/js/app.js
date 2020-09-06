'use strict';

import slider from './modules/slider';
import tabs from './modules/tabs';
import map from './modules/map';
import modal from './modules/modal';
import reviews from './modules/reviews';
import raiting from './modules/rating';

window.addEventListener('DOMContentLoaded', () => {
  slider();
  tabs();
  map();
  modal();
  reviews();
  raiting();
})
