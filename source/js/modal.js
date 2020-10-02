'use strict';

(() => {
  const rewiewsButton = document.querySelector('.reviews__button');
  const popUpForm = document.querySelector('.pop-up');
  const buttonClose = document.querySelector('.pop-up__close');
  const nameInput = document.querySelector('#name');
  const advantagesInput = document.querySelector('#advantages');
  const disadvantagesInput = document.querySelector('#disadvantage');
  const raitingInput = document.querySelector('#raiting');
  const commentInput = document.querySelector('#comment');
  const form = document.querySelector('.pop-up__form');
  const raiting = document.querySelector('[data-raiting-fill]');

  rewiewsButton.addEventListener('click', openPopUp);

  nameInput.addEventListener('invalid', function (evt) {
    if (evt.target.value.length === 0) {
      nameInput.setCustomValidity('Введите имя');
    } else {
      nameInput.setCustomValidity('');
    }
  });

  advantagesInput.addEventListener('invalid', function (evt) {
    if (evt.target.value.length === 0) {
      advantagesInput.setCustomValidity('Введите достоинства');
    } else {
      advantagesInput.setCustomValidity('');
    }
  });

  disadvantagesInput.addEventListener('invalid', function (evt) {
    if (evt.target.value.length === 0) {
      disadvantagesInput.setCustomValidity('Введите недостатки');
    } else {
      disadvantagesInput.setCustomValidity('');
    }
  });

  raitingInput.addEventListener('invalid', function (evt) {
    if (evt.target.value.length === 0) {
      raitingInput.setCustomValidity('Выберете количество звезд');
    } else {
      raitingInput.setCustomValidity('');
    }
  });

  commentInput.addEventListener('invalid', function (evt) {
    if (evt.target.value.length === 0) {
      commentInput.setCustomValidity('Введите комментарий');
    } else {
      commentInput.setCustomValidity('');
    }
  });



  function openPopUp () {
    popUpForm.classList.add('pop-up__show');
    nameInput.focus();
    form.addEventListener('submit', window.reviews.onFormSubmit);

    let json = JSON.parse(localStorage.getItem(form.id));
      if (json) {
        const fields = [].slice.call(form.querySelectorAll('input, textarea'));
        raiting.style.width = `${json.raiting}%`;
        Array.prototype.forEach.call(form.querySelectorAll('input, textarea'), el => {
          el.value = json[el.id] ? json[el.id] : '';
      })
    }
  }

  buttonClose.addEventListener('click', function () {
    event.preventDefault();
    popUpForm.classList.remove('pop-up__show');
    form.removeEventListener('submit', window.reviews.onFormSubmit);
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
