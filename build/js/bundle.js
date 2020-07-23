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
/*! no static exports found */
/***/ (function(module, exports) {

//slider
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
}); //табы

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
} //яндекс карта


ymaps.ready(init);

function init() {
  var map = new ymaps.Map('map', {
    center: [59.968137, 30.316263],
    zoom: 9
  });
} // var myMap;
// ymaps.ready(init);
// function init () {
//     myMap = new ymaps.Map('map', {
//         center: [55.76, 37.64], // Москва
//         zoom: 10
//     })
// }
//поп ап


var rewiewsButton = document.querySelector('.reviews__button');
var popUpForm = document.querySelector('.pop-up');
var buttonClose = document.querySelector('.pop-up__close');
rewiewsButton.addEventListener('click', openPopUp);

function openPopUp() {
  popUpForm.classList.add('pop-up__show');
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

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map