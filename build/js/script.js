'use strict';

(function () {
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
      center: [59.968137, 30.316263],
      zoom: 15
    }, {
      searchControlProvider: 'yandex#search'
    }),
        // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Санкт-Петербург, набережная реки Карповки, дом 5',
      balloonContent: 'Санкт-Петербург, набережная реки Карповки, дом 5'
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/icon-location.svg',
      // Размеры метки.
      iconImageSize: [32, 40],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-5, -38]
    }),
        myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
      hintContent: 'Собственный значок метки с контентом',
      balloonContent: 'А эта — новогодняя',
      iconContent: '12'
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#imageWithContent',
      // Своё изображение иконки метки.
      iconImageHref: 'img/icon-location.svg',
      // Размеры метки.
      iconImageSize: [48, 48],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-24, -24],
      // Смещение слоя с содержимым относительно слоя с картинкой.
      iconContentOffset: [15, 15],
      // Макет содержимого.
      iconContentLayout: MyIconContentLayout
    });
    myMap.geoObjects.add(myPlacemark).add(myPlacemarkWithContent);
  });
})();
'use strict';

(function () {
  var rewiewsButton = document.querySelector('.reviews__button');
  var popUpForm = document.querySelector('.pop-up');
  var buttonClose = document.querySelector('.pop-up__close');
  var nameInput = document.querySelector('#name');
  var form = document.querySelector('.pop-up__form');
  var raiting = document.querySelector('[data-raiting-fill]');
  rewiewsButton.addEventListener('click', openPopUp);

  function openPopUp() {
    popUpForm.classList.add('pop-up__show');
    nameInput.focus();
    var json = JSON.parse(localStorage.getItem(form.id));

    if (json) {
      var fields = form.querySelectorAll('input, textarea');
      raiting.style.width = "".concat(json.raiting, "%");
      fields.forEach(function (el) {
        el.value = json[el.id] ? json[el.id] : '';
      });
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
'use strict';

(function () {
  document.createElement('picture');
  svg4everybody();
})();
'use strict';

(function () {
  var raitingControl = document.querySelector('[data-raiting-control]');
  var raitingFill = document.querySelector('[data-raiting-fill]');
  var isMove = false;
  var percent = 0;
  var raitingInput = document.querySelector('[name="raiting-value"]');
  raitingControl.addEventListener('mousemove', function (e) {
    if (isMove) {
      var rect = e.target.getBoundingClientRect();
      var elWidth = e.target.getBoundingClientRect().width;
      var currentPosition = e.pageX - rect.left;
      percent = Math.round(currentPosition * 100 / elWidth);
      raitingFill.style.width = "".concat(percent, "%");
    }
  });
  raitingControl.addEventListener('mouseenter', function () {
    isMove = true;
    raitingFill.style.width = "0%";
  });
  raitingControl.addEventListener('mouseleave', function () {
    isMove = false;
  });
  raitingControl.addEventListener('click', function () {
    raitingInput.value = percent;
    isMove = false;

    if (localStorage.getItem('reviews-form')) {
      var json = JSON.parse(localStorage.getItem('reviews-form'));
      json[raitingInput.id] = percent;
      localStorage.setItem('reviews-form', JSON.stringify(json));
    }
  });
})();
'use strict';

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function () {
  var form = document.querySelector('.pop-up__form');
  var buttonSubmit = document.querySelector('.pop-up__button');
  var cacheFields = {};
  var reviewsContainer = document.querySelector('.reviews__container');
  var raitingFill = document.querySelector('[data-raiting-fill]');

  var renderReviewWrapper = function renderReviewWrapper(review) {
    var wrapper = document.createElement('div');
    wrapper.classList.add('reviews__review');
    wrapper.innerHTML = review;
    return wrapper;
  };

  var renderReview = function renderReview(review) {
    return "\n      <h2 class=\"reviews__avtor\">".concat(review.name, "</h2>\n        <ul class=\"reviews__list\">\n          <li class=\"reviews__item\"><span>+</span>\u0414\u043E\u0441\u0442\u043E\u0438\u043D\u0441\u0442\u0432\u0430\n            <p class=\"reviews__item reviews__item--dignity\">").concat(review.advantages, "</p>\n          </li>\n          <li class=\"reviews__item\"><span>-</span>\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043A\u0438\n            <p class=\"reviews__item reviews__item--disadvantage\">").concat(review.disadvantage, "</p>\n          </li>\n          <li class=\"reviews__item\">\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439\n            <p class=\"reviews__item reviews__item--comment\">").concat(review.comment, "</p>\n          </li>\n        </ul>\n          <div class=\"reviews__raiting\">\n            <div class=\"reviews__wraper\">\n              <div class=\"reviews__star\">\n                <svg width=\"16\" height=\"17\">\n                    <use xlink:href=\"img/sprite_auto.svg#icon-star\"></use>\n                </svg>\n                <svg width=\"16\" height=\"17\">\n                  <use xlink:href=\"img/sprite_auto.svg#icon-star\"></use>\n                </svg>\n                <svg width=\"16\" height=\"17\">\n                  <use xlink:href=\"img/sprite_auto.svg#icon-star\"></use>\n                </svg>\n                <svg width=\"16\" height=\"17\">\n                  <use xlink:href=\"img/sprite_auto.svg#icon-star\"></use>\n                </svg>\n                <svg width=\"16\" height=\"17\">\n                  <use xlink:href=\"img/sprite_auto.svg#icon-star\"></use>\n                </svg>\n              </div>\n              <div class=\"reviews__star reviews__star--fill\" style=\"width: ").concat(review.raiting, "%;\">\n                <svg width=\"16\" height=\"17\">\n                    <use xlink:href=\"img/sprite_auto.svg#icon-star\"></use>\n                </svg>\n                <svg width=\"16\" height=\"17\">\n                  <use xlink:href=\"img/sprite_auto.svg#icon-star\"></use>\n                </svg>\n                <svg width=\"16\" height=\"17\">\n                  <use xlink:href=\"img/sprite_auto.svg#icon-star\"></use>\n                </svg>\n                <svg width=\"16\" height=\"17\">\n                  <use xlink:href=\"img/sprite_auto.svg#icon-star\"></use>\n                </svg>\n                <svg width=\"16\" height=\"17\">\n                  <use xlink:href=\"img/sprite_auto.svg#icon-star\"></use>\n                </svg>\n              </div>\n            </div>\n            <span>\u0421\u043E\u0432\u0435\u0442\u0443\u044E\u0442</span>\n          </div>\n        <div class=\"reviews__time\">\n          <p>").concat(moment().locale('ru').fromNow(), "</p>\n          <span>\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C</span>\n        </div>\n    ");
  };

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var formData = {};

    _toConsumableArray(this.elements).forEach(function (item) {
      if (item.tagName !== 'BUTTON') {
        formData[item.id] = item.value;
      }
    });

    this.reset();
    localStorage.removeItem(form.id);
    raitingFill.style.width = '0%';
    reviewsContainer.appendChild(renderReviewWrapper(renderReview(formData)));
  });
  form.addEventListener('input', function (e) {
    if (e.target.tagName !== 'BUTTON') {
      cacheFields[e.target.id] = e.target.value;
      var json = JSON.stringify(cacheFields);
      localStorage.setItem(form.id, json);
    }
  });
})();
'use strict';

(function () {
  var counter = 0;
  var prevButton = document.querySelector('.slider__button--prev');
  var nextButton = document.querySelector('.slider__button--next');
  var bigPictureSlide = document.querySelectorAll('.slider__slide');
  var smallPictureSlide = document.querySelectorAll('.slider__thumb');
  var containerSlide = document.querySelector('.slider__slides');
  prevButton.addEventListener('click', function () {
    counter--;

    if (counter <= 0) {
      counter = 0;
      prevButton.disabled = true;
    }

    nextButton.disabled = false;
    containerSlide.style.transform = "translateX(".concat(-600 * counter, "px)");
  });
  nextButton.addEventListener('click', function () {
    counter++;

    if (counter >= bigPictureSlide.length - 1) {
      counter = bigPictureSlide.length - 1;
      nextButton.disabled = true;
    }

    prevButton.disabled = false;
    containerSlide.style.transform = "translateX(".concat(-600 * counter, "px)");
  });
})();
'use strict';

(function () {
  var buttonTabs = document.querySelector('.tabs__control-list');
  var tabsContentItem = document.querySelectorAll('.tabs__content-item');
  var buttonActive = document.querySelectorAll('.tabs__control-item');
  buttonTabs.addEventListener('click', showContent);

  function showContent(event) {
    if (event.target.className == 'tabs__control-item') {
      var dataTab = event.target.getAttribute('data-tab');

      for (var k = 0; k < buttonActive.length; k++) {
        buttonActive[k].classList.remove('tabs__control-item--active');
      }

      event.target.classList.add('tabs__control-item--active');

      for (var i = 0; i < tabsContentItem.length; i++) {
        if (dataTab == i) {
          tabsContentItem[i].classList.add('tabs__content-item--show');
        } else {
          tabsContentItem[i].classList.remove('tabs__content-item--show');
        }
      }
    }
  }
})();