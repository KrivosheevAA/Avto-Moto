let counter = 0;
let prevButton = document.querySelector('.slider__button--prev');
let nextButton = document.querySelector('.slider__button--next');
let bigPictureSlide = document.querySelectorAll('.slider__slide');
let smallPictureSlide = document.querySelectorAll('.slider__thumb');
let containerSlide = document.querySelector('.slider__slides');

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


