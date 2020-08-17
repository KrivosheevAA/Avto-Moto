/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ "./modules/slider.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tabs */ "./modules/tabs.js");
/* harmony import */ var _modules_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/map */ "./modules/map.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ "./modules/modal.js");
/* harmony import */ var _modules_reviews__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/reviews */ "./modules/reviews.js");







window.addEventListener('DOMContentLoaded', function () {
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_tabs__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_modules_map__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_modules_modal__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_modules_reviews__WEBPACK_IMPORTED_MODULE_4__["default"])();
});

/***/ }),

/***/ "./modules/map.js":
/*!************************!*\
  !*** ./modules/map.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var map = function map() {
  // ymaps.ready(init);
  // function init () {
  //     var map = new ymaps.Map('map', {
  //         center: [59.968137, 30.316263],
  //         zoom: 15
  //       }, {
  //         searchControlProvider: 'yandex#search'
  //       });
  //         // Создаём макет содержимого.
  //         MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
  //             '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
  //         );
  //         myPlacemarkWithContent = new ymaps.Placemark([59.968137, 30.316263], {
  //             hintContent: 'Санкт-Петербург, набережная реки Карповки, дом 5',
  //             balloonContent: 'Санкт-Петербург, набережная реки Карповки, дом 5',
  //         }, {
  //             // Опции.
  //             // Необходимо указать данный тип макета.
  //             iconLayout: 'default#imageWithContent',
  //             // Своё изображение иконки метки.
  //             iconImageHref: 'img/icon-location.svg',
  //             // Размеры метки.
  //             iconImageSize: [32, 40],
  //             // Макет содержимого.
  //             iconContentLayout: MyIconContentLayout
  //         });
  //   map.geoObjects.add(myPlacemarkWithContent);
  // };
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
};

/* harmony default export */ __webpack_exports__["default"] = (map);

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var modal = function modal() {
  var rewiewsButton = document.querySelector('.reviews__button');
  var popUpForm = document.querySelector('.pop-up');
  var buttonClose = document.querySelector('.pop-up__close');
  var nameInput = document.querySelector('#name');
  var form = document.querySelector('.pop-up__form');
  rewiewsButton.addEventListener('click', openPopUp);

  function openPopUp() {
    popUpForm.classList.add('pop-up__show');
    nameInput.focus();
    var json = JSON.parse(localStorage.getItem(form.id));

    if (json) {
      var fields = form.querySelectorAll('input, textarea');
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
};

/* harmony default export */ __webpack_exports__["default"] = (modal);

/***/ }),

/***/ "./modules/reviews.js":
/*!****************************!*\
  !*** ./modules/reviews.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var reviews = function reviews() {
  var form = document.querySelector('.pop-up__form');
  var buttonSubmit = document.querySelector('.pop-up__button');
  var cacheFields = {};
  var reviewsContainer = document.querySelector('.reviews__container');
  var reviewsArr = []; // [...form.elements].forEach(element => {
  //   if (element.tagName !== 'BUTTON') {
  //     element.addEventListener('change', e => {
  //     })
  //   }
  // })

  var renderReview = function renderReview(review) {
    return "\n    <div class=\"reviews__review\">\n      <h2 class=\"reviews__avtor\">".concat(review.name, "</h2>\n        <ul class=\"reviews__list\">\n          <li class=\"reviews__item\"><span>+</span>\u0414\u043E\u0441\u0442\u043E\u0438\u043D\u0441\u0442\u0432\u0430\n            <p class=\"reviews__item reviews__item--dignity\">").concat(review.advantages, "</p>\n          </li>\n          <li class=\"reviews__item\"><span>-</span>\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043A\u0438\n            <p class=\"reviews__item reviews__item--disadvantage\">").concat(review.disadvantage, "</p>\n          </li>\n          <li class=\"reviews__item\">\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439\n            <p class=\"reviews__item reviews__item--comment\">").concat(review.comment, "</p>\n          </li>\n        </ul>\n        <div class=\"reviews__star\">\n          <svg width=\"16\" height=\"17\">\n              <use xlink:href=\"img/sprite_auto.svg#icon-star\"></use>\n          </svg>\n          <svg width=\"16\" height=\"17\">\n            <use xlink:href=\"img/sprite_auto.svg#icon-star\"></use>\n          </svg>\n          <svg width=\"16\" height=\"17\">\n            <use xlink:href=\"img/sprite_auto.svg#icon-star\"></use>\n          </svg>\n          <svg width=\"16\" height=\"17\">\n            <use xlink:href=\"img/sprite_auto.svg#icon-star\"></use>\n          </svg>\n          <svg width=\"16\" height=\"17\">\n            <use xlink:href=\"img/sprite_auto.svg#icon-star\"></use>\n          </svg>\n          <span>\u0421\u043E\u0432\u0435\u0442\u0443\u044E\u0442</span>\n        </div>\n        <div class=\"reviews__time\">\n          <p>1 \u043C\u0438\u043D\u0443\u0442\u0443 \u043D\u0430\u0437\u0430\u0434</p>\n          <span>\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C</span>\n        </div>\n      </div>\n    ");
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
    reviewsArr.push(renderReview(formData));
    reviewsContainer.innerHTML = reviewsArr.join('');
  });
  form.addEventListener('change', function (e) {
    if (e.target.tagName !== 'BUTTON') {
      cacheFields[e.target.id] = e.target.value;
      var json = JSON.stringify(cacheFields);
      localStorage.setItem(form.id, json);
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reviews);

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var slider = function slider() {
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
};

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var tabs = function tabs() {
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
};

/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map