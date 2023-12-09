(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/global.scss":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/dist/cjs.js??ref--13-3!./src/global.scss ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "html.ios {\r\n  --ion-default-font: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif;\r\n}\r\n\r\nhtml.md {\r\n  --ion-default-font: \"Roboto\", \"Helvetica Neue\", sans-serif;\r\n}\r\n\r\nhtml {\r\n  --ion-font-family: var(--ion-default-font);\r\n}\r\n\r\nbody {\r\n  background: var(--ion-background-color);\r\n}\r\n\r\nbody.backdrop-no-scroll {\r\n  overflow: hidden;\r\n}\r\n\r\nhtml.ios ion-modal.modal-card .ion-page > ion-header > ion-toolbar:first-of-type {\r\n  padding-top: 0px;\r\n}\r\n\r\nhtml.ios ion-modal .ion-page {\r\n  border-radius: inherit;\r\n}\r\n\r\n.ion-color-primary {\r\n  --ion-color-base: var(--ion-color-primary, #3880ff) !important;\r\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\r\n  --ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;\r\n  --ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important;\r\n}\r\n\r\n.ion-color-secondary {\r\n  --ion-color-base: var(--ion-color-secondary, #3dc2ff) !important;\r\n  --ion-color-base-rgb: var(--ion-color-secondary-rgb, 61, 194, 255) !important;\r\n  --ion-color-contrast: var(--ion-color-secondary-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-secondary-shade, #36abe0) !important;\r\n  --ion-color-tint: var(--ion-color-secondary-tint, #50c8ff) !important;\r\n}\r\n\r\n.ion-color-tertiary {\r\n  --ion-color-base: var(--ion-color-tertiary, #5260ff) !important;\r\n  --ion-color-base-rgb: var(--ion-color-tertiary-rgb, 82, 96, 255) !important;\r\n  --ion-color-contrast: var(--ion-color-tertiary-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-tertiary-shade, #4854e0) !important;\r\n  --ion-color-tint: var(--ion-color-tertiary-tint, #6370ff) !important;\r\n}\r\n\r\n.ion-color-success {\r\n  --ion-color-base: var(--ion-color-success, #2dd36f) !important;\r\n  --ion-color-base-rgb: var(--ion-color-success-rgb, 45, 211, 111) !important;\r\n  --ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-success-shade, #28ba62) !important;\r\n  --ion-color-tint: var(--ion-color-success-tint, #42d77d) !important;\r\n}\r\n\r\n.ion-color-warning {\r\n  --ion-color-base: var(--ion-color-warning, #ffc409) !important;\r\n  --ion-color-base-rgb: var(--ion-color-warning-rgb, 255, 196, 9) !important;\r\n  --ion-color-contrast: var(--ion-color-warning-contrast, #000) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-warning-contrast-rgb, 0, 0, 0) !important;\r\n  --ion-color-shade: var(--ion-color-warning-shade, #e0ac08) !important;\r\n  --ion-color-tint: var(--ion-color-warning-tint, #ffca22) !important;\r\n}\r\n\r\n.ion-color-danger {\r\n  --ion-color-base: var(--ion-color-danger, #eb445a) !important;\r\n  --ion-color-base-rgb: var(--ion-color-danger-rgb, 235, 68, 90) !important;\r\n  --ion-color-contrast: var(--ion-color-danger-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-danger-shade, #cf3c4f) !important;\r\n  --ion-color-tint: var(--ion-color-danger-tint, #ed576b) !important;\r\n}\r\n\r\n.ion-color-light {\r\n  --ion-color-base: var(--ion-color-light, #f4f5f8) !important;\r\n  --ion-color-base-rgb: var(--ion-color-light-rgb, 244, 245, 248) !important;\r\n  --ion-color-contrast: var(--ion-color-light-contrast, #000) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;\r\n  --ion-color-shade: var(--ion-color-light-shade, #d7d8da) !important;\r\n  --ion-color-tint: var(--ion-color-light-tint, #f5f6f9) !important;\r\n}\r\n\r\n.ion-color-medium {\r\n  --ion-color-base: var(--ion-color-medium, #92949c) !important;\r\n  --ion-color-base-rgb: var(--ion-color-medium-rgb, 146, 148, 156) !important;\r\n  --ion-color-contrast: var(--ion-color-medium-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-medium-shade, #808289) !important;\r\n  --ion-color-tint: var(--ion-color-medium-tint, #9d9fa6) !important;\r\n}\r\n\r\n.ion-color-dark {\r\n  --ion-color-base: var(--ion-color-dark, #222428) !important;\r\n  --ion-color-base-rgb: var(--ion-color-dark-rgb, 34, 36, 40) !important;\r\n  --ion-color-contrast: var(--ion-color-dark-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-dark-shade, #1e2023) !important;\r\n  --ion-color-tint: var(--ion-color-dark-tint, #383a3e) !important;\r\n}\r\n\r\n.ion-page {\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  display: flex;\r\n  position: absolute;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  contain: layout size style;\r\n  overflow: hidden;\r\n  z-index: 0;\r\n}\r\n\r\n.split-pane-visible > .ion-page.split-pane-main {\r\n  position: relative;\r\n}\r\n\r\nion-route,\r\nion-route-redirect,\r\nion-router,\r\nion-select-option,\r\nion-nav-controller,\r\nion-menu-controller,\r\nion-action-sheet-controller,\r\nion-alert-controller,\r\nion-loading-controller,\r\nion-modal-controller,\r\nion-picker-controller,\r\nion-popover-controller,\r\nion-toast-controller,\r\n.ion-page-hidden,\r\n[hidden] {\r\n  /* stylelint-disable-next-line declaration-no-important */\r\n  display: none !important;\r\n}\r\n\r\n.ion-page-invisible {\r\n  opacity: 0;\r\n}\r\n\r\n.can-go-back > ion-header ion-back-button {\r\n  display: block;\r\n}\r\n\r\nhtml.plt-ios.plt-hybrid, html.plt-ios.plt-pwa {\r\n  --ion-statusbar-padding: 20px;\r\n}\r\n\r\n@supports (padding-top: 20px) {\r\n  html {\r\n    --ion-safe-area-top: var(--ion-statusbar-padding);\r\n  }\r\n}\r\n\r\n@supports (padding-top: constant(safe-area-inset-top)) {\r\n  html {\r\n    --ion-safe-area-top: constant(safe-area-inset-top);\r\n    --ion-safe-area-bottom: constant(safe-area-inset-bottom);\r\n    --ion-safe-area-left: constant(safe-area-inset-left);\r\n    --ion-safe-area-right: constant(safe-area-inset-right);\r\n  }\r\n}\r\n\r\n@supports (padding-top: env(safe-area-inset-top)) {\r\n  html {\r\n    --ion-safe-area-top: env(safe-area-inset-top);\r\n    --ion-safe-area-bottom: env(safe-area-inset-bottom);\r\n    --ion-safe-area-left: env(safe-area-inset-left);\r\n    --ion-safe-area-right: env(safe-area-inset-right);\r\n  }\r\n}\r\n\r\nion-card.ion-color .ion-inherit-color,\r\nion-card-header.ion-color .ion-inherit-color {\r\n  color: inherit;\r\n}\r\n\r\n.menu-content {\r\n  transform: translate3d(0,  0,  0);\r\n}\r\n\r\n.menu-content-open {\r\n  cursor: pointer;\r\n  touch-action: manipulation;\r\n  pointer-events: none;\r\n}\r\n\r\n.ios .menu-content-reveal {\r\n  box-shadow: -8px 0 42px rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n[dir=rtl].ios .menu-content-reveal {\r\n  box-shadow: 8px 0 42px rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n.md .menu-content-reveal {\r\n  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.18);\r\n}\r\n\r\n.md .menu-content-push {\r\n  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.18);\r\n}\r\n\r\nion-input input::-webkit-date-and-time-value {\r\n  text-align: start;\r\n}\r\n\r\naudio,\r\ncanvas,\r\nprogress,\r\nvideo {\r\n  vertical-align: baseline;\r\n}\r\n\r\naudio:not([controls]) {\r\n  display: none;\r\n  height: 0;\r\n}\r\n\r\nb,\r\nstrong {\r\n  font-weight: bold;\r\n}\r\n\r\nimg {\r\n  max-width: 100%;\r\n  border: 0;\r\n}\r\n\r\nsvg:not(:root) {\r\n  overflow: hidden;\r\n}\r\n\r\nfigure {\r\n  margin: 1em 40px;\r\n}\r\n\r\nhr {\r\n  height: 1px;\r\n  border-width: 0;\r\n  box-sizing: content-box;\r\n}\r\n\r\npre {\r\n  overflow: auto;\r\n}\r\n\r\ncode,\r\nkbd,\r\npre,\r\nsamp {\r\n  font-family: monospace, monospace;\r\n  font-size: 1em;\r\n}\r\n\r\nlabel,\r\ninput,\r\nselect,\r\ntextarea {\r\n  font-family: inherit;\r\n  line-height: normal;\r\n}\r\n\r\ntextarea {\r\n  overflow: auto;\r\n  height: auto;\r\n  font: inherit;\r\n  color: inherit;\r\n}\r\n\r\ntextarea::-moz-placeholder {\r\n  padding-left: 2px;\r\n}\r\n\r\ntextarea::placeholder {\r\n  padding-left: 2px;\r\n}\r\n\r\nform,\r\ninput,\r\noptgroup,\r\nselect {\r\n  margin: 0;\r\n  font: inherit;\r\n  color: inherit;\r\n}\r\n\r\nhtml input[type=button],\r\ninput[type=reset],\r\ninput[type=submit] {\r\n  cursor: pointer;\r\n  -webkit-appearance: button;\r\n}\r\n\r\na,\r\na div,\r\na span,\r\na ion-icon,\r\na ion-label,\r\nbutton,\r\nbutton div,\r\nbutton span,\r\nbutton ion-icon,\r\nbutton ion-label,\r\n.ion-tappable,\r\n[tappable],\r\n[tappable] div,\r\n[tappable] span,\r\n[tappable] ion-icon,\r\n[tappable] ion-label,\r\ninput,\r\ntextarea {\r\n  touch-action: manipulation;\r\n}\r\n\r\na ion-label,\r\nbutton ion-label {\r\n  pointer-events: none;\r\n}\r\n\r\nbutton {\r\n  border: 0;\r\n  border-radius: 0;\r\n  font-family: inherit;\r\n  font-style: inherit;\r\n  font-variant: inherit;\r\n  line-height: 1;\r\n  text-transform: none;\r\n  cursor: pointer;\r\n  -webkit-appearance: button;\r\n}\r\n\r\n[tappable] {\r\n  cursor: pointer;\r\n}\r\n\r\na[disabled],\r\nbutton[disabled],\r\nhtml input[disabled] {\r\n  cursor: default;\r\n}\r\n\r\nbutton::-moz-focus-inner,\r\ninput::-moz-focus-inner {\r\n  padding: 0;\r\n  border: 0;\r\n}\r\n\r\ninput[type=checkbox],\r\ninput[type=radio] {\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\ninput[type=number]::-webkit-inner-spin-button,\r\ninput[type=number]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\ninput[type=search]::-webkit-search-cancel-button,\r\ninput[type=search]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n\r\ntd,\r\nth {\r\n  padding: 0;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n  -webkit-tap-highlight-color: transparent;\r\n  -webkit-touch-callout: none;\r\n}\r\n\r\nhtml {\r\n  width: 100%;\r\n  height: 100%;\r\n  -webkit-text-size-adjust: 100%;\r\n     -moz-text-size-adjust: 100%;\r\n          text-size-adjust: 100%;\r\n}\r\n\r\nhtml:not(.hydrated) body {\r\n  display: none;\r\n}\r\n\r\nhtml.plt-pwa {\r\n  height: 100vh;\r\n}\r\n\r\nbody {\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n  padding-top: 0;\r\n  padding-bottom: 0;\r\n  position: fixed;\r\n  width: 100%;\r\n  max-width: 100%;\r\n  height: 100%;\r\n  max-height: 100%;\r\n  text-rendering: optimizeLegibility;\r\n  overflow: hidden;\r\n  touch-action: manipulation;\r\n  -webkit-user-drag: none;\r\n  -ms-content-zooming: none;\r\n  word-wrap: break-word;\r\n  overscroll-behavior-y: none;\r\n  -webkit-text-size-adjust: none;\r\n     -moz-text-size-adjust: none;\r\n          text-size-adjust: none;\r\n}\r\n\r\nhtml {\r\n  font-family: var(--ion-font-family);\r\n}\r\n\r\na {\r\n  background-color: transparent;\r\n  color: var(--ion-color-primary, #3880ff);\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  margin-top: 16px;\r\n  margin-bottom: 10px;\r\n  font-weight: 500;\r\n  line-height: 1.2;\r\n}\r\n\r\nh1 {\r\n  margin-top: 20px;\r\n  font-size: 26px;\r\n}\r\n\r\nh2 {\r\n  margin-top: 18px;\r\n  font-size: 24px;\r\n}\r\n\r\nh3 {\r\n  font-size: 22px;\r\n}\r\n\r\nh4 {\r\n  font-size: 20px;\r\n}\r\n\r\nh5 {\r\n  font-size: 18px;\r\n}\r\n\r\nh6 {\r\n  font-size: 16px;\r\n}\r\n\r\nsmall {\r\n  font-size: 75%;\r\n}\r\n\r\nsub,\r\nsup {\r\n  position: relative;\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\n.ion-no-padding {\r\n  --padding-start: 0;\r\n  --padding-end: 0;\r\n  --padding-top: 0;\r\n  --padding-bottom: 0;\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n  padding-top: 0;\r\n  padding-bottom: 0;\r\n}\r\n\r\n.ion-padding {\r\n  --padding-start: var(--ion-padding, 16px);\r\n  --padding-end: var(--ion-padding, 16px);\r\n  --padding-top: var(--ion-padding, 16px);\r\n  --padding-bottom: var(--ion-padding, 16px);\r\n  padding-left: var(--ion-padding, 16px);\r\n  padding-right: var(--ion-padding, 16px);\r\n  padding-top: var(--ion-padding, 16px);\r\n  padding-bottom: var(--ion-padding, 16px);\r\n}\r\n\r\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\r\n  .ion-padding {\r\n    padding-left: unset;\r\n    padding-right: unset;\r\n    -webkit-padding-start: var(--ion-padding, 16px);\r\n    padding-inline-start: var(--ion-padding, 16px);\r\n    -webkit-padding-end: var(--ion-padding, 16px);\r\n    padding-inline-end: var(--ion-padding, 16px);\r\n  }\r\n}\r\n\r\n.ion-padding-top {\r\n  --padding-top: var(--ion-padding, 16px);\r\n  padding-top: var(--ion-padding, 16px);\r\n}\r\n\r\n.ion-padding-start {\r\n  --padding-start: var(--ion-padding, 16px);\r\n  padding-left: var(--ion-padding, 16px);\r\n}\r\n\r\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\r\n  .ion-padding-start {\r\n    padding-left: unset;\r\n    -webkit-padding-start: var(--ion-padding, 16px);\r\n    padding-inline-start: var(--ion-padding, 16px);\r\n  }\r\n}\r\n\r\n.ion-padding-end {\r\n  --padding-end: var(--ion-padding, 16px);\r\n  padding-right: var(--ion-padding, 16px);\r\n}\r\n\r\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\r\n  .ion-padding-end {\r\n    padding-right: unset;\r\n    -webkit-padding-end: var(--ion-padding, 16px);\r\n    padding-inline-end: var(--ion-padding, 16px);\r\n  }\r\n}\r\n\r\n.ion-padding-bottom {\r\n  --padding-bottom: var(--ion-padding, 16px);\r\n  padding-bottom: var(--ion-padding, 16px);\r\n}\r\n\r\n.ion-padding-vertical {\r\n  --padding-top: var(--ion-padding, 16px);\r\n  --padding-bottom: var(--ion-padding, 16px);\r\n  padding-top: var(--ion-padding, 16px);\r\n  padding-bottom: var(--ion-padding, 16px);\r\n}\r\n\r\n.ion-padding-horizontal {\r\n  --padding-start: var(--ion-padding, 16px);\r\n  --padding-end: var(--ion-padding, 16px);\r\n  padding-left: var(--ion-padding, 16px);\r\n  padding-right: var(--ion-padding, 16px);\r\n}\r\n\r\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\r\n  .ion-padding-horizontal {\r\n    padding-left: unset;\r\n    padding-right: unset;\r\n    -webkit-padding-start: var(--ion-padding, 16px);\r\n    padding-inline-start: var(--ion-padding, 16px);\r\n    -webkit-padding-end: var(--ion-padding, 16px);\r\n    padding-inline-end: var(--ion-padding, 16px);\r\n  }\r\n}\r\n\r\n.ion-no-margin {\r\n  --margin-start: 0;\r\n  --margin-end: 0;\r\n  --margin-top: 0;\r\n  --margin-bottom: 0;\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.ion-margin {\r\n  --margin-start: var(--ion-margin, 16px);\r\n  --margin-end: var(--ion-margin, 16px);\r\n  --margin-top: var(--ion-margin, 16px);\r\n  --margin-bottom: var(--ion-margin, 16px);\r\n  margin-left: var(--ion-margin, 16px);\r\n  margin-right: var(--ion-margin, 16px);\r\n  margin-top: var(--ion-margin, 16px);\r\n  margin-bottom: var(--ion-margin, 16px);\r\n}\r\n\r\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\r\n  .ion-margin {\r\n    margin-left: unset;\r\n    margin-right: unset;\r\n    -webkit-margin-start: var(--ion-margin, 16px);\r\n    margin-inline-start: var(--ion-margin, 16px);\r\n    -webkit-margin-end: var(--ion-margin, 16px);\r\n    margin-inline-end: var(--ion-margin, 16px);\r\n  }\r\n}\r\n\r\n.ion-margin-top {\r\n  --margin-top: var(--ion-margin, 16px);\r\n  margin-top: var(--ion-margin, 16px);\r\n}\r\n\r\n.ion-margin-start {\r\n  --margin-start: var(--ion-margin, 16px);\r\n  margin-left: var(--ion-margin, 16px);\r\n}\r\n\r\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\r\n  .ion-margin-start {\r\n    margin-left: unset;\r\n    -webkit-margin-start: var(--ion-margin, 16px);\r\n    margin-inline-start: var(--ion-margin, 16px);\r\n  }\r\n}\r\n\r\n.ion-margin-end {\r\n  --margin-end: var(--ion-margin, 16px);\r\n  margin-right: var(--ion-margin, 16px);\r\n}\r\n\r\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\r\n  .ion-margin-end {\r\n    margin-right: unset;\r\n    -webkit-margin-end: var(--ion-margin, 16px);\r\n    margin-inline-end: var(--ion-margin, 16px);\r\n  }\r\n}\r\n\r\n.ion-margin-bottom {\r\n  --margin-bottom: var(--ion-margin, 16px);\r\n  margin-bottom: var(--ion-margin, 16px);\r\n}\r\n\r\n.ion-margin-vertical {\r\n  --margin-top: var(--ion-margin, 16px);\r\n  --margin-bottom: var(--ion-margin, 16px);\r\n  margin-top: var(--ion-margin, 16px);\r\n  margin-bottom: var(--ion-margin, 16px);\r\n}\r\n\r\n.ion-margin-horizontal {\r\n  --margin-start: var(--ion-margin, 16px);\r\n  --margin-end: var(--ion-margin, 16px);\r\n  margin-left: var(--ion-margin, 16px);\r\n  margin-right: var(--ion-margin, 16px);\r\n}\r\n\r\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\r\n  .ion-margin-horizontal {\r\n    margin-left: unset;\r\n    margin-right: unset;\r\n    -webkit-margin-start: var(--ion-margin, 16px);\r\n    margin-inline-start: var(--ion-margin, 16px);\r\n    -webkit-margin-end: var(--ion-margin, 16px);\r\n    margin-inline-end: var(--ion-margin, 16px);\r\n  }\r\n}\r\n\r\n.ion-float-left {\r\n  float: left !important;\r\n}\r\n\r\n.ion-float-right {\r\n  float: right !important;\r\n}\r\n\r\n.ion-float-start {\r\n  float: left !important;\r\n}\r\n\r\n[dir=rtl] .ion-float-start, :host-context([dir=rtl]) .ion-float-start {\r\n  float: right !important;\r\n}\r\n\r\n.ion-float-end {\r\n  float: right !important;\r\n}\r\n\r\n[dir=rtl] .ion-float-end, :host-context([dir=rtl]) .ion-float-end {\r\n  float: left !important;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .ion-float-sm-left {\r\n    float: left !important;\r\n  }\r\n\r\n  .ion-float-sm-right {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-sm-start {\r\n    float: left !important;\r\n  }\r\n  [dir=rtl] .ion-float-sm-start, :host-context([dir=rtl]) .ion-float-sm-start {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-sm-end {\r\n    float: right !important;\r\n  }\r\n  [dir=rtl] .ion-float-sm-end, :host-context([dir=rtl]) .ion-float-sm-end {\r\n    float: left !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .ion-float-md-left {\r\n    float: left !important;\r\n  }\r\n\r\n  .ion-float-md-right {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-md-start {\r\n    float: left !important;\r\n  }\r\n  [dir=rtl] .ion-float-md-start, :host-context([dir=rtl]) .ion-float-md-start {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-md-end {\r\n    float: right !important;\r\n  }\r\n  [dir=rtl] .ion-float-md-end, :host-context([dir=rtl]) .ion-float-md-end {\r\n    float: left !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .ion-float-lg-left {\r\n    float: left !important;\r\n  }\r\n\r\n  .ion-float-lg-right {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-lg-start {\r\n    float: left !important;\r\n  }\r\n  [dir=rtl] .ion-float-lg-start, :host-context([dir=rtl]) .ion-float-lg-start {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-lg-end {\r\n    float: right !important;\r\n  }\r\n  [dir=rtl] .ion-float-lg-end, :host-context([dir=rtl]) .ion-float-lg-end {\r\n    float: left !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .ion-float-xl-left {\r\n    float: left !important;\r\n  }\r\n\r\n  .ion-float-xl-right {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-xl-start {\r\n    float: left !important;\r\n  }\r\n  [dir=rtl] .ion-float-xl-start, :host-context([dir=rtl]) .ion-float-xl-start {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-xl-end {\r\n    float: right !important;\r\n  }\r\n  [dir=rtl] .ion-float-xl-end, :host-context([dir=rtl]) .ion-float-xl-end {\r\n    float: left !important;\r\n  }\r\n}\r\n\r\n.ion-text-center {\r\n  text-align: center !important;\r\n}\r\n\r\n.ion-text-justify {\r\n  text-align: justify !important;\r\n}\r\n\r\n.ion-text-start {\r\n  text-align: start !important;\r\n}\r\n\r\n.ion-text-end {\r\n  text-align: end !important;\r\n}\r\n\r\n.ion-text-left {\r\n  text-align: left !important;\r\n}\r\n\r\n.ion-text-right {\r\n  text-align: right !important;\r\n}\r\n\r\n.ion-text-nowrap {\r\n  white-space: nowrap !important;\r\n}\r\n\r\n.ion-text-wrap {\r\n  white-space: normal !important;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .ion-text-sm-center {\r\n    text-align: center !important;\r\n  }\r\n\r\n  .ion-text-sm-justify {\r\n    text-align: justify !important;\r\n  }\r\n\r\n  .ion-text-sm-start {\r\n    text-align: start !important;\r\n  }\r\n\r\n  .ion-text-sm-end {\r\n    text-align: end !important;\r\n  }\r\n\r\n  .ion-text-sm-left {\r\n    text-align: left !important;\r\n  }\r\n\r\n  .ion-text-sm-right {\r\n    text-align: right !important;\r\n  }\r\n\r\n  .ion-text-sm-nowrap {\r\n    white-space: nowrap !important;\r\n  }\r\n\r\n  .ion-text-sm-wrap {\r\n    white-space: normal !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .ion-text-md-center {\r\n    text-align: center !important;\r\n  }\r\n\r\n  .ion-text-md-justify {\r\n    text-align: justify !important;\r\n  }\r\n\r\n  .ion-text-md-start {\r\n    text-align: start !important;\r\n  }\r\n\r\n  .ion-text-md-end {\r\n    text-align: end !important;\r\n  }\r\n\r\n  .ion-text-md-left {\r\n    text-align: left !important;\r\n  }\r\n\r\n  .ion-text-md-right {\r\n    text-align: right !important;\r\n  }\r\n\r\n  .ion-text-md-nowrap {\r\n    white-space: nowrap !important;\r\n  }\r\n\r\n  .ion-text-md-wrap {\r\n    white-space: normal !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .ion-text-lg-center {\r\n    text-align: center !important;\r\n  }\r\n\r\n  .ion-text-lg-justify {\r\n    text-align: justify !important;\r\n  }\r\n\r\n  .ion-text-lg-start {\r\n    text-align: start !important;\r\n  }\r\n\r\n  .ion-text-lg-end {\r\n    text-align: end !important;\r\n  }\r\n\r\n  .ion-text-lg-left {\r\n    text-align: left !important;\r\n  }\r\n\r\n  .ion-text-lg-right {\r\n    text-align: right !important;\r\n  }\r\n\r\n  .ion-text-lg-nowrap {\r\n    white-space: nowrap !important;\r\n  }\r\n\r\n  .ion-text-lg-wrap {\r\n    white-space: normal !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .ion-text-xl-center {\r\n    text-align: center !important;\r\n  }\r\n\r\n  .ion-text-xl-justify {\r\n    text-align: justify !important;\r\n  }\r\n\r\n  .ion-text-xl-start {\r\n    text-align: start !important;\r\n  }\r\n\r\n  .ion-text-xl-end {\r\n    text-align: end !important;\r\n  }\r\n\r\n  .ion-text-xl-left {\r\n    text-align: left !important;\r\n  }\r\n\r\n  .ion-text-xl-right {\r\n    text-align: right !important;\r\n  }\r\n\r\n  .ion-text-xl-nowrap {\r\n    white-space: nowrap !important;\r\n  }\r\n\r\n  .ion-text-xl-wrap {\r\n    white-space: normal !important;\r\n  }\r\n}\r\n\r\n.ion-text-uppercase {\r\n  /* stylelint-disable-next-line declaration-no-important */\r\n  text-transform: uppercase !important;\r\n}\r\n\r\n.ion-text-lowercase {\r\n  /* stylelint-disable-next-line declaration-no-important */\r\n  text-transform: lowercase !important;\r\n}\r\n\r\n.ion-text-capitalize {\r\n  /* stylelint-disable-next-line declaration-no-important */\r\n  text-transform: capitalize !important;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .ion-text-sm-uppercase {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: uppercase !important;\r\n  }\r\n\r\n  .ion-text-sm-lowercase {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: lowercase !important;\r\n  }\r\n\r\n  .ion-text-sm-capitalize {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: capitalize !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .ion-text-md-uppercase {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: uppercase !important;\r\n  }\r\n\r\n  .ion-text-md-lowercase {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: lowercase !important;\r\n  }\r\n\r\n  .ion-text-md-capitalize {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: capitalize !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .ion-text-lg-uppercase {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: uppercase !important;\r\n  }\r\n\r\n  .ion-text-lg-lowercase {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: lowercase !important;\r\n  }\r\n\r\n  .ion-text-lg-capitalize {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: capitalize !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .ion-text-xl-uppercase {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: uppercase !important;\r\n  }\r\n\r\n  .ion-text-xl-lowercase {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: lowercase !important;\r\n  }\r\n\r\n  .ion-text-xl-capitalize {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: capitalize !important;\r\n  }\r\n}\r\n\r\n.ion-align-self-start {\r\n  align-self: flex-start !important;\r\n}\r\n\r\n.ion-align-self-end {\r\n  align-self: flex-end !important;\r\n}\r\n\r\n.ion-align-self-center {\r\n  align-self: center !important;\r\n}\r\n\r\n.ion-align-self-stretch {\r\n  align-self: stretch !important;\r\n}\r\n\r\n.ion-align-self-baseline {\r\n  align-self: baseline !important;\r\n}\r\n\r\n.ion-align-self-auto {\r\n  align-self: auto !important;\r\n}\r\n\r\n.ion-wrap {\r\n  flex-wrap: wrap !important;\r\n}\r\n\r\n.ion-nowrap {\r\n  flex-wrap: nowrap !important;\r\n}\r\n\r\n.ion-wrap-reverse {\r\n  flex-wrap: wrap-reverse !important;\r\n}\r\n\r\n.ion-justify-content-start {\r\n  justify-content: flex-start !important;\r\n}\r\n\r\n.ion-justify-content-center {\r\n  justify-content: center !important;\r\n}\r\n\r\n.ion-justify-content-end {\r\n  justify-content: flex-end !important;\r\n}\r\n\r\n.ion-justify-content-around {\r\n  justify-content: space-around !important;\r\n}\r\n\r\n.ion-justify-content-between {\r\n  justify-content: space-between !important;\r\n}\r\n\r\n.ion-justify-content-evenly {\r\n  justify-content: space-evenly !important;\r\n}\r\n\r\n.ion-align-items-start {\r\n  align-items: flex-start !important;\r\n}\r\n\r\n.ion-align-items-center {\r\n  align-items: center !important;\r\n}\r\n\r\n.ion-align-items-end {\r\n  align-items: flex-end !important;\r\n}\r\n\r\n.ion-align-items-stretch {\r\n  align-items: stretch !important;\r\n}\r\n\r\n.ion-align-items-baseline {\r\n  align-items: baseline !important;\r\n}\r\n\r\n.my-custom-class {\n  --height: 40%;\n  --width: 80%;\n}", "",{"version":3,"sources":["../node_modules/@ionic/angular/src/css/core.scss","../node_modules/@ionic/angular/css/core.css","../node_modules/@ionic/angular/src/themes/ionic.mixins.scss","../node_modules/@ionic/angular/src/themes/ionic.globals.scss","../node_modules/@ionic/angular/src/components/menu/menu.ios.vars.scss","../node_modules/@ionic/angular/src/components/menu/menu.md.vars.scss","../node_modules/@ionic/angular/src/css/normalize.scss","../node_modules/@ionic/angular/css/normalize.css","../node_modules/@ionic/angular/src/css/structure.scss","../node_modules/@ionic/angular/css/structure.css","../node_modules/@ionic/angular/src/css/typography.scss","../node_modules/@ionic/angular/css/typography.css","../node_modules/@ionic/angular/src/css/padding.scss","../node_modules/@ionic/angular/css/padding.css","../node_modules/@ionic/angular/src/css/float-elements.scss","../node_modules/@ionic/angular/css/float-elements.css","../node_modules/@ionic/angular/src/css/text-alignment.scss","../node_modules/@ionic/angular/css/text-alignment.css","../node_modules/@ionic/angular/src/css/text-transformation.scss","../node_modules/@ionic/angular/css/text-transformation.css","../node_modules/@ionic/angular/src/css/flex-utils.scss","../node_modules/@ionic/angular/css/flex-utils.css","/Users/larahor/Documents/GitHub/FYP-Recommender-System/propnex-investment-suite/src/global.scss","global.scss"],"names":[],"mappings":"AAQA;EACE,6FAAA;ACPF;;ADSA;EACE,0DAAA;ACNF;;ADSA;EACE,0CAAA;ACNF;;ADSA;EACE,uCAAA;ACNF;;ADSA;EACE,gBAAA;ACNF;;ADmBA;EACE,gBAAA;AChBF;;ADsBA;EACE,sBAAA;ACnBF;;AD4CE;EATA,8DAAA;EACA,2EAAA;EACA,wEAAA;EACA,yFAAA;EACA,qEAAA;EACA,mEAAA;AC/BF;;ADmCE;EATA,gEAAA;EACA,6EAAA;EACA,0EAAA;EACA,2FAAA;EACA,uEAAA;EACA,qEAAA;ACtBF;;AD0BE;EATA,+DAAA;EACA,2EAAA;EACA,yEAAA;EACA,0FAAA;EACA,sEAAA;EACA,oEAAA;ACbF;;ADiBE;EATA,8DAAA;EACA,2EAAA;EACA,wEAAA;EACA,yFAAA;EACA,qEAAA;EACA,mEAAA;ACJF;;ADQE;EATA,8DAAA;EACA,0EAAA;EACA,wEAAA;EACA,mFAAA;EACA,qEAAA;EACA,mEAAA;ACKF;;ADDE;EATA,6DAAA;EACA,yEAAA;EACA,uEAAA;EACA,wFAAA;EACA,oEAAA;EACA,kEAAA;ACcF;;ADVE;EATA,4DAAA;EACA,0EAAA;EACA,sEAAA;EACA,iFAAA;EACA,mEAAA;EACA,iEAAA;ACuBF;;ADnBE;EATA,6DAAA;EACA,2EAAA;EACA,uEAAA;EACA,wFAAA;EACA,oEAAA;EACA,kEAAA;ACgCF;;AD5BE;EATA,2DAAA;EACA,sEAAA;EACA,qEAAA;EACA,sFAAA;EACA,kEAAA;EACA,gEAAA;ACyCF;;AD5BA;EEuPM,OFtPuB;EEuPvB,QFvPiB;EEgRrB,MFhRkB;EEiRlB,SFjRwB;EAExB,aAAA;EACA,kBAAA;EAEA,sBAAA;EACA,8BAAA;EAEA,0BAAA;EACA,gBAAA;EACA,UGxC+B;AFuEjC;;AD5BA;EACE,kBAAA;AC+BF;;AD5BA;;;;;;;;;;;;;;;EAeE,yDAAA;EACA,wBAAA;AC+BF;;AD5BA;EACE,UAAA;AC+BF;;AD5BA;EACE,cAAA;AC+BF;;ADxBA;EACE,6BAAA;AC2BF;;ADxBA;EACE;IACE,iDAAA;EC2BF;AACF;;ADvBA;EACE;IACE,kDAAA;IACA,wDAAA;IACA,oDAAA;IACA,sDAAA;ECyBF;AACF;;ADtBA;EACE;IACE,6CAAA;IACA,mDAAA;IACA,+CAAA;IACA,iDAAA;ECwBF;AACF;;ADjBA;;EAEE,cAAA;ACmBF;;ADXA;EEkWM,iCAAA;ADnVN;;ADXA;EACE,eAAA;EACA,0BAAA;EAIA,oBAAA;ACWF;;ADRA;EACE,2CI7K+B;AHwLjC;;ADRA;EACE,0CI9K+B;AHyLjC;;ADJA;EACE,4CK5L8B;AJmMhC;;ADJA;EACE,4CKhM8B;AJuMhC;;ADDA;EACE,iBAAA;ACIF;;AK7MA;;;;EAIE,wBAAA;ACNF;;ADWA;EACE,aAAA;EAEA,SAAA;ACTF;;ADiBA;;EAEE,iBAAA;ACdF;;ADsBA;EACE,eAAA;EAEA,SAAA;ACpBF;;ADwBA;EACE,gBAAA;ACrBF;;AD6BA;EACE,gBAAA;AC1BF;;AD6BA;EACE,WAAA;EAEA,eAAA;EAEA,uBAAA;AC5BF;;ADgCA;EACE,cAAA;AC7BF;;ADiCA;;;;EAIE,iCAAA;EACA,cAAA;AC9BF;;AD8CA;;;;EAIE,oBAAA;EACA,mBAAA;AC3CF;;AD8CA;EACE,cAAA;EAEA,YAAA;EAEA,aAAA;EACA,cAAA;AC7CF;;ADgDA;EACE,iBAAA;AC7CF;;AD4CA;EACE,iBAAA;AC7CF;;ADgDA;;;;EAIE,SAAA;EAEA,aAAA;EACA,cAAA;AC9CF;;ADsDA;;;EAGE,eAAA;EAEA,0BAAA;ACpDF;;ADwDA;;;;;;;;;;;;;;;;;;EAkBE,0BAAA;ACrDF;;ADwDA;;EAEE,oBAAA;ACrDF;;ADwDA;EACE,SAAA;EACA,gBAAA;EACA,oBAAA;EACA,mBAAA;EACA,qBAAA;EACA,cAAA;EACA,oBAAA;EACA,eAAA;EAEA,0BAAA;ACtDF;;ADyDA;EACE,eAAA;ACtDF;;AD0DA;;;EAGE,eAAA;ACvDF;;AD2DA;;EAEE,UAAA;EAEA,SAAA;ACzDF;;AD+DA;;EAEE,UAAA;EAEA,sBAAA;AC7DF;;ADmEA;;EAEE,YAAA;AChEF;;ADsEA;;EAEE,wBAAA;ACnEF;;AD2EA;EACE,yBAAA;EACA,iBAAA;ACxEF;;AD2EA;;EAEE,UAAA;ACxEF;;ACxJA;EACE,sBAAA;EAEA,6CAAA;EACA,wCAAA;EACA,2BAAA;ACTF;;ADYA;EACE,WAAA;EACA,YAAA;EAEA,8BAAA;KAAA,2BAAA;UAAA,sBAAA;ACVF;;ADaA;EACE,aAAA;ACVF;;ADaA;EACE,aAAA;ACVF;;ADaA;EN6CE,kCAAA;EACA,mCAAA;EAoKE,cMhNc;ENiNd,eMjNc;ENqPhB,aMrPgB;ENsPhB,gBMtPgB;ENgNd,eM/Me;ENgNf,gBMhNe;ENoPjB,cMpPiB;ENqPjB,iBMrPiB;EAEjB,eAAA;EAEA,WAAA;EACA,eAAA;EACA,YAAA;EACA,gBAAA;EAEA,kCAAA;EAEA,gBAAA;EAEA,0BAAA;EAEA,uBAAA;EAEA,yBAAA;EAEA,qBAAA;EAEA,2BAAA;EAEA,8BAAA;KAAA,2BAAA;UAAA,sBAAA;ACbF;;ACdA;EACE,mCAAA;AC9BF;;ADiCA;EACE,6BAAA;EACA,wCAAA;AC9BF;;ADiCA;;;;;;ER+OE,gBQzOgB;ER0OhB,mBQ1O4B;EAE5B,gBAxC6B;EA0C7B,gBAvC6B;ACQ/B;;ADkCA;ERkOE,gBQjOgB;EAEhB,eA1C6B;ACS/B;;ADoCA;ER4NE,gBQ3NgB;EAEhB,eA7C6B;ACU/B;;ADsCA;EACE,eA9C6B;ACU/B;;ADuCA;EACE,eA/C6B;ACW/B;;ADuCA;EACE,eAhD6B;ACY/B;;ADuCA;EACE,eAjD6B;ACa/B;;ADuCA;EACE,cAAA;ACpCF;;ADuCA;;EAEE,kBAAA;EAEA,cAAA;EAEA,cAAA;EAEA,wBAAA;ACvCF;;AD0CA;EACE,WAAA;ACvCF;;AD0CA;EACE,eAAA;ACvCF;;AC9CA;EACE,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,mBAAA;EV8NE,eU5Ne;EV6Nf,gBU7Ne;EViQjB,cUjQiB;EVkQjB,iBUlQiB;ACbnB;;ADgBA;EACE,yCAAA;EACA,uCAAA;EACA,uCAAA;EACA,0CAAA;EVyNE,sCU5OM;EV6ON,uCU7OM;EV6QR,qCU7QQ;EV8QR,wCU9QQ;ACUV;;AXsOM;EACE;IAEI,mBAAA;IAGA,oBAAA;IAGF,+CUzPA;IV0PA,8CU1PA;IV2PA,6CU3PA;IV4PA,4CU5PA;ECmBR;AACF;;ADIA;EACE,uCAAA;EVoPA,qCU7QQ;ACyBV;;ADKA;EACE,yCAAA;EV6ME,sCU5OM;AC6BV;;AXmNM;EACE;IAEI,mBAAA;IAMF,+CUzPA;IV0PA,8CU1PA;ECmCR;AACF;;ADAA;EACE,uCAAA;EVwME,uCU7OM;ACyCV;;AXuMM;EACE;IAKI,oBAAA;IAKF,6CU3PA;IV4PA,4CU5PA;EC+CR;AACF;;ADNA;EACE,0CAAA;EVmOA,wCU9QQ;ACqDV;;ADLA;EACE,uCAAA;EACA,0CAAA;EV2NA,qCU7QQ;EV8QR,wCU9QQ;AC2DV;;ADJA;EACE,yCAAA;EACA,uCAAA;EVmLE,sCU5OM;EV6ON,uCU7OM;ACiEV;;AX+KM;EACE;IAEI,mBAAA;IAGA,oBAAA;IAGF,+CUzPA;IV0PA,8CU1PA;IV2PA,6CU3PA;IV4PA,4CU5PA;EC0ER;AACF;;ADTA;EACE,iBAAA;EACA,eAAA;EACA,eAAA;EACA,kBAAA;EVkKE,cUhKc;EViKd,eUjKc;EVqMhB,aUrMgB;EVsMhB,gBUtMgB;ACclB;;ADXA;EACE,uCAAA;EACA,qCAAA;EACA,qCAAA;EACA,wCAAA;EV6JE,oCU3OK;EV4OL,qCU5OK;EV4QP,mCU5QO;EV6QP,sCU7QO;ACgGT;;AX+IM;EACE;IAEI,kBAAA;IAGA,mBAAA;IAGF,6CUxPD;IVyPC,4CUzPD;IV0PC,2CU1PD;IV2PC,0CU3PD;ECyGP;AACF;;ADvBA;EACE,qCAAA;EVwLA,mCU5QO;AC+GT;;ADtBA;EACE,uCAAA;EViJE,oCU3OK;ACmHT;;AX4HM;EACE;IAEI,kBAAA;IAMF,6CUxPD;IVyPC,4CUzPD;ECyHP;AACF;;AD3BA;EACE,qCAAA;EV4IE,qCU5OK;AC+HT;;AXgHM;EACE;IAKI,mBAAA;IAKF,2CU1PD;IV2PC,0CU3PD;ECqIP;AACF;;ADjCA;EACE,wCAAA;EVuKA,sCU7QO;AC2IT;;ADhCA;EACE,qCAAA;EACA,wCAAA;EV+JA,mCU5QO;EV6QP,sCU7QO;ACiJT;;AD/BA;EACE,uCAAA;EACA,qCAAA;EVuHE,oCU3OK;EV4OL,qCU5OK;ACuJT;;AXwFM;EACE;IAEI,kBAAA;IAGA,mBAAA;IAGF,6CUxPD;IVyPC,4CUzPD;IV0PC,2CU1PD;IV2PC,0CU3PD;ECgKP;AACF;;AC9JI;EZmaE,sBAAA;Aa/aN;;ADgBI;EZ+ZE,uBAAA;Aa3aN;;ADgBI;EZ6YE,sBAAA;AazZN;;Ab4LW;EAgOL,uBAAA;AazZN;;ADaI;EZgZE,uBAAA;AazZN;;AbqLW;EAuOL,sBAAA;AazZN;;Ab4GI;EYlHA;IZmaE,sBAAA;EaxZJ;;EDPE;IZ+ZE,uBAAA;EapZJ;;EDPE;IZ6YE,sBAAA;EalYJ;EbqKS;IAgOL,uBAAA;EalYJ;;EDVE;IZgZE,uBAAA;EalYJ;Eb8JS;IAuOL,sBAAA;EalYJ;AACF;;AboFI;EYlHA;IZmaE,sBAAA;EajYJ;;ED9BE;IZ+ZE,uBAAA;Ea7XJ;;ED9BE;IZ6YE,sBAAA;Ea3WJ;Eb8IS;IAgOL,uBAAA;Ea3WJ;;EDjCE;IZgZE,uBAAA;Ea3WJ;EbuIS;IAuOL,sBAAA;Ea3WJ;AACF;;Ab6DI;EYlHA;IZmaE,sBAAA;Ea1WJ;;EDrDE;IZ+ZE,uBAAA;EatWJ;;EDrDE;IZ6YE,sBAAA;EapVJ;EbuHS;IAgOL,uBAAA;EapVJ;;EDxDE;IZgZE,uBAAA;EapVJ;EbgHS;IAuOL,sBAAA;EapVJ;AACF;;AbsCI;EYlHA;IZmaE,sBAAA;EanVJ;;ED5EE;IZ+ZE,uBAAA;Ea/UJ;;ED5EE;IZ6YE,sBAAA;Ea7TJ;EbgGS;IAgOL,uBAAA;Ea7TJ;;ED/EE;IZgZE,uBAAA;Ea7TJ;EbyFS;IAuOL,sBAAA;Ea7TJ;AACF;;ACnGI;EACE,6BAAA;ACbN;;ADgBI;EACE,8BAAA;ACbN;;ADgBI;EACE,4BAAA;ACbN;;ADgBI;EACE,0BAAA;ACbN;;ADgBI;EACE,2BAAA;ACbN;;ADgBI;EACE,4BAAA;ACbN;;ADgBI;EACE,8BAAA;ACbN;;ADgBI;EACE,8BAAA;ACbN;;AfkGI;EclHA;IACE,6BAAA;ECoBJ;;EDjBE;IACE,8BAAA;ECoBJ;;EDjBE;IACE,4BAAA;ECoBJ;;EDjBE;IACE,0BAAA;ECoBJ;;EDjBE;IACE,2BAAA;ECoBJ;;EDjBE;IACE,4BAAA;ECoBJ;;EDjBE;IACE,8BAAA;ECoBJ;;EDjBE;IACE,8BAAA;ECoBJ;AACF;;AfgEI;EclHA;IACE,6BAAA;ECqDJ;;EDlDE;IACE,8BAAA;ECqDJ;;EDlDE;IACE,4BAAA;ECqDJ;;EDlDE;IACE,0BAAA;ECqDJ;;EDlDE;IACE,2BAAA;ECqDJ;;EDlDE;IACE,4BAAA;ECqDJ;;EDlDE;IACE,8BAAA;ECqDJ;;EDlDE;IACE,8BAAA;ECqDJ;AACF;;Af+BI;EclHA;IACE,6BAAA;ECsFJ;;EDnFE;IACE,8BAAA;ECsFJ;;EDnFE;IACE,4BAAA;ECsFJ;;EDnFE;IACE,0BAAA;ECsFJ;;EDnFE;IACE,2BAAA;ECsFJ;;EDnFE;IACE,4BAAA;ECsFJ;;EDnFE;IACE,8BAAA;ECsFJ;;EDnFE;IACE,8BAAA;ECsFJ;AACF;;AfFI;EclHA;IACE,6BAAA;ECuHJ;;EDpHE;IACE,8BAAA;ECuHJ;;EDpHE;IACE,4BAAA;ECuHJ;;EDpHE;IACE,0BAAA;ECuHJ;;EDpHE;IACE,2BAAA;ECuHJ;;EDpHE;IACE,4BAAA;ECuHJ;;EDpHE;IACE,8BAAA;ECuHJ;;EDpHE;IACE,8BAAA;ECuHJ;AACF;;ACrJI;EACE,yDAAA;EACA,oCAAA;ACbN;;ADgBI;EACE,yDAAA;EACA,oCAAA;ACbN;;ADgBI;EACE,yDAAA;EACA,qCAAA;ACbN;;AjBmHI;EgBlHA;IACE,yDAAA;IACA,oCAAA;ECGJ;;EDAE;IACE,yDAAA;IACA,oCAAA;ECGJ;;EDAE;IACE,yDAAA;IACA,qCAAA;ECGJ;AACF;;AjBkGI;EgBlHA;IACE,yDAAA;IACA,oCAAA;ECmBJ;;EDhBE;IACE,yDAAA;IACA,oCAAA;ECmBJ;;EDhBE;IACE,yDAAA;IACA,qCAAA;ECmBJ;AACF;;AjBkFI;EgBlHA;IACE,yDAAA;IACA,oCAAA;ECmCJ;;EDhCE;IACE,yDAAA;IACA,oCAAA;ECmCJ;;EDhCE;IACE,yDAAA;IACA,qCAAA;ECmCJ;AACF;;AjBkEI;EgBlHA;IACE,yDAAA;IACA,oCAAA;ECmDJ;;EDhDE;IACE,yDAAA;IACA,oCAAA;ECmDJ;;EDhDE;IACE,yDAAA;IACA,qCAAA;ECmDJ;AACF;;ACtEA;EACE,iCAAA;ACPF;;ADUA;EACE,+BAAA;ACPF;;ADUA;EACE,6BAAA;ACPF;;ADUA;EACE,8BAAA;ACPF;;ADUA;EACE,+BAAA;ACPF;;ADUA;EACE,2BAAA;ACPF;;ADcA;EACE,0BAAA;ACXF;;ADcA;EACE,4BAAA;ACXF;;ADcA;EACE,kCAAA;ACXF;;ADkBA;EACE,sCAAA;ACfF;;ADkBA;EACE,kCAAA;ACfF;;ADkBA;EACE,oCAAA;ACfF;;ADkBA;EACE,wCAAA;ACfF;;ADkBA;EACE,yCAAA;ACfF;;ADkBA;EACE,wCAAA;ACfF;;ADsBA;EACE,kCAAA;ACnBF;;ADsBA;EACE,8BAAA;ACnBF;;ADsBA;EACE,gCAAA;ACnBF;;ADsBA;EACE,+BAAA;ACnBF;;ADsBA;EACE,gCAAA;ACnBF;;AClEA;EAEI,aAAA;EACA,YAAA;ACHJ","file":"global.scss","sourcesContent":[null,"html.ios {\r\n  --ion-default-font: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif;\r\n}\r\n\r\nhtml.md {\r\n  --ion-default-font: \"Roboto\", \"Helvetica Neue\", sans-serif;\r\n}\r\n\r\nhtml {\r\n  --ion-font-family: var(--ion-default-font);\r\n}\r\n\r\nbody {\r\n  background: var(--ion-background-color);\r\n}\r\n\r\nbody.backdrop-no-scroll {\r\n  overflow: hidden;\r\n}\r\n\r\nhtml.ios ion-modal.modal-card .ion-page > ion-header > ion-toolbar:first-of-type {\r\n  padding-top: 0px;\r\n}\r\n\r\nhtml.ios ion-modal .ion-page {\r\n  border-radius: inherit;\r\n}\r\n\r\n.ion-color-primary {\r\n  --ion-color-base: var(--ion-color-primary, #3880ff) !important;\r\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\r\n  --ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;\r\n  --ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important;\r\n}\r\n\r\n.ion-color-secondary {\r\n  --ion-color-base: var(--ion-color-secondary, #3dc2ff) !important;\r\n  --ion-color-base-rgb: var(--ion-color-secondary-rgb, 61, 194, 255) !important;\r\n  --ion-color-contrast: var(--ion-color-secondary-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-secondary-shade, #36abe0) !important;\r\n  --ion-color-tint: var(--ion-color-secondary-tint, #50c8ff) !important;\r\n}\r\n\r\n.ion-color-tertiary {\r\n  --ion-color-base: var(--ion-color-tertiary, #5260ff) !important;\r\n  --ion-color-base-rgb: var(--ion-color-tertiary-rgb, 82, 96, 255) !important;\r\n  --ion-color-contrast: var(--ion-color-tertiary-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-tertiary-shade, #4854e0) !important;\r\n  --ion-color-tint: var(--ion-color-tertiary-tint, #6370ff) !important;\r\n}\r\n\r\n.ion-color-success {\r\n  --ion-color-base: var(--ion-color-success, #2dd36f) !important;\r\n  --ion-color-base-rgb: var(--ion-color-success-rgb, 45, 211, 111) !important;\r\n  --ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-success-shade, #28ba62) !important;\r\n  --ion-color-tint: var(--ion-color-success-tint, #42d77d) !important;\r\n}\r\n\r\n.ion-color-warning {\r\n  --ion-color-base: var(--ion-color-warning, #ffc409) !important;\r\n  --ion-color-base-rgb: var(--ion-color-warning-rgb, 255, 196, 9) !important;\r\n  --ion-color-contrast: var(--ion-color-warning-contrast, #000) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-warning-contrast-rgb, 0, 0, 0) !important;\r\n  --ion-color-shade: var(--ion-color-warning-shade, #e0ac08) !important;\r\n  --ion-color-tint: var(--ion-color-warning-tint, #ffca22) !important;\r\n}\r\n\r\n.ion-color-danger {\r\n  --ion-color-base: var(--ion-color-danger, #eb445a) !important;\r\n  --ion-color-base-rgb: var(--ion-color-danger-rgb, 235, 68, 90) !important;\r\n  --ion-color-contrast: var(--ion-color-danger-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-danger-shade, #cf3c4f) !important;\r\n  --ion-color-tint: var(--ion-color-danger-tint, #ed576b) !important;\r\n}\r\n\r\n.ion-color-light {\r\n  --ion-color-base: var(--ion-color-light, #f4f5f8) !important;\r\n  --ion-color-base-rgb: var(--ion-color-light-rgb, 244, 245, 248) !important;\r\n  --ion-color-contrast: var(--ion-color-light-contrast, #000) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;\r\n  --ion-color-shade: var(--ion-color-light-shade, #d7d8da) !important;\r\n  --ion-color-tint: var(--ion-color-light-tint, #f5f6f9) !important;\r\n}\r\n\r\n.ion-color-medium {\r\n  --ion-color-base: var(--ion-color-medium, #92949c) !important;\r\n  --ion-color-base-rgb: var(--ion-color-medium-rgb, 146, 148, 156) !important;\r\n  --ion-color-contrast: var(--ion-color-medium-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-medium-shade, #808289) !important;\r\n  --ion-color-tint: var(--ion-color-medium-tint, #9d9fa6) !important;\r\n}\r\n\r\n.ion-color-dark {\r\n  --ion-color-base: var(--ion-color-dark, #222428) !important;\r\n  --ion-color-base-rgb: var(--ion-color-dark-rgb, 34, 36, 40) !important;\r\n  --ion-color-contrast: var(--ion-color-dark-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-dark-shade, #1e2023) !important;\r\n  --ion-color-tint: var(--ion-color-dark-tint, #383a3e) !important;\r\n}\r\n\r\n.ion-page {\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  display: flex;\r\n  position: absolute;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  contain: layout size style;\r\n  overflow: hidden;\r\n  z-index: 0;\r\n}\r\n\r\n.split-pane-visible > .ion-page.split-pane-main {\r\n  position: relative;\r\n}\r\n\r\nion-route,\r\nion-route-redirect,\r\nion-router,\r\nion-select-option,\r\nion-nav-controller,\r\nion-menu-controller,\r\nion-action-sheet-controller,\r\nion-alert-controller,\r\nion-loading-controller,\r\nion-modal-controller,\r\nion-picker-controller,\r\nion-popover-controller,\r\nion-toast-controller,\r\n.ion-page-hidden,\r\n[hidden] {\r\n  /* stylelint-disable-next-line declaration-no-important */\r\n  display: none !important;\r\n}\r\n\r\n.ion-page-invisible {\r\n  opacity: 0;\r\n}\r\n\r\n.can-go-back > ion-header ion-back-button {\r\n  display: block;\r\n}\r\n\r\nhtml.plt-ios.plt-hybrid, html.plt-ios.plt-pwa {\r\n  --ion-statusbar-padding: 20px;\r\n}\r\n\r\n@supports (padding-top: 20px) {\r\n  html {\r\n    --ion-safe-area-top: var(--ion-statusbar-padding);\r\n  }\r\n}\r\n@supports (padding-top: constant(safe-area-inset-top)) {\r\n  html {\r\n    --ion-safe-area-top: constant(safe-area-inset-top);\r\n    --ion-safe-area-bottom: constant(safe-area-inset-bottom);\r\n    --ion-safe-area-left: constant(safe-area-inset-left);\r\n    --ion-safe-area-right: constant(safe-area-inset-right);\r\n  }\r\n}\r\n@supports (padding-top: env(safe-area-inset-top)) {\r\n  html {\r\n    --ion-safe-area-top: env(safe-area-inset-top);\r\n    --ion-safe-area-bottom: env(safe-area-inset-bottom);\r\n    --ion-safe-area-left: env(safe-area-inset-left);\r\n    --ion-safe-area-right: env(safe-area-inset-right);\r\n  }\r\n}\r\nion-card.ion-color .ion-inherit-color,\r\nion-card-header.ion-color .ion-inherit-color {\r\n  color: inherit;\r\n}\r\n\r\n.menu-content {\r\n  transform: translate3d(0,  0,  0);\r\n}\r\n\r\n.menu-content-open {\r\n  cursor: pointer;\r\n  touch-action: manipulation;\r\n  pointer-events: none;\r\n}\r\n\r\n.ios .menu-content-reveal {\r\n  box-shadow: -8px 0 42px rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n[dir=rtl].ios .menu-content-reveal {\r\n  box-shadow: 8px 0 42px rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n.md .menu-content-reveal {\r\n  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.18);\r\n}\r\n\r\n.md .menu-content-push {\r\n  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.18);\r\n}\r\n\r\nion-input input::-webkit-date-and-time-value {\r\n  text-align: start;\r\n}\r\n\r\n/*# sourceMappingURL=core.css.map */\r\n",null,null,null,null,null,"audio,\r\ncanvas,\r\nprogress,\r\nvideo {\r\n  vertical-align: baseline;\r\n}\r\n\r\naudio:not([controls]) {\r\n  display: none;\r\n  height: 0;\r\n}\r\n\r\nb,\r\nstrong {\r\n  font-weight: bold;\r\n}\r\n\r\nimg {\r\n  max-width: 100%;\r\n  border: 0;\r\n}\r\n\r\nsvg:not(:root) {\r\n  overflow: hidden;\r\n}\r\n\r\nfigure {\r\n  margin: 1em 40px;\r\n}\r\n\r\nhr {\r\n  height: 1px;\r\n  border-width: 0;\r\n  box-sizing: content-box;\r\n}\r\n\r\npre {\r\n  overflow: auto;\r\n}\r\n\r\ncode,\r\nkbd,\r\npre,\r\nsamp {\r\n  font-family: monospace, monospace;\r\n  font-size: 1em;\r\n}\r\n\r\nlabel,\r\ninput,\r\nselect,\r\ntextarea {\r\n  font-family: inherit;\r\n  line-height: normal;\r\n}\r\n\r\ntextarea {\r\n  overflow: auto;\r\n  height: auto;\r\n  font: inherit;\r\n  color: inherit;\r\n}\r\n\r\ntextarea::placeholder {\r\n  padding-left: 2px;\r\n}\r\n\r\nform,\r\ninput,\r\noptgroup,\r\nselect {\r\n  margin: 0;\r\n  font: inherit;\r\n  color: inherit;\r\n}\r\n\r\nhtml input[type=button],\r\ninput[type=reset],\r\ninput[type=submit] {\r\n  cursor: pointer;\r\n  -webkit-appearance: button;\r\n}\r\n\r\na,\r\na div,\r\na span,\r\na ion-icon,\r\na ion-label,\r\nbutton,\r\nbutton div,\r\nbutton span,\r\nbutton ion-icon,\r\nbutton ion-label,\r\n.ion-tappable,\r\n[tappable],\r\n[tappable] div,\r\n[tappable] span,\r\n[tappable] ion-icon,\r\n[tappable] ion-label,\r\ninput,\r\ntextarea {\r\n  touch-action: manipulation;\r\n}\r\n\r\na ion-label,\r\nbutton ion-label {\r\n  pointer-events: none;\r\n}\r\n\r\nbutton {\r\n  border: 0;\r\n  border-radius: 0;\r\n  font-family: inherit;\r\n  font-style: inherit;\r\n  font-variant: inherit;\r\n  line-height: 1;\r\n  text-transform: none;\r\n  cursor: pointer;\r\n  -webkit-appearance: button;\r\n}\r\n\r\n[tappable] {\r\n  cursor: pointer;\r\n}\r\n\r\na[disabled],\r\nbutton[disabled],\r\nhtml input[disabled] {\r\n  cursor: default;\r\n}\r\n\r\nbutton::-moz-focus-inner,\r\ninput::-moz-focus-inner {\r\n  padding: 0;\r\n  border: 0;\r\n}\r\n\r\ninput[type=checkbox],\r\ninput[type=radio] {\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\ninput[type=number]::-webkit-inner-spin-button,\r\ninput[type=number]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\ninput[type=search]::-webkit-search-cancel-button,\r\ninput[type=search]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n\r\ntd,\r\nth {\r\n  padding: 0;\r\n}\r\n\r\n/*# sourceMappingURL=normalize.css.map */\r\n",null,"* {\r\n  box-sizing: border-box;\r\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n  -webkit-tap-highlight-color: transparent;\r\n  -webkit-touch-callout: none;\r\n}\r\n\r\nhtml {\r\n  width: 100%;\r\n  height: 100%;\r\n  text-size-adjust: 100%;\r\n}\r\n\r\nhtml:not(.hydrated) body {\r\n  display: none;\r\n}\r\n\r\nhtml.plt-pwa {\r\n  height: 100vh;\r\n}\r\n\r\nbody {\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n  padding-top: 0;\r\n  padding-bottom: 0;\r\n  position: fixed;\r\n  width: 100%;\r\n  max-width: 100%;\r\n  height: 100%;\r\n  max-height: 100%;\r\n  text-rendering: optimizeLegibility;\r\n  overflow: hidden;\r\n  touch-action: manipulation;\r\n  -webkit-user-drag: none;\r\n  -ms-content-zooming: none;\r\n  word-wrap: break-word;\r\n  overscroll-behavior-y: none;\r\n  text-size-adjust: none;\r\n}\r\n\r\n/*# sourceMappingURL=structure.css.map */\r\n",null,"html {\r\n  font-family: var(--ion-font-family);\r\n}\r\n\r\na {\r\n  background-color: transparent;\r\n  color: var(--ion-color-primary, #3880ff);\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  margin-top: 16px;\r\n  margin-bottom: 10px;\r\n  font-weight: 500;\r\n  line-height: 1.2;\r\n}\r\nh1 {\r\n  margin-top: 20px;\r\n  font-size: 26px;\r\n}\r\nh2 {\r\n  margin-top: 18px;\r\n  font-size: 24px;\r\n}\r\nh3 {\r\n  font-size: 22px;\r\n}\r\n\r\nh4 {\r\n  font-size: 20px;\r\n}\r\n\r\nh5 {\r\n  font-size: 18px;\r\n}\r\n\r\nh6 {\r\n  font-size: 16px;\r\n}\r\n\r\nsmall {\r\n  font-size: 75%;\r\n}\r\n\r\nsub,\r\nsup {\r\n  position: relative;\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\n/*# sourceMappingURL=typography.css.map */\r\n",null,".ion-no-padding {\r\n  --padding-start: 0;\r\n  --padding-end: 0;\r\n  --padding-top: 0;\r\n  --padding-bottom: 0;\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n  padding-top: 0;\r\n  padding-bottom: 0;\r\n}\r\n\r\n.ion-padding {\r\n  --padding-start: var(--ion-padding, 16px);\r\n  --padding-end: var(--ion-padding, 16px);\r\n  --padding-top: var(--ion-padding, 16px);\r\n  --padding-bottom: var(--ion-padding, 16px);\r\n  padding-left: var(--ion-padding, 16px);\r\n  padding-right: var(--ion-padding, 16px);\r\n  padding-top: var(--ion-padding, 16px);\r\n  padding-bottom: var(--ion-padding, 16px);\r\n}\r\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\r\n  .ion-padding {\r\n    padding-left: unset;\r\n    padding-right: unset;\r\n    -webkit-padding-start: var(--ion-padding, 16px);\r\n    padding-inline-start: var(--ion-padding, 16px);\r\n    -webkit-padding-end: var(--ion-padding, 16px);\r\n    padding-inline-end: var(--ion-padding, 16px);\r\n  }\r\n}\r\n\r\n.ion-padding-top {\r\n  --padding-top: var(--ion-padding, 16px);\r\n  padding-top: var(--ion-padding, 16px);\r\n}\r\n.ion-padding-start {\r\n  --padding-start: var(--ion-padding, 16px);\r\n  padding-left: var(--ion-padding, 16px);\r\n}\r\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\r\n  .ion-padding-start {\r\n    padding-left: unset;\r\n    -webkit-padding-start: var(--ion-padding, 16px);\r\n    padding-inline-start: var(--ion-padding, 16px);\r\n  }\r\n}\r\n\r\n.ion-padding-end {\r\n  --padding-end: var(--ion-padding, 16px);\r\n  padding-right: var(--ion-padding, 16px);\r\n}\r\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\r\n  .ion-padding-end {\r\n    padding-right: unset;\r\n    -webkit-padding-end: var(--ion-padding, 16px);\r\n    padding-inline-end: var(--ion-padding, 16px);\r\n  }\r\n}\r\n\r\n.ion-padding-bottom {\r\n  --padding-bottom: var(--ion-padding, 16px);\r\n  padding-bottom: var(--ion-padding, 16px);\r\n}\r\n.ion-padding-vertical {\r\n  --padding-top: var(--ion-padding, 16px);\r\n  --padding-bottom: var(--ion-padding, 16px);\r\n  padding-top: var(--ion-padding, 16px);\r\n  padding-bottom: var(--ion-padding, 16px);\r\n}\r\n.ion-padding-horizontal {\r\n  --padding-start: var(--ion-padding, 16px);\r\n  --padding-end: var(--ion-padding, 16px);\r\n  padding-left: var(--ion-padding, 16px);\r\n  padding-right: var(--ion-padding, 16px);\r\n}\r\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\r\n  .ion-padding-horizontal {\r\n    padding-left: unset;\r\n    padding-right: unset;\r\n    -webkit-padding-start: var(--ion-padding, 16px);\r\n    padding-inline-start: var(--ion-padding, 16px);\r\n    -webkit-padding-end: var(--ion-padding, 16px);\r\n    padding-inline-end: var(--ion-padding, 16px);\r\n  }\r\n}\r\n\r\n.ion-no-margin {\r\n  --margin-start: 0;\r\n  --margin-end: 0;\r\n  --margin-top: 0;\r\n  --margin-bottom: 0;\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.ion-margin {\r\n  --margin-start: var(--ion-margin, 16px);\r\n  --margin-end: var(--ion-margin, 16px);\r\n  --margin-top: var(--ion-margin, 16px);\r\n  --margin-bottom: var(--ion-margin, 16px);\r\n  margin-left: var(--ion-margin, 16px);\r\n  margin-right: var(--ion-margin, 16px);\r\n  margin-top: var(--ion-margin, 16px);\r\n  margin-bottom: var(--ion-margin, 16px);\r\n}\r\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\r\n  .ion-margin {\r\n    margin-left: unset;\r\n    margin-right: unset;\r\n    -webkit-margin-start: var(--ion-margin, 16px);\r\n    margin-inline-start: var(--ion-margin, 16px);\r\n    -webkit-margin-end: var(--ion-margin, 16px);\r\n    margin-inline-end: var(--ion-margin, 16px);\r\n  }\r\n}\r\n\r\n.ion-margin-top {\r\n  --margin-top: var(--ion-margin, 16px);\r\n  margin-top: var(--ion-margin, 16px);\r\n}\r\n.ion-margin-start {\r\n  --margin-start: var(--ion-margin, 16px);\r\n  margin-left: var(--ion-margin, 16px);\r\n}\r\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\r\n  .ion-margin-start {\r\n    margin-left: unset;\r\n    -webkit-margin-start: var(--ion-margin, 16px);\r\n    margin-inline-start: var(--ion-margin, 16px);\r\n  }\r\n}\r\n\r\n.ion-margin-end {\r\n  --margin-end: var(--ion-margin, 16px);\r\n  margin-right: var(--ion-margin, 16px);\r\n}\r\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\r\n  .ion-margin-end {\r\n    margin-right: unset;\r\n    -webkit-margin-end: var(--ion-margin, 16px);\r\n    margin-inline-end: var(--ion-margin, 16px);\r\n  }\r\n}\r\n\r\n.ion-margin-bottom {\r\n  --margin-bottom: var(--ion-margin, 16px);\r\n  margin-bottom: var(--ion-margin, 16px);\r\n}\r\n.ion-margin-vertical {\r\n  --margin-top: var(--ion-margin, 16px);\r\n  --margin-bottom: var(--ion-margin, 16px);\r\n  margin-top: var(--ion-margin, 16px);\r\n  margin-bottom: var(--ion-margin, 16px);\r\n}\r\n.ion-margin-horizontal {\r\n  --margin-start: var(--ion-margin, 16px);\r\n  --margin-end: var(--ion-margin, 16px);\r\n  margin-left: var(--ion-margin, 16px);\r\n  margin-right: var(--ion-margin, 16px);\r\n}\r\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\r\n  .ion-margin-horizontal {\r\n    margin-left: unset;\r\n    margin-right: unset;\r\n    -webkit-margin-start: var(--ion-margin, 16px);\r\n    margin-inline-start: var(--ion-margin, 16px);\r\n    -webkit-margin-end: var(--ion-margin, 16px);\r\n    margin-inline-end: var(--ion-margin, 16px);\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=padding.css.map */\r\n",null,".ion-float-left {\r\n  float: left !important;\r\n}\r\n\r\n.ion-float-right {\r\n  float: right !important;\r\n}\r\n\r\n.ion-float-start {\r\n  float: left !important;\r\n}\r\n[dir=rtl] .ion-float-start, :host-context([dir=rtl]) .ion-float-start {\r\n  float: right !important;\r\n}\r\n\r\n.ion-float-end {\r\n  float: right !important;\r\n}\r\n[dir=rtl] .ion-float-end, :host-context([dir=rtl]) .ion-float-end {\r\n  float: left !important;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .ion-float-sm-left {\r\n    float: left !important;\r\n  }\r\n\r\n  .ion-float-sm-right {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-sm-start {\r\n    float: left !important;\r\n  }\r\n  [dir=rtl] .ion-float-sm-start, :host-context([dir=rtl]) .ion-float-sm-start {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-sm-end {\r\n    float: right !important;\r\n  }\r\n  [dir=rtl] .ion-float-sm-end, :host-context([dir=rtl]) .ion-float-sm-end {\r\n    float: left !important;\r\n  }\r\n}\r\n@media (min-width: 768px) {\r\n  .ion-float-md-left {\r\n    float: left !important;\r\n  }\r\n\r\n  .ion-float-md-right {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-md-start {\r\n    float: left !important;\r\n  }\r\n  [dir=rtl] .ion-float-md-start, :host-context([dir=rtl]) .ion-float-md-start {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-md-end {\r\n    float: right !important;\r\n  }\r\n  [dir=rtl] .ion-float-md-end, :host-context([dir=rtl]) .ion-float-md-end {\r\n    float: left !important;\r\n  }\r\n}\r\n@media (min-width: 992px) {\r\n  .ion-float-lg-left {\r\n    float: left !important;\r\n  }\r\n\r\n  .ion-float-lg-right {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-lg-start {\r\n    float: left !important;\r\n  }\r\n  [dir=rtl] .ion-float-lg-start, :host-context([dir=rtl]) .ion-float-lg-start {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-lg-end {\r\n    float: right !important;\r\n  }\r\n  [dir=rtl] .ion-float-lg-end, :host-context([dir=rtl]) .ion-float-lg-end {\r\n    float: left !important;\r\n  }\r\n}\r\n@media (min-width: 1200px) {\r\n  .ion-float-xl-left {\r\n    float: left !important;\r\n  }\r\n\r\n  .ion-float-xl-right {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-xl-start {\r\n    float: left !important;\r\n  }\r\n  [dir=rtl] .ion-float-xl-start, :host-context([dir=rtl]) .ion-float-xl-start {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-xl-end {\r\n    float: right !important;\r\n  }\r\n  [dir=rtl] .ion-float-xl-end, :host-context([dir=rtl]) .ion-float-xl-end {\r\n    float: left !important;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=float-elements.css.map */\r\n",null,".ion-text-center {\r\n  text-align: center !important;\r\n}\r\n\r\n.ion-text-justify {\r\n  text-align: justify !important;\r\n}\r\n\r\n.ion-text-start {\r\n  text-align: start !important;\r\n}\r\n\r\n.ion-text-end {\r\n  text-align: end !important;\r\n}\r\n\r\n.ion-text-left {\r\n  text-align: left !important;\r\n}\r\n\r\n.ion-text-right {\r\n  text-align: right !important;\r\n}\r\n\r\n.ion-text-nowrap {\r\n  white-space: nowrap !important;\r\n}\r\n\r\n.ion-text-wrap {\r\n  white-space: normal !important;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .ion-text-sm-center {\r\n    text-align: center !important;\r\n  }\r\n\r\n  .ion-text-sm-justify {\r\n    text-align: justify !important;\r\n  }\r\n\r\n  .ion-text-sm-start {\r\n    text-align: start !important;\r\n  }\r\n\r\n  .ion-text-sm-end {\r\n    text-align: end !important;\r\n  }\r\n\r\n  .ion-text-sm-left {\r\n    text-align: left !important;\r\n  }\r\n\r\n  .ion-text-sm-right {\r\n    text-align: right !important;\r\n  }\r\n\r\n  .ion-text-sm-nowrap {\r\n    white-space: nowrap !important;\r\n  }\r\n\r\n  .ion-text-sm-wrap {\r\n    white-space: normal !important;\r\n  }\r\n}\r\n@media (min-width: 768px) {\r\n  .ion-text-md-center {\r\n    text-align: center !important;\r\n  }\r\n\r\n  .ion-text-md-justify {\r\n    text-align: justify !important;\r\n  }\r\n\r\n  .ion-text-md-start {\r\n    text-align: start !important;\r\n  }\r\n\r\n  .ion-text-md-end {\r\n    text-align: end !important;\r\n  }\r\n\r\n  .ion-text-md-left {\r\n    text-align: left !important;\r\n  }\r\n\r\n  .ion-text-md-right {\r\n    text-align: right !important;\r\n  }\r\n\r\n  .ion-text-md-nowrap {\r\n    white-space: nowrap !important;\r\n  }\r\n\r\n  .ion-text-md-wrap {\r\n    white-space: normal !important;\r\n  }\r\n}\r\n@media (min-width: 992px) {\r\n  .ion-text-lg-center {\r\n    text-align: center !important;\r\n  }\r\n\r\n  .ion-text-lg-justify {\r\n    text-align: justify !important;\r\n  }\r\n\r\n  .ion-text-lg-start {\r\n    text-align: start !important;\r\n  }\r\n\r\n  .ion-text-lg-end {\r\n    text-align: end !important;\r\n  }\r\n\r\n  .ion-text-lg-left {\r\n    text-align: left !important;\r\n  }\r\n\r\n  .ion-text-lg-right {\r\n    text-align: right !important;\r\n  }\r\n\r\n  .ion-text-lg-nowrap {\r\n    white-space: nowrap !important;\r\n  }\r\n\r\n  .ion-text-lg-wrap {\r\n    white-space: normal !important;\r\n  }\r\n}\r\n@media (min-width: 1200px) {\r\n  .ion-text-xl-center {\r\n    text-align: center !important;\r\n  }\r\n\r\n  .ion-text-xl-justify {\r\n    text-align: justify !important;\r\n  }\r\n\r\n  .ion-text-xl-start {\r\n    text-align: start !important;\r\n  }\r\n\r\n  .ion-text-xl-end {\r\n    text-align: end !important;\r\n  }\r\n\r\n  .ion-text-xl-left {\r\n    text-align: left !important;\r\n  }\r\n\r\n  .ion-text-xl-right {\r\n    text-align: right !important;\r\n  }\r\n\r\n  .ion-text-xl-nowrap {\r\n    white-space: nowrap !important;\r\n  }\r\n\r\n  .ion-text-xl-wrap {\r\n    white-space: normal !important;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=text-alignment.css.map */\r\n",null,".ion-text-uppercase {\r\n  /* stylelint-disable-next-line declaration-no-important */\r\n  text-transform: uppercase !important;\r\n}\r\n\r\n.ion-text-lowercase {\r\n  /* stylelint-disable-next-line declaration-no-important */\r\n  text-transform: lowercase !important;\r\n}\r\n\r\n.ion-text-capitalize {\r\n  /* stylelint-disable-next-line declaration-no-important */\r\n  text-transform: capitalize !important;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .ion-text-sm-uppercase {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: uppercase !important;\r\n  }\r\n\r\n  .ion-text-sm-lowercase {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: lowercase !important;\r\n  }\r\n\r\n  .ion-text-sm-capitalize {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: capitalize !important;\r\n  }\r\n}\r\n@media (min-width: 768px) {\r\n  .ion-text-md-uppercase {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: uppercase !important;\r\n  }\r\n\r\n  .ion-text-md-lowercase {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: lowercase !important;\r\n  }\r\n\r\n  .ion-text-md-capitalize {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: capitalize !important;\r\n  }\r\n}\r\n@media (min-width: 992px) {\r\n  .ion-text-lg-uppercase {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: uppercase !important;\r\n  }\r\n\r\n  .ion-text-lg-lowercase {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: lowercase !important;\r\n  }\r\n\r\n  .ion-text-lg-capitalize {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: capitalize !important;\r\n  }\r\n}\r\n@media (min-width: 1200px) {\r\n  .ion-text-xl-uppercase {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: uppercase !important;\r\n  }\r\n\r\n  .ion-text-xl-lowercase {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: lowercase !important;\r\n  }\r\n\r\n  .ion-text-xl-capitalize {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: capitalize !important;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=text-transformation.css.map */\r\n",null,".ion-align-self-start {\r\n  align-self: flex-start !important;\r\n}\r\n\r\n.ion-align-self-end {\r\n  align-self: flex-end !important;\r\n}\r\n\r\n.ion-align-self-center {\r\n  align-self: center !important;\r\n}\r\n\r\n.ion-align-self-stretch {\r\n  align-self: stretch !important;\r\n}\r\n\r\n.ion-align-self-baseline {\r\n  align-self: baseline !important;\r\n}\r\n\r\n.ion-align-self-auto {\r\n  align-self: auto !important;\r\n}\r\n\r\n.ion-wrap {\r\n  flex-wrap: wrap !important;\r\n}\r\n\r\n.ion-nowrap {\r\n  flex-wrap: nowrap !important;\r\n}\r\n\r\n.ion-wrap-reverse {\r\n  flex-wrap: wrap-reverse !important;\r\n}\r\n\r\n.ion-justify-content-start {\r\n  justify-content: flex-start !important;\r\n}\r\n\r\n.ion-justify-content-center {\r\n  justify-content: center !important;\r\n}\r\n\r\n.ion-justify-content-end {\r\n  justify-content: flex-end !important;\r\n}\r\n\r\n.ion-justify-content-around {\r\n  justify-content: space-around !important;\r\n}\r\n\r\n.ion-justify-content-between {\r\n  justify-content: space-between !important;\r\n}\r\n\r\n.ion-justify-content-evenly {\r\n  justify-content: space-evenly !important;\r\n}\r\n\r\n.ion-align-items-start {\r\n  align-items: flex-start !important;\r\n}\r\n\r\n.ion-align-items-center {\r\n  align-items: center !important;\r\n}\r\n\r\n.ion-align-items-end {\r\n  align-items: flex-end !important;\r\n}\r\n\r\n.ion-align-items-stretch {\r\n  align-items: stretch !important;\r\n}\r\n\r\n.ion-align-items-baseline {\r\n  align-items: baseline !important;\r\n}\r\n\r\n/*# sourceMappingURL=flex-utils.css.map */\r\n","// http://ionicframework.com/docs/theming/\r\n@import '~@ionic/angular/css/core.css';\r\n@import '~@ionic/angular/css/normalize.css';\r\n@import '~@ionic/angular/css/structure.css';\r\n@import '~@ionic/angular/css/typography.css';\r\n\r\n@import '~@ionic/angular/css/padding.css';\r\n@import '~@ionic/angular/css/float-elements.css';\r\n@import '~@ionic/angular/css/text-alignment.css';\r\n@import '~@ionic/angular/css/text-transformation.css';\r\n@import '~@ionic/angular/css/flex-utils.css';\r\n\r\n.my-custom-class {\r\n    //--background: #222;\r\n    --height: 40%;\r\n    --width: 80%;\r\n  }","@import '~@ionic/angular/css/core.css';\n@import '~@ionic/angular/css/normalize.css';\n@import '~@ionic/angular/css/structure.css';\n@import '~@ionic/angular/css/typography.css';\n@import '~@ionic/angular/css/padding.css';\n@import '~@ionic/angular/css/float-elements.css';\n@import '~@ionic/angular/css/text-alignment.css';\n@import '~@ionic/angular/css/text-transformation.css';\n@import '~@ionic/angular/css/flex-utils.css';\n.my-custom-class {\n  --height: 40%;\n  --width: 80%;\n}"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/theme/variables.scss":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/dist/cjs.js??ref--13-3!./src/theme/variables.scss ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #3880ff;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3171e0;\n  --ion-color-primary-tint: #4c8dff;\n  /** secondary **/\n  --ion-color-secondary: #0cd1e8;\n  --ion-color-secondary-rgb: 12, 209, 232;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #0bb8cc;\n  --ion-color-secondary-tint: #24d6ea;\n  /** tertiary - for buttons with text only (no fill) **/\n  --ion-color-tertiary: #7B5BF2;\n  --ion-color-tertiary-rgb: 255, 255, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #633ce0;\n  --ion-color-tertiary-tint: #7e57ff;\n  /** success **/\n  --ion-color-success: #10dc60;\n  --ion-color-success-rgb: 16, 220, 96;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #0ec254;\n  --ion-color-success-tint: #28e070;\n  /** warning **/\n  --ion-color-warning: #ffce00;\n  --ion-color-warning-rgb: 255, 206, 0;\n  --ion-color-warning-contrast: #ffffff;\n  --ion-color-warning-contrast-rgb: 255, 255, 255;\n  --ion-color-warning-shade: #e0b500;\n  --ion-color-warning-tint: #ffd31a;\n  /** danger **/\n  --ion-color-danger: #AE0000;\n  --ion-color-danger-rgb: 245, 61, 61;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #d33939;\n  --ion-color-danger-tint: #f25454;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 34, 34;\n  --ion-color-dark-contrast: #7B5BF2;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #989aa2;\n  --ion-color-medium-rgb: 152, 154, 162;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #86888f;\n  --ion-color-medium-tint: #a2a4ab;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 244, 244;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  --ion-tab-bar-background: #09184D;\n  --ion-tab-bar-background-rgb: 34, 34, 34;\n  --ion-tab-bar-color-selected: #7B5BF2;\n  --ion-tab-bar-color-selected-rgb: 255, 255, 255;\n  --ion-toolbar-background: #EDF2FA;\n  --ion-toolbar-background-rgb: 244, 244, 244;\n  --ion-toolbar-color: #2F2E2E;\n  --ion-toolbar-color-rgb: 34, 34, 34;\n}\n:root ion-button {\n  --background: #7B5BF2;\n}\n:root h1 {\n  color: #09184D;\n}", "",{"version":3,"sources":["/Users/larahor/Documents/GitHub/FYP-Recommender-System/propnex-investment-suite/src/theme/variables.scss","variables.scss"],"names":[],"mappings":"AAIA,0BAAA;AACA;EACE,cAAA;EACA,4BAAA;EACA,qCAAA;EACA,qCAAA;EACA,+CAAA;EACA,kCAAA;EACA,iCAAA;EAEA,gBAAA;EACA,8BAAA;EACA,uCAAA;EACA,uCAAA;EACA,iDAAA;EACA,oCAAA;EACA,mCAAA;EAEA,sDAAA;EAEA,6BAAA;EACA,uCAAA;EACA,sCAAA;EACA,gDAAA;EACA,mCAAA;EACA,kCAAA;EAEA,cAAA;EACA,4BAAA;EACA,oCAAA;EACA,qCAAA;EACA,+CAAA;EACA,kCAAA;EACA,iCAAA;EAEA,cAAA;EACA,4BAAA;EACA,oCAAA;EACA,qCAAA;EACA,+CAAA;EACA,kCAAA;EACA,iCAAA;EAEA,aAAA;EAEA,2BAAA;EACA,mCAAA;EACA,oCAAA;EACA,8CAAA;EACA,iCAAA;EACA,gCAAA;EAEA,WAAA;EACA,yBAAA;EACA,gCAAA;EAEA,kCAAA;EACA,4CAAA;EACA,+BAAA;EACA,8BAAA;EAEA,aAAA;EACA,2BAAA;EACA,qCAAA;EACA,oCAAA;EACA,8CAAA;EACA,iCAAA;EACA,gCAAA;EAEA,YAAA;EACA,0BAAA;EACA,oCAAA;EACA,mCAAA;EACA,uCAAA;EACA,gCAAA;EACA,+BAAA;EAEA,iCAAA;EACA,wCAAA;EACA,qCAAA;EACA,+CAAA;EAEA,iCAAA;EACA,2CAAA;EACA,4BAAA;EACA,mCAAA;AChBF;ADkBE;EACA,qBAAA;AChBF;ADmBA;EACE,cAAA;ACjBF","file":"variables.scss","sourcesContent":["// Ionic Variables and Theming. For more info, please see:\r\n// http://ionicframework.com/docs/theming/\r\n// https://coolors.co/palette/ffd6ff-e7c6ff-c8b6ff-b8c0ff-bbd0ff\r\n\r\n/** Ionic CSS Variables **/\r\n:root {\r\n  /** primary **/\r\n  --ion-color-primary: #3880ff;\r\n  --ion-color-primary-rgb: 56, 128, 255;\r\n  --ion-color-primary-contrast: #ffffff;\r\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\r\n  --ion-color-primary-shade: #3171e0;\r\n  --ion-color-primary-tint: #4c8dff;\r\n\r\n  /** secondary **/\r\n  --ion-color-secondary: #0cd1e8;\r\n  --ion-color-secondary-rgb: 12, 209, 232;\r\n  --ion-color-secondary-contrast: #ffffff;\r\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\r\n  --ion-color-secondary-shade: #0bb8cc;\r\n  --ion-color-secondary-tint: #24d6ea;\r\n\r\n  /** tertiary - for buttons with text only (no fill) **/\r\n  // --ion-color-tertiary: #7044ff;\r\n  --ion-color-tertiary: #7B5BF2;\r\n  --ion-color-tertiary-rgb: 255, 255, 255;\r\n  --ion-color-tertiary-contrast: #ffffff;\r\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\r\n  --ion-color-tertiary-shade: #633ce0;\r\n  --ion-color-tertiary-tint: #7e57ff;\r\n\r\n  /** success **/\r\n  --ion-color-success: #10dc60;\r\n  --ion-color-success-rgb: 16, 220, 96;\r\n  --ion-color-success-contrast: #ffffff;\r\n  --ion-color-success-contrast-rgb: 255, 255, 255;\r\n  --ion-color-success-shade: #0ec254;\r\n  --ion-color-success-tint: #28e070;\r\n\r\n  /** warning **/\r\n  --ion-color-warning: #ffce00;\r\n  --ion-color-warning-rgb: 255, 206, 0;\r\n  --ion-color-warning-contrast: #ffffff;\r\n  --ion-color-warning-contrast-rgb: 255, 255, 255;\r\n  --ion-color-warning-shade: #e0b500;\r\n  --ion-color-warning-tint: #ffd31a;\r\n\r\n  /** danger **/\r\n  // --ion-color-danger: #f04141;\r\n  --ion-color-danger: #AE0000;\r\n  --ion-color-danger-rgb: 245, 61, 61;\r\n  --ion-color-danger-contrast: #ffffff;\r\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\r\n  --ion-color-danger-shade: #d33939;\r\n  --ion-color-danger-tint: #f25454;\r\n\r\n  /** dark **/\r\n  --ion-color-dark: #222428;\r\n  --ion-color-dark-rgb: 34, 34, 34;\r\n  // --ion-color-dark-contrast: #ffffff;\r\n  --ion-color-dark-contrast: #7B5BF2;\r\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\r\n  --ion-color-dark-shade: #1e2023;\r\n  --ion-color-dark-tint: #383a3e;\r\n\r\n  /** medium **/\r\n  --ion-color-medium: #989aa2;\r\n  --ion-color-medium-rgb: 152, 154, 162;\r\n  --ion-color-medium-contrast: #ffffff;\r\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\r\n  --ion-color-medium-shade: #86888f;\r\n  --ion-color-medium-tint: #a2a4ab;\r\n\r\n  /** light **/\r\n  --ion-color-light: #f4f5f8;\r\n  --ion-color-light-rgb: 244, 244, 244;\r\n  --ion-color-light-contrast: #000000;\r\n  --ion-color-light-contrast-rgb: 0, 0, 0;\r\n  --ion-color-light-shade: #d7d8da;\r\n  --ion-color-light-tint: #f5f6f9;\r\n\r\n  --ion-tab-bar-background: #09184D;\r\n  --ion-tab-bar-background-rgb: 34, 34, 34;\r\n  --ion-tab-bar-color-selected: #7B5BF2;\r\n  --ion-tab-bar-color-selected-rgb: 255, 255, 255;\r\n\r\n  --ion-toolbar-background: #EDF2FA;\r\n  --ion-toolbar-background-rgb: 244, 244, 244;\r\n  --ion-toolbar-color: #2F2E2E;\r\n  --ion-toolbar-color-rgb: 34, 34, 34;\r\n\r\n  ion-button {\r\n  --background: #7B5BF2;\r\n} \r\n\r\nh1 {\r\n  color: #09184D;\r\n} \r\n\r\n}\r\n","/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #3880ff;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3171e0;\n  --ion-color-primary-tint: #4c8dff;\n  /** secondary **/\n  --ion-color-secondary: #0cd1e8;\n  --ion-color-secondary-rgb: 12, 209, 232;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #0bb8cc;\n  --ion-color-secondary-tint: #24d6ea;\n  /** tertiary - for buttons with text only (no fill) **/\n  --ion-color-tertiary: #7B5BF2;\n  --ion-color-tertiary-rgb: 255, 255, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #633ce0;\n  --ion-color-tertiary-tint: #7e57ff;\n  /** success **/\n  --ion-color-success: #10dc60;\n  --ion-color-success-rgb: 16, 220, 96;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #0ec254;\n  --ion-color-success-tint: #28e070;\n  /** warning **/\n  --ion-color-warning: #ffce00;\n  --ion-color-warning-rgb: 255, 206, 0;\n  --ion-color-warning-contrast: #ffffff;\n  --ion-color-warning-contrast-rgb: 255, 255, 255;\n  --ion-color-warning-shade: #e0b500;\n  --ion-color-warning-tint: #ffd31a;\n  /** danger **/\n  --ion-color-danger: #AE0000;\n  --ion-color-danger-rgb: 245, 61, 61;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #d33939;\n  --ion-color-danger-tint: #f25454;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 34, 34;\n  --ion-color-dark-contrast: #7B5BF2;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #989aa2;\n  --ion-color-medium-rgb: 152, 154, 162;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #86888f;\n  --ion-color-medium-tint: #a2a4ab;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 244, 244;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  --ion-tab-bar-background: #09184D;\n  --ion-tab-bar-background-rgb: 34, 34, 34;\n  --ion-tab-bar-color-selected: #7B5BF2;\n  --ion-tab-bar-color-selected-rgb: 255, 255, 255;\n  --ion-toolbar-background: #EDF2FA;\n  --ion-toolbar-background-rgb: 244, 244, 244;\n  --ion-toolbar-color: #2F2E2E;\n  --ion-toolbar-color-rgb: 34, 34, 34;\n}\n:root ion-button {\n  --background: #7B5BF2;\n}\n:root h1 {\n  color: #09184D;\n}"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/global.scss":
/*!*************************!*\
  !*** ./src/global.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/dist/cjs.js??ref--13-3!./global.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/global.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/theme/variables.scss":
/*!**********************************!*\
  !*** ./src/theme/variables.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--13-1!../../node_modules/postcss-loader/src??embedded!../../node_modules/sass-loader/dist/cjs.js??ref--13-3!./variables.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/theme/variables.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 3:
/*!**********************************************************!*\
  !*** multi ./src/theme/variables.scss ./src/global.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/larahor/Documents/GitHub/FYP-Recommender-System/propnex-investment-suite/src/theme/variables.scss */"./src/theme/variables.scss");
module.exports = __webpack_require__(/*! /Users/larahor/Documents/GitHub/FYP-Recommender-System/propnex-investment-suite/src/global.scss */"./src/global.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map