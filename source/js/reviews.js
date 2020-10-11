'use strict';
(() => {
  const form = document.querySelector('.pop-up__form');
  const buttonSubmit = document.querySelector('.pop-up__button');
  const cacheFields = {};
  const reviewsContainer = document.querySelector('.reviews__container');
  const raitingFill = document.querySelector('[data-raiting-fill]');
  const requiredFields = document.querySelectorAll('[data-required]');
  let counter = 0;

  const renderReviewWrapper = review => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('reviews__review');
    wrapper.innerHTML = review;
    return wrapper;
  }

  const renderReview = review => {
  return `
      <h2 class="reviews__avtor">${review.name}</h2>
        <ul class="reviews__list">
          <li class="reviews__item"><span>+</span>Достоинства
            <p class="reviews__item reviews__item--dignity">${review.advantages}</p>
          </li>
          <li class="reviews__item"><span>-</span>Недостатки
            <p class="reviews__item reviews__item--disadvantage">${review.disadvantage}</p>
          </li>
          <li class="reviews__item">Комментарий
            <p class="reviews__item reviews__item--comment">${review.comment}</p>
          </li>
        </ul>
          <div class="reviews__raiting">
            <div class="reviews__wraper">
              <div class="reviews__star">
                <svg width="16" height="17">
                    <use xlink:href="img/sprite_auto.svg#icon-star"></use>
                </svg>
                <svg width="16" height="17">
                  <use xlink:href="img/sprite_auto.svg#icon-star"></use>
                </svg>
                <svg width="16" height="17">
                  <use xlink:href="img/sprite_auto.svg#icon-star"></use>
                </svg>
                <svg width="16" height="17">
                  <use xlink:href="img/sprite_auto.svg#icon-star"></use>
                </svg>
                <svg width="16" height="17">
                  <use xlink:href="img/sprite_auto.svg#icon-star"></use>
                </svg>
              </div>
              <div class="reviews__star reviews__star--fill" style="width: ${review.raiting}%;">
                <svg width="16" height="17">
                    <use xlink:href="img/sprite_auto.svg#icon-star"></use>
                </svg>
                <svg width="16" height="17">
                  <use xlink:href="img/sprite_auto.svg#icon-star"></use>
                </svg>
                <svg width="16" height="17">
                  <use xlink:href="img/sprite_auto.svg#icon-star"></use>
                </svg>
                <svg width="16" height="17">
                  <use xlink:href="img/sprite_auto.svg#icon-star"></use>
                </svg>
                <svg width="16" height="17">
                  <use xlink:href="img/sprite_auto.svg#icon-star"></use>
                </svg>
              </div>
            </div>
            <span>Советуют</span>
          </div>
        <div class="reviews__time">
          <p>${moment().locale('ru').fromNow()}</p>
          <span>Ответить</span>
        </div>
    `
  }

  const onFormSubmit = function(e) {
    let counter = 0;
    e.preventDefault();

    const formData = {};
    [...this.elements].forEach(item => {
      if (item.tagName !== 'BUTTON') {
        formData[item.id] = item.value;
        if (item.parentNode.getAttribute('data-required')) {
          if (!item.value) {
            item.parentNode.classList.add('error');
            counter++;
          } else {
            item.parentNode.classList.remove('error');
            counter = 0;
          }
        }
      }
    })

    if (counter == 0) {
      this.reset();
      localStorage.removeItem(form.id);
      raitingFill.style.width = '0%';
      document.querySelector('.pop-up').classList.remove('pop-up__show');
      document.body.removeAttribute('style');
      reviewsContainer.appendChild(renderReviewWrapper(renderReview(formData)));
    }
  }


  form.addEventListener('input', function (e) {
    if (e.target.tagName !== 'BUTTON') {
      cacheFields[e.target.id] = e.target.value;
      let json = JSON.stringify(cacheFields);
      localStorage.setItem(form.id, json);
    }
  });
  window.reviews = {
    onFormSubmit
  }
})();
