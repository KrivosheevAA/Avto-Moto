'use strict';

(() => {
  const raitingControl = document.querySelector('[data-raiting-control]');
  const raitingFill = document.querySelector('[data-raiting-fill]');
  let isMove = false;
  let percent = 0;
  const raitingInput = document.querySelector('[name="raiting-value"]');

  raitingControl.addEventListener('mousemove', (e) => {
    if (isMove) {
      let rect = e.target.getBoundingClientRect();
      const elWidth = e.target.getBoundingClientRect().width;
      let currentPosition = e.pageX - rect.left;
      percent = Math.round((currentPosition * 100) / elWidth);
      raitingFill.style.width = `${percent}%`;
    }
  })

  raitingControl.addEventListener('mouseenter', () => {
    isMove = true;
    raitingFill.style.width = `0%`;
  })

  raitingControl.addEventListener('mouseleave', () => {
    isMove = false;
  })

  raitingControl.addEventListener('click', () => {
    raitingInput.value = percent;
    isMove = false;

    if (localStorage.getItem('reviews-form')) {
      let json = JSON.parse(localStorage.getItem('reviews-form'));
      json[raitingInput.id] = percent;
      localStorage.setItem('reviews-form', JSON.stringify(json));
    }
  })
})();
