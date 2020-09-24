'use strict';

(() => {
  let counter = 0;
  const prevButton = document.querySelector('.slider__button--prev');
  const nextButton = document.querySelector('.slider__button--next');
  const bigPictureSlide = document.querySelectorAll('.slider__slide');
  const smallPictureSlide = document.querySelectorAll('.slider__thumb');
  const containerSlide = document.querySelector('.slider__slides');
  const prevButtonArrow = document.querySelector('.slider__button--prev span svg');
  const nextButtonArrow = document.querySelector('.slider__button--next span svg');

  prevButton.addEventListener('click', function () {
    counter--;
    if (counter <= 0) {
      counter = 0;
      prevButton.disabled = true;

    }
    nextButton.disabled = false;
    containerSlide.style.transform = `translateX(${-600 * counter}px)`;
  });

  nextButton.addEventListener('click', function () {
    counter++;
    if (counter >= bigPictureSlide.length - 1) {
      counter = bigPictureSlide.length - 1;
      nextButton.disabled = true;
    }
    prevButton.disabled = false;
    containerSlide.style.transform = `translateX(${-600 * counter}px)`;
  });
})();
