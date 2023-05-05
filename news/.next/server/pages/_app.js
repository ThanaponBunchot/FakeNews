(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(764);
// EXTERNAL MODULE: ./components/Nav.js
var components_Nav = __webpack_require__(424);
;// CONCATENATED MODULE: ./components/Footer.js

const Footer_Footer = ()=>{
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx("div", {
            children: "Copyright"
        })
    });
};
/* harmony default export */ const components_Footer = ((/* unused pure expression or super */ null && (Footer_Footer)));

;// CONCATENATED MODULE: ./components/Layout.js



const Layout = ({ children  })=>{
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(Nav, {}),
            children,
            /*#__PURE__*/ _jsx(Footer, {})
        ]
    });
};
/* harmony default export */ const components_Layout = ((/* unused pure expression or super */ null && (Layout)));

;// CONCATENATED MODULE: ./pages/_app.js



function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ...pageProps
    });
}


/***/ }),

/***/ 764:
/***/ (() => {



/***/ }),

/***/ 404:
/***/ ((module) => {

"use strict";
module.exports = require("primereact/dropdown");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 847:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/ai");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [955], () => (__webpack_exec__(181)));
module.exports = __webpack_exports__;

})();