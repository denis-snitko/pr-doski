/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_components_modal_window_modal_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/components/modal-window/modal-window */ \"./src/modules/components/modal-window/modal-window.js\");\n/* harmony import */ var _modules_components_modal_window_modal_window__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_components_modal_window_modal_window__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/header/header */ \"./src/modules/header/header.js\");\n/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_hero_hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/hero/hero */ \"./src/modules/hero/hero.js\");\n/* harmony import */ var _modules_catalog_items_catalog_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/catalog-items/catalog-items */ \"./src/modules/catalog-items/catalog-items.js\");\n/* harmony import */ var _modules_menu_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/menu/menu */ \"./src/modules/menu/menu.js\");\n/* harmony import */ var _modules_menu_menu__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_menu_menu__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _modules_gallery_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/gallery/gallery */ \"./src/modules/gallery/gallery.js\");\n/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/footer/footer */ \"./src/modules/footer/footer.js\");\n/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/js/import/modules.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ \"./src/js/import/modules.js\");\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/modules/catalog-items/catalog-items.js":
/*!****************************************************!*\
  !*** ./src/modules/catalog-items/catalog-items.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel */ \"./node_modules/slick-carousel/slick/slick.js\");\n/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_1__);\n\n\njquery__WEBPACK_IMPORTED_MODULE_0___default()('.slider').slick({\n  prevArrow: '<span class=\"slider-arrow-catalog--left\"></span>',\n  nextArrow: '<span class=\"slider-arrow-catalog--right\"></span>',\n  infinite: true,\n  slidesToShow: 4,\n  slidesToScroll: 1,\n  autoplay: 0,\n  autoplaySpeed: 2000,\n  arrows: true,\n  pauseOnHover: true,\n  responsive: [{\n    breakpoint: 1200,\n    settings: {\n      slidesToShow: 3,\n      slidesToScroll: 1\n    }\n  }, {\n    breakpoint: 900,\n    settings: {\n      slidesToShow: 2,\n      slidesToScroll: 1\n    }\n  }, {\n    breakpoint: 610,\n    settings: {\n      slidesToShow: 1,\n      slidesToScroll: 1\n    }\n  }]\n});\n\n//# sourceURL=webpack:///./src/modules/catalog-items/catalog-items.js?");

/***/ }),

/***/ "./src/modules/components/modal-window/modal-window.js":
/*!*************************************************************!*\
  !*** ./src/modules/components/modal-window/modal-window.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var modalWindowOverlay = document.querySelector('.modal-window-overlay');\nvar modalWindowClose = document.querySelector('.modal-window__close');\nmodalWindowClose.addEventListener('click', function () {\n  modalWindowOverlay.setAttribute('style', 'display: none');\n});\n\n//# sourceURL=webpack:///./src/modules/components/modal-window/modal-window.js?");

/***/ }),

/***/ "./src/modules/footer/footer.js":
/*!**************************************!*\
  !*** ./src/modules/footer/footer.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var footerButton = document.querySelector('.footer__button');\nvar modalWindowOverlay = document.querySelector('.modal-window-overlay');\nfooterButton.addEventListener('click', function () {\n  modalWindowOverlay.setAttribute('style', 'display: flex');\n});\n\n//# sourceURL=webpack:///./src/modules/footer/footer.js?");

/***/ }),

/***/ "./src/modules/gallery/gallery.js":
/*!****************************************!*\
  !*** ./src/modules/gallery/gallery.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var glightbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! glightbox */ \"./node_modules/glightbox/dist/js/glightbox.min.js\");\n/* harmony import */ var glightbox__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(glightbox__WEBPACK_IMPORTED_MODULE_0__);\n\nvar lightbox = glightbox__WEBPACK_IMPORTED_MODULE_0___default()({\n  touchNavigation: true,\n  loop: true\n});\n\n//# sourceURL=webpack:///./src/modules/gallery/gallery.js?");

/***/ }),

/***/ "./src/modules/header/header.js":
/*!**************************************!*\
  !*** ./src/modules/header/header.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var headerButton = document.querySelector('.header__button');\nvar modalWindowOverlay = document.querySelector('.modal-window-overlay');\nheaderButton.addEventListener('click', function () {\n  modalWindowOverlay.setAttribute('style', 'display: flex');\n});\n\n//# sourceURL=webpack:///./src/modules/header/header.js?");

/***/ }),

/***/ "./src/modules/hero/hero.js":
/*!**********************************!*\
  !*** ./src/modules/hero/hero.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel */ \"./node_modules/slick-carousel/slick/slick.js\");\n/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_1__);\n\n\njquery__WEBPACK_IMPORTED_MODULE_0___default()('.slick-slider').slick({\n  prevArrow: '<span class=\"slider-arrow--left\"></span>',\n  nextArrow: '<span class=\"slider-arrow--right\"></span>',\n  dots: true,\n  responsive: [{\n    breakpoint: 767,\n    settings: {\n      dots: false\n    }\n  }]\n});\n\n//# sourceURL=webpack:///./src/modules/hero/hero.js?");

/***/ }),

/***/ "./src/modules/menu/menu.js":
/*!**********************************!*\
  !*** ./src/modules/menu/menu.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var menuBurgerOpen = document.querySelector('[data-menuBurgerOpen]');\nvar menuBurger = document.querySelector('[data-menuBurger]');\nmenuBurgerOpen.addEventListener('click', function () {\n  if (!menuBurger.getAttribute('style')) {\n    menuBurger.setAttribute('style', 'display: flex');\n  } else {\n    menuBurger.removeAttribute('style');\n  }\n});\n\n//# sourceURL=webpack:///./src/modules/menu/menu.js?");

/***/ })

/******/ });