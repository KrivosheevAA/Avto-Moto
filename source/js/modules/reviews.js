const reviews = () => {
  const form = document.querySelector('.pop-up__form');
  const buttonSubmit = document.querySelector('.pop-up__button');
  const cacheFields = {};
  const reviewsContainer = document.querySelector('.reviews__container');
  const reviewsArr = [];

  // [...form.elements].forEach(element => {
  //   if (element.tagName !== 'BUTTON') {
  //     element.addEventListener('change', e => {

  //     })
  //   }
  // })
 const renderReview = review => {
  return `
    <div class="reviews__review">
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
          <span>Советуют</span>
        </div>
        <div class="reviews__time">
          <p>1 минуту назад</p>
          <span>Ответить</span>
        </div>
      </div>
    `
 }


  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = {};
    [...this.elements].forEach(item => {
      if (item.tagName !== 'BUTTON') {
        formData[item.id] = item.value;
      }
    })
    this.reset();
    reviewsArr.push(renderReview(formData));
    reviewsContainer.innerHTML = reviewsArr.join('');
  })

  form.addEventListener('change', function (e) {
    if (e.target.tagName !== 'BUTTON') {
      cacheFields[e.target.id] = e.target.value;
      let json = JSON.stringify(cacheFields);
      localStorage.setItem(form.id, json);
    }
  });
}
export default reviews;
