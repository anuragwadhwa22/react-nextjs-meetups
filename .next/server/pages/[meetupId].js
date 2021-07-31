module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[meetupId]/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/meetups/MeetupDetail.js":
/*!********************************************!*\
  !*** ./components/meetups/MeetupDetail.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MeetupDetail.module.css */ "./components/meetups/MeetupDetail.module.css");
/* harmony import */ var _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\anuwadhw\\React\\react-nextjs-meetups\\components\\meetups\\MeetupDetail.js";


const MeetUpDetail = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.detail,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: props.image,
      alt: props.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: props.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("address", {
      children: props.address
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: props.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MeetUpDetail);

/***/ }),

/***/ "./components/meetups/MeetupDetail.module.css":
/*!****************************************************!*\
  !*** ./components/meetups/MeetupDetail.module.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"detail": "MeetupDetail_detail__C_8IT"
};


/***/ }),

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/meetups/MeetupDetail */ "./components/meetups/MeetupDetail.js");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\anuwadhw\\React\\react-nextjs-meetups\\pages\\[meetupId]\\index.js";





const MeetUpDetails = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: props.meetupData.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: props.meetupData.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_2__["default"], {
      image: props.meetupData.image,
      title: props.meetupData.title,
      address: props.meetupData.address,
      description: props.meetupData.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

async function getStaticPaths() {
  const client = await mongodb__WEBPACK_IMPORTED_MODULE_3__["MongoClient"].connect("mongodb+srv://Anurag2:MonQGOeDe1gHOVBN@cluster0.7vuti.mongodb.net/meetups?retryWrites=true&w=majority");
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, {
    _id: 1
  }).toArray();
  client.close();
  return {
    fallback: "blocking",
    paths: meetups.map(meetup => ({
      params: {
        meetupId: meetup._id.toString()
      }
    }))
  };
}
async function getStaticProps(context) {
  // fetch data for single meetup
  const meetupId = context.params.meetupId;
  const client = await mongodb__WEBPACK_IMPORTED_MODULE_3__["MongoClient"].connect("mongodb+srv://Anurag2:MonQGOeDe1gHOVBN@cluster0.7vuti.mongodb.net/meetups?retryWrites=true&w=majority");
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const selectedMeetUp = await meetupsCollection.findOne({
    _id: Object(mongodb__WEBPACK_IMPORTED_MODULE_3__["ObjectId"])(meetupId)
  });
  client.close();
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        id: selectedMeetUp._id.toString(),
        title: selectedMeetUp.title,
        address: selectedMeetUp.address,
        image: selectedMeetUp.image,
        description: selectedMeetUp.description
      }
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (MeetUpDetails);

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJNZWV0VXBEZXRhaWwiLCJwcm9wcyIsImNsYXNzZXMiLCJkZXRhaWwiLCJpbWFnZSIsInRpdGxlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiTWVldFVwRGV0YWlscyIsIm1lZXR1cERhdGEiLCJnZXRTdGF0aWNQYXRocyIsImNsaWVudCIsIk1vbmdvQ2xpZW50IiwiY29ubmVjdCIsImRiIiwibWVldHVwc0NvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwibWVldHVwcyIsImZpbmQiLCJfaWQiLCJ0b0FycmF5IiwiY2xvc2UiLCJmYWxsYmFjayIsInBhdGhzIiwibWFwIiwibWVldHVwIiwicGFyYW1zIiwibWVldHVwSWQiLCJ0b1N0cmluZyIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsInNlbGVjdGVkTWVldFVwIiwiZmluZE9uZSIsIk9iamVjdElkIiwiY29uc29sZSIsImxvZyIsImlkIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7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O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvW21lZXR1cElkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBjbGFzc2VzIGZyb20gXCIuL01lZXR1cERldGFpbC5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBNZWV0VXBEZXRhaWwgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLmRldGFpbH0+XHJcbiAgICAgIDxpbWcgc3JjPXtwcm9wcy5pbWFnZX0gYWx0PXtwcm9wcy50aXRsZX0+PC9pbWc+XHJcbiAgICAgIDxoMT57cHJvcHMudGl0bGV9PC9oMT5cclxuICAgICAgPGFkZHJlc3M+e3Byb3BzLmFkZHJlc3N9PC9hZGRyZXNzPlxyXG4gICAgICA8cD57cHJvcHMuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZWV0VXBEZXRhaWw7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImRldGFpbFwiOiBcIk1lZXR1cERldGFpbF9kZXRhaWxfX0NfOElUXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1lZXRVcERldGFpbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbFwiO1xyXG5pbXBvcnQgeyBNb25nb0NsaWVudCwgT2JqZWN0SWQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG5jb25zdCBNZWV0VXBEZXRhaWxzID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPntwcm9wcy5tZWV0dXBEYXRhLnRpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17cHJvcHMubWVldHVwRGF0YS5kZXNjcmlwdGlvbn0+PC9tZXRhPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxNZWV0VXBEZXRhaWxcclxuICAgICAgICBpbWFnZT17cHJvcHMubWVldHVwRGF0YS5pbWFnZX1cclxuICAgICAgICB0aXRsZT17cHJvcHMubWVldHVwRGF0YS50aXRsZX1cclxuICAgICAgICBhZGRyZXNzPXtwcm9wcy5tZWV0dXBEYXRhLmFkZHJlc3N9XHJcbiAgICAgICAgZGVzY3JpcHRpb249e3Byb3BzLm1lZXR1cERhdGEuZGVzY3JpcHRpb259XHJcbiAgICAgID48L01lZXRVcERldGFpbD5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxyXG4gICAgXCJtb25nb2RiK3NydjovL0FudXJhZzI6TW9uUUdPZURlMWdIT1ZCTkBjbHVzdGVyMC43dnV0aS5tb25nb2RiLm5ldC9tZWV0dXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiXHJcbiAgKTtcclxuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG5cclxuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJtZWV0dXBzXCIpO1xyXG5cclxuICBjb25zdCBtZWV0dXBzID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCh7fSwgeyBfaWQ6IDEgfSkudG9BcnJheSgpO1xyXG5cclxuICBjbGllbnQuY2xvc2UoKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGZhbGxiYWNrOiBcImJsb2NraW5nXCIsXHJcbiAgICBwYXRoczogbWVldHVwcy5tYXAoKG1lZXR1cCkgPT4gKHtcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgbWVldHVwSWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKSxcclxuICAgICAgfSxcclxuICAgIH0pKSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG4gIC8vIGZldGNoIGRhdGEgZm9yIHNpbmdsZSBtZWV0dXBcclxuXHJcbiAgY29uc3QgbWVldHVwSWQgPSBjb250ZXh0LnBhcmFtcy5tZWV0dXBJZDtcclxuXHJcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcclxuICAgIFwibW9uZ29kYitzcnY6Ly9BbnVyYWcyOk1vblFHT2VEZTFnSE9WQk5AY2x1c3RlcjAuN3Z1dGkubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxyXG4gICk7XHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuXHJcbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcclxuXHJcbiAgY29uc3Qgc2VsZWN0ZWRNZWV0VXAgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kT25lKHtcclxuICAgIF9pZDogT2JqZWN0SWQobWVldHVwSWQpLFxyXG4gIH0pO1xyXG5cclxuICBjbGllbnQuY2xvc2UoKTtcclxuXHJcbiAgY29uc29sZS5sb2cobWVldHVwSWQpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbWVldHVwRGF0YToge1xyXG4gICAgICAgIGlkOiBzZWxlY3RlZE1lZXRVcC5faWQudG9TdHJpbmcoKSxcclxuICAgICAgICB0aXRsZTogc2VsZWN0ZWRNZWV0VXAudGl0bGUsXHJcbiAgICAgICAgYWRkcmVzczogc2VsZWN0ZWRNZWV0VXAuYWRkcmVzcyxcclxuICAgICAgICBpbWFnZTogc2VsZWN0ZWRNZWV0VXAuaW1hZ2UsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHNlbGVjdGVkTWVldFVwLmRlc2NyaXB0aW9uLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZWV0VXBEZXRhaWxzO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb2RiXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==