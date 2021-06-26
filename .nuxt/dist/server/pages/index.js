exports.ids = [3];
exports.modules = {

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=09daeea4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container pt-3"},[_vm._ssrNode("<div class=\"row\"><div class=\"col-md-6 offset-3 pt-3 card border border-success shadow\"><h3 class=\"text-center mb-3 mt-3\">localStorage Kullanımı</h3> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.storageValue)))+" class=\"form-control\"> <div class=\"button-container mt-3 mb-3\"><button class=\"btn btn-success\">Set Value</button> <button class=\"btn btn-success\">Get Value</button> <button class=\"btn btn-danger\">Delete Value</button></div> <div class=\"border p-1 mb-3 border-secondary d-flex justify-content-center align-items-center\"><p class=\"m-0\"><strong>localStorage Değeri :</strong>"+_vm._ssrEscape(" "+_vm._s(_vm.fromStorage))+"</p></div></div></div> <div class=\"row mt-5\"><div class=\"col-md-6 offset-3 pt-3 card border border-primary shadow\"><h3 class=\"text-center mb-3 mt-3\">Cookie Kullanımı</h3> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.cookieValue)))+" class=\"form-control\"> <div class=\"button-container mt-3 mb-3\"><button class=\"btn btn-primary\">Set Cookie Value</button> <button class=\"btn btn-primary\">Get Cookie Value</button> <button class=\"btn btn-danger\">Delete Cookie Value</button></div> <div class=\"border p-1 mb-3 border-secondary d-flex justify-content-center align-items-center\"><p class=\"m-0\"><strong>Cookie Değeri :</strong>"+_vm._ssrEscape(" "+_vm._s(_vm.fromCookie))+"</p></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=09daeea4&

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  data() {
    return {
      storageValue: null,
      cookieValue: null,
      fromStorage: null,
      fromCookie: null,
      isAuth: null
    };
  },

  methods: {
    setValue() {
      localStorage.setItem('authKey', this.storageValue);
    },

    getValue() {
      this.fromStorage = localStorage.getItem('authKey');
    },

    deleteValue() {
      localStorage.removeItem('authKey');
    },

    setCookie() {
      this.$store.commit('setAuthKey', this.cookieValue);
    },

    getCookie() {
      this.fromCookie = this.$store.getters.getAuthKey;
    },

    deleteCookie() {
      this.$store.commit('clearAuthKey');
    }

  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5d2fc65e"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map