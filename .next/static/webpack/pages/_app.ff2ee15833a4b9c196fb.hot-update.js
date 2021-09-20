"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/gallery.js":
/*!*******************************!*\
  !*** ./components/gallery.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Gallery; }\n/* harmony export */ });\n/* harmony import */ var theme_ui_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui/jsx-dev-runtime */ \"./node_modules/theme-ui/jsx-dev-runtime/dist/theme-ui-jsx-dev-runtime.esm.js\");\n/* harmony import */ var _Users_iammatthias_Sites_next_com_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react_snuggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-snuggle */ \"./node_modules/react-snuggle/dist/react-snuggle.es.js\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/theme-ui.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading */ \"./components/loading.js\");\n/* harmony import */ var simple_react_lightbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! simple-react-lightbox */ \"./node_modules/simple-react-lightbox/dist/index.es.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/iammatthias/Sites/next/com/components/gallery.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = (0,_Users_iammatthias_Sites_next_com_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)([\"\\n  query ($title: String) {\\n    galleryCollection(where: { title: $title }) {\\n      items {\\n        title\\n        imagesCollection {\\n          items {\\n            url(transform: { width: 600, quality: 60 })\\n            loader: url(transform: { width: 5, quality: 1 })\\n            title\\n            width\\n            height\\n          }\\n        }\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n/** @jsxImportSource theme-ui */\n// gallery\n\n\n\n\n\n // lightbox\n\n\nvar QUERY = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.gql)(_templateObject());\nfunction Gallery(props) {\n  _s();\n\n  var _this = this;\n\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useQuery)(QUERY, {\n    variables: {\n      title: props.imageset\n    }\n  }),\n      data = _useQuery.data,\n      loading = _useQuery.loading,\n      error = _useQuery.error;\n\n  if (loading) {\n    return (0,theme_ui_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n      children: [(0,theme_ui_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loading__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, this), (0,theme_ui_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true);\n  }\n\n  if (error) {\n    console.error(error);\n    return null;\n  }\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n  var pathname = router.pathname;\n  var imageSetTitle = data.galleryCollection.items[0].title;\n  var imageSetImages = data.galleryCollection.items[0].imagesCollection.items;\n  var options = {\n    settings: {\n      overlayColor: 'rgba(0, 0, 0, 0.9)',\n      autoplaySpeed: 0,\n      hideControlsAfter: false,\n      disablePanzoom: true\n    },\n    buttons: {\n      backgroundColor: 'white',\n      iconColor: 'black',\n      showDownloadButton: false\n    },\n    caption: {\n      showCaption: false\n    },\n    thumbnails: {\n      showThumbnails: false\n    }\n  };\n  var callbacks = {\n    onSlideChange: function onSlideChange(object) {\n      return handleSlideChange(object);\n    },\n    onLightboxOpened: function onLightboxOpened(object) {\n      return handleLightboxOpen(object);\n    },\n    onLightboxClosed: function onLightboxClosed(object) {\n      return handleLightboxClose(object);\n    }\n  };\n\n  function handleSlideChange(object) {\n    if (true) {\n      __webpack_require__.g.analytics.track('Image Viewed', {\n        src: object.slides.current.source,\n        location: pathname,\n        direction: object.action,\n        event: 'Lightbox Slide Changed'\n      });\n    }\n\n    return object;\n  }\n\n  function handleLightboxOpen(object) {\n    if (true) {\n      __webpack_require__.g.analytics.track('Image Viewed', {\n        src: object.currentSlide.source,\n        location: pathname,\n        event: 'Lightbox Opened'\n      });\n    }\n\n    return object;\n  }\n\n  function handleLightboxClose(object) {\n    if (true) {\n      __webpack_require__.g.analytics.track('Image Viewed', {\n        src: object.currentSlide.source,\n        location: pathname,\n        event: 'Lightbox Closed'\n      });\n    }\n\n    return object;\n  }\n\n  var columnWidth = imageSetImages.length == 1 ? '' : imageSetImages.length == 2 ? '500' : imageSetImages.length == 3 ? '350' : '250';\n  return (0,theme_ui_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(simple_react_lightbox__WEBPACK_IMPORTED_MODULE_6__.default, {\n    children: (0,theme_ui_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(simple_react_lightbox__WEBPACK_IMPORTED_MODULE_6__.SRLWrapper, {\n      options: options,\n      callbacks: callbacks,\n      children: (0,theme_ui_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_8__.Box, {\n        sx: {\n          mx: 'auto',\n          mb: 6\n        },\n        children: [imageSetImages.length > 1 ? (0,theme_ui_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n          children: [(0,theme_ui_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n            children: imageSetTitle\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 139,\n            columnNumber: 15\n          }, this), (0,theme_ui_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 140,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true) : null, (0,theme_ui_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_snuggle__WEBPACK_IMPORTED_MODULE_3__.default, {\n          columnWidth: columnWidth,\n          children: imageSetImages.map(function (image) {\n            return (0,theme_ui_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n              src: image.url,\n              alt: image.title,\n              width: image.width,\n              height: image.height,\n              layout: \"intrinsic\",\n              placeholder: \"blur\",\n              blurDataURL: image.loader\n            }, image, false, {\n              fileName: _jsxFileName,\n              lineNumber: 146,\n              columnNumber: 15\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 144,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 136,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 134,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Gallery, \"O/g4p4AM2YfhF8WmLmH6gKG/qKY=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useQuery, next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];\n});\n\n_c = Gallery;\n\nvar _c;\n\n$RefreshReg$(_c, \"Gallery\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbGxlcnkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQTtBQUVBLElBQU1TLEtBQUssR0FBR1AsbURBQUgsbUJBQVg7QUFtQmUsU0FBU1EsT0FBVCxDQUFpQkMsS0FBakIsRUFBd0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDSlYsd0RBQVEsQ0FBQ1EsS0FBRCxFQUFRO0FBQy9DRyxJQUFBQSxTQUFTLEVBQUU7QUFDVEMsTUFBQUEsS0FBSyxFQUFFRixLQUFLLENBQUNHO0FBREo7QUFEb0MsR0FBUixDQURKO0FBQUEsTUFDN0JDLElBRDZCLGFBQzdCQSxJQUQ2QjtBQUFBLE1BQ3ZCQyxPQUR1QixhQUN2QkEsT0FEdUI7QUFBQSxNQUNkQyxLQURjLGFBQ2RBLEtBRGM7O0FBT3JDLE1BQUlELE9BQUosRUFBYTtBQUNYLFdBQ0U7QUFBQSxpQkFDRSxpRUFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQSxvQkFERjtBQU1EOztBQUVELE1BQUlDLEtBQUosRUFBVztBQUNUQyxJQUFBQSxPQUFPLENBQUNELEtBQVIsQ0FBY0EsS0FBZDtBQUNBLFdBQU8sSUFBUDtBQUNEOztBQUVELE1BQU1FLE1BQU0sR0FBR2Qsc0RBQVMsRUFBeEI7QUFDQSxNQUFNZSxRQUFRLEdBQUdELE1BQU0sQ0FBQ0MsUUFBeEI7QUFFQSxNQUFNQyxhQUFhLEdBQUdOLElBQUksQ0FBQ08saUJBQUwsQ0FBdUJDLEtBQXZCLENBQTZCLENBQTdCLEVBQWdDVixLQUF0RDtBQUNBLE1BQU1XLGNBQWMsR0FBR1QsSUFBSSxDQUFDTyxpQkFBTCxDQUF1QkMsS0FBdkIsQ0FBNkIsQ0FBN0IsRUFBZ0NFLGdCQUFoQyxDQUFpREYsS0FBeEU7QUFFQSxNQUFNRyxPQUFPLEdBQUc7QUFDZEMsSUFBQUEsUUFBUSxFQUFFO0FBQ1JDLE1BQUFBLFlBQVksRUFBRSxvQkFETjtBQUVSQyxNQUFBQSxhQUFhLEVBQUUsQ0FGUDtBQUdSQyxNQUFBQSxpQkFBaUIsRUFBRSxLQUhYO0FBSVJDLE1BQUFBLGNBQWMsRUFBRTtBQUpSLEtBREk7QUFPZEMsSUFBQUEsT0FBTyxFQUFFO0FBQ1BDLE1BQUFBLGVBQWUsRUFBRSxPQURWO0FBRVBDLE1BQUFBLFNBQVMsRUFBRSxPQUZKO0FBR1BDLE1BQUFBLGtCQUFrQixFQUFFO0FBSGIsS0FQSztBQVlkQyxJQUFBQSxPQUFPLEVBQUU7QUFDUEMsTUFBQUEsV0FBVyxFQUFFO0FBRE4sS0FaSztBQWVkQyxJQUFBQSxVQUFVLEVBQUU7QUFDVkMsTUFBQUEsY0FBYyxFQUFFO0FBRE47QUFmRSxHQUFoQjtBQW9CQSxNQUFNQyxTQUFTLEdBQUc7QUFDaEJDLElBQUFBLGFBQWEsRUFBRSx1QkFBQUMsTUFBTTtBQUFBLGFBQUlDLGlCQUFpQixDQUFDRCxNQUFELENBQXJCO0FBQUEsS0FETDtBQUVoQkUsSUFBQUEsZ0JBQWdCLEVBQUUsMEJBQUFGLE1BQU07QUFBQSxhQUFJRyxrQkFBa0IsQ0FBQ0gsTUFBRCxDQUF0QjtBQUFBLEtBRlI7QUFHaEJJLElBQUFBLGdCQUFnQixFQUFFLDBCQUFBSixNQUFNO0FBQUEsYUFBSUssbUJBQW1CLENBQUNMLE1BQUQsQ0FBdkI7QUFBQTtBQUhSLEdBQWxCOztBQU1BLFdBQVNDLGlCQUFULENBQTJCRCxNQUEzQixFQUFtQztBQUNqQyxjQUFtQztBQUNqQ00sTUFBQUEscUJBQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsS0FBakIsQ0FBdUIsY0FBdkIsRUFBdUM7QUFDckNDLFFBQUFBLEdBQUcsRUFBRVQsTUFBTSxDQUFDVSxNQUFQLENBQWNDLE9BQWQsQ0FBc0JDLE1BRFU7QUFFckNDLFFBQUFBLFFBQVEsRUFBRW5DLFFBRjJCO0FBR3JDb0MsUUFBQUEsU0FBUyxFQUFFZCxNQUFNLENBQUNlLE1BSG1CO0FBSXJDQyxRQUFBQSxLQUFLLEVBQUU7QUFKOEIsT0FBdkM7QUFNRDs7QUFFRCxXQUFPaEIsTUFBUDtBQUNEOztBQUVELFdBQVNHLGtCQUFULENBQTRCSCxNQUE1QixFQUFvQztBQUNsQyxjQUFtQztBQUNqQ00sTUFBQUEscUJBQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsS0FBakIsQ0FBdUIsY0FBdkIsRUFBdUM7QUFDckNDLFFBQUFBLEdBQUcsRUFBRVQsTUFBTSxDQUFDaUIsWUFBUCxDQUFvQkwsTUFEWTtBQUVyQ0MsUUFBQUEsUUFBUSxFQUFFbkMsUUFGMkI7QUFHckNzQyxRQUFBQSxLQUFLLEVBQUU7QUFIOEIsT0FBdkM7QUFLRDs7QUFFRCxXQUFPaEIsTUFBUDtBQUNEOztBQUVELFdBQVNLLG1CQUFULENBQTZCTCxNQUE3QixFQUFxQztBQUNuQyxjQUFtQztBQUNqQ00sTUFBQUEscUJBQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsS0FBakIsQ0FBdUIsY0FBdkIsRUFBdUM7QUFDckNDLFFBQUFBLEdBQUcsRUFBRVQsTUFBTSxDQUFDaUIsWUFBUCxDQUFvQkwsTUFEWTtBQUVyQ0MsUUFBQUEsUUFBUSxFQUFFbkMsUUFGMkI7QUFHckNzQyxRQUFBQSxLQUFLLEVBQUU7QUFIOEIsT0FBdkM7QUFLRDs7QUFFRCxXQUFPaEIsTUFBUDtBQUNEOztBQUVELE1BQU1rQixXQUFXLEdBQ2ZwQyxjQUFjLENBQUNxQyxNQUFmLElBQXlCLENBQXpCLEdBQ0ksRUFESixHQUVJckMsY0FBYyxDQUFDcUMsTUFBZixJQUF5QixDQUF6QixHQUNBLEtBREEsR0FFQXJDLGNBQWMsQ0FBQ3FDLE1BQWYsSUFBeUIsQ0FBekIsR0FDQSxLQURBLEdBRUEsS0FQTjtBQVNBLFNBQ0UsaUVBQUMsMERBQUQ7QUFBQSxjQUNFLGlFQUFDLDZEQUFEO0FBQVksYUFBTyxFQUFFbkMsT0FBckI7QUFBOEIsZUFBUyxFQUFFYyxTQUF6QztBQUFBLGdCQUNFLGlFQUFDLHlDQUFEO0FBQUssVUFBRSxFQUFFO0FBQUVzQixVQUFBQSxFQUFFLEVBQUUsTUFBTjtBQUFjQyxVQUFBQSxFQUFFLEVBQUU7QUFBbEIsU0FBVDtBQUFBLG1CQUNHdkMsY0FBYyxDQUFDcUMsTUFBZixHQUF3QixDQUF4QixHQUNDO0FBQUEscUJBQ0U7QUFBQSxzQkFBS3hDO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQSx3QkFERCxHQUtHLElBTk4sRUFRRSxpRUFBQyxrREFBRDtBQUFTLHFCQUFXLEVBQUV1QyxXQUF0QjtBQUFBLG9CQUNHcEMsY0FBYyxDQUFDd0MsR0FBZixDQUFtQixVQUFBQyxLQUFLO0FBQUEsbUJBQ3ZCLGlFQUFDLG1EQUFEO0FBRUUsaUJBQUcsRUFBRUEsS0FBSyxDQUFDQyxHQUZiO0FBR0UsaUJBQUcsRUFBRUQsS0FBSyxDQUFDcEQsS0FIYjtBQUlFLG1CQUFLLEVBQUVvRCxLQUFLLENBQUNFLEtBSmY7QUFLRSxvQkFBTSxFQUFFRixLQUFLLENBQUNHLE1BTGhCO0FBTUUsb0JBQU0sRUFBQyxXQU5UO0FBT0UseUJBQVcsRUFBQyxNQVBkO0FBUUUseUJBQVcsRUFBRUgsS0FBSyxDQUFDSTtBQVJyQixlQUNPSixLQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRHVCO0FBQUEsV0FBeEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE2QkQ7O0dBaEl1QnZEO1VBQ1dULHNEQW9CbEJJOzs7S0FyQk9LIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FsbGVyeS5qcz80MzQxIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4SW1wb3J0U291cmNlIHRoZW1lLXVpICovXG5cbi8vIGdhbGxlcnlcblxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyB1c2VRdWVyeSwgZ3FsIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnXG5pbXBvcnQgU251Z2dsZSBmcm9tICdyZWFjdC1zbnVnZ2xlJ1xuaW1wb3J0IHsgQm94IH0gZnJvbSAndGhlbWUtdWknXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vbG9hZGluZydcblxuLy8gbGlnaHRib3hcbmltcG9ydCBTaW1wbGVSZWFjdExpZ2h0Ym94LCB7IFNSTFdyYXBwZXIgfSBmcm9tICdzaW1wbGUtcmVhY3QtbGlnaHRib3gnXG5cbmNvbnN0IFFVRVJZID0gZ3FsYFxuICBxdWVyeSAoJHRpdGxlOiBTdHJpbmcpIHtcbiAgICBnYWxsZXJ5Q29sbGVjdGlvbih3aGVyZTogeyB0aXRsZTogJHRpdGxlIH0pIHtcbiAgICAgIGl0ZW1zIHtcbiAgICAgICAgdGl0bGVcbiAgICAgICAgaW1hZ2VzQ29sbGVjdGlvbiB7XG4gICAgICAgICAgaXRlbXMge1xuICAgICAgICAgICAgdXJsKHRyYW5zZm9ybTogeyB3aWR0aDogNjAwLCBxdWFsaXR5OiA2MCB9KVxuICAgICAgICAgICAgbG9hZGVyOiB1cmwodHJhbnNmb3JtOiB7IHdpZHRoOiA1LCBxdWFsaXR5OiAxIH0pXG4gICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgd2lkdGhcbiAgICAgICAgICAgIGhlaWdodFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYWxsZXJ5KHByb3BzKSB7XG4gIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZVF1ZXJ5KFFVRVJZLCB7XG4gICAgdmFyaWFibGVzOiB7XG4gICAgICB0aXRsZTogcHJvcHMuaW1hZ2VzZXQsXG4gICAgfSxcbiAgfSlcblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8TG9hZGluZyAvPlxuICAgICAgICA8aHIgLz5cbiAgICAgIDwvPlxuICAgIClcbiAgfVxuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gcm91dGVyLnBhdGhuYW1lXG5cbiAgY29uc3QgaW1hZ2VTZXRUaXRsZSA9IGRhdGEuZ2FsbGVyeUNvbGxlY3Rpb24uaXRlbXNbMF0udGl0bGVcbiAgY29uc3QgaW1hZ2VTZXRJbWFnZXMgPSBkYXRhLmdhbGxlcnlDb2xsZWN0aW9uLml0ZW1zWzBdLmltYWdlc0NvbGxlY3Rpb24uaXRlbXNcblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIHNldHRpbmdzOiB7XG4gICAgICBvdmVybGF5Q29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuOSknLFxuICAgICAgYXV0b3BsYXlTcGVlZDogMCxcbiAgICAgIGhpZGVDb250cm9sc0FmdGVyOiBmYWxzZSxcbiAgICAgIGRpc2FibGVQYW56b29tOiB0cnVlLFxuICAgIH0sXG4gICAgYnV0dG9uczoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgICAgaWNvbkNvbG9yOiAnYmxhY2snLFxuICAgICAgc2hvd0Rvd25sb2FkQnV0dG9uOiBmYWxzZSxcbiAgICB9LFxuICAgIGNhcHRpb246IHtcbiAgICAgIHNob3dDYXB0aW9uOiBmYWxzZSxcbiAgICB9LFxuICAgIHRodW1ibmFpbHM6IHtcbiAgICAgIHNob3dUaHVtYm5haWxzOiBmYWxzZSxcbiAgICB9LFxuICB9XG5cbiAgY29uc3QgY2FsbGJhY2tzID0ge1xuICAgIG9uU2xpZGVDaGFuZ2U6IG9iamVjdCA9PiBoYW5kbGVTbGlkZUNoYW5nZShvYmplY3QpLFxuICAgIG9uTGlnaHRib3hPcGVuZWQ6IG9iamVjdCA9PiBoYW5kbGVMaWdodGJveE9wZW4ob2JqZWN0KSxcbiAgICBvbkxpZ2h0Ym94Q2xvc2VkOiBvYmplY3QgPT4gaGFuZGxlTGlnaHRib3hDbG9zZShvYmplY3QpLFxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlU2xpZGVDaGFuZ2Uob2JqZWN0KSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBnbG9iYWwuYW5hbHl0aWNzLnRyYWNrKCdJbWFnZSBWaWV3ZWQnLCB7XG4gICAgICAgIHNyYzogb2JqZWN0LnNsaWRlcy5jdXJyZW50LnNvdXJjZSxcbiAgICAgICAgbG9jYXRpb246IHBhdGhuYW1lLFxuICAgICAgICBkaXJlY3Rpb246IG9iamVjdC5hY3Rpb24sXG4gICAgICAgIGV2ZW50OiAnTGlnaHRib3ggU2xpZGUgQ2hhbmdlZCcsXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBvYmplY3RcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUxpZ2h0Ym94T3BlbihvYmplY3QpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGdsb2JhbC5hbmFseXRpY3MudHJhY2soJ0ltYWdlIFZpZXdlZCcsIHtcbiAgICAgICAgc3JjOiBvYmplY3QuY3VycmVudFNsaWRlLnNvdXJjZSxcbiAgICAgICAgbG9jYXRpb246IHBhdGhuYW1lLFxuICAgICAgICBldmVudDogJ0xpZ2h0Ym94IE9wZW5lZCcsXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBvYmplY3RcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUxpZ2h0Ym94Q2xvc2Uob2JqZWN0KSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBnbG9iYWwuYW5hbHl0aWNzLnRyYWNrKCdJbWFnZSBWaWV3ZWQnLCB7XG4gICAgICAgIHNyYzogb2JqZWN0LmN1cnJlbnRTbGlkZS5zb3VyY2UsXG4gICAgICAgIGxvY2F0aW9uOiBwYXRobmFtZSxcbiAgICAgICAgZXZlbnQ6ICdMaWdodGJveCBDbG9zZWQnLFxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqZWN0XG4gIH1cblxuICBjb25zdCBjb2x1bW5XaWR0aCA9XG4gICAgaW1hZ2VTZXRJbWFnZXMubGVuZ3RoID09IDFcbiAgICAgID8gJydcbiAgICAgIDogaW1hZ2VTZXRJbWFnZXMubGVuZ3RoID09IDJcbiAgICAgID8gJzUwMCdcbiAgICAgIDogaW1hZ2VTZXRJbWFnZXMubGVuZ3RoID09IDNcbiAgICAgID8gJzM1MCdcbiAgICAgIDogJzI1MCdcblxuICByZXR1cm4gKFxuICAgIDxTaW1wbGVSZWFjdExpZ2h0Ym94PlxuICAgICAgPFNSTFdyYXBwZXIgb3B0aW9ucz17b3B0aW9uc30gY2FsbGJhY2tzPXtjYWxsYmFja3N9PlxuICAgICAgICA8Qm94IHN4PXt7IG14OiAnYXV0bycsIG1iOiA2IH19PlxuICAgICAgICAgIHtpbWFnZVNldEltYWdlcy5sZW5ndGggPiAxID8gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGgzPntpbWFnZVNldFRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICA8U251Z2dsZSBjb2x1bW5XaWR0aD17Y29sdW1uV2lkdGh9PlxuICAgICAgICAgICAge2ltYWdlU2V0SW1hZ2VzLm1hcChpbWFnZSA9PiAoXG4gICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIGtleT17aW1hZ2V9XG4gICAgICAgICAgICAgICAgc3JjPXtpbWFnZS51cmx9XG4gICAgICAgICAgICAgICAgYWx0PXtpbWFnZS50aXRsZX1cbiAgICAgICAgICAgICAgICB3aWR0aD17aW1hZ2Uud2lkdGh9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXtpbWFnZS5oZWlnaHR9XG4gICAgICAgICAgICAgICAgbGF5b3V0PVwiaW50cmluc2ljXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImJsdXJcIlxuICAgICAgICAgICAgICAgIGJsdXJEYXRhVVJMPXtpbWFnZS5sb2FkZXJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1NudWdnbGU+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9TUkxXcmFwcGVyPlxuICAgIDwvU2ltcGxlUmVhY3RMaWdodGJveD5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlUXVlcnkiLCJncWwiLCJTbnVnZ2xlIiwiQm94IiwidXNlUm91dGVyIiwiTG9hZGluZyIsIlNpbXBsZVJlYWN0TGlnaHRib3giLCJTUkxXcmFwcGVyIiwiUVVFUlkiLCJHYWxsZXJ5IiwicHJvcHMiLCJ2YXJpYWJsZXMiLCJ0aXRsZSIsImltYWdlc2V0IiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsImNvbnNvbGUiLCJyb3V0ZXIiLCJwYXRobmFtZSIsImltYWdlU2V0VGl0bGUiLCJnYWxsZXJ5Q29sbGVjdGlvbiIsIml0ZW1zIiwiaW1hZ2VTZXRJbWFnZXMiLCJpbWFnZXNDb2xsZWN0aW9uIiwib3B0aW9ucyIsInNldHRpbmdzIiwib3ZlcmxheUNvbG9yIiwiYXV0b3BsYXlTcGVlZCIsImhpZGVDb250cm9sc0FmdGVyIiwiZGlzYWJsZVBhbnpvb20iLCJidXR0b25zIiwiYmFja2dyb3VuZENvbG9yIiwiaWNvbkNvbG9yIiwic2hvd0Rvd25sb2FkQnV0dG9uIiwiY2FwdGlvbiIsInNob3dDYXB0aW9uIiwidGh1bWJuYWlscyIsInNob3dUaHVtYm5haWxzIiwiY2FsbGJhY2tzIiwib25TbGlkZUNoYW5nZSIsIm9iamVjdCIsImhhbmRsZVNsaWRlQ2hhbmdlIiwib25MaWdodGJveE9wZW5lZCIsImhhbmRsZUxpZ2h0Ym94T3BlbiIsIm9uTGlnaHRib3hDbG9zZWQiLCJoYW5kbGVMaWdodGJveENsb3NlIiwiZ2xvYmFsIiwiYW5hbHl0aWNzIiwidHJhY2siLCJzcmMiLCJzbGlkZXMiLCJjdXJyZW50Iiwic291cmNlIiwibG9jYXRpb24iLCJkaXJlY3Rpb24iLCJhY3Rpb24iLCJldmVudCIsImN1cnJlbnRTbGlkZSIsImNvbHVtbldpZHRoIiwibGVuZ3RoIiwibXgiLCJtYiIsIm1hcCIsImltYWdlIiwidXJsIiwid2lkdGgiLCJoZWlnaHQiLCJsb2FkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/gallery.js\n");

/***/ })

});