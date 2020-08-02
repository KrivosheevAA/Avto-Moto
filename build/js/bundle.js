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
  ymaps.ready(init);

  function init() {
    var map = new ymaps.Map('map', {
      center: [59.968137, 30.316263],
      zoom: 15
    }, {
      searchControlProvider: 'yandex#search'
    }); // Создаём макет содержимого.

    MyIconContentLayout = ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>');
    myPlacemarkWithContent = new ymaps.Placemark([59.968137, 30.316263], {
      hintContent: 'Санкт-Петербург, набережная реки Карповки, дом 5',
      balloonContent: 'Санкт-Петербург, набережная реки Карповки, дом 5'
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#imageWithContent',
      // Своё изображение иконки метки.
      iconImageHref: 'img/icon-location.svg',
      // Размеры метки.
      iconImageSize: [32, 40],
      // Макет содержимого.
      iconContentLayout: MyIconContentLayout
    });
    map.geoObjects.add(myPlacemarkWithContent);
  }

  ;
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
        el.value = json[el.id];
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
var reviews = function reviews() {
  var nameAvtor = document.querySelector('.reviews__avtor');
  var dignityAvtor = document.querySelector('.reviews__item--dignity');
  var disadvantageAvtor = document.querySelector('.reviews__item--disadvantage');
  var commentAvtor = document.querySelector('.reviews__item--comment');
  var form = document.querySelector('.pop-up__form');
  var nameInput = form.querySelector('#name');
  var dignityInput = form.querySelector('#advantages');
  var disadvantageInput = form.querySelector('#disadvantage');
  var commentInput = form.querySelector('#comment');
  var buttonSubmit = document.querySelector('.pop-up__button');
  var cacheFields = {}; // [...form.elements].forEach(element => {
  //   if (element.tagName !== 'BUTTON') {
  //     element.addEventListener('change', e => {
  //     })
  //   }
  // })

  form.addEventListener('submit', function () {});
  form.addEventListener('change', function (e) {
    if (e.target.tagName !== 'BUTTON') {
      // let fields = [...form.querySelectorAll('input, textarea')];
      //       let json = JSON.stringify(fields.map(e => [e.name, e.value]));
      //       localStorage.setItem(form.id, json);
      //   document.addEventListener("DOMContentLoaded", () => {
      //       let values = JSON.parse(localStorage.getItem(form.id));
      //       for (let i = 0; i < values.length; i++)
      //           form[values[i][0]].value = values[i][1];
      //   });
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