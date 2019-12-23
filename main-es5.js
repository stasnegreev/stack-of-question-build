(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"app \" >\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n\r\n\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<soq-authHeader></soq-authHeader>\r\n<div class=\"auth\">\r\n  <div class=\"auth__card\">\r\n    <header class=\"auth-header\">\r\n      <div class=\"logo\">\r\n        <div class=\"side__logo\">\r\n          <img src=\"assets/image/logo.png\">\r\n        </div>\r\n      </div>\r\n      <h1 class=\"auth-title\">\r\n        SOQ\r\n      </h1>\r\n    </header>\r\n    <hr>\r\n    <div>\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/header/header.component.html": 
        /*!*****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/header/header.component.html ***!
          \*****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n  <div class=\"container\">\r\n\r\n    <div class=\"header\">\r\n      <div class=\"header__logo\">\r\n        <img src=\"assets/image/logo.png\">\r\n      </div>\r\n\r\n      <button\r\n        *ngIf=\"curentUrl==='login'\"\r\n        class=\"btn badge-info header__button\"\r\n        routerLink=\"/registration\"\r\n      >\r\n        SignUp\r\n      </button>\r\n      <button\r\n        *ngIf=\"curentUrl==='registration'\"\r\n        class=\"btn badge-info header__button\"\r\n        routerLink = \"/login\"\r\n      >\r\n        LogIn\r\n      </button>\r\n    </div>\r\n  </div>\r\n</header>\r\n\r\n\r\n\r\n\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html": 
        /*!***************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
          \***************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"auth-content\">\r\n  <div\r\n    class=\"alert alert-{{message.type}}\"\r\n    *ngIf=\"message.text\"\r\n  >\r\n    {{message.text}}\r\n  </div>\r\n  <p class=\"text-xs-center\">Войдите для работы</p>\r\n  <form\r\n    [formGroup]=\"loginForm\"\r\n    (ngSubmit)=\"onSubmit()\"\r\n  >\r\n    <div\r\n      class=\"form-group\"\r\n\r\n    >\r\n      <label for=\"email\">Email</label>\r\n      <input\r\n        type=\"text\"\r\n        class=\"form-control\"\r\n        [ngClass]=\"{'is-invalid': loginForm.get('email').invalid && loginForm.get('email').touched}\"\r\n        id=\"email\"\r\n        placeholder=\"Введите ваш email\"\r\n        formControlName=\"email\"\r\n      >\r\n      <span\r\n        class=\"invalid-feedback\"\r\n        *ngIf=\"loginForm.get('email').invalid && loginForm.get('email').touched\"\r\n      >\r\n        <span *ngIf=\"loginForm.get('email').errors.email\">Incorrect email address</span>\r\n        <span *ngIf=\"loginForm.get('email').errors.required\">Email is required</span>\r\n      </span>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"password\">Пароль</label>\r\n      <input\r\n        type=\"password\"\r\n        class=\"form-control\"\r\n        [ngClass]=\"{'is-invalid': loginForm.get('password').invalid && loginForm.get('password').touched}\"\r\n        id=\"password\"\r\n        placeholder=\"Пароль\"\r\n        formControlName=\"password\"\r\n      >\r\n      <span\r\n        class=\"invalid-feedback\"\r\n        *ngIf=\"loginForm.get('password').invalid && loginForm.get('password').touched\"\r\n      >\r\n        <span *ngIf=\"loginForm.get('password').errors.minlength\">Password must be at least 6 characters long</span>\r\n        <span *ngIf=\"loginForm.get('password').errors.required\">Password is required</span>\r\n      </span>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <button\r\n        type=\"submit\"\r\n        class=\"btn btn-block btn-primary\"\r\n        [disabled]=\"loginForm.invalid\"\r\n      >\r\n        Войти\r\n      </button>\r\n    </div>\r\n  </form>\r\n  <button\r\n    (click)=\"onRegGoogle()\"\r\n    class=\"btn btn-block btn-outline-danger\"\r\n  >\r\n    Войти с Google\r\n  </button>\r\n  <button\r\n    (click)=\"onRegFacebook()\"\r\n    class=\"btn btn-block btn-outline-primary\"\r\n  >\r\n    Войти с Facebook\r\n  </button>\r\n  <div class=\"form-group\">\r\n    <p class=\"text-muted text-center\">\r\n      Нет аккаунта? <a [routerLink]=\"'/registration'\">Зарегистрироваться!</a>\r\n    </p>\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/registration/registration.component.html": 
        /*!*****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/registration/registration.component.html ***!
          \*****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"auth-content\">\n  <p class=\"text-xs-center\">Регистрация для получения доступа</p>\n  <div\n    class=\"alert alert-{{message.type}}\"\n    *ngIf=\"message.text\"\n  >\n    {{message.text}}\n  </div>\n  <form\n    [formGroup]=\"regForm\"\n    (ngSubmit)=\"onSubmit()\"\n  >\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input\n        type=\"text\"\n        class=\"form-control underlined\"\n        formControlName=\"email\"\n        [ngClass]=\"{'is-invalid' : regForm.get('email').invalid && regForm.get('email').touched}\"\n        id=\"email\"\n        placeholder=\"Введите email\"\n      >\n      <span\n        class=\"invalid-feedback\"\n        *ngIf=\"regForm.get('email').invalid && regForm.get('email').touched\"\n      >\n        <span *ngIf=\"regForm.get('email').errors.email\">Incorrect email address</span>\n        <span *ngIf=\"regForm.get('email').errors.required\">Email is required</span>\n        <span *ngIf=\"regForm.get('email').errors['forbiddenEmails']\">This email does exist</span>\n      </span>\n    </div>\n    <div class=\"form-group has-error\">\n      <label for=\"password\">Пароль</label>\n      <input\n        type=\"password\"\n        class=\"form-control underlined\"\n        formControlName=\"password\"\n        [ngClass]=\"{'is-invalid' : regForm.get('password').invalid && regForm.get('password').touched}\"\n        id=\"password\"\n        placeholder=\"Введите пароль\"\n      >\n      <span\n        class=\"invalid-feedback\"\n        *ngIf=\"regForm.get('password').invalid && regForm.get('password').touched\"\n      >\n        <span *ngIf=\"regForm.get('password').errors.minlength\">Password must be at least 6 characters long</span>\n        <span *ngIf=\"regForm.get('password').errors.required\">Password is required</span>\n      </span>\n    </div>\n\n    <div class=\"form-group\">\n      <button\n        type=\"submit\"\n        class=\"btn btn-block btn-primary\"\n        [disabled]=\"regForm.invalid\"\n      >\n        Зарегистрироваться\n      </button>\n    </div>\n    <button\n      (click)=\"onRegGoogle()\"\n      class=\"btn btn-block btn-outline-danger\"\n    >\n      Войти с Google\n    </button>\n    <button\n      (click)=\"onRegFacebook()\"\n      class=\"btn btn-block btn-outline-primary\"\n    >\n      Войти с Facebook\n    </button>\n    <div class=\"form-group\">\n      <p class=\"text-muted text-xs-center\">\n        Уже есть аккаунт?\n        <a  [routerLink]=\"'/login'\">\n          Войти!\n        </a>\n      </p>\n    </div>\n\n  </form>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/system/create-question/create-question.component.html": 
        /*!*************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/system/create-question/create-question.component.html ***!
          \*************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section>\n  <div class=\"container newQuestion\">\n      <h2 class=\"newQuestion__title\"> New Question</h2>\n    <hr>\n    <div class=\"newQuestion__form\">\n      <form\n        class=\"formQuestion\"\n        [formGroup]=\"form\"\n        (ngSubmit)=\"onSubmit()\"\n      >\n        <div class=\"formQuestion__item form-group\">\n          <label class=\"formQuestion__lable\">\n            Title\n          </label>\n          <input\n            class=\"formQuestion__input form-control\"\n            formControlName=\"title\"\n            id=\"title\"\n            type=\"text\"\n          >\n          <span\n            class=\"formQuestion__hint\"\n            *ngIf=\"form.get('title').invalid && form.get('title').touched\"\n          >\n            <span class=\"form-text text-muted\" *ngIf=\"form.get('title')['errors']['required']\">Title is required</span>\n            <span class=\"form-text text-muted\" *ngIf=\"form.get('title')['errors']['forbiddenTitle']\">This title already exists</span>\n          </span>\n        </div>\n        <div class=\"formQuestion__item form-group\">\n          <label class=\"formQuestion__lable\">\n            Text\n          </label>\n          <textarea\n            class=\"formQuestion__input formQuestion__textarea form-control\"\n            formControlName=\"text\"\n          >\n          </textarea>\n          <span\n            class=\"formQuestion__hint\"\n            *ngIf=\"form.get('text').invalid && form.get('text').touched\"\n          >\n            <span class=\"form-text text-muted\" *ngIf=\"form.get('text')['errors']['required']\">Text is required</span>\n          </span>\n        </div>\n        <div\n          class=\"formQuestion__item form-group\"\n          formGroupName=\"tags\"\n        >\n          <label class=\"formQuestion__lable\">\n            Tags\n          </label>\n          <ul class=\"formQuestion__checkboxList formQuestion__input\">\n            <li class=\"formQuestion__checkboxItem \">\n              <input\n                type=\"checkbox\"\n                class=\"formQuestion__checkbox \"\n                formControlName=\"tag1\"\n                value=\"Tag 1\"\n              >\n              <label class=\"formQuestion__checkbox-lable \" >Tag 1</label>\n            </li>\n            <li class=\"formQuestion__checkboxItem \">\n              <input\n                type=\"checkbox\"\n                class=\"formQuestion__checkbox\"\n                formControlName=\"tag2\"\n                value=\"Tag 2\"\n              >\n              <label class=\"formQuestion__checkbox-lable \" >Tag 2</label>\n            </li>\n          </ul>\n        </div>\n        <div class=\"formQuestion__button form-group\">\n          <button\n            type=\"submit\"\n            class=\"btn btn btn-outline-dark\"\n            [disabled]=\"form.invalid\"\n          >\n            Add question</button>\n        </div>\n\n      </form>\n    </div>\n  </div>\n</section>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/system/edding-question/edding-question.component.html": 
        /*!*************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/system/edding-question/edding-question.component.html ***!
          \*************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section>\n  <div class=\"container newQuestion\">\n    <h2 class=\"newQuestion__title\"> Editing Question</h2>\n    <hr>\n    <div class=\"newQuestion__form\">\n      <form\n        class=\"formQuestion\"\n        [formGroup]=\"form\"\n        (ngSubmit)=\"onSubmit()\"\n      >\n        <div class=\"formQuestion__item form-group\">\n          <label class=\"formQuestion__lable\">\n            Title\n          </label>\n          <input\n            class=\"formQuestion__input form-control\"\n            formControlName=\"title\"\n            id=\"title\"\n            type=\"text\"\n          >\n          <span\n            class=\"formQuestion__hint\"\n            *ngIf=\"form.get('title').invalid && form.get('title').touched\"\n          >\n            <span class=\"form-text text-muted\" *ngIf=\"form.get('title')['errors']['required']\">Title is required</span>\n            <span class=\"form-text text-muted\" *ngIf=\"form.get('title')['errors']['forbiddenTitle']\">This title already exists</span>\n          </span>\n        </div>\n        <div class=\"formQuestion__item form-group\">\n          <label class=\"formQuestion__lable\">\n            Text\n          </label>\n          <textarea\n            class=\"formQuestion__input formQuestion__textarea form-control\"\n            formControlName=\"text\"\n          >\n          </textarea>\n          <span\n            class=\"formQuestion__hint\"\n            *ngIf=\"form.get('text').invalid && form.get('text').touched\"\n          >\n            <span class=\"form-text text-muted\" *ngIf=\"form.get('text')['errors']['required']\">Text is required</span>\n          </span>\n        </div>\n        <div\n          class=\"formQuestion__item form-group\"\n          formGroupName=\"tags\"\n        >\n          <label class=\"formQuestion__lable\">\n            Tags\n          </label>\n          <ul class=\"formQuestion__checkboxList formQuestion__input\">\n            <li class=\"formQuestion__checkboxItem \">\n              <input\n                type=\"checkbox\"\n                class=\"formQuestion__checkbox \"\n                formControlName=\"tag1\"\n                value=\"Tag 1\"\n              >\n              <label class=\"formQuestion__checkbox-lable \" >Tag 1</label>\n            </li>\n            <li class=\"formQuestion__checkboxItem \">\n              <input\n                type=\"checkbox\"\n                class=\"formQuestion__checkbox\"\n                formControlName=\"tag2\"\n                value=\"Tag 2\"\n              >\n              <label class=\"formQuestion__checkbox-lable \" >Tag 2</label>\n            </li>\n          </ul>\n        </div>\n        <div class=\"formQuestion__button form-group\">\n          <button\n            type=\"submit\"\n            class=\"btn btn btn-outline-dark\"\n            (click)=\"goBack()\"\n          >\n            Cancel\n          </button>\n          <button\n            type=\"submit\"\n            class=\"btn btn btn-outline-dark\"\n            [disabled]=\"form.invalid || checkEditing()\"\n          >\n            Edit question\n          </button>\n        </div>\n\n      </form>\n    </div>\n  </div>\n</section>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/system/header/header.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/system/header/header.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n  <div class=\"container\">\r\n\r\n    <div class=\"header\">\r\n      <div class=\"header__logo\">\r\n        <img src=\"assets/image/logo.png\">\r\n      </div>\r\n\r\n      <button\r\n        *ngIf=\"curentUrl==='/login'\"\r\n        class=\"btn badge-info header__button\"\r\n        routerLink=\"/registration\"\r\n      >\r\n        SignUp\r\n      </button>\r\n      <button\r\n        *ngIf=\"curentUrl==='/registration'\"\r\n        class=\"btn badge-info header__button\"\r\n        routerLink = \"/login\"\r\n      >\r\n        LogIn\r\n      </button>\r\n      <button\r\n        *ngIf=\"curentUrl.indexOf('uestion')+1 || curentUrl.indexOf('profile')+1\"\r\n        class=\"btn badge-info header__button\"\r\n        routerLink=\"/system/home\"\r\n      >\r\n        Home\r\n      </button>\r\n      <button\r\n        *ngIf=\"curentUrl.indexOf('home')+1\"\r\n        class=\"btn badge-info header__button\"\r\n        routerLink=\"/system/createQuestion\"\r\n      >\r\n        New question\r\n      </button>\r\n      <div\r\n        class=\"dropdown\"\r\n\r\n      >\r\n        <button\r\n          class=\"btn btn-secondary dropdown-toggle header__button\"\r\n          type=\"button\"\r\n          id=\"dropdownMenuButton\"\r\n          data-toggle=\"dropdown\"\r\n          aria-haspopup=\"true\"\r\n          aria-expanded=\"false\"\r\n        >\r\n          {{userData.name.slice(0, userData.name.indexOf('@'))}}\r\n        </button>\r\n        <div\r\n          class=\"dropdown-menu dropdown-menu-right\"\r\n          aria-labelledby=\"dropdownMenuButton\">\r\n          <a\r\n            class=\"dropdown-item\"\r\n            routerLink=\"/system/profile\"\r\n          >\r\n            Profile\r\n          </a>\r\n          <a\r\n            class=\"dropdown-item\"\r\n            (click)=\"onLogOut()\"\r\n          >\r\n            SignOut\r\n          </a>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</header>\r\n\r\n\r\n\r\n\r\n\r\n\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/system/home/home-filter/home-filter.component.html": 
        /*!**********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/system/home/home-filter/home-filter.component.html ***!
          \**********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal fade in\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Фильтр</h4>\n        <button type=\"button\" class=\"close\" (click)=\"closeFilter()\">\n          <span>×</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"newQuestion__form\">\n          <form\n            class=\"formQuestion\"\n            [formGroup]=\"form\"\n            (ngSubmit)=\"onSubmit()\"\n\n          >\n            <div\n              class=\"formQuestion__item form-group\"\n              formGroupName=\"tags\"\n            >\n              <label class=\"formQuestion__lable\">\n                Tags\n              </label>\n              <ul class=\"formQuestion__checkboxList formQuestion__input\">\n                <li class=\"formQuestion__checkboxItem \">\n                  <input\n                    type=\"checkbox\"\n                    class=\"formQuestion__checkbox \"\n                    formControlName=\"tag1\"\n                    value=\"Tag 1\"\n                  >\n                  <label class=\"formQuestion__checkbox-lable \" >Tag 1</label>\n                </li>\n                <li class=\"formQuestion__checkboxItem \">\n                  <input\n                    type=\"checkbox\"\n                    class=\"formQuestion__checkbox\"\n                    formControlName=\"tag2\"\n                    value=\"Tag 2\"\n                  >\n                  <label class=\"formQuestion__checkbox-lable \" >Tag 2</label>\n                </li>\n                <li class=\"formQuestion__checkboxItem \">\n                  <input\n                    type=\"checkbox\"\n                    class=\"formQuestion__checkbox\"\n                    formControlName=\"noTags\"\n                    value=\"noTags\"\n                  >\n                  <label class=\"formQuestion__checkbox-lable \" >No tags</label>\n                </li>\n              </ul>\n            </div>\n            <div\n              class=\"formQuestion__item form-group\"\n              formGroupName=\"status\"\n            >\n              <label class=\"formQuestion__lable\">\n                Status\n              </label>\n              <ul class=\"formQuestion__checkboxList formQuestion__input\">\n                <li class=\"formQuestion__checkboxItem\">\n                  <input\n                    type=\"checkbox\"\n                    class=\"formQuestion__checkbox \"\n                    formControlName=\"resolve\"\n                    value=\"resolve\"\n                  >\n                  <label class=\"formQuestion__checkbox-lable\">Resolve</label>\n                </li>\n                <li class=\"formQuestion__checkboxItem \">\n                  <input\n                    type=\"checkbox\"\n                    class=\"formQuestion__checkbox\"\n                    formControlName=\"notResolve\"\n                    value=\"notResolve\"\n                  >\n                  <label class=\"formQuestion__checkbox-lable\">Not resolve</label>\n                </li>\n              </ul>\n            </div>\n            <div\n              class=\"formQuestion__item form-group\"\n            >\n              <label class=\"formQuestion__lable\">\n                Date from\n              </label>\n              <input\n                class=\"formQuestion__input form-control\"\n                formControlName=\"dateFrom\"\n                id=\"dateFrom\"\n                type=\"date\"\n              >\n            </div>\n            <div\n              class=\"formQuestion__item form-group\"\n            >\n              <label class=\"formQuestion__lable\">\n                Date to\n              </label>\n              <input\n                class=\"formQuestion__input form-control\"\n                formControlName=\"dateTo\"\n                id=\"dateTo\"\n                type=\"date\"\n              >\n            </div>\n            <div class=\"modal-footer\">\n              <button\n                type=\"button\"\n                class=\"btn btn-secondary\"\n                (click)=\"closeFilter()\"\n              >Отмена</button>\n              <button\n                type=\"submit\"\n                class=\"btn btn-primary\"\n              >\n                Применить\n              </button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/system/home/home.component.html": 
        /*!***************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/system/home/home.component.html ***!
          \***************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<header>\n  <div class=\"container header \">\n    <div class=\"header__row\">\n      <div class=\"header__button\">\n        <div class=\"btn btn-outline-info\" (click)=\"openFilter()\">\n          Filters\n        </div>\n      </div>\n      <div class=\"header__button\">\n        <div class=\"btn btn-outline-info\" (click)=\"sortByData()\">\n          Sorting by data\n        </div>\n      </div>\n      <div class=\"header__button\">\n        <div class=\"dropdown\">\n          <button class=\"btn btn-outline-info dropdown-toggle\" type=\"button\" id=\"dropdownMenuSetting\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Setting\n          </button>\n          <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuSetting\">\n            <div class=\"text-muted p-1\">\n              Color style\n            </div>\n            <div class=\"dropdown-divider\"></div>\n              <button class=\"dropdown-item\" type=\"button\">Dark</button>\n              <button class=\"dropdown-item\" type=\"button\">White</button>\n            <div class=\"dropdown-divider\"></div>\n            <div class=\"text-muted p-1\">\n              List style\n            </div>\n            <div class=\"dropdown-divider\"></div>\n            <button class=\"dropdown-item\" type=\"button\" (click)=\"onListStyleLine()\">Line</button>\n            <button class=\"dropdown-item\" type=\"button\" (click)=\"onListStyleSquare()\">Square</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>\n<div *ngIf=\"isFilterOpen\">\n  <soq-home-filter\n    [filterParams]=\"filterParams\"\n    (onFilterCancel)=\"onFilterCancel()\"\n    (onFilterApply)=\"onFilterApply($event)\"\n  ></soq-home-filter>\n</div>\n<div class=\"d-flex justify-content-center\" *ngIf=\"!isLoaded\">\n  <div class=\"spinner-border\" role=\"status\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n</div>\n<div\n  class=\"questions\"\n  *ngIf=\"isLoaded\"\n>\n  <div class=\"container\">\n    <div class=\"questions__row\">\n      <ul class=\"questions__list \" [ngClass]=\"{'questions__list-line': isListLine}\">\n        <li\n          class=\"questions__item\"\n          *ngFor=\"let question of filteredQuestion | soqFilterByDate: isAscending\"\n        >\n          <div\n            class=\"question \"\n            [ngClass]=\"{'question-line': isListLine}\"\n            [routerLink]=\"['/system/question']\"\n            [fragment]=\"(question.key)\"\n          >\n            <h3 class=\"question__title\">{{question.title}}</h3>\n            <div class=\"question__info\">\n              <div class=\"question__date\">\n                {{question.date | date:\"M.d.yy\"}}\n              </div>\n              <div class=\"question__tags\">\n                <span\n                  *ngFor=\"let tag of question.tags\"\n                  class=\"question__tag\"\n                >{{tag}}</span>\n              </div>\n              <div class=\"question__status badge badge-danger\" *ngIf=\"question.status === 'notApproved'\">\n                Not Approved\n              </div>\n              <div class=\"question__status badge badge-warning\" *ngIf=\"question.status === 'notResolve'\">\n                Not Resolve\n              </div>\n              <div class=\"question__status badge badge-success\" *ngIf=\"question.status === 'resolve'\">\n                Resolve\n              </div>\n            </div>\n\n            <div class=\"question__control\" *ngIf=\"userData.status === 'admin'\">\n              <div class=\"btn-group question__buttons\" role=\"group\" aria-label=\"Basic example\">\n\n                <button\n                  type=\"button\"\n                  class=\"btn btn-outline-dark\"\n                  *ngIf=\"question.status === 'notApproved'\"\n\n                  (click)=\"approveQuestion($event, question.key)\"\n                >\n                  Approve\n                </button>\n                <button\n                  type=\"button\"\n                  class=\"btn btn-outline-dark\"\n                  (click)=\"deleteQuestion($event, question.key)\"\n                >\n                  Delete\n                </button>\n              </div>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/system/profile/profile.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/system/profile/profile.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container profile\">\n  <div class=\"profile_row\">\n    <div class=\"profile__name\">\n      Email: {{userData.name}}\n    </div>\n    <div class=\"profile__status\">\n      Status: {{userData.status}}\n    </div>\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/system/question/question.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/system/question/question.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex justify-content-center\" *ngIf=\"!isLoaded\">\r\n  <div class=\"spinner-border\" role=\"status\">\r\n    <span class=\"sr-only\">Loading...</span>\r\n  </div>\r\n</div>\r\n<section *ngIf=\"isLoaded\">\r\n  <div class=\"container question\">\r\n    <div class=\"question__header \">\r\n      <div class=\"question_row\">\r\n        <div class=\"question__author\">\r\n          {{questionAuthor?.slice(0,questionAuthor.indexOf('@'))}}\r\n        </div>\r\n        <div class=\"question__date\">\r\n          {{question.date | date:\"M.d.yy\"}}\r\n        </div>\r\n      </div>\r\n      <div class=\"question__title\">\r\n        {{question.title}}\r\n      </div>\r\n    </div>\r\n    <div class=\"question__content\">\r\n      <div class=\"question__text\">\r\n        {{question.text}}\r\n      </div>\r\n      <div class=\"question_row\">\r\n        <div class=\"question__tags\">\r\n          <span\r\n            *ngFor=\"let tag of question.tags\"\r\n            class=\"question__tag\"\r\n          >{{tag}}</span>\r\n        </div>\r\n        <div\r\n          class=\"question__control\"\r\n          *ngIf=\"rules.edit\"\r\n        >\r\n            <div class=\"btn-group question__buttons\" role=\"group\" aria-label=\"Basic example\">\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn btn-outline-dark\"\r\n                [routerLink]=\"['/system/eddingQuestion']\"\r\n                [fragment]=\"(questionId)\"\r\n              >Edit</button>\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn btn-outline-dark\"\r\n                (click)=\"deleteQuestion()\"\r\n              >Delete</button>\r\n            </div>\r\n          </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"container commentForm\">\r\n    <form\r\n      class=\"formQuestion\"\r\n      #f=\"ngForm\"\r\n      (ngSubmit)=\"addComment(f)\"\r\n    >\r\n      <div class=\"formQuestion__item form-group\">\r\n        <label class=\"formQuestion__lable\">\r\n          Text\r\n        </label>\r\n        <textarea\r\n          class=\"formQuestion__input formQuestion__textarea form-control\"\r\n          ngModel\r\n          required\r\n          type=\"text\"\r\n          #text=\"ngModel\"\r\n          name=\"text\"\r\n          id=\"text\"\r\n          [(ngModel)]=\"textNewComment\"\r\n          [value]=\"textNewComment\"\r\n        >\r\n        </textarea>\r\n      </div>\r\n      <div class=\"formQuestion__button form-group\">\r\n        <button\r\n          type=\"submit\"\r\n          class=\"btn btn btn-outline-dark\"\r\n          [disabled]=\"f.invalid\"\r\n        >\r\n          Add comment</button>\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n  <div class=\"container comments\">\r\n    <span\r\n      class=\"comments__info\"\r\n      *ngIf=\"!comments.length\"\r\n    >\r\n      No any comments yet\r\n    </span>\r\n    <ul class=\"\">\r\n      <li\r\n        class=\"comment comments-item\"\r\n        *ngFor=\"let comment of comments\"\r\n      >\r\n        <div class=\"comment__user\">\r\n          {{comment.author | soqUserName}}\r\n        </div>\r\n        <div class=\"comment__text\">\r\n          {{comment.text}}\r\n        </div>\r\n        <div class=\"comment__info\">\r\n          <div class=\"comment__date\">\r\n            {{comment.date | date:\"M.d.yy\"}}\r\n          </div>\r\n          <div\r\n            class=\"comment__resolve\"\r\n          >\r\n            <input\r\n              *ngIf=\"rules.resolveComment\"\r\n              type=\"checkbox\"\r\n              class=\"comment__checkbox\"\r\n              [checked]=\"comment.status === 'resolve'\"\r\n              value=\"{{comment.status}}\"\r\n              name=\"{{comment.key}}\"\r\n              (change)=\"onResolve($event.target.name, $event.target.value)\"\r\n            >\r\n            <label class=\"comment__checkbox-lable \" >{{comment.status}}</label>\r\n          </div>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</section>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/system/system.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/system/system.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<soq-systemHeader></soq-systemHeader>\r\n<div class=\"system\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<div class=\"globalButton\">\r\n  <div\r\n    class=\"circleButton\"\r\n    routerLink=\"/system/createQuestion\"\r\n  >\r\n    <p>+</p>\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var routes = [
                { path: '', redirectTo: 'login', pathMatch: 'full' },
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/*---------------------CSS REST------------------*/\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n/* Remove default padding */\nul[class],\nol[class] {\n  padding: 0;\n}\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nul[class],\nol[class],\nli,\nfigure,\nfigcaption,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  scroll-behavior: smooth;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n/* Remove list styles on ul, ol elements with a class attribute */\nul[class],\nol[class] {\n  list-style: none;\n}\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  -webkit-text-decoration-skip: ink;\n          text-decoration-skip-ink: auto;\n}\n/* Make images easier to work with */\nimg {\n  max-width: 100%;\n  display: block;\n}\n/* Natural flow and rhythm in articles by default */\narticle > * + * {\n  margin-top: 1em;\n}\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n/* Remove all animations and transitions for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  * {\n    -webkit-animation-duration: 0.01ms !important;\n            animation-duration: 0.01ms !important;\n    -webkit-animation-iteration-count: 1 !important;\n            animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n.app {\n  min-height: 100vh;\n}\n.app-dark {\n  background-color: black;\n  color: #9ba8b5;\n  border-color: #9ba8b5;\n}\n.app-dark .form-control {\n  background-color: #6c757d;\n}\n.globalButton {\n  position: fixed;\n  right: 50px;\n  bottom: 100px;\n}\n.circleButton {\n  position: relative;\n  top: 20px;\n  width: 50px;\n  height: 50px;\n  background-color: #1f7e9a;\n  border-radius: 50%;\n  text-align: center;\n  vertical-align: center;\n  font-size: 50px;\n  color: white;\n}\n.circleButton p {\n  position: absolute;\n  top: -18px;\n  left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL0U6XFxNeVNlbGZcXFByb2plY3RzXFxzdGFjay1vZi1xdWV0aW9uc1xcc3RhY2stb2YtcXVldGlvbnNcXHNyY1xcYXBwXFxzeXN0ZW0vLi5cXGFwcC5jb21wb25lbnQuc2NzcyIsIi4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrREFBQTtBQUVBLHFCQUFBO0FBQ0E7OztFQUdFLHNCQUFBO0FDQUY7QURHQSwyQkFBQTtBQUNBOztFQUVFLFVBQUE7QUNBRjtBREdBLDBCQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0VBY0UsU0FBQTtBQ0FGO0FER0EsMkJBQUE7QUFDQTtFQUNFLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FDQUY7QURHQSxpRUFBQTtBQUNBOztFQUVFLGdCQUFBO0FDQUY7QURHQSwwREFBQTtBQUNBO0VBQ0UsaUNBQUE7VUFBQSw4QkFBQTtBQ0FGO0FER0Esb0NBQUE7QUFDQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDQUY7QURHQSxtREFBQTtBQUNBO0VBQ0UsZUFBQTtBQ0FGO0FER0EseUNBQUE7QUFDQTs7OztFQUlFLGFBQUE7QUNBRjtBREdBLGlGQUFBO0FBQ0E7RUFDRTtJQUNFLDZDQUFBO1lBQUEscUNBQUE7SUFDQSwrQ0FBQTtZQUFBLHVDQUFBO0lBQ0Esc0NBQUE7SUFDQSxnQ0FBQTtFQ0FGO0FBQ0Y7QURHQTtFQUNFLGlCQUFBO0FDREY7QURHQTtFQUNFLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FDQUY7QURDRTtFQUNFLHlCQUFBO0FDQ0o7QURFQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0NGO0FEQ0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNFRjtBRERFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0dKIiwiZmlsZSI6Ii4uL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tQ1NTIFJFU1QtLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLyogQm94IHNpemluZyBydWxlcyAqL1xyXG4qLFxyXG4qOjpiZWZvcmUsXHJcbio6OmFmdGVyIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4vKiBSZW1vdmUgZGVmYXVsdCBwYWRkaW5nICovXHJcbnVsW2NsYXNzXSxcclxub2xbY2xhc3NdIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4vKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gKi9cclxuYm9keSxcclxuaDEsXHJcbmgyLFxyXG5oMyxcclxuaDQsXHJcbnAsXHJcbnVsW2NsYXNzXSxcclxub2xbY2xhc3NdLFxyXG5saSxcclxuZmlndXJlLFxyXG5maWdjYXB0aW9uLFxyXG5ibG9ja3F1b3RlLFxyXG5kbCxcclxuZGQge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLyogU2V0IGNvcmUgYm9keSBkZWZhdWx0cyAqL1xyXG5ib2R5IHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG4vKiBSZW1vdmUgbGlzdCBzdHlsZXMgb24gdWwsIG9sIGVsZW1lbnRzIHdpdGggYSBjbGFzcyBhdHRyaWJ1dGUgKi9cclxudWxbY2xhc3NdLFxyXG5vbFtjbGFzc10ge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi8qIEEgZWxlbWVudHMgdGhhdCBkb24ndCBoYXZlIGEgY2xhc3MgZ2V0IGRlZmF1bHQgc3R5bGVzICovXHJcbmE6bm90KFtjbGFzc10pIHtcclxuICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XHJcbn1cclxuXHJcbi8qIE1ha2UgaW1hZ2VzIGVhc2llciB0byB3b3JrIHdpdGggKi9cclxuaW1nIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi8qIE5hdHVyYWwgZmxvdyBhbmQgcmh5dGhtIGluIGFydGljbGVzIGJ5IGRlZmF1bHQgKi9cclxuYXJ0aWNsZSA+ICogKyAqIHtcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcbn1cclxuXHJcbi8qIEluaGVyaXQgZm9udHMgZm9yIGlucHV0cyBhbmQgYnV0dG9ucyAqL1xyXG5pbnB1dCxcclxuYnV0dG9uLFxyXG50ZXh0YXJlYSxcclxuc2VsZWN0IHtcclxuICBmb250OiBpbmhlcml0O1xyXG59XHJcblxyXG4vKiBSZW1vdmUgYWxsIGFuaW1hdGlvbnMgYW5kIHRyYW5zaXRpb25zIGZvciBwZW9wbGUgdGhhdCBwcmVmZXIgbm90IHRvIHNlZSB0aGVtICovXHJcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XHJcbiAgKiB7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XHJcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5hcHB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuLmFwcC1kYXJrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBjb2xvcjogIzliYThiNTtcclxuICBib3JkZXItY29sb3I6ICM5YmE4YjU7XHJcbiAgLmZvcm0tY29udHJvbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmM3NTdkO1xyXG4gIH1cclxufVxyXG4uZ2xvYmFsQnV0dG9ue1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogNTBweDtcclxuICBib3R0b206IDEwMHB4O1xyXG59XHJcbi5jaXJjbGVCdXR0b257XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMjBweDtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmN2U5YTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMThweDtcclxuICAgIGxlZnQ6IDhweDtcclxuICB9XHJcbn1cclxuXHJcbiIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tQ1NTIFJFU1QtLS0tLS0tLS0tLS0tLS0tLS0qL1xuLyogQm94IHNpemluZyBydWxlcyAqL1xuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyAqL1xudWxbY2xhc3NdLFxub2xbY2xhc3NdIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLyogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luICovXG5ib2R5LFxuaDEsXG5oMixcbmgzLFxuaDQsXG5wLFxudWxbY2xhc3NdLFxub2xbY2xhc3NdLFxubGksXG5maWd1cmUsXG5maWdjYXB0aW9uLFxuYmxvY2txdW90ZSxcbmRsLFxuZGQge1xuICBtYXJnaW46IDA7XG59XG5cbi8qIFNldCBjb3JlIGJvZHkgZGVmYXVsdHMgKi9cbmJvZHkge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG4vKiBSZW1vdmUgbGlzdCBzdHlsZXMgb24gdWwsIG9sIGVsZW1lbnRzIHdpdGggYSBjbGFzcyBhdHRyaWJ1dGUgKi9cbnVsW2NsYXNzXSxcbm9sW2NsYXNzXSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi8qIEEgZWxlbWVudHMgdGhhdCBkb24ndCBoYXZlIGEgY2xhc3MgZ2V0IGRlZmF1bHQgc3R5bGVzICovXG5hOm5vdChbY2xhc3NdKSB7XG4gIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcbn1cblxuLyogTWFrZSBpbWFnZXMgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xuaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogTmF0dXJhbCBmbG93IGFuZCByaHl0aG0gaW4gYXJ0aWNsZXMgYnkgZGVmYXVsdCAqL1xuYXJ0aWNsZSA+ICogKyAqIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG4vKiBJbmhlcml0IGZvbnRzIGZvciBpbnB1dHMgYW5kIGJ1dHRvbnMgKi9cbmlucHV0LFxuYnV0dG9uLFxudGV4dGFyZWEsXG5zZWxlY3Qge1xuICBmb250OiBpbmhlcml0O1xufVxuXG4vKiBSZW1vdmUgYWxsIGFuaW1hdGlvbnMgYW5kIHRyYW5zaXRpb25zIGZvciBwZW9wbGUgdGhhdCBwcmVmZXIgbm90IHRvIHNlZSB0aGVtICovXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuICAqIHtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxufVxuLmFwcCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4uYXBwLWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6ICM5YmE4YjU7XG4gIGJvcmRlci1jb2xvcjogIzliYThiNTtcbn1cbi5hcHAtZGFyayAuZm9ybS1jb250cm9sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZjNzU3ZDtcbn1cblxuLmdsb2JhbEJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDUwcHg7XG4gIGJvdHRvbTogMTAwcHg7XG59XG5cbi5jaXJjbGVCdXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmN2U5YTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNpcmNsZUJ1dHRvbiBwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xOHB4O1xuICBsZWZ0OiA4cHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent(router) {
                    this.router = router;
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.router.navigate(['system/home']);
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'soq-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
            /* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
            /* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _system_system_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./system/system.module */ "./src/app/system/system.module.ts");
            /* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
            /* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/services/user.service */ "./src/app/shared/services/user.service.ts");
            /* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/auth-guard */ "./node_modules/@angular/fire/auth-guard/es2015/index.js");
            /* harmony import */ var _shared_services_auth_resolver_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/services/auth.resolver.service */ "./src/app/shared/services/auth.resolver.service.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _auth_auth_module__WEBPACK_IMPORTED_MODULE_9__["AuthModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        angularfire2__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase),
                        _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabaseModule"],
                        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                        _system_system_module__WEBPACK_IMPORTED_MODULE_11__["SystemModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                    ],
                    providers: [
                        _shared_services_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"],
                        _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"],
                        _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthGuard"],
                        _shared_services_auth_resolver_service__WEBPACK_IMPORTED_MODULE_15__["AuthResovler"],
                    ],
                    bootstrap: [
                        _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
                    ]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/auth/auth-routing.module.ts": 
        /*!*********************************************!*\
          !*** ./src/app/auth/auth-routing.module.ts ***!
          \*********************************************/
        /*! exports provided: AuthRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function () { return AuthRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
            /* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/auth/registration/registration.component.ts");
            /* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth-guard */ "./node_modules/@angular/fire/auth-guard/es2015/index.js");
            var redirectLoggedInToHome = function () { return Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_6__["redirectLoggedInTo"])(['system/home']); };
            var routes = [
                { path: '', component: _auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"], canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthGuard"]], data: { authGuardPipe: redirectLoggedInToHome }, children: [
                        { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
                        { path: 'registration', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationComponent"] }
                    ] }
            ];
            var AuthRoutingModule = /** @class */ (function () {
                function AuthRoutingModule() {
                }
                return AuthRoutingModule;
            }());
            AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AuthRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/auth/auth.component.scss": 
        /*!******************************************!*\
          !*** ./src/app/auth/auth.component.scss ***!
          \******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".auth {\n  min-height: 100vh;\n  display: block;\n  background-color: white;\n}\n\n.auth__card {\n  background-color: white;\n  border: 2px solid darkslategrey;\n  border-radius: 5px;\n  padding: 10px 10px;\n  margin: 10% auto 0 auto;\n  max-width: 450px;\n  min-height: 330px;\n}\n\n.auth__card header {\n  display: flex;\n  align-items: center;\n  color: #9ba8b5;\n}\n\n.auth__card header .logo .side__logo img {\n  height: 60px;\n}\n\n.auth__card header h1 {\n  margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2F1dGgvRTpcXE15U2VsZlxcUHJvamVjdHNcXHN0YWNrLW9mLXF1ZXRpb25zXFxzdGFjay1vZi1xdWV0aW9uc1xcc3JjXFxhcHBcXHN5c3RlbS8uLlxcYXV0aFxcYXV0aC5jb21wb25lbnQuc2NzcyIsIi4uL2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREFFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0VKOztBRENRO0VBQ0MsWUFBQTtBQ0NUOztBREdJO0VBQ0UsaUJBQUE7QUNETiIsImZpbGUiOiIuLi9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aCB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG59XHJcbi5hdXRoX19jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDJweCBzb2xpZCBkYXJrc2xhdGVncmV5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgbWFyZ2luOiAxMCUgYXV0byAwIGF1dG87XHJcbiAgbWF4LXdpZHRoOjQ1MHB4O1xyXG4gIG1pbi1oZWlnaHQ6MzMwcHg7XHJcbiAgaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6ICM5YmE4YjU7XHJcbiAgICAubG9nbyB7XHJcbiAgICAgIC5zaWRlX19sb2dvIHtcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGgxIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iLCIuYXV0aCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5hdXRoX19jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGRhcmtzbGF0ZWdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuICBtYXJnaW46IDEwJSBhdXRvIDAgYXV0bztcbiAgbWF4LXdpZHRoOiA0NTBweDtcbiAgbWluLWhlaWdodDogMzMwcHg7XG59XG4uYXV0aF9fY2FyZCBoZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzliYThiNTtcbn1cbi5hdXRoX19jYXJkIGhlYWRlciAubG9nbyAuc2lkZV9fbG9nbyBpbWcge1xuICBoZWlnaHQ6IDYwcHg7XG59XG4uYXV0aF9fY2FyZCBoZWFkZXIgaDEge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/auth/auth.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/auth/auth.component.ts ***!
          \****************************************/
        /*! exports provided: AuthComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function () { return AuthComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AuthComponent = /** @class */ (function () {
                function AuthComponent() {
                }
                AuthComponent.prototype.ngOnInit = function () {
                };
                return AuthComponent;
            }());
            AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'soq-auth',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auth.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./auth.component.scss */ "./src/app/auth/auth.component.scss")).default]
                })
            ], AuthComponent);
            /***/ 
        }),
        /***/ "./src/app/auth/auth.module.ts": 
        /*!*************************************!*\
          !*** ./src/app/auth/auth.module.ts ***!
          \*************************************/
        /*! exports provided: AuthModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function () { return AuthModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
            /* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
            /* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/auth/registration/registration.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/auth/header/header.component.ts");
            var AuthModule = /** @class */ (function () {
                function AuthModule() {
                }
                return AuthModule;
            }());
            AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"],
                        _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                        _registration_registration_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationComponent"],
                        _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
                    ]
                })
            ], AuthModule);
            /***/ 
        }),
        /***/ "./src/app/auth/header/header.component.scss": 
        /*!***************************************************!*\
          !*** ./src/app/auth/header/header.component.scss ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/*---------------------CSS REST------------------*/\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n/* Remove default padding */\nul[class],\nol[class] {\n  padding: 0;\n}\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nul[class],\nol[class],\nli,\nfigure,\nfigcaption,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  scroll-behavior: smooth;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n/* Remove list styles on ul, ol elements with a class attribute */\nul[class],\nol[class] {\n  list-style: none;\n}\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  -webkit-text-decoration-skip: ink;\n          text-decoration-skip-ink: auto;\n}\n/* Make images easier to work with */\nimg {\n  max-width: 100%;\n  display: block;\n}\n/* Natural flow and rhythm in articles by default */\narticle > * + * {\n  margin-top: 1em;\n}\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n/* Remove all animations and transitions for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  * {\n    -webkit-animation-duration: 0.01ms !important;\n            animation-duration: 0.01ms !important;\n    -webkit-animation-iteration-count: 1 !important;\n            animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\nheader {\n  background-color: darkslategrey;\n}\nheader .header {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n  align-items: center;\n  padding: 20px 0;\n}\nheader .header__logo {\n  width: 100%;\n  min-width: 50px;\n}\nheader .header__logo img {\n  height: 50px;\n  min-width: 50px;\n}\nheader .header__button {\n  margin-left: 10px;\n  white-space: nowrap;\n  padding: 10px;\n  height: 60px;\n}\n@media (max-width: 576px) {\n  header .header {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n  header .header .header__logo {\n    margin: 0 50% 10px 50%;\n  }\n}\n.app {\n  padding-top: 10px;\n  min-height: 100vh;\n}\n.app-dark {\n  background-color: black;\n  color: #9ba8b5;\n  border-color: #9ba8b5;\n}\n.app-dark .form-control {\n  background-color: #6c757d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2F1dGgvaGVhZGVyL0U6XFxNeVNlbGZcXFByb2plY3RzXFxzdGFjay1vZi1xdWV0aW9uc1xcc3RhY2stb2YtcXVldGlvbnNcXHNyY1xcYXBwXFxzeXN0ZW0vLi5cXGF1dGhcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwiLi4vYXV0aC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtEQUFBO0FBRUEscUJBQUE7QUFDQTs7O0VBR0Usc0JBQUE7QUNBRjtBREdBLDJCQUFBO0FBQ0E7O0VBRUUsVUFBQTtBQ0FGO0FER0EsMEJBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7RUFjRSxTQUFBO0FDQUY7QURHQSwyQkFBQTtBQUNBO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUNBRjtBREdBLGlFQUFBO0FBQ0E7O0VBRUUsZ0JBQUE7QUNBRjtBREdBLDBEQUFBO0FBQ0E7RUFDRSxpQ0FBQTtVQUFBLDhCQUFBO0FDQUY7QURHQSxvQ0FBQTtBQUNBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNBRjtBREdBLG1EQUFBO0FBQ0E7RUFDRSxlQUFBO0FDQUY7QURHQSx5Q0FBQTtBQUNBOzs7O0VBSUUsYUFBQTtBQ0FGO0FER0EsaUZBQUE7QUFDQTtFQUNFO0lBQ0UsNkNBQUE7WUFBQSxxQ0FBQTtJQUNBLCtDQUFBO1lBQUEsdUNBQUE7SUFDQSxzQ0FBQTtJQUNBLGdDQUFBO0VDQUY7QUFDRjtBREtBO0VBQ0UsK0JBQUE7QUNIRjtBRElFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDRko7QURLRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FDSEo7QURLSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDSE47QURNRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0pKO0FEVUE7RUFFSTtJQUNFLGVBQUE7SUFDQSx1QkFBQTtFQ1RKO0VEVUk7SUFDRSxzQkFBQTtFQ1JOO0FBQ0Y7QURhQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUNYRjtBRGFBO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNWRjtBRFdFO0VBQ0UseUJBQUE7QUNUSiIsImZpbGUiOiIuLi9hdXRoL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLUNTUyBSRVNULS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi8qIEJveCBzaXppbmcgcnVsZXMgKi9cclxuKixcclxuKjo6YmVmb3JlLFxyXG4qOjphZnRlciB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLyogUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyAqL1xyXG51bFtjbGFzc10sXHJcbm9sW2NsYXNzXSB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLyogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luICovXHJcbmJvZHksXHJcbmgxLFxyXG5oMixcclxuaDMsXHJcbmg0LFxyXG5wLFxyXG51bFtjbGFzc10sXHJcbm9sW2NsYXNzXSxcclxubGksXHJcbmZpZ3VyZSxcclxuZmlnY2FwdGlvbixcclxuYmxvY2txdW90ZSxcclxuZGwsXHJcbmRkIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi8qIFNldCBjb3JlIGJvZHkgZGVmYXVsdHMgKi9cclxuYm9keSB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG5cclxuLyogUmVtb3ZlIGxpc3Qgc3R5bGVzIG9uIHVsLCBvbCBlbGVtZW50cyB3aXRoIGEgY2xhc3MgYXR0cmlidXRlICovXHJcbnVsW2NsYXNzXSxcclxub2xbY2xhc3NdIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4vKiBBIGVsZW1lbnRzIHRoYXQgZG9uJ3QgaGF2ZSBhIGNsYXNzIGdldCBkZWZhdWx0IHN0eWxlcyAqL1xyXG5hOm5vdChbY2xhc3NdKSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xyXG59XHJcblxyXG4vKiBNYWtlIGltYWdlcyBlYXNpZXIgdG8gd29yayB3aXRoICovXHJcbmltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4vKiBOYXR1cmFsIGZsb3cgYW5kIHJoeXRobSBpbiBhcnRpY2xlcyBieSBkZWZhdWx0ICovXHJcbmFydGljbGUgPiAqICsgKiB7XHJcbiAgbWFyZ2luLXRvcDogMWVtO1xyXG59XHJcblxyXG4vKiBJbmhlcml0IGZvbnRzIGZvciBpbnB1dHMgYW5kIGJ1dHRvbnMgKi9cclxuaW5wdXQsXHJcbmJ1dHRvbixcclxudGV4dGFyZWEsXHJcbnNlbGVjdCB7XHJcbiAgZm9udDogaW5oZXJpdDtcclxufVxyXG5cclxuLyogUmVtb3ZlIGFsbCBhbmltYXRpb25zIGFuZCB0cmFuc2l0aW9ucyBmb3IgcGVvcGxlIHRoYXQgcHJlZmVyIG5vdCB0byBzZWUgdGhlbSAqL1xyXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xyXG4gICoge1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xyXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbmhlYWRlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmV5O1xyXG4gIC5oZWFkZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyX19sb2dve1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDUwcHg7XHJcblxyXG4gICAgaW1ne1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIG1pbi13aWR0aDogNTBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmhlYWRlcl9fYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBidXR0b257XHJcblxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICBoZWFkZXJ7XHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgLmhlYWRlcl9fbG9nb3tcclxuICAgICAgICBtYXJnaW46IDAgNTAlIDEwcHggNTAlO1xyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uYXBwe1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcbi5hcHAtZGFyayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgY29sb3I6ICM5YmE4YjU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjOWJhOGI1O1xyXG4gIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZjNzU3ZDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLUNTUyBSRVNULS0tLS0tLS0tLS0tLS0tLS0tKi9cbi8qIEJveCBzaXppbmcgcnVsZXMgKi9cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qIFJlbW92ZSBkZWZhdWx0IHBhZGRpbmcgKi9cbnVsW2NsYXNzXSxcbm9sW2NsYXNzXSB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qIFJlbW92ZSBkZWZhdWx0IG1hcmdpbiAqL1xuYm9keSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxucCxcbnVsW2NsYXNzXSxcbm9sW2NsYXNzXSxcbmxpLFxuZmlndXJlLFxuZmlnY2FwdGlvbixcbmJsb2NrcXVvdGUsXG5kbCxcbmRkIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKiBTZXQgY29yZSBib2R5IGRlZmF1bHRzICovXG5ib2R5IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLyogUmVtb3ZlIGxpc3Qgc3R5bGVzIG9uIHVsLCBvbCBlbGVtZW50cyB3aXRoIGEgY2xhc3MgYXR0cmlidXRlICovXG51bFtjbGFzc10sXG5vbFtjbGFzc10ge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4vKiBBIGVsZW1lbnRzIHRoYXQgZG9uJ3QgaGF2ZSBhIGNsYXNzIGdldCBkZWZhdWx0IHN0eWxlcyAqL1xuYTpub3QoW2NsYXNzXSkge1xuICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XG59XG5cbi8qIE1ha2UgaW1hZ2VzIGVhc2llciB0byB3b3JrIHdpdGggKi9cbmltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIE5hdHVyYWwgZmxvdyBhbmQgcmh5dGhtIGluIGFydGljbGVzIGJ5IGRlZmF1bHQgKi9cbmFydGljbGUgPiAqICsgKiB7XG4gIG1hcmdpbi10b3A6IDFlbTtcbn1cblxuLyogSW5oZXJpdCBmb250cyBmb3IgaW5wdXRzIGFuZCBidXR0b25zICovXG5pbnB1dCxcbmJ1dHRvbixcbnRleHRhcmVhLFxuc2VsZWN0IHtcbiAgZm9udDogaW5oZXJpdDtcbn1cblxuLyogUmVtb3ZlIGFsbCBhbmltYXRpb25zIGFuZCB0cmFuc2l0aW9ucyBmb3IgcGVvcGxlIHRoYXQgcHJlZmVyIG5vdCB0byBzZWUgdGhlbSAqL1xuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcbiAgKiB7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbn1cbmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtzbGF0ZWdyZXk7XG59XG5oZWFkZXIgLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5oZWFkZXIgLmhlYWRlcl9fbG9nbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDUwcHg7XG59XG5oZWFkZXIgLmhlYWRlcl9fbG9nbyBpbWcge1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1pbi13aWR0aDogNTBweDtcbn1cbmhlYWRlciAuaGVhZGVyX19idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgcGFkZGluZzogMTBweDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIGhlYWRlciAuaGVhZGVyIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgaGVhZGVyIC5oZWFkZXIgLmhlYWRlcl9fbG9nbyB7XG4gICAgbWFyZ2luOiAwIDUwJSAxMHB4IDUwJTtcbiAgfVxufVxuLmFwcCB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLmFwcC1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiAjOWJhOGI1O1xuICBib3JkZXItY29sb3I6ICM5YmE4YjU7XG59XG4uYXBwLWRhcmsgLmZvcm0tY29udHJvbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2Yzc1N2Q7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/auth/header/header.component.ts": 
        /*!*************************************************!*\
          !*** ./src/app/auth/header/header.component.ts ***!
          \*************************************************/
        /*! exports provided: HeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () { return HeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
            /* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
            var HeaderComponent = /** @class */ (function () {
                function HeaderComponent(authService, router, route, userService, afAuth) {
                    this.authService = authService;
                    this.router = router;
                    this.route = route;
                    this.userService = userService;
                    this.afAuth = afAuth;
                    this.isLoaded = false;
                    this.curentUrl = '';
                }
                HeaderComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.curentUrl = this.route.children[0].routeConfig.path;
                    console.log(' this.curentUrl=', this.curentUrl);
                    this.router.events
                        .subscribe(function (event) {
                        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                            _this.curentUrl = _this.route.children[0].routeConfig.path;
                            console.log(' this.curentUrl=', _this.curentUrl);
                        }
                    });
                };
                HeaderComponent.prototype.onLogOut = function () {
                    this.authService.logout();
                    this.router.navigate(['login']);
                };
                return HeaderComponent;
            }());
            HeaderComponent.ctorParameters = function () { return [
                { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
                { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] }
            ]; };
            HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'soq-authHeader',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/header/header.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/auth/header/header.component.scss")).default]
                })
            ], HeaderComponent);
            /***/ 
        }),
        /***/ "./src/app/auth/login/login.component.scss": 
        /*!*************************************************!*\
          !*** ./src/app/auth/login/login.component.scss ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".form-help-text {\n  color: darkred;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2F1dGgvbG9naW4vRTpcXE15U2VsZlxcUHJvamVjdHNcXHN0YWNrLW9mLXF1ZXRpb25zXFxzdGFjay1vZi1xdWV0aW9uc1xcc3JjXFxhcHBcXHN5c3RlbS8uLlxcYXV0aFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwiLi4vYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGNBQUE7QUNGRiIsImZpbGUiOiIuLi9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtbXV0ZWQge1xyXG4gIC8vdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5mb3JtLWhlbHAtdGV4dHtcclxuICBjb2xvcjogZGFya3JlZDtcclxufVxyXG4iLCIuZm9ybS1oZWxwLXRleHQge1xuICBjb2xvcjogZGFya3JlZDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/auth/login/login.component.ts": 
        /*!***********************************************!*\
          !*** ./src/app/auth/login/login.component.ts ***!
          \***********************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _shared_module_message_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/module/message.model */ "./src/app/shared/module/message.model.ts");
            /* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
            /* harmony import */ var _shared_module_userData_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/module/userData.model */ "./src/app/shared/module/userData.model.ts");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(authService, userServise, title, router, route) {
                    this.authService = authService;
                    this.userServise = userServise;
                    this.title = title;
                    this.router = router;
                    this.route = route;
                }
                LoginComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.title.setTitle('Login');
                    this.message = new _shared_module_message_model__WEBPACK_IMPORTED_MODULE_3__["Message"]('', '');
                    this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
                        'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)])
                    });
                    this.route.queryParams
                        .subscribe(function (params) {
                        if (params["nowCanLogin"]) {
                            _this.message.showMessage('success', 'Now you can LogIn');
                        }
                    });
                };
                LoginComponent.prototype.onSubmit = function () {
                    var _this = this;
                    var email = this.loginForm.value.email + '';
                    var password = this.loginForm.value.password + '';
                    this.userServise.signInByEmail(email, password).then(function (result) {
                        _this.userServise.getUserData()
                            .subscribe(function (userData) {
                            if (userData) {
                                _this.login(userData);
                            }
                            else {
                                var uId = _this.userServise.getUserId();
                                var newUserData = new _shared_module_userData_model__WEBPACK_IMPORTED_MODULE_8__["UserData"](result.user.email, 'user', uId);
                                _this.userServise.addUserToBd(uId, newUserData).then(function () {
                                    console.log('onRegGoogle addUserToBd');
                                    _this.login(userData);
                                    return;
                                }, function (error) {
                                    _this.message.showMessage('danger', 'Error of registration');
                                    console.log('onRegGoogle promise error=', error);
                                    return;
                                });
                            }
                        });
                    }, function (error) {
                        _this.message.showMessage('danger', error);
                    });
                };
                LoginComponent.prototype.onRegGoogle = function () {
                    var _this = this;
                    this.userServise.createNewUserByGoogle().then(function (result) {
                        _this.userServise.getUserData()
                            .subscribe(function (userData) {
                            if (userData) {
                                _this.login(userData);
                            }
                            else {
                                var uId = _this.userServise.getUserId();
                                var newUserData = new _shared_module_userData_model__WEBPACK_IMPORTED_MODULE_8__["UserData"](result.user.email, 'user', uId);
                                _this.userServise.addUserToBd(uId, newUserData).then(function () {
                                    console.log('onRegGoogle addUserToBd');
                                    _this.login(userData);
                                    return;
                                }, function (error) {
                                    _this.message.showMessage('danger', 'Error of registration');
                                    console.log('onRegGoogle promise error=', error);
                                    return;
                                });
                            }
                        });
                    }, function (error) {
                        _this.message.showMessage('danger', error);
                    });
                };
                LoginComponent.prototype.onRegFacebook = function () {
                    var _this = this;
                    this.userServise.createNewUserByFacebook().then(function (result) {
                        _this.userServise.getUserData()
                            .subscribe(function (userData) {
                            if (userData) {
                                _this.login(userData);
                            }
                            else {
                                var uId = _this.userServise.getUserId();
                                var newUserData = new _shared_module_userData_model__WEBPACK_IMPORTED_MODULE_8__["UserData"](result.user.email, 'user', uId);
                                _this.userServise.addUserToBd(uId, newUserData).then(function () {
                                    console.log('onRegGoogle addUserToBd');
                                    _this.login(userData);
                                    return;
                                }, function (error) {
                                    _this.message.showMessage('danger', 'Error of registration');
                                    console.log('onRegGoogle promise error=', error);
                                    return;
                                });
                            }
                        });
                    }, function (error) {
                        _this.message.showMessage('danger', error);
                    });
                };
                LoginComponent.prototype.login = function (userData) {
                    this.authService.login();
                    this.router.navigate(['system/home']);
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
                { type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'soq-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/auth/registration/registration.component.scss": 
        /*!***************************************************************!*\
          !*** ./src/app/auth/registration/registration.component.scss ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".text-muted {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2F1dGgvcmVnaXN0cmF0aW9uL0U6XFxNeVNlbGZcXFByb2plY3RzXFxzdGFjay1vZi1xdWV0aW9uc1xcc3RhY2stb2YtcXVldGlvbnNcXHNyY1xcYXBwXFxzeXN0ZW0vLi5cXGF1dGhcXHJlZ2lzdHJhdGlvblxccmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwiLi4vYXV0aC9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRiIsImZpbGUiOiIuLi9hdXRoL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1tdXRlZCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiIsIi50ZXh0LW11dGVkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/auth/registration/registration.component.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/auth/registration/registration.component.ts ***!
          \*************************************************************/
        /*! exports provided: RegistrationComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function () { return RegistrationComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _shared_module_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/module/user.model */ "./src/app/shared/module/user.model.ts");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
            /* harmony import */ var _shared_module_message_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/module/message.model */ "./src/app/shared/module/message.model.ts");
            /* harmony import */ var _shared_module_userData_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/module/userData.model */ "./src/app/shared/module/userData.model.ts");
            /* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
            var RegistrationComponent = /** @class */ (function () {
                function RegistrationComponent(usersServise, router, title, authService) {
                    this.usersServise = usersServise;
                    this.router = router;
                    this.title = title;
                    this.authService = authService;
                }
                RegistrationComponent.prototype.ngOnInit = function () {
                    this.title.setTitle('Registration');
                    this.message = new _shared_module_message_model__WEBPACK_IMPORTED_MODULE_7__["Message"]('', '');
                    this.regForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
                        'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]),
                    });
                };
                RegistrationComponent.prototype.onSubmit = function () {
                    var _this = this;
                    console.log('this.regForm.value=', this.regForm.value);
                    var _a = this.regForm.value, email = _a.email, password = _a.password;
                    console.log('email=', email, 'password', password);
                    var user = new _shared_module_user_model__WEBPACK_IMPORTED_MODULE_3__["User"](email, password);
                    console.log('user=', user);
                    this.usersServise.createNewUserByEmail(user)
                        .then(function (result) {
                        console.log('signUpByEmail promise result=', result);
                        var uId = _this.usersServise.getUserId();
                        var userData = new _shared_module_userData_model__WEBPACK_IMPORTED_MODULE_8__["UserData"](result.user.email, 'user', uId);
                        var key = result.user.uid;
                        _this.usersServise.addUserToBd(key, userData).then(function () {
                            _this.router.navigate(['/login'], {
                                queryParams: {
                                    nowCanLogin: true
                                }
                            });
                        }, function (error) {
                            _this.message.showMessage('danger', error.message);
                            console.log('signUpByEmail promise error=', error);
                            return;
                        });
                    }, function (error) {
                        console.log('createNewUserByEmail error');
                        _this.message.showMessage('danger', error.message);
                        console.log('signUpByEmail promise error=', error);
                    });
                };
                RegistrationComponent.prototype.onRegGoogle = function () {
                    var _this = this;
                    this.usersServise.createNewUserByGoogle().then(function (result) {
                        console.log('onRegGoogle result=', result);
                        var uId = _this.usersServise.getUserId();
                        var userData = new _shared_module_userData_model__WEBPACK_IMPORTED_MODULE_8__["UserData"](result.user.email, 'user', uId);
                        var key = result.user.uid;
                        _this.usersServise.addUserToBd(key, userData).then(function () {
                            console.log('signUpByEmail addUserToBdr=');
                            _this.login();
                            return;
                        }, function (error) {
                            _this.message.showMessage('danger', 'Error of registration');
                            console.log('signUpByEmail promise error=', error);
                            return;
                        });
                    }, function (error) { return console.log('promise error=', error); });
                };
                RegistrationComponent.prototype.onRegFacebook = function () {
                    var _this = this;
                    this.usersServise.createNewUserByFacebook().then(function (result) {
                        console.log('promise result=', result);
                        _this.login();
                    }, function (error) {
                        console.log('promise error=', error);
                        _this.message.text = error.description;
                    });
                };
                RegistrationComponent.prototype.login = function () {
                    var _this = this;
                    var uId = this.usersServise.getUserId();
                    this.usersServise.getUserDataByKey(uId)
                        .subscribe(function (userData) {
                        _this.authService.login();
                        _this.router.navigate(['system/home']);
                    });
                };
                return RegistrationComponent;
            }());
            RegistrationComponent.ctorParameters = function () { return [
                { type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] },
                { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] }
            ]; };
            RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'soq-registration',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/registration/registration.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./registration.component.scss */ "./src/app/auth/registration/registration.component.scss")).default]
                })
            ], RegistrationComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/module/message.model.ts": 
        /*!************************************************!*\
          !*** ./src/app/shared/module/message.model.ts ***!
          \************************************************/
        /*! exports provided: Message */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function () { return Message; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Message = /** @class */ (function () {
                function Message(type, text) {
                    this.type = type;
                    this.text = text;
                }
                Message.prototype.showMessage = function (type, text) {
                    var _this = this;
                    this.type = type;
                    this.text = text;
                    setTimeout(function () {
                        _this.text = '';
                        console.log('timer');
                    }, 3000);
                };
                return Message;
            }());
            /***/ 
        }),
        /***/ "./src/app/shared/module/user.model.ts": 
        /*!*********************************************!*\
          !*** ./src/app/shared/module/user.model.ts ***!
          \*********************************************/
        /*! exports provided: User */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function () { return User; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var User = /** @class */ (function () {
                function User(email, password) {
                    this.email = email;
                    this.password = password;
                }
                return User;
            }());
            /***/ 
        }),
        /***/ "./src/app/shared/module/userData.model.ts": 
        /*!*************************************************!*\
          !*** ./src/app/shared/module/userData.model.ts ***!
          \*************************************************/
        /*! exports provided: UserData */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserData", function () { return UserData; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var UserData = /** @class */ (function () {
                function UserData(name, status, id) {
                    this.name = name;
                    this.status = status;
                    this.id = id;
                }
                return UserData;
            }());
            /***/ 
        }),
        /***/ "./src/app/shared/services/auth.resolver.service.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/shared/services/auth.resolver.service.ts ***!
          \**********************************************************/
        /*! exports provided: AuthResovler */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthResovler", function () { return AuthResovler; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/shared/services/user.service.ts");
            var AuthResovler = /** @class */ (function () {
                function AuthResovler(userService) {
                    this.userService = userService;
                }
                AuthResovler.prototype.resolve = function (route, state) {
                    console.log('resolve');
                    var id = this.userService.getUserId();
                    if (id) {
                        return this.userService.getUserDataByKey(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(2000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data; }));
                    }
                    else {
                        return rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
                    }
                };
                return AuthResovler;
            }());
            AuthResovler.ctorParameters = function () { return [
                { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
            ]; };
            AuthResovler = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], AuthResovler);
            /***/ 
        }),
        /***/ "./src/app/shared/services/auth.service.ts": 
        /*!*************************************************!*\
          !*** ./src/app/shared/services/auth.service.ts ***!
          \*************************************************/
        /*! exports provided: AuthService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function () { return AuthService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/shared/services/user.service.ts");
            var AuthService = /** @class */ (function () {
                function AuthService(afAuth, userService) {
                    var _this = this;
                    this.afAuth = afAuth;
                    this.userService = userService;
                    this.isLogged = false;
                    this.afAuth.authState
                        .subscribe(function (auth) {
                        _this.userId = auth.uid;
                        if (_this.userId) {
                            _this.userService.getUserDataByKey(_this.userId)
                                .subscribe(function (userData) {
                                _this.userData = userData;
                                console.log('AuthService  login this.userData=', _this.userData);
                                _this.isLogged = true;
                            });
                        }
                    });
                }
                AuthService.prototype.login = function () {
                    this.isLogged = true;
                    console.log('AuthService  login this.userData=', this.userData);
                };
                AuthService.prototype.logout = function () {
                    this.afAuth.auth.signOut().then(function () {
                    }).catch(function (error) {
                        // An error happened.
                    });
                    this.isLogged = false;
                };
                AuthService.prototype.isLoggedIn = function () {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.isLogged);
                };
                AuthService.prototype.getUserData = function () {
                    return this.userData;
                };
                return AuthService;
            }());
            AuthService.ctorParameters = function () { return [
                { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
                { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
            ]; };
            AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root',
                })
            ], AuthService);
            /***/ 
        }),
        /***/ "./src/app/shared/services/user.service.ts": 
        /*!*************************************************!*\
          !*** ./src/app/shared/services/user.service.ts ***!
          \*************************************************/
        /*! exports provided: UserService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function () { return UserService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
            /* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
            /* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
            var UserService = /** @class */ (function () {
                function UserService(afAuth, db) {
                    this.afAuth = afAuth;
                    this.db = db;
                }
                UserService.prototype.signInByEmail = function (email, password) {
                    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
                };
                UserService.prototype.createNewUserByEmail = function (user) {
                    console.log('СreateNewUserByEmail user.email=', user.email);
                    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
                };
                UserService.prototype.createNewUserByGoogle = function () {
                    return this.afAuth.auth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider()).then(function (result) {
                        console.log('createNewUserByGoogle result=', result);
                    });
                };
                UserService.prototype.createNewUserByFacebook = function () {
                    return this.afAuth.auth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].FacebookAuthProvider());
                };
                UserService.prototype.getUserId = function () {
                    console.log('UserService getUserId this.afAuth.auth.currentUser=', this.afAuth.auth.currentUser);
                    return this.afAuth.auth.currentUser.uid;
                };
                UserService.prototype.addUserToBd = function (key, userData) {
                    return this.db.object('/users/' + key).set(userData);
                };
                UserService.prototype.getUserData = function () {
                    console.log('getUserData');
                    var key = this.getUserId();
                    console.log('getUserData key=', key);
                    return this.db.object('/users/' + key).valueChanges();
                };
                UserService.prototype.getUserDataByKey = function (key) {
                    console.log('getUserData key=', key);
                    return this.db.object('/users/' + key).valueChanges();
                };
                return UserService;
            }());
            UserService.ctorParameters = function () { return [
                { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
                { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"] }
            ]; };
            UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], UserService);
            /***/ 
        }),
        /***/ "./src/app/system/create-question/create-question.component.scss": 
        /*!***********************************************************************!*\
          !*** ./src/app/system/create-question/create-question.component.scss ***!
          \***********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".newQuestion {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 2px solid darkslategrey;\n  border-radius: 5px;\n  padding: 10px 10px;\n}\n.newQuestion .newQuestion__title {\n  width: 100%;\n  text-align: center;\n  border-bottom: 2px darkslategrey solid;\n  padding: 10px 0;\n}\n.newQuestion .newQuestion__form {\n  width: 100%;\n}\n.formQuestion {\n  width: 100%;\n}\n.formQuestion .formQuestion__item {\n  display: flex;\n  position: relative;\n  margin-bottom: 2em;\n}\n.formQuestion .formQuestion__item .formQuestion__lable {\n  min-width: 100px;\n}\n.formQuestion .formQuestion__item .formQuestion__input {\n  width: 100%;\n}\n.formQuestion .formQuestion__item .formQuestion__input .formQuestion__checkboxItem {\n  padding: 0 10px;\n}\n.formQuestion .formQuestion__item .formQuestion__input .formQuestion__checkboxItem .formQuestion__checkbox {\n  /* IE */\n  /* FF */\n  /* Safari and Chrome */\n  /* Opera */\n  transform: scale(2);\n  padding: 10px;\n}\n.formQuestion .formQuestion__item .formQuestion__input .formQuestion__checkboxItem .formQuestion__checkbox-lable {\n  display: inline;\n  padding-left: 15px;\n}\n.formQuestion .formQuestion__item .formQuestion__textarea {\n  height: 200px;\n}\n.formQuestion .formQuestion__item .formQuestion__hint {\n  position: absolute;\n  bottom: -30px;\n  left: 100px;\n}\n.formQuestion .formQuestion__button {\n  display: flex;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1xdWVzdGlvbi9FOlxcTXlTZWxmXFxQcm9qZWN0c1xcc3RhY2stb2YtcXVldGlvbnNcXHN0YWNrLW9mLXF1ZXRpb25zXFxzcmNcXGFwcFxcc3lzdGVtL2NyZWF0ZS1xdWVzdGlvblxcY3JlYXRlLXF1ZXN0aW9uLmNvbXBvbmVudC5zY3NzIiwiY3JlYXRlLXF1ZXN0aW9uL2NyZWF0ZS1xdWVzdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURBRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0EsZUFBQTtBQ0VKO0FEQUU7RUFDRSxXQUFBO0FDRUo7QURDQTtFQUNFLFdBQUE7QUNFRjtBRERDO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNHSDtBREZHO0VBQ0MsZ0JBQUE7QUNJSjtBREZHO0VBQ0UsV0FBQTtBQ0lMO0FESEs7RUFDRSxlQUFBO0FDS1A7QURKTztFQUMyQixPQUFBO0VBQ0MsT0FBQTtFQUNHLHNCQUFBO0VBQ0wsVUFBQTtFQUN4QixtQkFBQTtFQUNBLGFBQUE7QUNVVDtBRFJPO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDVVQ7QURORztFQUNFLGFBQUE7QUNRTDtBRE5HO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ1FMO0FESkU7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUNNSiIsImZpbGUiOiJjcmVhdGUtcXVlc3Rpb24vY3JlYXRlLXF1ZXN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ld1F1ZXN0aW9ue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGRhcmtzbGF0ZWdyZXk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAubmV3UXVlc3Rpb25fX3RpdGxle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggZGFya3NsYXRlZ3JleSBzb2xpZDtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICB9XHJcbiAgLm5ld1F1ZXN0aW9uX19mb3Jte1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbi5mb3JtUXVlc3Rpb257XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAuZm9ybVF1ZXN0aW9uX19pdGVte1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgIG1hcmdpbi1ib3R0b206IDJlbTtcclxuICAgLmZvcm1RdWVzdGlvbl9fbGFibGV7XHJcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICB9XHJcbiAgIC5mb3JtUXVlc3Rpb25fX2lucHV0e1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgIC5mb3JtUXVlc3Rpb25fX2NoZWNrYm94SXRlbXtcclxuICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgIC5mb3JtUXVlc3Rpb25fX2NoZWNrYm94e1xyXG4gICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgyKTsgLyogSUUgKi9cclxuICAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDIpOyAvKiBGRiAqL1xyXG4gICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMik7IC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXHJcbiAgICAgICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMik7IC8qIE9wZXJhICovXHJcbiAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XHJcbiAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICB9XHJcbiAgICAgICAuZm9ybVF1ZXN0aW9uX19jaGVja2JveC1sYWJsZXtcclxuICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICB9XHJcbiAgICAgfVxyXG4gICB9XHJcbiAgIC5mb3JtUXVlc3Rpb25fX3RleHRhcmVhe1xyXG4gICAgIGhlaWdodDogMjAwcHg7XHJcbiAgIH1cclxuICAgLmZvcm1RdWVzdGlvbl9faGludHtcclxuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgYm90dG9tOi0zMHB4O1xyXG4gICAgIGxlZnQ6MTAwcHg7XHJcbiAgIH1cclxuXHJcbiB9XHJcbiAgLmZvcm1RdWVzdGlvbl9fYnV0dG9ue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgfVxyXG59XHJcbiIsIi5uZXdRdWVzdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGRhcmtzbGF0ZWdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xufVxuLm5ld1F1ZXN0aW9uIC5uZXdRdWVzdGlvbl9fdGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAycHggZGFya3NsYXRlZ3JleSBzb2xpZDtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuLm5ld1F1ZXN0aW9uIC5uZXdRdWVzdGlvbl9fZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9ybVF1ZXN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZm9ybVF1ZXN0aW9uIC5mb3JtUXVlc3Rpb25fX2l0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbn1cbi5mb3JtUXVlc3Rpb24gLmZvcm1RdWVzdGlvbl9faXRlbSAuZm9ybVF1ZXN0aW9uX19sYWJsZSB7XG4gIG1pbi13aWR0aDogMTAwcHg7XG59XG4uZm9ybVF1ZXN0aW9uIC5mb3JtUXVlc3Rpb25fX2l0ZW0gLmZvcm1RdWVzdGlvbl9faW5wdXQge1xuICB3aWR0aDogMTAwJTtcbn1cbi5mb3JtUXVlc3Rpb24gLmZvcm1RdWVzdGlvbl9faXRlbSAuZm9ybVF1ZXN0aW9uX19pbnB1dCAuZm9ybVF1ZXN0aW9uX19jaGVja2JveEl0ZW0ge1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG4uZm9ybVF1ZXN0aW9uIC5mb3JtUXVlc3Rpb25fX2l0ZW0gLmZvcm1RdWVzdGlvbl9faW5wdXQgLmZvcm1RdWVzdGlvbl9fY2hlY2tib3hJdGVtIC5mb3JtUXVlc3Rpb25fX2NoZWNrYm94IHtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMik7XG4gIC8qIElFICovXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgyKTtcbiAgLyogRkYgKi9cbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDIpO1xuICAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDIpO1xuICAvKiBPcGVyYSAqL1xuICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmZvcm1RdWVzdGlvbiAuZm9ybVF1ZXN0aW9uX19pdGVtIC5mb3JtUXVlc3Rpb25fX2lucHV0IC5mb3JtUXVlc3Rpb25fX2NoZWNrYm94SXRlbSAuZm9ybVF1ZXN0aW9uX19jaGVja2JveC1sYWJsZSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuLmZvcm1RdWVzdGlvbiAuZm9ybVF1ZXN0aW9uX19pdGVtIC5mb3JtUXVlc3Rpb25fX3RleHRhcmVhIHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cbi5mb3JtUXVlc3Rpb24gLmZvcm1RdWVzdGlvbl9faXRlbSAuZm9ybVF1ZXN0aW9uX19oaW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0zMHB4O1xuICBsZWZ0OiAxMDBweDtcbn1cbi5mb3JtUXVlc3Rpb24gLmZvcm1RdWVzdGlvbl9fYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/system/create-question/create-question.component.ts": 
        /*!*********************************************************************!*\
          !*** ./src/app/system/create-question/create-question.component.ts ***!
          \*********************************************************************/
        /*! exports provided: CreateQuestionComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateQuestionComponent", function () { return CreateQuestionComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
            /* harmony import */ var _shared_services_question_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/question.service */ "./src/app/system/shared/services/question.service.ts");
            /* harmony import */ var _shared_models_questionNew_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/models/questionNew.model */ "./src/app/system/shared/models/questionNew.model.ts");
            /* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var CreateQuestionComponent = /** @class */ (function () {
                function CreateQuestionComponent(questionService, db, userService, router) {
                    this.questionService = questionService;
                    this.db = db;
                    this.userService = userService;
                    this.router = router;
                }
                CreateQuestionComponent.prototype.ngOnInit = function () {
                    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        'title': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required], [this.questionService.forbiddenTitle]),
                        'text': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                        'tags': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                            'tag1': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                            'tag2': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                        })
                    });
                    console.log('this.form.value=', this.form.value);
                };
                CreateQuestionComponent.prototype.onSubmit = function () {
                    var _a = this.form.value, title = _a.title, text = _a.text, tags = _a.tags;
                    var arrTags = [];
                    if (tags.length === 0) {
                        arrTags.push('noTags');
                    }
                    else {
                        for (var key in tags) {
                            if (tags[key] === true) {
                                arrTags.push("" + key);
                            }
                        }
                    }
                    var questionNew = new _shared_models_questionNew_model__WEBPACK_IMPORTED_MODULE_5__["QuestionNew"](this.userService.getUserId(), ((new Date()) + ''), 'notApproved', arrTags, text, title);
                    console.log('push to db: ', questionNew);
                    this.questionService.addQuestion(questionNew);
                    this.router.navigate(['/system/home']);
                };
                return CreateQuestionComponent;
            }());
            CreateQuestionComponent.ctorParameters = function () { return [
                { type: _shared_services_question_service__WEBPACK_IMPORTED_MODULE_4__["QuestionService"] },
                { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] },
                { type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
            ]; };
            CreateQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'soq-create-question',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-question.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/system/create-question/create-question.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-question.component.scss */ "./src/app/system/create-question/create-question.component.scss")).default]
                })
            ], CreateQuestionComponent);
            /***/ 
        }),
        /***/ "./src/app/system/edding-question/edding-question.component.scss": 
        /*!***********************************************************************!*\
          !*** ./src/app/system/edding-question/edding-question.component.scss ***!
          \***********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".newQuestion {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 2px solid darkslategrey;\n  border-radius: 5px;\n  padding: 10px 10px;\n}\n.newQuestion .newQuestion__title {\n  width: 100%;\n  text-align: center;\n  border-bottom: 2px darkslategrey solid;\n  padding: 10px 0;\n}\n.newQuestion .newQuestion__form {\n  width: 100%;\n}\n.formQuestion {\n  width: 100%;\n}\n.formQuestion .formQuestion__item {\n  display: flex;\n  position: relative;\n  margin-bottom: 2em;\n}\n.formQuestion .formQuestion__item .formQuestion__lable {\n  min-width: 100px;\n}\n.formQuestion .formQuestion__item .formQuestion__input {\n  width: 100%;\n}\n.formQuestion .formQuestion__item .formQuestion__input .formQuestion__checkboxItem {\n  padding: 0 10px;\n}\n.formQuestion .formQuestion__item .formQuestion__input .formQuestion__checkboxItem .formQuestion__checkbox {\n  /* IE */\n  /* FF */\n  /* Safari and Chrome */\n  /* Opera */\n  transform: scale(2);\n  padding: 10px;\n}\n.formQuestion .formQuestion__item .formQuestion__input .formQuestion__checkboxItem .formQuestion__checkbox-lable {\n  display: inline;\n  padding-left: 15px;\n}\n.formQuestion .formQuestion__item .formQuestion__textarea {\n  height: 200px;\n}\n.formQuestion .formQuestion__item .formQuestion__hint {\n  position: absolute;\n  bottom: -30px;\n  left: 100px;\n}\n.formQuestion .formQuestion__button {\n  display: flex;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkZGluZy1xdWVzdGlvbi9FOlxcTXlTZWxmXFxQcm9qZWN0c1xcc3RhY2stb2YtcXVldGlvbnNcXHN0YWNrLW9mLXF1ZXRpb25zXFxzcmNcXGFwcFxcc3lzdGVtL2VkZGluZy1xdWVzdGlvblxcZWRkaW5nLXF1ZXN0aW9uLmNvbXBvbmVudC5zY3NzIiwiZWRkaW5nLXF1ZXN0aW9uL2VkZGluZy1xdWVzdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURBRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0EsZUFBQTtBQ0VKO0FEQUU7RUFDRSxXQUFBO0FDRUo7QURDQTtFQUNFLFdBQUE7QUNFRjtBRERFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNHSjtBREZJO0VBQ0UsZ0JBQUE7QUNJTjtBREZJO0VBQ0UsV0FBQTtBQ0lOO0FESE07RUFDRSxlQUFBO0FDS1I7QURKUTtFQUMyQixPQUFBO0VBQ0MsT0FBQTtFQUNHLHNCQUFBO0VBQ0wsVUFBQTtFQUN4QixtQkFBQTtFQUNBLGFBQUE7QUNVVjtBRFJRO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDVVY7QUROSTtFQUNFLGFBQUE7QUNRTjtBRE5JO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ1FOO0FESkU7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUNNSiIsImZpbGUiOiJlZGRpbmctcXVlc3Rpb24vZWRkaW5nLXF1ZXN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ld1F1ZXN0aW9ue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGRhcmtzbGF0ZWdyZXk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAubmV3UXVlc3Rpb25fX3RpdGxle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggZGFya3NsYXRlZ3JleSBzb2xpZDtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICB9XHJcbiAgLm5ld1F1ZXN0aW9uX19mb3Jte1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbi5mb3JtUXVlc3Rpb257XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLmZvcm1RdWVzdGlvbl9faXRlbXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbiAgICAuZm9ybVF1ZXN0aW9uX19sYWJsZXtcclxuICAgICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgIH1cclxuICAgIC5mb3JtUXVlc3Rpb25fX2lucHV0e1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgLmZvcm1RdWVzdGlvbl9fY2hlY2tib3hJdGVte1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICAuZm9ybVF1ZXN0aW9uX19jaGVja2JveHtcclxuICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDIpOyAvKiBJRSAqL1xyXG4gICAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDIpOyAvKiBGRiAqL1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDIpOyAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xyXG4gICAgICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgyKTsgLyogT3BlcmEgKi9cclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9ybVF1ZXN0aW9uX19jaGVja2JveC1sYWJsZXtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5mb3JtUXVlc3Rpb25fX3RleHRhcmVhe1xyXG4gICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgfVxyXG4gICAgLmZvcm1RdWVzdGlvbl9faGludHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206LTMwcHg7XHJcbiAgICAgIGxlZnQ6MTAwcHg7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuICAuZm9ybVF1ZXN0aW9uX19idXR0b257XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB9XHJcbn1cclxuIiwiLm5ld1F1ZXN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiAycHggc29saWQgZGFya3NsYXRlZ3JleTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7XG59XG4ubmV3UXVlc3Rpb24gLm5ld1F1ZXN0aW9uX190aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXJrc2xhdGVncmV5IHNvbGlkO1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4ubmV3UXVlc3Rpb24gLm5ld1F1ZXN0aW9uX19mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb3JtUXVlc3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbn1cbi5mb3JtUXVlc3Rpb24gLmZvcm1RdWVzdGlvbl9faXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xufVxuLmZvcm1RdWVzdGlvbiAuZm9ybVF1ZXN0aW9uX19pdGVtIC5mb3JtUXVlc3Rpb25fX2xhYmxlIHtcbiAgbWluLXdpZHRoOiAxMDBweDtcbn1cbi5mb3JtUXVlc3Rpb24gLmZvcm1RdWVzdGlvbl9faXRlbSAuZm9ybVF1ZXN0aW9uX19pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmZvcm1RdWVzdGlvbiAuZm9ybVF1ZXN0aW9uX19pdGVtIC5mb3JtUXVlc3Rpb25fX2lucHV0IC5mb3JtUXVlc3Rpb25fX2NoZWNrYm94SXRlbSB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5mb3JtUXVlc3Rpb24gLmZvcm1RdWVzdGlvbl9faXRlbSAuZm9ybVF1ZXN0aW9uX19pbnB1dCAuZm9ybVF1ZXN0aW9uX19jaGVja2JveEl0ZW0gLmZvcm1RdWVzdGlvbl9fY2hlY2tib3gge1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgyKTtcbiAgLyogSUUgKi9cbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDIpO1xuICAvKiBGRiAqL1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMik7XG4gIC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMik7XG4gIC8qIE9wZXJhICovXG4gIHRyYW5zZm9ybTogc2NhbGUoMik7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uZm9ybVF1ZXN0aW9uIC5mb3JtUXVlc3Rpb25fX2l0ZW0gLmZvcm1RdWVzdGlvbl9faW5wdXQgLmZvcm1RdWVzdGlvbl9fY2hlY2tib3hJdGVtIC5mb3JtUXVlc3Rpb25fX2NoZWNrYm94LWxhYmxlIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG4uZm9ybVF1ZXN0aW9uIC5mb3JtUXVlc3Rpb25fX2l0ZW0gLmZvcm1RdWVzdGlvbl9fdGV4dGFyZWEge1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuLmZvcm1RdWVzdGlvbiAuZm9ybVF1ZXN0aW9uX19pdGVtIC5mb3JtUXVlc3Rpb25fX2hpbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTMwcHg7XG4gIGxlZnQ6IDEwMHB4O1xufVxuLmZvcm1RdWVzdGlvbiAuZm9ybVF1ZXN0aW9uX19idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/system/edding-question/edding-question.component.ts": 
        /*!*********************************************************************!*\
          !*** ./src/app/system/edding-question/edding-question.component.ts ***!
          \*********************************************************************/
        /*! exports provided: EddingQuestionComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EddingQuestionComponent", function () { return EddingQuestionComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _shared_services_question_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/question.service */ "./src/app/system/shared/services/question.service.ts");
            /* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
            /* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            var EddingQuestionComponent = /** @class */ (function () {
                function EddingQuestionComponent(questionService, db, userService, route, router, location) {
                    var _this = this;
                    this.questionService = questionService;
                    this.db = db;
                    this.userService = userService;
                    this.route = route;
                    this.router = router;
                    this.location = location;
                    this.forbiddenTitle = function (control) {
                        return new Promise(function (resolve, reject) {
                            _this.db.list('questions', function (ref) { return ref.orderByChild('title').equalTo(control.value); }).valueChanges()
                                .subscribe(function (questions) {
                                console.log('forbiddenTitle questions=', questions);
                                if (questions.length) {
                                    console.log('novalid');
                                    if (control.value === _this.question.title) {
                                        console.log('valid');
                                        resolve(null);
                                    }
                                    resolve({ forbiddenTitle: true });
                                }
                                else {
                                    console.log('valid');
                                    resolve(null);
                                }
                                //have i to close this subscribtion?
                            });
                        });
                    };
                }
                EddingQuestionComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.questionId = this.route.snapshot.fragment;
                    console.log('questionId=', this.questionId);
                    this.questionService.getQuestionById(this.questionId)
                        .subscribe(function (question) {
                        _this.question = question;
                        console.log('EddingQuestionComponent question to edit on init=', _this.question);
                        _this.form.patchValue({
                            'title': _this.question.title,
                            'text': _this.question.text,
                            'tags': {
                                'tag1': !!(_this.question.tags ? _this.question.tags.indexOf('tag1') + 1 : false),
                                'tag2': !!(_this.question.tags ? _this.question.tags.indexOf('tag2') + 1 : false),
                            }
                        });
                        _this.JSONform = JSON.stringify(_this.form.value);
                    });
                    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        'title': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required], [this.forbiddenTitle]),
                        'text': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                        'tags': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                            'tag1': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                            'tag2': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                        })
                    });
                };
                EddingQuestionComponent.prototype.onSubmit = function () {
                    console.log('EddingQuestionComponent this.form.value update=', this.form.value);
                    var _a = this.form.value, title = _a.title, text = _a.text, tags = _a.tags;
                    this.question.title = title;
                    this.question.text = text;
                    var arrTags = [];
                    for (var key in tags) {
                        if (tags[key]) {
                            arrTags.push("" + key);
                        }
                    }
                    console.log('EddingQuestionComponent arrTags update=', arrTags);
                    this.question.tags = arrTags;
                    console.log('EddingQuestionComponent this.question update=', this.question);
                    this.questionService.updateQuestion(this.questionId, this.question);
                    this.router.navigate(['/system/question'], { fragment: this.questionId });
                };
                EddingQuestionComponent.prototype.goBack = function () {
                    this.location.back();
                };
                EddingQuestionComponent.prototype.checkEditing = function () {
                    return JSON.stringify(this.form.value) === this.JSONform;
                };
                return EddingQuestionComponent;
            }());
            EddingQuestionComponent.ctorParameters = function () { return [
                { type: _shared_services_question_service__WEBPACK_IMPORTED_MODULE_3__["QuestionService"] },
                { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"] },
                { type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] }
            ]; };
            EddingQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'soq-edding-question',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edding-question.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/system/edding-question/edding-question.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edding-question.component.scss */ "./src/app/system/edding-question/edding-question.component.scss")).default]
                })
            ], EddingQuestionComponent);
            /***/ 
        }),
        /***/ "./src/app/system/header/header.component.scss": 
        /*!*****************************************************!*\
          !*** ./src/app/system/header/header.component.scss ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/*---------------------CSS REST------------------*/\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n/* Remove default padding */\nul[class],\nol[class] {\n  padding: 0;\n}\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nul[class],\nol[class],\nli,\nfigure,\nfigcaption,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  scroll-behavior: smooth;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n/* Remove list styles on ul, ol elements with a class attribute */\nul[class],\nol[class] {\n  list-style: none;\n}\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  -webkit-text-decoration-skip: ink;\n          text-decoration-skip-ink: auto;\n}\n/* Make images easier to work with */\nimg {\n  max-width: 100%;\n  display: block;\n}\n/* Natural flow and rhythm in articles by default */\narticle > * + * {\n  margin-top: 1em;\n}\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n/* Remove all animations and transitions for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  * {\n    -webkit-animation-duration: 0.01ms !important;\n            animation-duration: 0.01ms !important;\n    -webkit-animation-iteration-count: 1 !important;\n            animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\nheader {\n  background-color: darkslategrey;\n}\nheader .header {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n  align-items: center;\n  padding: 20px 0;\n}\nheader .header__logo {\n  width: 100%;\n  min-width: 50px;\n}\nheader .header__logo img {\n  height: 50px;\n  min-width: 50px;\n}\nheader .header__button {\n  margin-left: 10px;\n  white-space: nowrap;\n  padding: 10px;\n  height: 60px;\n}\n@media (max-width: 576px) {\n  header .header {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n  header .header .header__logo {\n    margin: 0 50% 10px 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci9FOlxcTXlTZWxmXFxQcm9qZWN0c1xcc3RhY2stb2YtcXVldGlvbnNcXHN0YWNrLW9mLXF1ZXRpb25zXFxzcmNcXGFwcFxcc3lzdGVtL2hlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwiaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrREFBQTtBQUVBLHFCQUFBO0FBQ0E7OztFQUdFLHNCQUFBO0FDQUY7QURHQSwyQkFBQTtBQUNBOztFQUVFLFVBQUE7QUNBRjtBREdBLDBCQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0VBY0UsU0FBQTtBQ0FGO0FER0EsMkJBQUE7QUFDQTtFQUNFLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FDQUY7QURHQSxpRUFBQTtBQUNBOztFQUVFLGdCQUFBO0FDQUY7QURHQSwwREFBQTtBQUNBO0VBQ0UsaUNBQUE7VUFBQSw4QkFBQTtBQ0FGO0FER0Esb0NBQUE7QUFDQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDQUY7QURHQSxtREFBQTtBQUNBO0VBQ0UsZUFBQTtBQ0FGO0FER0EseUNBQUE7QUFDQTs7OztFQUlFLGFBQUE7QUNBRjtBREdBLGlGQUFBO0FBQ0E7RUFDRTtJQUNFLDZDQUFBO1lBQUEscUNBQUE7SUFDQSwrQ0FBQTtZQUFBLHVDQUFBO0lBQ0Esc0NBQUE7SUFDQSxnQ0FBQTtFQ0FGO0FBQ0Y7QURLQTtFQUNFLCtCQUFBO0FDSEY7QURJRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0ZKO0FES0U7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQ0hKO0FES0k7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0hOO0FETUU7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNKSjtBRFVBO0VBRUk7SUFDRSxlQUFBO0lBQ0EsdUJBQUE7RUNUSjtFRFVJO0lBQ0Usc0JBQUE7RUNSTjtBQUNGIiwiZmlsZSI6ImhlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLUNTUyBSRVNULS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi8qIEJveCBzaXppbmcgcnVsZXMgKi9cclxuKixcclxuKjo6YmVmb3JlLFxyXG4qOjphZnRlciB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLyogUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyAqL1xyXG51bFtjbGFzc10sXHJcbm9sW2NsYXNzXSB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLyogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luICovXHJcbmJvZHksXHJcbmgxLFxyXG5oMixcclxuaDMsXHJcbmg0LFxyXG5wLFxyXG51bFtjbGFzc10sXHJcbm9sW2NsYXNzXSxcclxubGksXHJcbmZpZ3VyZSxcclxuZmlnY2FwdGlvbixcclxuYmxvY2txdW90ZSxcclxuZGwsXHJcbmRkIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi8qIFNldCBjb3JlIGJvZHkgZGVmYXVsdHMgKi9cclxuYm9keSB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG5cclxuLyogUmVtb3ZlIGxpc3Qgc3R5bGVzIG9uIHVsLCBvbCBlbGVtZW50cyB3aXRoIGEgY2xhc3MgYXR0cmlidXRlICovXHJcbnVsW2NsYXNzXSxcclxub2xbY2xhc3NdIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4vKiBBIGVsZW1lbnRzIHRoYXQgZG9uJ3QgaGF2ZSBhIGNsYXNzIGdldCBkZWZhdWx0IHN0eWxlcyAqL1xyXG5hOm5vdChbY2xhc3NdKSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xyXG59XHJcblxyXG4vKiBNYWtlIGltYWdlcyBlYXNpZXIgdG8gd29yayB3aXRoICovXHJcbmltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4vKiBOYXR1cmFsIGZsb3cgYW5kIHJoeXRobSBpbiBhcnRpY2xlcyBieSBkZWZhdWx0ICovXHJcbmFydGljbGUgPiAqICsgKiB7XHJcbiAgbWFyZ2luLXRvcDogMWVtO1xyXG59XHJcblxyXG4vKiBJbmhlcml0IGZvbnRzIGZvciBpbnB1dHMgYW5kIGJ1dHRvbnMgKi9cclxuaW5wdXQsXHJcbmJ1dHRvbixcclxudGV4dGFyZWEsXHJcbnNlbGVjdCB7XHJcbiAgZm9udDogaW5oZXJpdDtcclxufVxyXG5cclxuLyogUmVtb3ZlIGFsbCBhbmltYXRpb25zIGFuZCB0cmFuc2l0aW9ucyBmb3IgcGVvcGxlIHRoYXQgcHJlZmVyIG5vdCB0byBzZWUgdGhlbSAqL1xyXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xyXG4gICoge1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xyXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbmhlYWRlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmV5O1xyXG4gIC5oZWFkZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyX19sb2dve1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDUwcHg7XHJcblxyXG4gICAgaW1ne1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIG1pbi13aWR0aDogNTBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmhlYWRlcl9fYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBidXR0b257XHJcblxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICBoZWFkZXJ7XHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgLmhlYWRlcl9fbG9nb3tcclxuICAgICAgICBtYXJnaW46IDAgNTAlIDEwcHggNTAlO1xyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbiIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tQ1NTIFJFU1QtLS0tLS0tLS0tLS0tLS0tLS0qL1xuLyogQm94IHNpemluZyBydWxlcyAqL1xuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyAqL1xudWxbY2xhc3NdLFxub2xbY2xhc3NdIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLyogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luICovXG5ib2R5LFxuaDEsXG5oMixcbmgzLFxuaDQsXG5wLFxudWxbY2xhc3NdLFxub2xbY2xhc3NdLFxubGksXG5maWd1cmUsXG5maWdjYXB0aW9uLFxuYmxvY2txdW90ZSxcbmRsLFxuZGQge1xuICBtYXJnaW46IDA7XG59XG5cbi8qIFNldCBjb3JlIGJvZHkgZGVmYXVsdHMgKi9cbmJvZHkge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG4vKiBSZW1vdmUgbGlzdCBzdHlsZXMgb24gdWwsIG9sIGVsZW1lbnRzIHdpdGggYSBjbGFzcyBhdHRyaWJ1dGUgKi9cbnVsW2NsYXNzXSxcbm9sW2NsYXNzXSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi8qIEEgZWxlbWVudHMgdGhhdCBkb24ndCBoYXZlIGEgY2xhc3MgZ2V0IGRlZmF1bHQgc3R5bGVzICovXG5hOm5vdChbY2xhc3NdKSB7XG4gIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcbn1cblxuLyogTWFrZSBpbWFnZXMgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xuaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogTmF0dXJhbCBmbG93IGFuZCByaHl0aG0gaW4gYXJ0aWNsZXMgYnkgZGVmYXVsdCAqL1xuYXJ0aWNsZSA+ICogKyAqIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG4vKiBJbmhlcml0IGZvbnRzIGZvciBpbnB1dHMgYW5kIGJ1dHRvbnMgKi9cbmlucHV0LFxuYnV0dG9uLFxudGV4dGFyZWEsXG5zZWxlY3Qge1xuICBmb250OiBpbmhlcml0O1xufVxuXG4vKiBSZW1vdmUgYWxsIGFuaW1hdGlvbnMgYW5kIHRyYW5zaXRpb25zIGZvciBwZW9wbGUgdGhhdCBwcmVmZXIgbm90IHRvIHNlZSB0aGVtICovXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuICAqIHtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxufVxuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JleTtcbn1cbmhlYWRlciAuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cbmhlYWRlciAuaGVhZGVyX19sb2dvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogNTBweDtcbn1cbmhlYWRlciAuaGVhZGVyX19sb2dvIGltZyB7XG4gIGhlaWdodDogNTBweDtcbiAgbWluLXdpZHRoOiA1MHB4O1xufVxuaGVhZGVyIC5oZWFkZXJfX2J1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgaGVhZGVyIC5oZWFkZXIge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICBoZWFkZXIgLmhlYWRlciAuaGVhZGVyX19sb2dvIHtcbiAgICBtYXJnaW46IDAgNTAlIDEwcHggNTAlO1xuICB9XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/system/header/header.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/system/header/header.component.ts ***!
          \***************************************************/
        /*! exports provided: HeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () { return HeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
            /* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
            var HeaderComponent = /** @class */ (function () {
                function HeaderComponent(authService, route, router, userService, afAuth, activatedRoute) {
                    this.authService = authService;
                    this.route = route;
                    this.router = router;
                    this.userService = userService;
                    this.afAuth = afAuth;
                    this.activatedRoute = activatedRoute;
                    this.isLoaded = false;
                    this.curentUrl = '';
                }
                HeaderComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.userData = this.authService.userData;
                    this.curentUrl = this.route.children[0].routeConfig.path;
                    this.router.events
                        .subscribe(function (event) {
                        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                            _this.curentUrl = _this.route.children[0].routeConfig.path;
                        }
                    });
                };
                HeaderComponent.prototype.onLogOut = function () {
                    this.authService.logout();
                    this.router.navigate(['login']);
                };
                return HeaderComponent;
            }());
            HeaderComponent.ctorParameters = function () { return [
                { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
                { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
            ]; };
            HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'soq-systemHeader',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/system/header/header.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/system/header/header.component.scss")).default]
                })
            ], HeaderComponent);
            /***/ 
        }),
        /***/ "./src/app/system/home/home-filter/home-filter.component.scss": 
        /*!********************************************************************!*\
          !*** ./src/app/system/home/home-filter/home-filter.component.scss ***!
          \********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".modal.fade.in {\n  display: block;\n  opacity: 1;\n}\n\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n}\n\n.newQuestion {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 2px solid darkslategrey;\n  border-radius: 5px;\n  padding: 10px 10px;\n}\n\n.newQuestion .newQuestion__title {\n  width: 100%;\n  text-align: center;\n  border-bottom: 2px darkslategrey solid;\n  padding: 10px 0;\n}\n\n.newQuestion .newQuestion__form {\n  width: 100%;\n}\n\n.formQuestion {\n  width: 100%;\n}\n\n.formQuestion .formQuestion__item {\n  display: flex;\n  position: relative;\n  margin-bottom: 2em;\n}\n\n.formQuestion .formQuestion__item .formQuestion__lable {\n  min-width: 100px;\n}\n\n.formQuestion .formQuestion__item .formQuestion__input {\n  width: 100%;\n}\n\n.formQuestion .formQuestion__item .formQuestion__input .formQuestion__checkboxItem {\n  padding: 0 10px;\n}\n\n.formQuestion .formQuestion__item .formQuestion__input .formQuestion__checkboxItem .formQuestion__checkbox {\n  /* IE */\n  /* FF */\n  /* Safari and Chrome */\n  /* Opera */\n  transform: scale(2);\n  padding: 10px;\n}\n\n.formQuestion .formQuestion__item .formQuestion__input .formQuestion__checkboxItem .formQuestion__checkbox-lable {\n  display: inline;\n  padding-left: 15px;\n}\n\n.formQuestion .formQuestion__item .formQuestion__textarea {\n  height: 200px;\n}\n\n.formQuestion .formQuestion__item .formQuestion__hint {\n  position: absolute;\n  top: 40px;\n  left: 100px;\n}\n\n.formQuestion .formQuestion__button {\n  display: flex;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvaG9tZS1maWx0ZXIvRTpcXE15U2VsZlxcUHJvamVjdHNcXHN0YWNrLW9mLXF1ZXRpb25zXFxzdGFjay1vZi1xdWV0aW9uc1xcc3JjXFxhcHBcXHN5c3RlbS9ob21lXFxob21lLWZpbHRlclxcaG9tZS1maWx0ZXIuY29tcG9uZW50LnNjc3MiLCJob21lL2hvbWUtZmlsdGVyL2hvbWUtZmlsdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFVBQUE7QUNDRjs7QURDQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FDRUY7O0FEQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0dGOztBREZFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxlQUFBO0FDSUo7O0FERkU7RUFDRSxXQUFBO0FDSUo7O0FEREE7RUFDRSxXQUFBO0FDSUY7O0FESEU7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0tKOztBREpJO0VBQ0UsZ0JBQUE7QUNNTjs7QURKSTtFQUNFLFdBQUE7QUNNTjs7QURMTTtFQUNFLGVBQUE7QUNPUjs7QUROUTtFQUMyQixPQUFBO0VBQ0MsT0FBQTtFQUNHLHNCQUFBO0VBQ0wsVUFBQTtFQUN4QixtQkFBQTtFQUNBLGFBQUE7QUNZVjs7QURWUTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ1lWOztBRFJJO0VBQ0UsYUFBQTtBQ1VOOztBRFJJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ1VOOztBRE5FO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FDUUoiLCJmaWxlIjoiaG9tZS9ob21lLWZpbHRlci9ob21lLWZpbHRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC5mYWRlLmluIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbi5tb2RhbC1oZWFkZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG59XHJcbi5uZXdRdWVzdGlvbntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXI6IDJweCBzb2xpZCBkYXJrc2xhdGVncmV5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgLm5ld1F1ZXN0aW9uX190aXRsZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IGRhcmtzbGF0ZWdyZXkgc29saWQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgfVxyXG4gIC5uZXdRdWVzdGlvbl9fZm9ybXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4uZm9ybVF1ZXN0aW9ue1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC5mb3JtUXVlc3Rpb25fX2l0ZW17XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG4gICAgLmZvcm1RdWVzdGlvbl9fbGFibGV7XHJcbiAgICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICAuZm9ybVF1ZXN0aW9uX19pbnB1dHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIC5mb3JtUXVlc3Rpb25fX2NoZWNrYm94SXRlbXtcclxuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgLmZvcm1RdWVzdGlvbl9fY2hlY2tib3h7XHJcbiAgICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgyKTsgLyogSUUgKi9cclxuICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgyKTsgLyogRkYgKi9cclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgyKTsgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cclxuICAgICAgICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMik7IC8qIE9wZXJhICovXHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvcm1RdWVzdGlvbl9fY2hlY2tib3gtbGFibGV7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuZm9ybVF1ZXN0aW9uX190ZXh0YXJlYXtcclxuICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIH1cclxuICAgIC5mb3JtUXVlc3Rpb25fX2hpbnR7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOjQwcHg7XHJcbiAgICAgIGxlZnQ6MTAwcHg7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuICAuZm9ybVF1ZXN0aW9uX19idXR0b257XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB9XHJcbn1cclxuIiwiLm1vZGFsLmZhZGUuaW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3BhY2l0eTogMTtcbn1cblxuLm1vZGFsLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufVxuXG4ubmV3UXVlc3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDJweCBzb2xpZCBkYXJrc2xhdGVncmV5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbn1cbi5uZXdRdWVzdGlvbiAubmV3UXVlc3Rpb25fX3RpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhcmtzbGF0ZWdyZXkgc29saWQ7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbi5uZXdRdWVzdGlvbiAubmV3UXVlc3Rpb25fX2Zvcm0ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm1RdWVzdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmZvcm1RdWVzdGlvbiAuZm9ybVF1ZXN0aW9uX19pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG59XG4uZm9ybVF1ZXN0aW9uIC5mb3JtUXVlc3Rpb25fX2l0ZW0gLmZvcm1RdWVzdGlvbl9fbGFibGUge1xuICBtaW4td2lkdGg6IDEwMHB4O1xufVxuLmZvcm1RdWVzdGlvbiAuZm9ybVF1ZXN0aW9uX19pdGVtIC5mb3JtUXVlc3Rpb25fX2lucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZm9ybVF1ZXN0aW9uIC5mb3JtUXVlc3Rpb25fX2l0ZW0gLmZvcm1RdWVzdGlvbl9faW5wdXQgLmZvcm1RdWVzdGlvbl9fY2hlY2tib3hJdGVtIHtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuLmZvcm1RdWVzdGlvbiAuZm9ybVF1ZXN0aW9uX19pdGVtIC5mb3JtUXVlc3Rpb25fX2lucHV0IC5mb3JtUXVlc3Rpb25fX2NoZWNrYm94SXRlbSAuZm9ybVF1ZXN0aW9uX19jaGVja2JveCB7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDIpO1xuICAvKiBJRSAqL1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMik7XG4gIC8qIEZGICovXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgyKTtcbiAgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgyKTtcbiAgLyogT3BlcmEgKi9cbiAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5mb3JtUXVlc3Rpb24gLmZvcm1RdWVzdGlvbl9faXRlbSAuZm9ybVF1ZXN0aW9uX19pbnB1dCAuZm9ybVF1ZXN0aW9uX19jaGVja2JveEl0ZW0gLmZvcm1RdWVzdGlvbl9fY2hlY2tib3gtbGFibGUge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbi5mb3JtUXVlc3Rpb24gLmZvcm1RdWVzdGlvbl9faXRlbSAuZm9ybVF1ZXN0aW9uX190ZXh0YXJlYSB7XG4gIGhlaWdodDogMjAwcHg7XG59XG4uZm9ybVF1ZXN0aW9uIC5mb3JtUXVlc3Rpb25fX2l0ZW0gLmZvcm1RdWVzdGlvbl9faGludCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0MHB4O1xuICBsZWZ0OiAxMDBweDtcbn1cbi5mb3JtUXVlc3Rpb24gLmZvcm1RdWVzdGlvbl9fYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/system/home/home-filter/home-filter.component.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/system/home/home-filter/home-filter.component.ts ***!
          \******************************************************************/
        /*! exports provided: HomeFilterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeFilterComponent", function () { return HomeFilterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var HomeFilterComponent = /** @class */ (function () {
                function HomeFilterComponent() {
                    this.onFilterCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.onFilterApply = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.filterParams = [];
                }
                HomeFilterComponent.prototype.ngOnInit = function () {
                    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        'tags': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                            'tag1': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](true),
                            'tag2': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](true),
                            'noTags': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](true),
                        }),
                        'status': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                            'resolve': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](true),
                            'notResolve': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](true),
                        }),
                        'dateFrom': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0),
                        'dateTo': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((new Date(+new Date() + 99999999))),
                    });
                    console.log('HomeFilterComponent ngOnInit ', this.filterParams);
                    this.form.patchValue({
                        'tags': {
                            'tag1': !!(this.filterParams.tags.indexOf('tag1') + 1),
                            'tag2': !!(this.filterParams.tags.indexOf('tag2') + 1),
                            'noTags': !!(this.filterParams.tags.indexOf('noTags') + 1),
                        },
                        'status': {
                            'resolve': !!(this.filterParams.status.indexOf('resolve') + 1),
                            'notResolve': !!(this.filterParams.status.indexOf('notResolve') + 1),
                        },
                        'dateFrom': this.filterParams.dateFrom,
                        'dateTo': this.filterParams.dateTo,
                    });
                    console.log('form.value', this.form.value);
                };
                HomeFilterComponent.prototype.closeFilter = function () {
                    this.onFilterCancel.emit();
                };
                HomeFilterComponent.prototype.onSubmit = function () {
                    var filterParams = {
                        tags: [],
                        status: [],
                        dateFrom: '',
                        dateTo: '',
                    };
                    console.log('HomeFilterComponent onSubmit this.form.value', this.form.value);
                    for (var key in this.form.value.tags) {
                        if (this.form.value.tags[key] === true) {
                            filterParams.tags.push(key);
                        }
                    }
                    for (var key in this.form.value.status) {
                        if (this.form.value.status[key] === true) {
                            filterParams.status.push(key);
                        }
                    }
                    filterParams.dateFrom = this.form.value.dateFrom;
                    filterParams.dateTo = this.form.value.dateTo;
                    console.log('HomeFilterComponent onSubmit filterParams=', filterParams);
                    this.onFilterApply.emit(filterParams);
                };
                return HomeFilterComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], HomeFilterComponent.prototype, "onFilterCancel", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], HomeFilterComponent.prototype, "onFilterApply", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], HomeFilterComponent.prototype, "filterParams", void 0);
            HomeFilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'soq-home-filter',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-filter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/system/home/home-filter/home-filter.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-filter.component.scss */ "./src/app/system/home/home-filter/home-filter.component.scss")).default]
                })
            ], HomeFilterComponent);
            /***/ 
        }),
        /***/ "./src/app/system/home/home.component.scss": 
        /*!*************************************************!*\
          !*** ./src/app/system/home/home.component.scss ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".modal.fade.in {\n  display: block;\n}\n\n.header {\n  border: 2px solid darkslategrey;\n  border-radius: 5px;\n  padding: 10px 10px;\n}\n\n.header .header__row {\n  display: flex;\n  justify-content: space-between;\n}\n\n.header .dropdown-item:active {\n  background-color: inherit;\n  color: inherit;\n}\n\n.header-dark {\n  border-color: #9ba8b5;\n}\n\n.header-dark .btn {\n  color: #9ba8b5;\n}\n\n.header-dark .dropdown-menu {\n  color: #9ba8b5;\n  background-color: #000;\n  border-color: #9ba8b5;\n}\n\n.header-dark .dropdown-item {\n  color: #9ba8b5;\n  background-color: #000;\n  border-color: #9ba8b5;\n}\n\n.header-dark .dropdown-item.active, .header-dark .dropdown-item:active {\n  background-color: inherit;\n  color: inherit;\n}\n\n.questions {\n  width: 100%;\n}\n\n.questions .container {\n  padding: 10px 0;\n  width: 100%;\n}\n\n.questions .questions__list {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.questions .questions__list .questions__item {\n  margin: 0 5px;\n}\n\n.questions .questions__list-line .questions__item {\n  margin: 0;\n  width: 100%;\n}\n\n.question {\n  border: 2px darkslategrey solid;\n  border-radius: 5px;\n  padding: 5px;\n  margin-bottom: 10px;\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n  transition: background-color 0.2s ease, color 0.2s ease;\n}\n\n.question .question__title {\n  width: 100%;\n  padding: 10px 0;\n  border-bottom: 2px darkslategrey solid;\n  text-align: center;\n}\n\n.question .question__info {\n  width: 100%;\n  padding: 10px 0;\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 2px darkslategrey solid;\n}\n\n.question .question__info .question__tags .question__tag {\n  padding: 0 5px;\n  border-right: 2px darkslategrey solid;\n}\n\n.question .question__info .question__tags .question__tag:last-child {\n  border-right: none;\n  padding-right: 0;\n}\n\n.question .question__info .question__status {\n  line-height: 2;\n}\n\n.question .question__control {\n  padding: 10px 0;\n}\n\n.question:hover {\n  background-color: #6c757d;\n  color: #FFF;\n}\n\n.question:hover .question__tags .question__tag {\n  border-right: 2px #FFF solid;\n}\n\n.question:hover .btn {\n  color: #FFF;\n  border-color: #FFF;\n}\n\n.question-line {\n  width: 100%;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-end;\n}\n\n@media (max-width: 768px) {\n  .question-line {\n    flex-wrap: wrap;\n  }\n}\n\n.question-line .question__title {\n  padding-left: 10px;\n  border-bottom: none;\n  text-align: left;\n}\n\n.question-line .question__info {\n  width: -webkit-min-content;\n  width: -moz-min-content;\n  width: min-content;\n  padding-left: 10px;\n  border-bottom: none;\n  justify-content: flex-end;\n}\n\n.question-line .question__tags {\n  padding-left: 10px;\n}\n\n.question-line .question__control {\n  padding-left: 10px;\n}\n\n.question-dark {\n  border-color: #9ba8b5;\n  color: #9ba8b5;\n}\n\n.question-dark .btn {\n  color: #9ba8b5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvRTpcXE15U2VsZlxcUHJvamVjdHNcXHN0YWNrLW9mLXF1ZXRpb25zXFxzdGFjay1vZi1xdWV0aW9uc1xcc3JjXFxhcHBcXHN5c3RlbS9ob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwiaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGOztBRENBO0VBQ0UsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEREU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUNHSjs7QURERTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQ0dKOztBRENBO0VBQ0UscUJBQUE7QUNFRjs7QURERTtFQUNFLGNBQUE7QUNHSjs7QURERTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FDR0o7O0FEQUU7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQ0VKOztBRENFO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FER0E7RUFFRSxXQUFBO0FDREY7O0FERUU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREVFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQ0FKOztBRENJO0VBQ0UsYUFBQTtBQ0NOOztBRElJO0VBQ0UsU0FBQTtFQUNBLFdBQUE7QUNGTjs7QURPQTtFQUNFLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx1REFBQTtBQ0pGOztBRE1FO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxzQ0FBQTtFQUNBLGtCQUFBO0FDSko7O0FETUU7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHNDQUFBO0FDSko7O0FEU007RUFDRSxjQUFBO0VBQ0EscUNBQUE7QUNQUjs7QURTTTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUNQUjs7QURVSTtFQUNFLGNBQUE7QUNSTjs7QURXRTtFQUNFLGVBQUE7QUNUSjs7QURjQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQ1hGOztBRGFJO0VBQ0UsNEJBQUE7QUNYTjs7QURjRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ1pKOztBRGVBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ1pGOztBRGFFO0VBTEY7SUFNSSxlQUFBO0VDVkY7QUFDRjs7QURXRTtFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ1ZKOztBRFlFO0VBQ0UsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDVko7O0FEWUU7RUFDRSxrQkFBQTtBQ1ZKOztBRFlFO0VBQ0Usa0JBQUE7QUNWSjs7QURhQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQ1ZGOztBRFdFO0VBQ0UsY0FBQTtBQ1RKIiwiZmlsZSI6ImhvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC5mYWRlLmluIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uaGVhZGVye1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGRhcmtzbGF0ZWdyZXk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAuaGVhZGVyX19yb3d7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuICAuZHJvcGRvd24taXRlbTphY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgfVxyXG5cclxufVxyXG4uaGVhZGVyLWRhcmt7XHJcbiAgYm9yZGVyLWNvbG9yOiAjOWJhOGI1O1xyXG4gIC5idG57XHJcbiAgICBjb2xvcjogIzliYThiNTtcclxuICB9XHJcbiAgLmRyb3Bkb3duLW1lbnV7XHJcbiAgICBjb2xvcjogIzliYThiNTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICBib3JkZXItY29sb3I6ICM5YmE4YjU7XHJcblxyXG4gIH1cclxuICAuZHJvcGRvd24taXRlbXtcclxuICAgIGNvbG9yOiAjOWJhOGI1O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgIGJvcmRlci1jb2xvcjogIzliYThiNTtcclxuXHJcbiAgfVxyXG4gIC5kcm9wZG93bi1pdGVtLmFjdGl2ZSwgLmRyb3Bkb3duLWl0ZW06YWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gIH1cclxuXHJcbn1cclxuLnF1ZXN0aW9ucyB7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5xdWVzdGlvbnNfX2xpc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLnF1ZXN0aW9uc19faXRlbXtcclxuICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgIH1cclxuICB9XHJcbiAgLnF1ZXN0aW9uc19fbGlzdC1saW5lIHtcclxuXHJcbiAgICAucXVlc3Rpb25zX19pdGVte1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnF1ZXN0aW9ue1xyXG4gIGJvcmRlcjogMnB4IGRhcmtzbGF0ZWdyZXkgc29saWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgIDAuMnMgZWFzZSwgY29sb3IgIDAuMnMgZWFzZTtcclxuXHJcbiAgLnF1ZXN0aW9uX190aXRsZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IGRhcmtzbGF0ZWdyZXkgc29saWQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5xdWVzdGlvbl9faW5mb3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBkYXJrc2xhdGVncmV5IHNvbGlkO1xyXG4gICAgLnF1ZXN0aW9uX19kYXRle1xyXG5cclxuICAgIH1cclxuICAgIC5xdWVzdGlvbl9fdGFnc3tcclxuICAgICAgLnF1ZXN0aW9uX190YWd7XHJcbiAgICAgICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggZGFya3NsYXRlZ3JleSBzb2xpZDtcclxuICAgICAgfVxyXG4gICAgICAucXVlc3Rpb25fX3RhZzpsYXN0LWNoaWxke1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAucXVlc3Rpb25fX3N0YXR1c3tcclxuICAgICAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5xdWVzdGlvbl9fY29udHJvbHtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICB9XHJcblxyXG59XHJcblxyXG4ucXVlc3Rpb246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2Yzc1N2Q7XHJcbiAgY29sb3I6ICNGRkY7XHJcbiAgLnF1ZXN0aW9uX190YWdze1xyXG4gICAgLnF1ZXN0aW9uX190YWd7XHJcbiAgICAgIGJvcmRlci1yaWdodDogMnB4ICNGRkYgc29saWQ7XHJcbiAgICB9XHJcbiAgfTtcclxuICAuYnRue1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBib3JkZXItY29sb3I6ICNGRkY7XHJcbiAgfVxyXG59XHJcbi5xdWVzdGlvbi1saW5le1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICB9XHJcbiAgLnF1ZXN0aW9uX190aXRsZXtcclxuICAgIC8vbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICAucXVlc3Rpb25fX2luZm97XHJcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB9XHJcbiAgLnF1ZXN0aW9uX190YWdze1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICAucXVlc3Rpb25fX2NvbnRyb2x7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG59XHJcbi5xdWVzdGlvbi1kYXJrIHtcclxuICBib3JkZXItY29sb3I6ICM5YmE4YjU7XHJcbiAgY29sb3I6ICM5YmE4YjU7XHJcbiAgLmJ0biB7XHJcbiAgICBjb2xvcjogIzliYThiNTtcclxuICB9XHJcbn1cclxuIiwiLm1vZGFsLmZhZGUuaW4ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmhlYWRlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGRhcmtzbGF0ZWdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xufVxuLmhlYWRlciAuaGVhZGVyX19yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uaGVhZGVyIC5kcm9wZG93bi1pdGVtOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG4uaGVhZGVyLWRhcmsge1xuICBib3JkZXItY29sb3I6ICM5YmE4YjU7XG59XG4uaGVhZGVyLWRhcmsgLmJ0biB7XG4gIGNvbG9yOiAjOWJhOGI1O1xufVxuLmhlYWRlci1kYXJrIC5kcm9wZG93bi1tZW51IHtcbiAgY29sb3I6ICM5YmE4YjU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIGJvcmRlci1jb2xvcjogIzliYThiNTtcbn1cbi5oZWFkZXItZGFyayAuZHJvcGRvd24taXRlbSB7XG4gIGNvbG9yOiAjOWJhOGI1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBib3JkZXItY29sb3I6ICM5YmE4YjU7XG59XG4uaGVhZGVyLWRhcmsgLmRyb3Bkb3duLWl0ZW0uYWN0aXZlLCAuaGVhZGVyLWRhcmsgLmRyb3Bkb3duLWl0ZW06YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5xdWVzdGlvbnMge1xuICB3aWR0aDogMTAwJTtcbn1cbi5xdWVzdGlvbnMgLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucXVlc3Rpb25zIC5xdWVzdGlvbnNfX2xpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnF1ZXN0aW9ucyAucXVlc3Rpb25zX19saXN0IC5xdWVzdGlvbnNfX2l0ZW0ge1xuICBtYXJnaW46IDAgNXB4O1xufVxuLnF1ZXN0aW9ucyAucXVlc3Rpb25zX19saXN0LWxpbmUgLnF1ZXN0aW9uc19faXRlbSB7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5xdWVzdGlvbiB7XG4gIGJvcmRlcjogMnB4IGRhcmtzbGF0ZWdyZXkgc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZSwgY29sb3IgMC4ycyBlYXNlO1xufVxuLnF1ZXN0aW9uIC5xdWVzdGlvbl9fdGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweCAwO1xuICBib3JkZXItYm90dG9tOiAycHggZGFya3NsYXRlZ3JleSBzb2xpZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnF1ZXN0aW9uIC5xdWVzdGlvbl9faW5mbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhcmtzbGF0ZWdyZXkgc29saWQ7XG59XG4ucXVlc3Rpb24gLnF1ZXN0aW9uX19pbmZvIC5xdWVzdGlvbl9fdGFncyAucXVlc3Rpb25fX3RhZyB7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBib3JkZXItcmlnaHQ6IDJweCBkYXJrc2xhdGVncmV5IHNvbGlkO1xufVxuLnF1ZXN0aW9uIC5xdWVzdGlvbl9faW5mbyAucXVlc3Rpb25fX3RhZ3MgLnF1ZXN0aW9uX190YWc6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cbi5xdWVzdGlvbiAucXVlc3Rpb25fX2luZm8gLnF1ZXN0aW9uX19zdGF0dXMge1xuICBsaW5lLWhlaWdodDogMjtcbn1cbi5xdWVzdGlvbiAucXVlc3Rpb25fX2NvbnRyb2wge1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG5cbi5xdWVzdGlvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2Yzc1N2Q7XG4gIGNvbG9yOiAjRkZGO1xufVxuLnF1ZXN0aW9uOmhvdmVyIC5xdWVzdGlvbl9fdGFncyAucXVlc3Rpb25fX3RhZyB7XG4gIGJvcmRlci1yaWdodDogMnB4ICNGRkYgc29saWQ7XG59XG4ucXVlc3Rpb246aG92ZXIgLmJ0biB7XG4gIGNvbG9yOiAjRkZGO1xuICBib3JkZXItY29sb3I6ICNGRkY7XG59XG5cbi5xdWVzdGlvbi1saW5lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5xdWVzdGlvbi1saW5lIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbn1cbi5xdWVzdGlvbi1saW5lIC5xdWVzdGlvbl9fdGl0bGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ucXVlc3Rpb24tbGluZSAucXVlc3Rpb25fX2luZm8ge1xuICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5xdWVzdGlvbi1saW5lIC5xdWVzdGlvbl9fdGFncyB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5xdWVzdGlvbi1saW5lIC5xdWVzdGlvbl9fY29udHJvbCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLnF1ZXN0aW9uLWRhcmsge1xuICBib3JkZXItY29sb3I6ICM5YmE4YjU7XG4gIGNvbG9yOiAjOWJhOGI1O1xufVxuLnF1ZXN0aW9uLWRhcmsgLmJ0biB7XG4gIGNvbG9yOiAjOWJhOGI1O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/system/home/home.component.ts": 
        /*!***********************************************!*\
          !*** ./src/app/system/home/home.component.ts ***!
          \***********************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shared_services_question_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/question.service */ "./src/app/system/shared/services/question.service.ts");
            /* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent(questionService, authService) {
                    this.questionService = questionService;
                    this.authService = authService;
                    this.onFilterOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.isListLine = false;
                    this.isLoaded = false;
                    this.isFilterOpen = false;
                    this.isAscending = false;
                    this.filterParams = {
                        dateFrom: 0,
                        dateTo: new Date(+new Date() + 99999999),
                        status: ['resolve', 'notResolve'],
                        tags: ['tag1', 'tag2', 'noTags'],
                    };
                }
                HomeComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.userData = this.authService.userData;
                    console.log('HomeComponent ngOnInit this.userData=', this.authService.userData);
                    this.questionService.getAllQuestions()
                        .subscribe(function (questions) {
                        console.log('HomeComponent ngOnInit questions', questions);
                        _this.questions = questions;
                        _this.onFilterApply(_this.filterParams);
                        _this.isLoaded = true;
                    });
                    if (this.userData.status === 'admin') {
                        this.filterParams.status.push('notApproved');
                    }
                };
                HomeComponent.prototype.openFilter = function () {
                    this.isFilterOpen = true;
                };
                HomeComponent.prototype.onFilterCancel = function () {
                    this.isFilterOpen = false;
                };
                HomeComponent.prototype.onFilterApply = function (filterParams) {
                    console.log('this.filterParams', filterParams);
                    console.log('this.questions', this.questions);
                    this.filterParams = filterParams;
                    var dateFrom;
                    if (!filterParams.dateFrom) {
                        console.log('this.filterParams.dateFrom', this.filterParams.dateFrom);
                        dateFrom = 0;
                    }
                    else {
                        dateFrom = +new Date(filterParams.dateFrom);
                    }
                    var dateTo;
                    if (!filterParams.dateTo) {
                        console.log('this.filterParams.dateTo', this.filterParams.dateTo);
                        dateTo = new Date(+new Date() + 99999999);
                    }
                    else {
                        dateTo = +new Date(filterParams.dateTo) + 86400000;
                    }
                    var status = filterParams.status;
                    var tags = filterParams.tags;
                    this.filteredQuestion = this.questions.filter(function (question) {
                        if (status.indexOf(question.status) + 1) {
                            console.log('this.filterParams status');
                            if (+new Date(question.date) >= dateFrom && +new Date(question.date) <= dateTo) {
                                console.log('this.filterParams date');
                                if (!question.tags) {
                                    console.log('this.filterParams noTags', question.tags.indexOf('noTags') + 1);
                                    return tags.indexOf('noTags') + 1;
                                }
                                return tags.some(function (tag) {
                                    console.log('this.filterParams Tags', question.tags.indexOf(tag) + 1);
                                    return question.tags.indexOf(tag) + 1;
                                });
                            }
                        }
                    });
                    console.log('this.filteredQuestion', this.filteredQuestion);
                    this.onFilterCancel();
                };
                HomeComponent.prototype.sortByData = function () {
                    console.log('onOortByDate this.isAscending=', this.isAscending);
                    this.isAscending = !this.isAscending;
                    console.log('onOortByDate this.isAscending', this.isAscending);
                };
                HomeComponent.prototype.deleteQuestion = function (event, key) {
                    console.log('key', key);
                    event.stopPropagation();
                    this.questionService.deleteQuestion(key);
                };
                HomeComponent.prototype.approveQuestion = function (event, key) {
                    console.log('key', key);
                    event.stopPropagation();
                    this.questionService.updateQuestionParam(key, 'status', 'notResolve');
                };
                HomeComponent.prototype.onListStyleLine = function () {
                    this.isListLine = true;
                };
                HomeComponent.prototype.onListStyleSquare = function () {
                    this.isListLine = false;
                };
                return HomeComponent;
            }());
            HomeComponent.ctorParameters = function () { return [
                { type: _shared_services_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"] },
                { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], HomeComponent.prototype, "onFilterOpen", void 0);
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'soq-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/system/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/system/home/home.component.scss")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/system/profile/profile.component.scss": 
        /*!*******************************************************!*\
          !*** ./src/app/system/profile/profile.component.scss ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".profile {\n  border: 2px darkslategrey solid;\n  border-radius: 5px;\n  padding: 15px;\n}\n.profile .profile_row {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUvRTpcXE15U2VsZlxcUHJvamVjdHNcXHN0YWNrLW9mLXF1ZXRpb25zXFxzdGFjay1vZi1xdWV0aW9uc1xcc3JjXFxhcHBcXHN5c3RlbS9wcm9maWxlXFxwcm9maWxlLmNvbXBvbmVudC5zY3NzIiwicHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNDRjtBREFFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNFSiIsImZpbGUiOiJwcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZXtcclxuICBib3JkZXI6IDJweCBkYXJrc2xhdGVncmV5IHNvbGlkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIC5wcm9maWxlX3Jvd3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5wcm9maWxlX19uYW1le1xyXG5cclxuICB9XHJcbiAgLnByb2ZpbGVfX3N0YXR1c3tcclxuXHJcbiAgfVxyXG59XHJcbiIsIi5wcm9maWxlIHtcbiAgYm9yZGVyOiAycHggZGFya3NsYXRlZ3JleSBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxNXB4O1xufVxuLnByb2ZpbGUgLnByb2ZpbGVfcm93IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/system/profile/profile.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/system/profile/profile.component.ts ***!
          \*****************************************************/
        /*! exports provided: ProfileComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () { return ProfileComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
            var ProfileComponent = /** @class */ (function () {
                function ProfileComponent(authService) {
                    this.authService = authService;
                }
                ProfileComponent.prototype.ngOnInit = function () {
                    this.userData = this.authService.userData;
                };
                return ProfileComponent;
            }());
            ProfileComponent.ctorParameters = function () { return [
                { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
            ]; };
            ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'soq-profile',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/system/profile/profile.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.scss */ "./src/app/system/profile/profile.component.scss")).default]
                })
            ], ProfileComponent);
            /***/ 
        }),
        /***/ "./src/app/system/question/question.component.scss": 
        /*!*********************************************************!*\
          !*** ./src/app/system/question/question.component.scss ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".question {\n  border: 2px darkslategrey solid;\n  border-radius: 5px;\n  padding: 15px;\n  margin-bottom: 20px;\n}\n.question .question_row {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n}\n.question .question__title {\n  padding: 10px 0;\n  border-bottom: 2px darkslategrey solid;\n  text-align: center;\n  margin-bottom: 20px;\n}\n.question .question__tags .question__tag {\n  padding: 0 5px;\n  border-right: 2px darkslategrey solid;\n}\n.question .question__tags .question__tag:last-child {\n  border-right: none;\n  padding-right: 0;\n}\n.question .question__control {\n  padding: 10px 0;\n}\n.commentForm {\n  border: 2px darkslategrey solid;\n  border-radius: 5px;\n  padding: 15px;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n}\n.commentForm .formQuestion__button {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n}\n.comments {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  border: 2px darkslategrey solid;\n  border-radius: 5px;\n  padding: 15px;\n}\n.comment {\n  display: flex;\n  width: 100%;\n  border: 2px darkslategrey solid;\n  border-radius: 5px;\n  padding: 15px;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.comment .comment__user {\n  display: block;\n  margin-right: 20px;\n}\n.comment .comment__text {\n  width: 100%;\n  text-align: left;\n}\n.comment .comment__info {\n  width: 240px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.comment .comment__checkbox {\n  /* IE */\n  /* FF */\n  /* Safari and Chrome */\n  /* Opera */\n  transform: scale(2);\n  padding: 10px;\n}\n.comment .comment__checkbox-lable {\n  display: inline;\n  padding-left: 15px;\n}\n.comment:last-child {\n  margin-bottom: 0;\n}\n@media (max-width: 768px) {\n  .comment {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXN0aW9uL0U6XFxNeVNlbGZcXFByb2plY3RzXFxzdGFjay1vZi1xdWV0aW9uc1xcc3RhY2stb2YtcXVldGlvbnNcXHNyY1xcYXBwXFxzeXN0ZW0vcXVlc3Rpb25cXHF1ZXN0aW9uLmNvbXBvbmVudC5zY3NzIiwicXVlc3Rpb24vcXVlc3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURBRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtBQ0VKO0FEQUU7RUFFRSxlQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURFSTtFQUNFLGNBQUE7RUFDQSxxQ0FBQTtBQ0FOO0FERUk7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDQU47QURHRTtFQUNFLGVBQUE7QUNESjtBRElBO0VBQ0UsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ0RGO0FERUU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FDQUo7QURJQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0RGO0FER0E7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0FGO0FERUU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREVFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDQUo7QURFRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ0FKO0FERUU7RUFDMkIsT0FBQTtFQUNDLE9BQUE7RUFDRyxzQkFBQTtFQUNMLFVBQUE7RUFDeEIsbUJBQUE7RUFDQSxhQUFBO0FDSUo7QURGRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ0lKO0FERkU7RUFDRSxnQkFBQTtBQ0lKO0FEQ0E7RUFDRTtJQUNFLHNCQUFBO0VDRUY7QUFDRiIsImZpbGUiOiJxdWVzdGlvbi9xdWVzdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xdWVzdGlvbntcclxuICBib3JkZXI6IDJweCBkYXJrc2xhdGVncmV5IHNvbGlkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgLnF1ZXN0aW9uX3Jvd3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICB9XHJcbiAgLnF1ZXN0aW9uX190aXRsZXtcclxuICAgIC8vd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggZGFya3NsYXRlZ3JleSBzb2xpZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIC5xdWVzdGlvbl9fdGFnc3tcclxuICAgIC5xdWVzdGlvbl9fdGFne1xyXG4gICAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAycHggZGFya3NsYXRlZ3JleSBzb2xpZDtcclxuICAgIH1cclxuICAgIC5xdWVzdGlvbl9fdGFnOmxhc3QtY2hpbGR7XHJcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIH1cclxuICB9XHJcbiAgLnF1ZXN0aW9uX19jb250cm9se1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gIH1cclxufVxyXG4uY29tbWVudEZvcm17XHJcbiAgYm9yZGVyOiAycHggZGFya3NsYXRlZ3JleSBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAuZm9ybVF1ZXN0aW9uX19idXR0b257XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIH1cclxuXHJcbn1cclxuLmNvbW1lbnRzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAycHggZGFya3NsYXRlZ3JleSBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG4uY29tbWVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDJweCBkYXJrc2xhdGVncmV5IHNvbGlkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAuY29tbWVudF9fdXNlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICB9XHJcbiAgLmNvbW1lbnRfX3RleHQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICAuY29tbWVudF9faW5mbyB7XHJcbiAgICB3aWR0aDogMjQwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIH1cclxuICAuY29tbWVudF9fY2hlY2tib3h7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgyKTsgLyogSUUgKi9cclxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgyKTsgLyogRkYgKi9cclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgyKTsgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cclxuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMik7IC8qIE9wZXJhICovXHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgLmNvbW1lbnRfX2NoZWNrYm94LWxhYmxle1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIH1cclxuICAmOmxhc3QtY2hpbGR7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuXHJcblxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5jb21tZW50IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIiwiLnF1ZXN0aW9uIHtcbiAgYm9yZGVyOiAycHggZGFya3NsYXRlZ3JleSBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnF1ZXN0aW9uIC5xdWVzdGlvbl9yb3cge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59XG4ucXVlc3Rpb24gLnF1ZXN0aW9uX190aXRsZSB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhcmtzbGF0ZWdyZXkgc29saWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5xdWVzdGlvbiAucXVlc3Rpb25fX3RhZ3MgLnF1ZXN0aW9uX190YWcge1xuICBwYWRkaW5nOiAwIDVweDtcbiAgYm9yZGVyLXJpZ2h0OiAycHggZGFya3NsYXRlZ3JleSBzb2xpZDtcbn1cbi5xdWVzdGlvbiAucXVlc3Rpb25fX3RhZ3MgLnF1ZXN0aW9uX190YWc6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cbi5xdWVzdGlvbiAucXVlc3Rpb25fX2NvbnRyb2wge1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG5cbi5jb21tZW50Rm9ybSB7XG4gIGJvcmRlcjogMnB4IGRhcmtzbGF0ZWdyZXkgc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5jb21tZW50Rm9ybSAuZm9ybVF1ZXN0aW9uX19idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmNvbW1lbnRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMnB4IGRhcmtzbGF0ZWdyZXkgc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLmNvbW1lbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAycHggZGFya3NsYXRlZ3JleSBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uY29tbWVudCAuY29tbWVudF9fdXNlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4uY29tbWVudCAuY29tbWVudF9fdGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmNvbW1lbnQgLmNvbW1lbnRfX2luZm8ge1xuICB3aWR0aDogMjQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLmNvbW1lbnQgLmNvbW1lbnRfX2NoZWNrYm94IHtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMik7XG4gIC8qIElFICovXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgyKTtcbiAgLyogRkYgKi9cbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDIpO1xuICAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDIpO1xuICAvKiBPcGVyYSAqL1xuICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmNvbW1lbnQgLmNvbW1lbnRfX2NoZWNrYm94LWxhYmxlIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG4uY29tbWVudDpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb21tZW50IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/system/question/question.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/system/question/question.component.ts ***!
          \*******************************************************/
        /*! exports provided: QuestionComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionComponent", function () { return QuestionComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _shared_services_question_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/question.service */ "./src/app/system/shared/services/question.service.ts");
            /* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
            /* harmony import */ var _shared_models_commentNew_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/models/commentNew.model */ "./src/app/system/shared/models/commentNew.model.ts");
            /* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
            var QuestionComponent = /** @class */ (function () {
                function QuestionComponent(route, questionService, userService, router, authService) {
                    this.route = route;
                    this.questionService = questionService;
                    this.userService = userService;
                    this.router = router;
                    this.authService = authService;
                    this.isLoaded = false;
                    this.rules = {
                        delete: false,
                        edit: false,
                        resolveComment: false,
                    };
                }
                QuestionComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.userData = this.authService.userData;
                    this.questionId = this.route.snapshot.fragment;
                    this.questionService.getQuestionById(this.questionId)
                        .subscribe(function (question) {
                        _this.question = question;
                        _this.checkRules();
                        _this.userService.getUserDataByKey(question.author)
                            .subscribe(function (userData) {
                            _this.questionAuthor = userData.name;
                            _this.checkRules();
                        });
                        console.log('QuestionComponent OnInit question=', _this.question);
                    });
                    this.questionService.getComments(this.questionId)
                        .subscribe(function (comments) {
                        _this.comments = comments;
                        console.log('comments=', _this.comments);
                        _this.isLoaded = true;
                    });
                };
                QuestionComponent.prototype.addComment = function (form) {
                    console.log('QuestionComponent addComment form', form);
                    this.newComment = new _shared_models_commentNew_model__WEBPACK_IMPORTED_MODULE_5__["CommentNew"](form.value.text, this.userData.id, this.userData.name, 'notResolve', ((new Date()) + ''));
                    console.log('QuestionComponent addComment this.newComment', this.newComment);
                    this.questionService.addComment(this.questionId, this.newComment).then(function (r) { return console.log('addeded comment'); });
                    this.textNewComment = '';
                };
                QuestionComponent.prototype.checkRules = function () {
                    if (this.userData.status === 'admin') {
                        this.rules.delete = true;
                    }
                    if (this.question.author === this.userData.id) {
                        this.rules.resolveComment = true;
                        this.rules.delete = true;
                        this.rules.edit = true;
                    }
                    console.log('QuestionComponent checkRules this.rules.edit=', this.rules);
                };
                QuestionComponent.prototype.onResolve = function (commentKey, value) {
                    var _this = this;
                    console.log('event', commentKey, value);
                    if (value === 'notResolve') {
                        this.questionService.changeCommentStatus(this.questionId, commentKey, 'resolve')
                            .then(function () { return _this.ToggleQuestionStatus(); });
                        console.log('change to approve');
                    }
                    if (value === 'resolve') {
                        this.questionService.changeCommentStatus(this.questionId, commentKey, 'notResolve')
                            .then(function () { return _this.ToggleQuestionStatus(); });
                        console.log('change to Not approve');
                    }
                };
                QuestionComponent.prototype.ToggleQuestionStatus = function () {
                    if (this.comments.find(function (comment) { return comment.status === 'resolve'; })) {
                        this.questionService.updateQuestionParam(this.questionId, 'status', 'resolve');
                    }
                    else {
                        this.questionService.updateQuestionParam(this.questionId, 'status', 'notResolve');
                    }
                };
                QuestionComponent.prototype.deleteQuestion = function () {
                    var _this = this;
                    this.questionService.deleteQuestion(this.questionId)
                        .then(function () { return _this.router.navigate(['/system/home']); });
                };
                return QuestionComponent;
            }());
            QuestionComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _shared_services_question_service__WEBPACK_IMPORTED_MODULE_3__["QuestionService"] },
                { type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
            ]; };
            QuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'soq-question',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./question.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/system/question/question.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./question.component.scss */ "./src/app/system/question/question.component.scss")).default]
                })
            ], QuestionComponent);
            /***/ 
        }),
        /***/ "./src/app/system/shared/models/commentNew.model.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/system/shared/models/commentNew.model.ts ***!
          \**********************************************************/
        /*! exports provided: CommentNew */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentNew", function () { return CommentNew; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var CommentNew = /** @class */ (function () {
                function CommentNew(text, authorID, author, status, date) {
                    this.text = text;
                    this.authorID = authorID;
                    this.author = author;
                    this.status = status;
                    this.date = date;
                }
                return CommentNew;
            }());
            /***/ 
        }),
        /***/ "./src/app/system/shared/models/questionNew.model.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/system/shared/models/questionNew.model.ts ***!
          \***********************************************************/
        /*! exports provided: QuestionNew */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionNew", function () { return QuestionNew; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var QuestionNew = /** @class */ (function () {
                function QuestionNew(author, date, status, tags, text, title) {
                    this.author = author;
                    this.date = date;
                    this.status = status;
                    this.tags = tags;
                    this.text = text;
                    this.title = title;
                }
                return QuestionNew;
            }());
            /***/ 
        }),
        /***/ "./src/app/system/shared/pipes/filter-by-date.pipe.ts": 
        /*!************************************************************!*\
          !*** ./src/app/system/shared/pipes/filter-by-date.pipe.ts ***!
          \************************************************************/
        /*! exports provided: FilterByDatePipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterByDatePipe", function () { return FilterByDatePipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FilterByDatePipe = /** @class */ (function () {
                function FilterByDatePipe() {
                }
                FilterByDatePipe.prototype.transform = function (value, isAscending) {
                    if (isAscending === void 0) { isAscending = true; }
                    return value.sort(function (question1, question2) {
                        if (+new Date(question1.date) > +new Date(question2.date)) {
                            if (isAscending) {
                                return 1;
                            }
                            else {
                                return -1;
                            }
                        }
                        else {
                            if (isAscending) {
                                return -1;
                            }
                            else {
                                return 1;
                            }
                        }
                    });
                };
                return FilterByDatePipe;
            }());
            FilterByDatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
                    name: 'soqFilterByDate',
                })
            ], FilterByDatePipe);
            /***/ 
        }),
        /***/ "./src/app/system/shared/pipes/user-name.pipe.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/system/shared/pipes/user-name.pipe.ts ***!
          \*******************************************************/
        /*! exports provided: UserNamePipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserNamePipe", function () { return UserNamePipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var UserNamePipe = /** @class */ (function () {
                function UserNamePipe() {
                }
                UserNamePipe.prototype.transform = function (value) {
                    return value.slice(0, value.indexOf('@'));
                };
                return UserNamePipe;
            }());
            UserNamePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
                    name: 'soqUserName'
                })
            ], UserNamePipe);
            /***/ 
        }),
        /***/ "./src/app/system/shared/services/question.service.ts": 
        /*!************************************************************!*\
          !*** ./src/app/system/shared/services/question.service.ts ***!
          \************************************************************/
        /*! exports provided: QuestionService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionService", function () { return QuestionService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var QuestionService = /** @class */ (function () {
                function QuestionService(db) {
                    var _this = this;
                    this.db = db;
                    this.forbiddenTitle = function (control) {
                        return new Promise(function (resolve, reject) {
                            _this.db.list('questions', function (ref) { return ref.orderByChild('title').equalTo(control.value); }).valueChanges()
                                .subscribe(function (questions) {
                                console.log('forbiddenTitle questions=', questions);
                                if (questions.length) {
                                    console.log('novalid');
                                    resolve({ forbiddenTitle: true });
                                }
                                else {
                                    console.log('valid');
                                    resolve(null);
                                }
                                //have i to close this subscribtion?
                            });
                        });
                    };
                    this.itemRef = db.object('questions');
                    this.questions = db.list('questions');
                }
                QuestionService.prototype.addQuestion = function (question) {
                    var newPostRef = this.questions.push();
                    newPostRef.set(question);
                };
                QuestionService.prototype.updateQuestion = function (key, question) {
                    this.db.object('/questions/' + key).update(question);
                };
                QuestionService.prototype.updateQuestionParam = function (key, param, value) {
                    var obj = {};
                    obj[param] = value;
                    this.db.object('/questions/' + key).update(obj);
                };
                QuestionService.prototype.getAllQuestions = function () {
                    return this.questions.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
                        return changes.map(function (c) {
                            return Object.assign({}, c.payload.val(), { key: c.payload.key });
                        });
                    }));
                };
                QuestionService.prototype.getQuestionById = function (key) {
                    console.log('id=', key);
                    return this.db.object('/questions/' + key).valueChanges();
                };
                QuestionService.prototype.deleteQuestion = function (key) {
                    return this.db.object('/questions/' + key).remove();
                };
                QuestionService.prototype.addComment = function (key, comment) {
                    console.log('key', key);
                    return this.db.list('/comments/' + key).push(comment);
                };
                QuestionService.prototype.getComments = function (k) {
                    return this.db.list('comments/' + k).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
                        return changes.map(function (c) {
                            return Object.assign({}, c.payload.val(), { key: c.payload.key });
                        });
                    }));
                };
                QuestionService.prototype.changeCommentStatus = function (questionKey, commentKey, value) {
                    return this.db.object('/comments/' + questionKey + '/' + commentKey).update({ status: value });
                };
                return QuestionService;
            }());
            QuestionService.ctorParameters = function () { return [
                { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
            ]; };
            QuestionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], QuestionService);
            /***/ 
        }),
        /***/ "./src/app/system/system-routing.module.ts": 
        /*!*************************************************!*\
          !*** ./src/app/system/system-routing.module.ts ***!
          \*************************************************/
        /*! exports provided: SystemRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemRoutingModule", function () { return SystemRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _system_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./system.component */ "./src/app/system/system.component.ts");
            /* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth-guard */ "./node_modules/@angular/fire/auth-guard/es2015/index.js");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/system/home/home.component.ts");
            /* harmony import */ var _create_question_create_question_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-question/create-question.component */ "./src/app/system/create-question/create-question.component.ts");
            /* harmony import */ var _question_question_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./question/question.component */ "./src/app/system/question/question.component.ts");
            /* harmony import */ var _edding_question_edding_question_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edding-question/edding-question.component */ "./src/app/system/edding-question/edding-question.component.ts");
            /* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/system/profile/profile.component.ts");
            /* harmony import */ var _shared_services_auth_resolver_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/services/auth.resolver.service */ "./src/app/shared/services/auth.resolver.service.ts");
            var redirectUnauthorizedToLogin = function () { return Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_4__["redirectUnauthorizedTo"])(['login']); };
            var routes = [
                { path: 'system',
                    component: _system_component__WEBPACK_IMPORTED_MODULE_3__["SystemComponent"],
                    canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuthGuard"]],
                    data: { authGuardPipe: redirectUnauthorizedToLogin },
                    resolve: { userData: _shared_services_auth_resolver_service__WEBPACK_IMPORTED_MODULE_10__["AuthResovler"] },
                    children: [
                        { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
                        { path: 'createQuestion', component: _create_question_create_question_component__WEBPACK_IMPORTED_MODULE_6__["CreateQuestionComponent"] },
                        { path: 'question', component: _question_question_component__WEBPACK_IMPORTED_MODULE_7__["QuestionComponent"] },
                        { path: 'eddingQuestion', component: _edding_question_edding_question_component__WEBPACK_IMPORTED_MODULE_8__["EddingQuestionComponent"] },
                        { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"] },
                    ] },
            ];
            var SystemRoutingModule = /** @class */ (function () {
                function SystemRoutingModule() {
                }
                return SystemRoutingModule;
            }());
            SystemRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                    providers: [_shared_services_auth_resolver_service__WEBPACK_IMPORTED_MODULE_10__["AuthResovler"]],
                })
            ], SystemRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/system/system.component.scss": 
        /*!**********************************************!*\
          !*** ./src/app/system/system.component.scss ***!
          \**********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".system {\n  padding-top: 20px;\n}\n\n.globalButton {\n  position: fixed;\n  right: 50px;\n  bottom: 100px;\n}\n\n.circleButton {\n  position: relative;\n  top: 20px;\n  width: 50px;\n  height: 50px;\n  background-color: #1f7e9a;\n  border-radius: 50%;\n  text-align: center;\n  vertical-align: center;\n  font-size: 50px;\n  color: white;\n}\n\n.circleButton p {\n  position: absolute;\n  top: -18px;\n  left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxNeVNlbGZcXFByb2plY3RzXFxzdGFjay1vZi1xdWV0aW9uc1xcc3RhY2stb2YtcXVldGlvbnNcXHNyY1xcYXBwXFxzeXN0ZW0vc3lzdGVtLmNvbXBvbmVudC5zY3NzIiwic3lzdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUNDRjs7QURDQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0VGOztBREFBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDR0Y7O0FERkU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDSUoiLCJmaWxlIjoic3lzdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN5c3RlbSB7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuLmdsb2JhbEJ1dHRvbntcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDUwcHg7XHJcbiAgYm90dG9tOiAxMDBweDtcclxufVxyXG4uY2lyY2xlQnV0dG9ue1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDIwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZjdlOWE7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTE4cHg7XHJcbiAgICBsZWZ0OiA4cHg7XHJcbiAgfVxyXG59XHJcbiIsIi5zeXN0ZW0ge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLmdsb2JhbEJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDUwcHg7XG4gIGJvdHRvbTogMTAwcHg7XG59XG5cbi5jaXJjbGVCdXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmN2U5YTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNpcmNsZUJ1dHRvbiBwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xOHB4O1xuICBsZWZ0OiA4cHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/system/system.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/system/system.component.ts ***!
          \********************************************/
        /*! exports provided: SystemComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemComponent", function () { return SystemComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
            /* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var SystemComponent = /** @class */ (function () {
                function SystemComponent(authService, usersServise, title, router, activatedRoute) {
                    this.authService = authService;
                    this.usersServise = usersServise;
                    this.title = title;
                    this.router = router;
                    this.activatedRoute = activatedRoute;
                }
                SystemComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.activatedRoute.data
                        .subscribe(function (data) {
                        _this.authService.userData = data.userData;
                        console.log('SystemComponent ngOnInit this.userData=', _this.authService.userData);
                    });
                    this.router.navigate(['system/home']);
                };
                return SystemComponent;
            }());
            SystemComponent.ctorParameters = function () { return [
                { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
                { type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
            ]; };
            SystemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'soq-system',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./system.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/system/system.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./system.component.scss */ "./src/app/system/system.component.scss")).default]
                })
            ], SystemComponent);
            /***/ 
        }),
        /***/ "./src/app/system/system.module.ts": 
        /*!*****************************************!*\
          !*** ./src/app/system/system.module.ts ***!
          \*****************************************/
        /*! exports provided: SystemModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemModule", function () { return SystemModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _system_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./system-routing.module */ "./src/app/system/system-routing.module.ts");
            /* harmony import */ var _system_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./system.component */ "./src/app/system/system.component.ts");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/system/home/home.component.ts");
            /* harmony import */ var _create_question_create_question_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-question/create-question.component */ "./src/app/system/create-question/create-question.component.ts");
            /* harmony import */ var _question_question_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./question/question.component */ "./src/app/system/question/question.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _edding_question_edding_question_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edding-question/edding-question.component */ "./src/app/system/edding-question/edding-question.component.ts");
            /* harmony import */ var _home_home_filter_home_filter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home-filter/home-filter.component */ "./src/app/system/home/home-filter/home-filter.component.ts");
            /* harmony import */ var _shared_pipes_filter_by_date_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/pipes/filter-by-date.pipe */ "./src/app/system/shared/pipes/filter-by-date.pipe.ts");
            /* harmony import */ var _shared_pipes_user_name_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/pipes/user-name.pipe */ "./src/app/system/shared/pipes/user-name.pipe.ts");
            /* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/system/profile/profile.component.ts");
            /* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./header/header.component */ "./src/app/system/header/header.component.ts");
            var SystemModule = /** @class */ (function () {
                function SystemModule() {
                }
                return SystemModule;
            }());
            SystemModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _system_component__WEBPACK_IMPORTED_MODULE_4__["SystemComponent"],
                        _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                        _create_question_create_question_component__WEBPACK_IMPORTED_MODULE_6__["CreateQuestionComponent"],
                        _question_question_component__WEBPACK_IMPORTED_MODULE_7__["QuestionComponent"],
                        _edding_question_edding_question_component__WEBPACK_IMPORTED_MODULE_9__["EddingQuestionComponent"],
                        _home_home_filter_home_filter_component__WEBPACK_IMPORTED_MODULE_10__["HomeFilterComponent"],
                        _shared_pipes_filter_by_date_pipe__WEBPACK_IMPORTED_MODULE_11__["FilterByDatePipe"],
                        _shared_pipes_user_name_pipe__WEBPACK_IMPORTED_MODULE_12__["UserNamePipe"],
                        _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
                        _header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _system_routing_module__WEBPACK_IMPORTED_MODULE_3__["SystemRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    ]
                })
            ], SystemModule);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false,
                firebase: {
                    apiKey: "AIzaSyBJhkPugtHf4uvzOcFN7E5T0Phvk_YDRqM",
                    authDomain: "project1-686a7.firebaseapp.com",
                    databaseURL: "https://project1-686a7.firebaseio.com",
                    projectId: "project1-686a7",
                    storageBucket: "project1-686a7.appspot.com",
                    messagingSenderId: "1022162769394",
                    appId: "1:1022162769394:web:e0e3277dccfafc7bf0876b",
                    measurementId: "G-YVVL5W51XL"
                }
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! E:\MySelf\Projects\stack-of-quetions\stack-of-quetions\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map