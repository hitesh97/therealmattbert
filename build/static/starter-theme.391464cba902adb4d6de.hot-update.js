webpackHotUpdate("starter-theme",{

/***/ "./packages/mars-theme/src/components/menu-modal.js":
/*!**********************************************************!*\
  !*** ./packages/mars-theme/src/components/menu-modal.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _frontity_components_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @frontity/components/link */ \"./node_modules/@frontity/components/link.tsx\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}var MenuModal=(_ref)=>{var{state,actions}=_ref;var{menu}=state.theme;var isThereLinks=menu!=null&&menu.length>0;return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(MenuOverlay,null),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(MenuContent,{as:\"nav\"},isThereLinks&&menu.map((_ref2)=>{var[name,link]=_ref2;return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(MenuLink,{key:name,link:link,\"aria-current\":state.router.link===link?\"page\":undefined},name);}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(Icons,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"a\",{href:\"https://twitter.com/therealmattbert/\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__[\"FaTwitter\"],null)),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"a\",{href:\"https://www.instagram.com/therealmattbert/\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__[\"FaInstagram\"],null)))));};var MenuOverlay=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"eqtk5fu0\",label:\"MenuOverlay\"})( false?undefined:{name:\"1as279t\",styles:\"background-color:#8ccbfc;width:100vw;height:100vh;overflow:hidden auto;position:fixed;z-index:2;top:0;left:0;@media screen and (min-width:800px){&{}}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3YmVydC9EZXNrdG9wL3N0YXJ0ZXItdGhlbWUvcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9tZW51LW1vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDOEIiLCJmaWxlIjoiL1VzZXJzL21hdHRoZXdiZXJ0L0Rlc2t0b3Avc3RhcnRlci10aGVtZS9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL21lbnUtbW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdHlsZWQsIGNvbm5lY3QgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9saW5rXCI7XG5pbXBvcnQgeyBGYVR3aXR0ZXIsIEZhSW5zdGFncmFtIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5cbmNvbnN0IE1lbnVNb2RhbCA9ICh7IHN0YXRlLCBhY3Rpb25zIH0pID0+IHtcbiAgY29uc3QgeyBtZW51IH0gPSBzdGF0ZS50aGVtZTtcbiAgY29uc3QgaXNUaGVyZUxpbmtzID0gbWVudSAhPSBudWxsICYmIG1lbnUubGVuZ3RoID4gMDtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TWVudU92ZXJsYXkgLz5cbiAgICAgIDxNZW51Q29udGVudCBhcz1cIm5hdlwiPlxuICAgICAgICB7aXNUaGVyZUxpbmtzICYmXG4gICAgICAgICAgbWVudS5tYXAoKFtuYW1lLCBsaW5rXSkgPT4gKFxuICAgICAgICAgICAgPE1lbnVMaW5rXG4gICAgICAgICAgICAgIGtleT17bmFtZX1cbiAgICAgICAgICAgICAgbGluaz17bGlua31cbiAgICAgICAgICAgICAgYXJpYS1jdXJyZW50PXtzdGF0ZS5yb3V0ZXIubGluayA9PT0gbGluayA/IFwicGFnZVwiIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgIDwvTWVudUxpbms+XG4gICAgICAgICAgKSl9XG5cbiAgICAgICAgPEljb25zPlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL3RoZXJlYWxtYXR0YmVydC9cIj5cbiAgICAgICAgICAgIDxGYVR3aXR0ZXIgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vdGhlcmVhbG1hdHRiZXJ0L1wiPlxuICAgICAgICAgICAgPEZhSW5zdGFncmFtIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0ljb25zPlxuICAgICAgPC9NZW51Q29udGVudD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IE1lbnVPdmVybGF5ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhjY2JmYztcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuIGF1dG87XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XG4gICAgJiB7XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBNZW51Q29udGVudCA9IHN0eWxlZC5kaXZgXG4gIHotaW5kZXg6IDM7XG5gO1xuXG5jb25zdCBJY29ucyA9IHN0eWxlZC5uYXZgXG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgcGFkZGluZzogMzBweCAwIDAgMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiBibGFjaztcblxuICBhOmhvdmVyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICBzdmcge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IE1lbnVMaW5rID0gc3R5bGVkKExpbmspYFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdXRsaW5lOiAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMS4ycmVtIDA7XG5cbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgfVxuICAvKiBzdHlsZXMgZm9yIGFjdGl2ZSBsaW5rICovXG4gICZbYXJpYS1jdXJyZW50PVwicGFnZVwiXSB7XG4gICAgY29sb3I6IHllbGxvdztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAvKiBib3JkZXItYm90dG9tOiA0cHggc29saWQgeWVsbG93OyAqL1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE1lbnVNb2RhbCk7XG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var MenuContent=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"eqtk5fu1\",label:\"MenuContent\"})( false?undefined:{name:\"4ma18r\",styles:\"z-index:3;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3YmVydC9EZXNrdG9wL3N0YXJ0ZXItdGhlbWUvcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9tZW51LW1vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFEOEIiLCJmaWxlIjoiL1VzZXJzL21hdHRoZXdiZXJ0L0Rlc2t0b3Avc3RhcnRlci10aGVtZS9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL21lbnUtbW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdHlsZWQsIGNvbm5lY3QgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9saW5rXCI7XG5pbXBvcnQgeyBGYVR3aXR0ZXIsIEZhSW5zdGFncmFtIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5cbmNvbnN0IE1lbnVNb2RhbCA9ICh7IHN0YXRlLCBhY3Rpb25zIH0pID0+IHtcbiAgY29uc3QgeyBtZW51IH0gPSBzdGF0ZS50aGVtZTtcbiAgY29uc3QgaXNUaGVyZUxpbmtzID0gbWVudSAhPSBudWxsICYmIG1lbnUubGVuZ3RoID4gMDtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TWVudU92ZXJsYXkgLz5cbiAgICAgIDxNZW51Q29udGVudCBhcz1cIm5hdlwiPlxuICAgICAgICB7aXNUaGVyZUxpbmtzICYmXG4gICAgICAgICAgbWVudS5tYXAoKFtuYW1lLCBsaW5rXSkgPT4gKFxuICAgICAgICAgICAgPE1lbnVMaW5rXG4gICAgICAgICAgICAgIGtleT17bmFtZX1cbiAgICAgICAgICAgICAgbGluaz17bGlua31cbiAgICAgICAgICAgICAgYXJpYS1jdXJyZW50PXtzdGF0ZS5yb3V0ZXIubGluayA9PT0gbGluayA/IFwicGFnZVwiIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgIDwvTWVudUxpbms+XG4gICAgICAgICAgKSl9XG5cbiAgICAgICAgPEljb25zPlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL3RoZXJlYWxtYXR0YmVydC9cIj5cbiAgICAgICAgICAgIDxGYVR3aXR0ZXIgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vdGhlcmVhbG1hdHRiZXJ0L1wiPlxuICAgICAgICAgICAgPEZhSW5zdGFncmFtIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0ljb25zPlxuICAgICAgPC9NZW51Q29udGVudD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IE1lbnVPdmVybGF5ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhjY2JmYztcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuIGF1dG87XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XG4gICAgJiB7XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBNZW51Q29udGVudCA9IHN0eWxlZC5kaXZgXG4gIHotaW5kZXg6IDM7XG5gO1xuXG5jb25zdCBJY29ucyA9IHN0eWxlZC5uYXZgXG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgcGFkZGluZzogMzBweCAwIDAgMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiBibGFjaztcblxuICBhOmhvdmVyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICBzdmcge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IE1lbnVMaW5rID0gc3R5bGVkKExpbmspYFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdXRsaW5lOiAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMS4ycmVtIDA7XG5cbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgfVxuICAvKiBzdHlsZXMgZm9yIGFjdGl2ZSBsaW5rICovXG4gICZbYXJpYS1jdXJyZW50PVwicGFnZVwiXSB7XG4gICAgY29sb3I6IHllbGxvdztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAvKiBib3JkZXItYm90dG9tOiA0cHggc29saWQgeWVsbG93OyAqL1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE1lbnVNb2RhbCk7XG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var Icons=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"nav\",{target:\"eqtk5fu2\",label:\"Icons\"})( false?undefined:{name:\"1xd3jkx\",styles:\"font-size:35px;padding:30px 0 0 10px;display:flex;justify-content:center;color:black;a:hover{color:white;}svg{padding-right:10px;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3YmVydC9EZXNrdG9wL3N0YXJ0ZXItdGhlbWUvcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9tZW51LW1vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlEd0IiLCJmaWxlIjoiL1VzZXJzL21hdHRoZXdiZXJ0L0Rlc2t0b3Avc3RhcnRlci10aGVtZS9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL21lbnUtbW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdHlsZWQsIGNvbm5lY3QgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9saW5rXCI7XG5pbXBvcnQgeyBGYVR3aXR0ZXIsIEZhSW5zdGFncmFtIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5cbmNvbnN0IE1lbnVNb2RhbCA9ICh7IHN0YXRlLCBhY3Rpb25zIH0pID0+IHtcbiAgY29uc3QgeyBtZW51IH0gPSBzdGF0ZS50aGVtZTtcbiAgY29uc3QgaXNUaGVyZUxpbmtzID0gbWVudSAhPSBudWxsICYmIG1lbnUubGVuZ3RoID4gMDtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TWVudU92ZXJsYXkgLz5cbiAgICAgIDxNZW51Q29udGVudCBhcz1cIm5hdlwiPlxuICAgICAgICB7aXNUaGVyZUxpbmtzICYmXG4gICAgICAgICAgbWVudS5tYXAoKFtuYW1lLCBsaW5rXSkgPT4gKFxuICAgICAgICAgICAgPE1lbnVMaW5rXG4gICAgICAgICAgICAgIGtleT17bmFtZX1cbiAgICAgICAgICAgICAgbGluaz17bGlua31cbiAgICAgICAgICAgICAgYXJpYS1jdXJyZW50PXtzdGF0ZS5yb3V0ZXIubGluayA9PT0gbGluayA/IFwicGFnZVwiIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgIDwvTWVudUxpbms+XG4gICAgICAgICAgKSl9XG5cbiAgICAgICAgPEljb25zPlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL3RoZXJlYWxtYXR0YmVydC9cIj5cbiAgICAgICAgICAgIDxGYVR3aXR0ZXIgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vdGhlcmVhbG1hdHRiZXJ0L1wiPlxuICAgICAgICAgICAgPEZhSW5zdGFncmFtIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0ljb25zPlxuICAgICAgPC9NZW51Q29udGVudD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IE1lbnVPdmVybGF5ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhjY2JmYztcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuIGF1dG87XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XG4gICAgJiB7XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBNZW51Q29udGVudCA9IHN0eWxlZC5kaXZgXG4gIHotaW5kZXg6IDM7XG5gO1xuXG5jb25zdCBJY29ucyA9IHN0eWxlZC5uYXZgXG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgcGFkZGluZzogMzBweCAwIDAgMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiBibGFjaztcblxuICBhOmhvdmVyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICBzdmcge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IE1lbnVMaW5rID0gc3R5bGVkKExpbmspYFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdXRsaW5lOiAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMS4ycmVtIDA7XG5cbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgfVxuICAvKiBzdHlsZXMgZm9yIGFjdGl2ZSBsaW5rICovXG4gICZbYXJpYS1jdXJyZW50PVwicGFnZVwiXSB7XG4gICAgY29sb3I6IHllbGxvdztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAvKiBib3JkZXItYm90dG9tOiA0cHggc29saWQgeWVsbG93OyAqL1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE1lbnVNb2RhbCk7XG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var MenuLink=/*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_frontity_components_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{target:\"eqtk5fu3\",label:\"MenuLink\"})( false?undefined:{name:\"13fzehu\",styles:\"width:100%;display:inline-block;outline:0;font-size:20px;text-align:center;padding:1.2rem 0;&:hover,&:focus{background-color:rgba(0,0,0,0.05);}&[aria-current=\\\"page\\\"]{color:yellow;font-weight:bold;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3YmVydC9EZXNrdG9wL3N0YXJ0ZXItdGhlbWUvcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9tZW51LW1vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlFNkIiLCJmaWxlIjoiL1VzZXJzL21hdHRoZXdiZXJ0L0Rlc2t0b3Avc3RhcnRlci10aGVtZS9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL21lbnUtbW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdHlsZWQsIGNvbm5lY3QgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9saW5rXCI7XG5pbXBvcnQgeyBGYVR3aXR0ZXIsIEZhSW5zdGFncmFtIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5cbmNvbnN0IE1lbnVNb2RhbCA9ICh7IHN0YXRlLCBhY3Rpb25zIH0pID0+IHtcbiAgY29uc3QgeyBtZW51IH0gPSBzdGF0ZS50aGVtZTtcbiAgY29uc3QgaXNUaGVyZUxpbmtzID0gbWVudSAhPSBudWxsICYmIG1lbnUubGVuZ3RoID4gMDtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TWVudU92ZXJsYXkgLz5cbiAgICAgIDxNZW51Q29udGVudCBhcz1cIm5hdlwiPlxuICAgICAgICB7aXNUaGVyZUxpbmtzICYmXG4gICAgICAgICAgbWVudS5tYXAoKFtuYW1lLCBsaW5rXSkgPT4gKFxuICAgICAgICAgICAgPE1lbnVMaW5rXG4gICAgICAgICAgICAgIGtleT17bmFtZX1cbiAgICAgICAgICAgICAgbGluaz17bGlua31cbiAgICAgICAgICAgICAgYXJpYS1jdXJyZW50PXtzdGF0ZS5yb3V0ZXIubGluayA9PT0gbGluayA/IFwicGFnZVwiIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgIDwvTWVudUxpbms+XG4gICAgICAgICAgKSl9XG5cbiAgICAgICAgPEljb25zPlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL3RoZXJlYWxtYXR0YmVydC9cIj5cbiAgICAgICAgICAgIDxGYVR3aXR0ZXIgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vdGhlcmVhbG1hdHRiZXJ0L1wiPlxuICAgICAgICAgICAgPEZhSW5zdGFncmFtIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0ljb25zPlxuICAgICAgPC9NZW51Q29udGVudD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IE1lbnVPdmVybGF5ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhjY2JmYztcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuIGF1dG87XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XG4gICAgJiB7XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBNZW51Q29udGVudCA9IHN0eWxlZC5kaXZgXG4gIHotaW5kZXg6IDM7XG5gO1xuXG5jb25zdCBJY29ucyA9IHN0eWxlZC5uYXZgXG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgcGFkZGluZzogMzBweCAwIDAgMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiBibGFjaztcblxuICBhOmhvdmVyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICBzdmcge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IE1lbnVMaW5rID0gc3R5bGVkKExpbmspYFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdXRsaW5lOiAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMS4ycmVtIDA7XG5cbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgfVxuICAvKiBzdHlsZXMgZm9yIGFjdGl2ZSBsaW5rICovXG4gICZbYXJpYS1jdXJyZW50PVwicGFnZVwiXSB7XG4gICAgY29sb3I6IHllbGxvdztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAvKiBib3JkZXItYm90dG9tOiA0cHggc29saWQgeWVsbG93OyAqL1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE1lbnVNb2RhbCk7XG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(MenuModal));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL21lbnUtbW9kYWwuanM/ZTNlOSJdLCJuYW1lcyI6WyJNZW51TW9kYWwiLCJzdGF0ZSIsImFjdGlvbnMiLCJtZW51IiwidGhlbWUiLCJpc1RoZXJlTGlua3MiLCJsZW5ndGgiLCJtYXAiLCJuYW1lIiwibGluayIsInJvdXRlciIsInVuZGVmaW5lZCIsIk1lbnVPdmVybGF5IiwiTWVudUNvbnRlbnQiLCJJY29ucyIsIk1lbnVMaW5rIiwiTGluayIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztxUkFLQSxHQUFNQSxVQUFTLENBQUcsUUFBd0IsSUFBdkIsQ0FBRUMsS0FBRixDQUFTQyxPQUFULENBQXVCLE1BQ3hDLEdBQU0sQ0FBRUMsSUFBRixFQUFXRixLQUFLLENBQUNHLEtBQXZCLENBQ0EsR0FBTUMsYUFBWSxDQUFHRixJQUFJLEVBQUksSUFBUixFQUFnQkEsSUFBSSxDQUFDRyxNQUFMLENBQWMsQ0FBbkQsQ0FFQSxNQUNFLHNIQUNFLDBEQUFDLFdBQUQsTUFERixDQUVFLDBEQUFDLFdBQUQsRUFBYSxFQUFFLENBQUMsS0FBaEIsRUFDR0QsWUFBWSxFQUNYRixJQUFJLENBQUNJLEdBQUwsQ0FBUyxhQUFDLENBQUNDLElBQUQsQ0FBT0MsSUFBUCxDQUFELGFBQ1AsMkRBQUMsUUFBRCxFQUNFLEdBQUcsQ0FBRUQsSUFEUCxDQUVFLElBQUksQ0FBRUMsSUFGUixDQUdFLGVBQWNSLEtBQUssQ0FBQ1MsTUFBTixDQUFhRCxJQUFiLEdBQXNCQSxJQUF0QixDQUE2QixNQUE3QixDQUFzQ0UsU0FIdEQsRUFLR0gsSUFMSCxDQURPLEVBQVQsQ0FGSixDQVlFLDBEQUFDLEtBQUQsTUFDRSwrREFBRyxJQUFJLENBQUMsc0NBQVIsRUFDRSwwREFBQyx3REFBRCxNQURGLENBREYsQ0FJRSwrREFBRyxJQUFJLENBQUMsNENBQVIsRUFDRSwwREFBQywwREFBRCxNQURGLENBSkYsQ0FaRixDQUZGLENBREYsQ0EwQkQsQ0E5QkQsQ0FnQ0EsR0FBTUksWUFBVyw4ekdBQWpCLENBZ0JBLEdBQU1DLFlBQVcsa3JHQUFqQixDQUlBLEdBQU1DLE1BQUsscXlHQUFYLENBZ0JBLEdBQU1DLFNBQVEsQ0FBRyxrRkFBT0MsaUVBQVAsc0NBQUgsNHZHQUFkLENBb0JlQyx1SEFBTyxDQUFDakIsU0FBRCxDQUF0QiIsImZpbGUiOiIuL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvbWVudS1tb2RhbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHN0eWxlZCwgY29ubmVjdCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIkBmcm9udGl0eS9jb21wb25lbnRzL2xpbmtcIjtcbmltcG9ydCB7IEZhVHdpdHRlciwgRmFJbnN0YWdyYW0gfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcblxuY29uc3QgTWVudU1vZGFsID0gKHsgc3RhdGUsIGFjdGlvbnMgfSkgPT4ge1xuICBjb25zdCB7IG1lbnUgfSA9IHN0YXRlLnRoZW1lO1xuICBjb25zdCBpc1RoZXJlTGlua3MgPSBtZW51ICE9IG51bGwgJiYgbWVudS5sZW5ndGggPiAwO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNZW51T3ZlcmxheSAvPlxuICAgICAgPE1lbnVDb250ZW50IGFzPVwibmF2XCI+XG4gICAgICAgIHtpc1RoZXJlTGlua3MgJiZcbiAgICAgICAgICBtZW51Lm1hcCgoW25hbWUsIGxpbmtdKSA9PiAoXG4gICAgICAgICAgICA8TWVudUxpbmtcbiAgICAgICAgICAgICAga2V5PXtuYW1lfVxuICAgICAgICAgICAgICBsaW5rPXtsaW5rfVxuICAgICAgICAgICAgICBhcmlhLWN1cnJlbnQ9e3N0YXRlLnJvdXRlci5saW5rID09PSBsaW5rID8gXCJwYWdlXCIgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgPC9NZW51TGluaz5cbiAgICAgICAgICApKX1cblxuICAgICAgICA8SWNvbnM+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vdGhlcmVhbG1hdHRiZXJ0L1wiPlxuICAgICAgICAgICAgPEZhVHdpdHRlciAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS90aGVyZWFsbWF0dGJlcnQvXCI+XG4gICAgICAgICAgICA8RmFJbnN0YWdyYW0gLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvSWNvbnM+XG4gICAgICA8L01lbnVDb250ZW50PlxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgTWVudU92ZXJsYXkgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGNjYmZjO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW4gYXV0bztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgICAmIHtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IE1lbnVDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgei1pbmRleDogMztcbmA7XG5cbmNvbnN0IEljb25zID0gc3R5bGVkLm5hdmBcbiAgZm9udC1zaXplOiAzNXB4O1xuICBwYWRkaW5nOiAzMHB4IDAgMCAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xuXG4gIGE6aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIHN2ZyB7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgfVxuYDtcblxuY29uc3QgTWVudUxpbmsgPSBzdHlsZWQoTGluaylgXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG91dGxpbmU6IDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxLjJyZW0gMDtcblxuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICB9XG4gIC8qIHN0eWxlcyBmb3IgYWN0aXZlIGxpbmsgKi9cbiAgJlthcmlhLWN1cnJlbnQ9XCJwYWdlXCJdIHtcbiAgICBjb2xvcjogeWVsbG93O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIC8qIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB5ZWxsb3c7ICovXG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoTWVudU1vZGFsKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/menu-modal.js\n");

/***/ })

})