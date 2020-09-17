webpackHotUpdate("starter-theme",{

/***/ "./packages/mars-theme/src/components/menu-modal.js":
/*!**********************************************************!*\
  !*** ./packages/mars-theme/src/components/menu-modal.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./link */ \"./packages/mars-theme/src/components/link.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}var MenuModal=(_ref)=>{var{state}=_ref;var{menu}=state.theme;var isThereLinks=menu!=null&&menu.length>0;return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(MenuOverlay,null),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(MenuContent,{as:\"nav\"},isThereLinks&&menu.map((_ref2)=>{var[name,link]=_ref2;return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(MenuLink,{key:name,link:link,\"aria-current\":state.router.link===link?\"page\":undefined},name);})));};var MenuOverlay=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"eqtk5fu0\",label:\"MenuOverlay\"})( false?undefined:{name:\"hb4ihw\",styles:\"background-color:#8ccbfc;width:100vw;height:100vh;overflow:hidden auto;position:fixed;z-index:2;top:0;left:0;@media screen and (min-width:800px){&{display:none;}}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3YmVydC9EZXNrdG9wL3N0YXJ0ZXItdGhlbWUvcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9tZW51LW1vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCOEIiLCJmaWxlIjoiL1VzZXJzL21hdHRoZXdiZXJ0L0Rlc2t0b3Avc3RhcnRlci10aGVtZS9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL21lbnUtbW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdHlsZWQsIGNvbm5lY3QgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuL2xpbmtcIjtcblxuY29uc3QgTWVudU1vZGFsID0gKHsgc3RhdGUgfSkgPT4ge1xuICBjb25zdCB7IG1lbnUgfSA9IHN0YXRlLnRoZW1lO1xuICBjb25zdCBpc1RoZXJlTGlua3MgPSBtZW51ICE9IG51bGwgJiYgbWVudS5sZW5ndGggPiAwO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNZW51T3ZlcmxheSAvPlxuICAgICAgPE1lbnVDb250ZW50IGFzPVwibmF2XCI+XG4gICAgICAgIHtpc1RoZXJlTGlua3MgJiZcbiAgICAgICAgICBtZW51Lm1hcCgoW25hbWUsIGxpbmtdKSA9PiAoXG4gICAgICAgICAgICA8TWVudUxpbmtcbiAgICAgICAgICAgICAga2V5PXtuYW1lfVxuICAgICAgICAgICAgICBsaW5rPXtsaW5rfVxuICAgICAgICAgICAgICBhcmlhLWN1cnJlbnQ9e3N0YXRlLnJvdXRlci5saW5rID09PSBsaW5rID8gXCJwYWdlXCIgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgPC9NZW51TGluaz5cbiAgICAgICAgICApKX1cbiAgICAgIDwvTWVudUNvbnRlbnQ+XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBNZW51T3ZlcmxheSA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICM4Y2NiZmM7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiBhdXRvO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xuICAgICYge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IE1lbnVDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgei1pbmRleDogMztcbmA7XG5cbmNvbnN0IE1lbnVMaW5rID0gc3R5bGVkKExpbmspYFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdXRsaW5lOiAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMS4ycmVtIDA7XG5cbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgfVxuICAvKiBzdHlsZXMgZm9yIGFjdGl2ZSBsaW5rICovXG4gICZbYXJpYS1jdXJyZW50PVwicGFnZVwiXSB7XG4gICAgY29sb3I6IHllbGxvdztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAvKiBib3JkZXItYm90dG9tOiA0cHggc29saWQgeWVsbG93OyAqL1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE1lbnVNb2RhbCk7XG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var MenuContent=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"eqtk5fu1\",label:\"MenuContent\"})( false?undefined:{name:\"4ma18r\",styles:\"z-index:3;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3YmVydC9EZXNrdG9wL3N0YXJ0ZXItdGhlbWUvcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9tZW51LW1vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDOEIiLCJmaWxlIjoiL1VzZXJzL21hdHRoZXdiZXJ0L0Rlc2t0b3Avc3RhcnRlci10aGVtZS9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL21lbnUtbW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdHlsZWQsIGNvbm5lY3QgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuL2xpbmtcIjtcblxuY29uc3QgTWVudU1vZGFsID0gKHsgc3RhdGUgfSkgPT4ge1xuICBjb25zdCB7IG1lbnUgfSA9IHN0YXRlLnRoZW1lO1xuICBjb25zdCBpc1RoZXJlTGlua3MgPSBtZW51ICE9IG51bGwgJiYgbWVudS5sZW5ndGggPiAwO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNZW51T3ZlcmxheSAvPlxuICAgICAgPE1lbnVDb250ZW50IGFzPVwibmF2XCI+XG4gICAgICAgIHtpc1RoZXJlTGlua3MgJiZcbiAgICAgICAgICBtZW51Lm1hcCgoW25hbWUsIGxpbmtdKSA9PiAoXG4gICAgICAgICAgICA8TWVudUxpbmtcbiAgICAgICAgICAgICAga2V5PXtuYW1lfVxuICAgICAgICAgICAgICBsaW5rPXtsaW5rfVxuICAgICAgICAgICAgICBhcmlhLWN1cnJlbnQ9e3N0YXRlLnJvdXRlci5saW5rID09PSBsaW5rID8gXCJwYWdlXCIgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgPC9NZW51TGluaz5cbiAgICAgICAgICApKX1cbiAgICAgIDwvTWVudUNvbnRlbnQ+XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBNZW51T3ZlcmxheSA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICM4Y2NiZmM7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiBhdXRvO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xuICAgICYge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IE1lbnVDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgei1pbmRleDogMztcbmA7XG5cbmNvbnN0IE1lbnVMaW5rID0gc3R5bGVkKExpbmspYFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdXRsaW5lOiAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMS4ycmVtIDA7XG5cbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgfVxuICAvKiBzdHlsZXMgZm9yIGFjdGl2ZSBsaW5rICovXG4gICZbYXJpYS1jdXJyZW50PVwicGFnZVwiXSB7XG4gICAgY29sb3I6IHllbGxvdztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAvKiBib3JkZXItYm90dG9tOiA0cHggc29saWQgeWVsbG93OyAqL1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE1lbnVNb2RhbCk7XG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var MenuLink=/*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{target:\"eqtk5fu2\",label:\"MenuLink\"})( false?undefined:{name:\"13fzehu\",styles:\"width:100%;display:inline-block;outline:0;font-size:20px;text-align:center;padding:1.2rem 0;&:hover,&:focus{background-color:rgba(0,0,0,0.05);}&[aria-current=\\\"page\\\"]{color:yellow;font-weight:bold;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3YmVydC9EZXNrdG9wL3N0YXJ0ZXItdGhlbWUvcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9tZW51LW1vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdENkIiLCJmaWxlIjoiL1VzZXJzL21hdHRoZXdiZXJ0L0Rlc2t0b3Avc3RhcnRlci10aGVtZS9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL21lbnUtbW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdHlsZWQsIGNvbm5lY3QgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuL2xpbmtcIjtcblxuY29uc3QgTWVudU1vZGFsID0gKHsgc3RhdGUgfSkgPT4ge1xuICBjb25zdCB7IG1lbnUgfSA9IHN0YXRlLnRoZW1lO1xuICBjb25zdCBpc1RoZXJlTGlua3MgPSBtZW51ICE9IG51bGwgJiYgbWVudS5sZW5ndGggPiAwO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNZW51T3ZlcmxheSAvPlxuICAgICAgPE1lbnVDb250ZW50IGFzPVwibmF2XCI+XG4gICAgICAgIHtpc1RoZXJlTGlua3MgJiZcbiAgICAgICAgICBtZW51Lm1hcCgoW25hbWUsIGxpbmtdKSA9PiAoXG4gICAgICAgICAgICA8TWVudUxpbmtcbiAgICAgICAgICAgICAga2V5PXtuYW1lfVxuICAgICAgICAgICAgICBsaW5rPXtsaW5rfVxuICAgICAgICAgICAgICBhcmlhLWN1cnJlbnQ9e3N0YXRlLnJvdXRlci5saW5rID09PSBsaW5rID8gXCJwYWdlXCIgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgPC9NZW51TGluaz5cbiAgICAgICAgICApKX1cbiAgICAgIDwvTWVudUNvbnRlbnQ+XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBNZW51T3ZlcmxheSA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICM4Y2NiZmM7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiBhdXRvO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xuICAgICYge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IE1lbnVDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgei1pbmRleDogMztcbmA7XG5cbmNvbnN0IE1lbnVMaW5rID0gc3R5bGVkKExpbmspYFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdXRsaW5lOiAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMS4ycmVtIDA7XG5cbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgfVxuICAvKiBzdHlsZXMgZm9yIGFjdGl2ZSBsaW5rICovXG4gICZbYXJpYS1jdXJyZW50PVwicGFnZVwiXSB7XG4gICAgY29sb3I6IHllbGxvdztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAvKiBib3JkZXItYm90dG9tOiA0cHggc29saWQgeWVsbG93OyAqL1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE1lbnVNb2RhbCk7XG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(MenuModal));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL21lbnUtbW9kYWwuanM/ZTNlOSJdLCJuYW1lcyI6WyJNZW51TW9kYWwiLCJzdGF0ZSIsIm1lbnUiLCJ0aGVtZSIsImlzVGhlcmVMaW5rcyIsImxlbmd0aCIsIm1hcCIsIm5hbWUiLCJsaW5rIiwicm91dGVyIiwidW5kZWZpbmVkIiwiTWVudU92ZXJsYXkiLCJNZW51Q29udGVudCIsIk1lbnVMaW5rIiwiTGluayIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O3FSQUlBLEdBQU1BLFVBQVMsQ0FBRyxRQUFlLElBQWQsQ0FBRUMsS0FBRixDQUFjLE1BQy9CLEdBQU0sQ0FBRUMsSUFBRixFQUFXRCxLQUFLLENBQUNFLEtBQXZCLENBQ0EsR0FBTUMsYUFBWSxDQUFHRixJQUFJLEVBQUksSUFBUixFQUFnQkEsSUFBSSxDQUFDRyxNQUFMLENBQWMsQ0FBbkQsQ0FFQSxNQUNFLHNIQUNFLDBEQUFDLFdBQUQsTUFERixDQUVFLDBEQUFDLFdBQUQsRUFBYSxFQUFFLENBQUMsS0FBaEIsRUFDR0QsWUFBWSxFQUNYRixJQUFJLENBQUNJLEdBQUwsQ0FBUyxhQUFDLENBQUNDLElBQUQsQ0FBT0MsSUFBUCxDQUFELGFBQ1AsMkRBQUMsUUFBRCxFQUNFLEdBQUcsQ0FBRUQsSUFEUCxDQUVFLElBQUksQ0FBRUMsSUFGUixDQUdFLGVBQWNQLEtBQUssQ0FBQ1EsTUFBTixDQUFhRCxJQUFiLEdBQXNCQSxJQUF0QixDQUE2QixNQUE3QixDQUFzQ0UsU0FIdEQsRUFLR0gsSUFMSCxDQURPLEVBQVQsQ0FGSixDQUZGLENBREYsQ0FpQkQsQ0FyQkQsQ0F1QkEsR0FBTUksWUFBVyxzbkZBQWpCLENBaUJBLEdBQU1DLFlBQVcsODlFQUFqQixDQUlBLEdBQU1DLFNBQVEsQ0FBRyxrRkFBT0MsNkNBQVAsc0NBQUgsd2lGQUFkLENBb0JlQyx1SEFBTyxDQUFDZixTQUFELENBQXRCIiwiZmlsZSI6Ii4vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9tZW51LW1vZGFsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc3R5bGVkLCBjb25uZWN0IH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi9saW5rXCI7XG5cbmNvbnN0IE1lbnVNb2RhbCA9ICh7IHN0YXRlIH0pID0+IHtcbiAgY29uc3QgeyBtZW51IH0gPSBzdGF0ZS50aGVtZTtcbiAgY29uc3QgaXNUaGVyZUxpbmtzID0gbWVudSAhPSBudWxsICYmIG1lbnUubGVuZ3RoID4gMDtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TWVudU92ZXJsYXkgLz5cbiAgICAgIDxNZW51Q29udGVudCBhcz1cIm5hdlwiPlxuICAgICAgICB7aXNUaGVyZUxpbmtzICYmXG4gICAgICAgICAgbWVudS5tYXAoKFtuYW1lLCBsaW5rXSkgPT4gKFxuICAgICAgICAgICAgPE1lbnVMaW5rXG4gICAgICAgICAgICAgIGtleT17bmFtZX1cbiAgICAgICAgICAgICAgbGluaz17bGlua31cbiAgICAgICAgICAgICAgYXJpYS1jdXJyZW50PXtzdGF0ZS5yb3V0ZXIubGluayA9PT0gbGluayA/IFwicGFnZVwiIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgIDwvTWVudUxpbms+XG4gICAgICAgICAgKSl9XG4gICAgICA8L01lbnVDb250ZW50PlxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgTWVudU92ZXJsYXkgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGNjYmZjO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW4gYXV0bztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgICAmIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBNZW51Q29udGVudCA9IHN0eWxlZC5kaXZgXG4gIHotaW5kZXg6IDM7XG5gO1xuXG5jb25zdCBNZW51TGluayA9IHN0eWxlZChMaW5rKWBcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3V0bGluZTogMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEuMnJlbSAwO1xuXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIH1cbiAgLyogc3R5bGVzIGZvciBhY3RpdmUgbGluayAqL1xuICAmW2FyaWEtY3VycmVudD1cInBhZ2VcIl0ge1xuICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgLyogYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHllbGxvdzsgKi9cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChNZW51TW9kYWwpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/menu-modal.js\n");

/***/ })

})