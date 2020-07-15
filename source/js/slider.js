'use strict';

(function () {
  let prevButton = document.querySelector('.slider__button--prev');
  let nextButton = document.querySelector('.slider__button--next');
  let bigPictureSlide = document.querySelector('.slider__slide');
  let smallPictureSlide = document.querySelectorAll('.slider__thumb');

  let pushNextButton = function () {
    nextButton.addEventListener('click', function () {
      console.log(nextButton);
    })
  }
})();
export default { pushNextButton };
