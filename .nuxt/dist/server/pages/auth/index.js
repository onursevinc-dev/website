exports.ids = [2];
exports.modules = {

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/auth/index.vue?vue&type=template&id=6d13b482&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div class=\"row  mt-5\"><div"+(_vm._ssrClass("col-md-4 offset-4 card card-primary p-3 border",{'border-primary' : _vm.isUser, 'border-success' : !_vm.isUser }))+"><h3"+(_vm._ssrClass("text-center mb-3 mt-3",{'text-primary' : _vm.isUser, 'text-success' : !_vm.isUser }))+">Nuxt.js | Auth</h3> <hr> <form><div class=\"form-group\"><label>E-posta Adresiniz</label> <input type=\"email\" placeholder=\"E-posta adresinizi giriniz\""+(_vm._ssrAttr("value",(_vm.user.email)))+" class=\"form-control\"></div> <div class=\"form-group\"><label>Şifre</label> <input type=\"password\" placeholder=\"Şifreniz...\""+(_vm._ssrAttr("value",(_vm.user.password)))+" class=\"form-control\"></div> <div class=\"button-container d-flex  flex-column align-items-center\"><button type=\"submit\""+(_vm._ssrClass("btn btn-block mb-2",{'btn-primary' : _vm.isUser, 'btn-success' : !_vm.isUser }))+">"+_vm._ssrEscape("\n                        "+_vm._s(_vm.isUser ? 'Giriş Yap' : 'Kayıt Ol')+"\n                    ")+"</button> <a href=\"#\" class=\"text-secondary\">"+_vm._ssrEscape("\n                        "+_vm._s(_vm.isUser ? 'Üye değilim' : 'Üyeliğim var')+"\n                    ")+"</a></div></form></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/auth/index.vue?vue&type=template&id=6d13b482&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(23);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/auth/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var authvue_type_script_lang_js_ = ({
  data() {
    return {
      user: {
        email: null,
        password: null
      },
      isUser: false
    };
  },

  methods: {
    onSubmit() {
      let url;

      if (this.isUser) {
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
      } else {
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
      }

      external_axios_default.a.post(url + "AIzaSyAJIymEuLzC0cRFQtsutwz6Id4tJO1UC3Q", {
        email: this.user.email,
        password: this.user.password,
        returnSecureToken: true
      }).then(res => {
        console.log(res);
        this.$store.dispatch('login', res.data.idToken);
        this.$router.push('/');
      }).catch(err => {
        console.log(err);
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/auth/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_authvue_type_script_lang_js_ = (authvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/auth/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_authvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "70ae69c2"
  
)

/* harmony default export */ var auth = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map