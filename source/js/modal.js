'use strict';

(() => {
  const rewiewsButton = document.querySelector('.reviews__button');
  const popUpForm = document.querySelector('.pop-up');
  const buttonClose = document.querySelector('.pop-up__close');
  const nameInput = document.querySelector('#name');
  const form = document.querySelector('.pop-up__form');
  const raiting = document.querySelector('[data-raiting-fill]');

  rewiewsButton.addEventListener('click', openPopUp);

  function openPopUp () {
    popUpForm.classList.add('pop-up__show');
    nameInput.focus();

    let json = JSON.parse(localStorage.getItem(form.id));
      if (json) {
        const fields = form.querySelectorAll('input, textarea');
        raiting.style.width = `${json.raiting}%`;
        fields.forEach(el => {
          el.value = json[el.id] ? json[el.id] : '';
      })
    }
  }

  buttonClose.addEventListener('click', function () {
    event.preventDefault();
    popUpForm.classList.remove('pop-up__show');
  });

  window.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) {
      event.preventDefault();
      if (popUpForm.classList.contains("pop-up__show")) {
        popUpForm.classList.remove("pop-up__show");
      }
    }
  });

  window.addEventListener('click', function (event) {
    if (event.target == popUpForm) {
      popUpForm.classList.remove('pop-up__show');
    }
  });
})();

