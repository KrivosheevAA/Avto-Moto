//slider

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

//табы
let buttonTabs = document.querySelector('.tabs__control-list');
let tabsContentItem = document.querySelectorAll('.tabs__content-item');
let buttonActive = document.querySelectorAll('.tabs__control-item');

buttonTabs.addEventListener('click', showContent);

 function showContent (event) {
  if (event.target.className == 'tabs__control-item') {
    let dataTab = event.target.getAttribute('data-tab');
    for (let k = 0; k < buttonActive.length; k++) {
      buttonActive[k].classList.remove('tabs__control-item--active');
    }
    event.target.classList.add('tabs__control-item--active');
    for (let i = 0; i < tabsContentItem.length; i++) {
      if (dataTab == i) {
        tabsContentItem[i].classList.add('tabs__content-item--show');
      } else {
        tabsContentItem[i].classList.remove('tabs__content-item--show');
      }
    }
  }
}
