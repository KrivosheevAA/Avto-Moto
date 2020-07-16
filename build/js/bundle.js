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
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ "./main.js");
/* harmony import */ var _svg4everybody_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg4everybody.min.js */ "./svg4everybody.min.js");
/* harmony import */ var _svg4everybody_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg4everybody_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider.js */ "./slider.js");



Object(_main_js__WEBPACK_IMPORTED_MODULE_0__["initPictureElement"])();
Object(_main_js__WEBPACK_IMPORTED_MODULE_0__["initUseElement"])();
Object(_slider_js__WEBPACK_IMPORTED_MODULE_2__["pushNextButton"])();
console.log(nextButton);

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! exports provided: initPictureElement, initUseElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initPictureElement", function() { return initPictureElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initUseElement", function() { return initUseElement; });
function initPictureElement() {
  document.createElement("picture");
}

function initUseElement() {
  svg4everybody();
}



/***/ }),

/***/ "./slider.js":
/*!*******************!*\
  !*** ./slider.js ***!
  \*******************/
/*! exports provided: pushNextButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushNextButton", function() { return pushNextButton; });
var prevButton = document.querySelector('.slider__button--prev');
var nextButton = document.querySelector('.slider__button--next');
var bigPictureSlide = document.querySelector('.slider__slide');
var smallPictureSlide = document.querySelectorAll('.slider__thumb');
var pushNextButton = function pushNextButton() {
  nextButton.addEventListener('click', function () {});
};

/***/ }),

/***/ "./svg4everybody.min.js":
/*!******************************!*\
  !*** ./svg4everybody.min.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (a, b) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return a.svg4everybody = b();
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  /*! svg4everybody v2.0.0 | github.com/jonathantneal/svg4everybody */
  function a(a, b) {
    if (b) {
      var c = !a.getAttribute("viewBox") && b.getAttribute("viewBox"),
          d = document.createDocumentFragment(),
          e = b.cloneNode(!0);

      for (c && a.setAttribute("viewBox", c); e.childNodes.length;) {
        d.appendChild(e.firstChild);
      }

      a.appendChild(d);
    }
  }

  function b(b) {
    b.onreadystatechange = function () {
      if (4 === b.readyState) {
        var c = document.createElement("x");
        c.innerHTML = b.responseText, b.s.splice(0).map(function (b) {
          a(b[0], c.querySelector("#" + b[1].replace(/(\W)/g, "\\$1")));
        });
      }
    }, b.onreadystatechange();
  }

  function c(c) {
    function d() {
      for (var c; c = e[0];) {
        var j = c.parentNode;

        if (j && /svg/i.test(j.nodeName)) {
          var k = c.getAttribute("xlink:href");

          if (f && (!g || g(k, j, c))) {
            var l = k.split("#"),
                m = l[0],
                n = l[1];

            if (j.removeChild(c), m.length) {
              var o = i[m] = i[m] || new XMLHttpRequest();
              o.s || (o.s = [], o.open("GET", m), o.send()), o.s.push([j, n]), b(o);
            } else a(j, document.getElementById(n));
          }
        }
      }

      h(d, 17);
    }

    c = c || {};
    var e = document.getElementsByTagName("use"),
        f = "shim" in c ? c.shim : /\bEdge\/12\b|\bTrident\/[567]\b|\bVersion\/7.0 Safari\b/.test(navigator.userAgent) || (navigator.userAgent.match(/AppleWebKit\/(\d+)/) || [])[1] < 537,
        g = c.validate,
        h = window.requestAnimationFrame || setTimeout,
        i = {};
    f && d();
  }

  return c;
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map