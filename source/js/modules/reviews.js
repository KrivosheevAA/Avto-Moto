// import monent from 'moment';
// import 'moment/locale/ru';

const reviews = () => {
  // moment.locale('ru');
  const form = document.querySelector('.pop-up__form');
  const buttonSubmit = document.querySelector('.pop-up__button');
  const cacheFields = {};
  const reviewsContainer = document.querySelector('.reviews__container');
  const raitingFill = document.querySelector('[data-raiting-fill]');

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
          <p>${moment().locale()}</p>
          <span>Ответить</span>
        </div>
    `
 }



  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = {};
    [...this.elements].forEach(item => {
        console.log(item);
      if (item.tagName !== 'BUTTON') {
        formData[item.id] = item.value;
      }
    })
    this.reset();
    raitingFill.style.width = '0%';
    reviewsContainer.appendChild(renderReviewWrapper(renderReview(formData)));

  })

  form.addEventListener('input', function (e) {
    if (e.target.tagName !== 'BUTTON') {
      cacheFields[e.target.id] = e.target.value;
      let json = JSON.stringify(cacheFields);
      localStorage.setItem(form.id, json);
    }
  });
}
export default reviews;
