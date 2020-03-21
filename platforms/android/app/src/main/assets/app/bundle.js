require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("~@nativescript/theme/css/blue.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/blue.css"));
global.registerModule("@nativescript/theme/css/blue.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/blue.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"import","import":"'~@nativescript/theme/css/core.css'"},{"type":"import","import":"'~@nativescript/theme/css/blue.css'"}],"parsingErrors":[]}};;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_app_app_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/app.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forRoot(_src_app_app_routes__WEBPACK_IMPORTED_MODULE_2__["routes"])],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./app/app.component.css":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page {\n    align-items: center;\n    flex-direction: column;\n  }");

/***/ }),

/***/ "./app/app.component.html":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <page-router-outlet></page-router-outlet>\n");

/***/ }),

/***/ "./app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__("./app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__("./app/app.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.module.tns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/nativescript.module.js");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/app.component.ts");
/* harmony import */ var _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/components/pages/home/home.component.ts");
/* harmony import */ var _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/components/pages/login/login.component.ts");
/* harmony import */ var _components_pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/components/pages/signup/signup.component.ts");
/* harmony import */ var _components_pages_payment_payment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/components/pages/payment/payment.component.ts");
/* harmony import */ var _components_products_list_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./app/components/products/list/list.component.ts");
/* harmony import */ var _shared_shared_module_tns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./app/shared/shared.module.tns.ts");
/* harmony import */ var _components_products_details_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./app/components/products/details/details.component.ts");
/* harmony import */ var _components_products_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./app/components/products/product-card/product-card.component.ts");
/* harmony import */ var _components_products_edit_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./app/components/products/edit/edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};













// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _components_pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"],
                _components_pages_payment_payment_component__WEBPACK_IMPORTED_MODULE_7__["PaymentComponent"],
                _components_products_list_list_component__WEBPACK_IMPORTED_MODULE_8__["ListComponent"],
                _components_products_details_details_component__WEBPACK_IMPORTED_MODULE_10__["DetailsComponent"],
                _components_products_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_11__["ProductCardComponent"],
                _components_products_edit_edit_component__WEBPACK_IMPORTED_MODULE_12__["EditComponent"],
            ],
            imports: [
                nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _shared_shared_module_tns__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/components/pages/home/home.component.ts");
/* harmony import */ var _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/components/pages/login/login.component.ts");
/* harmony import */ var _components_pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/components/pages/signup/signup.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"],
    },
    {
        path: 'home',
        component: _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"],
    },
    {
        path: 'signUp',
        component: _components_pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"],
    },
];


/***/ }),

/***/ "./app/components/pages/home/home.component.css":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Add mobile styles for the component here.  */\n");

/***/ }),

/***/ "./app/components/pages/home/home.component.html":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<StackLayout>\n    <AppList></AppList>\n</StackLayout>");

/***/ }),

/***/ "./app/components/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_ui_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/ui/page/page.js");
/* harmony import */ var tns_core_modules_ui_page_page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page_page__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(page) {
        this.page = page;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    HomeComponent.ctorParameters = function () { return [
        { type: tns_core_modules_ui_page_page__WEBPACK_IMPORTED_MODULE_1__["Page"] }
    ]; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __importDefault(__webpack_require__("./app/components/pages/home/home.component.html")).default,
            styles: [__importDefault(__webpack_require__("./app/components/pages/home/home.component.css")).default]
        }),
        __metadata("design:paramtypes", [tns_core_modules_ui_page_page__WEBPACK_IMPORTED_MODULE_1__["Page"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./app/components/pages/login/login.component.css":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form {\n  margin-left: 30;\n  margin-right: 30;\n  flex-grow: 2;\n  vertical-align: middle;\n}\n\n.logo {\n  margin-bottom: 12;\n  height: 90;\n  font-weight: bold;\n}\n.header {\n  horizontal-align: center;\n  font-size: 25;\n  font-weight: 600;\n  margin-bottom: 70;\n  text-align: center;\n  color: #d51a1a;\n}\n\n.input-field {\n  margin-bottom: 25;\n}\n\n.input {\n  font-size: 18;\n  placeholder-color: #a8a8a8;\n}\n\n.input:disabled {\n  background-color: white;\n  opacity: 0.5;\n}\n\n.btn-primary {\n  margin: 30 5 15 5;\n}\n\n.login-label {\n  horizontal-align: center;\n  color: #a8a8a8;\n  font-size: 16;\n}\n\n.bold {\n  color: #000000;\n}\n");

/***/ }),

/***/ "./app/components/pages/login/login.component.html":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<FlexboxLayout class=\"page\">\n    <StackLayout class=\"form\">\n        <Image class=\"logo\" src=\"https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/21_Angular_logo_logos-512.png\"></Image>\n        <Label class=\"header\" text=\"Medical app\"></Label>\n\n        <PreviousNextView>\n            <GridLayout rows=\"auto, auto, auto\">\n                <StackLayout row=\"0\" class=\"input-field\">\n                    <TextField class=\"input\" hint=\"Email\" [isEnabled]=\"!processing\"\n                        keyboardType=\"email\" autocorrect=\"false\"\n                        autocapitalizationType=\"none\" [(ngModel)]=\"user.email\"\n                        returnKeyType=\"next\" (returnPress)=\"focusPassword()\"></TextField>\n                    <StackLayout class=\"hr-light\"></StackLayout>\n                </StackLayout>\n\n                <StackLayout row=\"1\" class=\"input-field\">\n                    <TextField #password class=\"input\" [isEnabled]=\"!processing\"\n                        hint=\"Password\" secure=\"true\" [(ngModel)]=\"user.password\"\n                        [returnKeyType]=\"isLoggingIn ? 'done' : 'next'\"\n                        (returnPress)=\"focusConfirmPassword()\"></TextField>\n                    <StackLayout class=\"hr-light\"></StackLayout>\n                </StackLayout>\n\n                <StackLayout row=\"2\" *ngIf=\"!isLoggingIn\" class=\"input-field\">\n                    <TextField #confirmPassword class=\"input\" [isEnabled]=\"!processing\"\n                        hint=\"Confirm password\" secure=\"true\" [(ngModel)]=\"user.confirmPassword\"\n                        returnKeyType=\"done\"></TextField>\n                    <StackLayout class=\"hr-light\"></StackLayout>\n                </StackLayout>\n\n                <ActivityIndicator rowSpan=\"3\" [busy]=\"processing\"></ActivityIndicator>\n            </GridLayout>\n        </PreviousNextView>\n\n        <Button text=\"Log in\" (tap)=\"submit()\" class=\"btn btn-primary m-t-20\"></Button>\n        <Label text=\"Sign up\" class=\"login-label\"\n            (tap)=\"signUp()\"></Label>\n    </StackLayout>\n</FlexboxLayout>");

/***/ }),

/***/ "./app/components/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/ui/dialogs/dialogs.js");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/core/ui/page/page.js");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(page, router) {
        this.page = page;
        this.router = router;
        this.isLoggingIn = true;
        this.processing = false;
        this.page.actionBarHidden = true;
    }
    LoginComponent.prototype.toggleForm = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    LoginComponent.prototype.submit = function () {
        this.router.navigate(["/home"]);
    };
    LoginComponent.prototype.login = function () {
    };
    LoginComponent.prototype.register = function () {
    };
    LoginComponent.prototype.signUp = function () {
        this.router.navigate(["/signUp"]);
    };
    LoginComponent.prototype.focusPassword = function () {
    };
    LoginComponent.prototype.focusConfirmPassword = function () {
    };
    LoginComponent.prototype.alert = function (message) {
        return Object(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_1__["alert"])({
            title: "APP NAME",
            okButtonText: "OK",
            message: message
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__["Page"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("password", { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LoginComponent.prototype, "password", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("confirmPassword", { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LoginComponent.prototype, "confirmPassword", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'AppLogin',
            template: __importDefault(__webpack_require__("./app/components/pages/login/login.component.html")).default,
            styles: [__importDefault(__webpack_require__("./app/components/pages/login/login.component.css")).default]
        }),
        __metadata("design:paramtypes", [tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__["Page"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./app/components/pages/payment/payment.component.css":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Add mobile styles for the component here.  */\n");

/***/ }),

/***/ "./app/components/pages/payment/payment.component.html":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<Button text=\"payment works!\" class=\"btn btn-primary\"></Button>");

/***/ }),

/***/ "./app/components/pages/payment/payment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var PaymentComponent = /** @class */ (function () {
    function PaymentComponent() {
    }
    PaymentComponent.prototype.ngOnInit = function () {
    };
    PaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment',
            template: __importDefault(__webpack_require__("./app/components/pages/payment/payment.component.html")).default,
            styles: [__importDefault(__webpack_require__("./app/components/pages/payment/payment.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "./app/components/pages/signup/signup.component.css":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Add mobile styles for the component here.  */\n.form {\n    margin-left: 30;\n    margin-right: 30;\n    flex-grow: 2;\n    vertical-align: middle;\n  }\n  \n  .logo {\n    margin-bottom: 12;\n    height: 90;\n    font-weight: bold;\n  }\n  .header {\n    horizontal-align: center;\n    font-size: 25;\n    font-weight: 600;\n    margin-bottom: 70;\n    text-align: center;\n    color: #d51a1a;\n  }\n  \n  .input-field {\n    margin-bottom: 25;\n  }\n  \n  .input {\n    font-size: 18;\n    placeholder-color: #a8a8a8;\n  }\n  \n  .input:disabled {\n    background-color: white;\n    opacity: 0.5;\n  }\n  \n  .btn-primary {\n    margin: 30 5 15 5;\n  }\n  \n  .login-label {\n    horizontal-align: center;\n    color: #a8a8a8;\n    font-size: 16;\n  }\n  \n  .bold {\n    color: #000000;\n  }\n  ");

/***/ }),

/***/ "./app/components/pages/signup/signup.component.html":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<FlexboxLayout class=\"page\">\n  <StackLayout class=\"form\">\n      <Image class=\"logo\" src=\"https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/21_Angular_logo_logos-512.png\"></Image>\n      <Label class=\"header\" text=\"Medical app\"></Label>\n\n      <PreviousNextView>\n          <GridLayout rows=\"auto, auto, auto\">\n              <StackLayout row=\"0\" class=\"input-field\">\n                  <TextField class=\"input\" hint=\"Email\" [isEnabled]=\"!processing\"\n                      keyboardType=\"email\" autocorrect=\"false\"\n                      autocapitalizationType=\"none\" [(ngModel)]=\"user.email\"\n                      returnKeyType=\"next\" (returnPress)=\"focusPassword()\"></TextField>\n                  <StackLayout class=\"hr-light\"></StackLayout>\n              </StackLayout>\n\n              <StackLayout row=\"1\" class=\"input-field\">\n                  <TextField #password class=\"input\" [isEnabled]=\"!processing\"\n                      hint=\"Password\" secure=\"true\" [(ngModel)]=\"user.password\"\n                      [returnKeyType]=\"isLoggingIn ? 'done' : 'next'\"\n                      (returnPress)=\"focusConfirmPassword()\"></TextField>\n                  <StackLayout class=\"hr-light\"></StackLayout>\n              </StackLayout>\n\n              <StackLayout row=\"2\" *ngIf=\"!isLoggingIn\" class=\"input-field\">\n                  <TextField #confirmPassword class=\"input\" [isEnabled]=\"!processing\"\n                      hint=\"Confirm password\" secure=\"true\" [(ngModel)]=\"user.confirmPassword\"\n                      returnKeyType=\"done\"></TextField>\n                  <StackLayout class=\"hr-light\"></StackLayout>\n              </StackLayout>\n\n              <ActivityIndicator rowSpan=\"3\" [busy]=\"processing\"></ActivityIndicator>\n          </GridLayout>\n      </PreviousNextView>\n\n      <Button text=\"Register\" (tap)=\"submit()\" class=\"btn btn-primary m-t-20\"></Button>\n  </StackLayout>\n</FlexboxLayout>");

/***/ }),

/***/ "./app/components/pages/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_ui_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/ui/page/page.js");
/* harmony import */ var tns_core_modules_ui_page_page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page_page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var SignupComponent = /** @class */ (function () {
    function SignupComponent(page, router) {
        this.page = page;
        this.router = router;
        this.isLoggingIn = true;
        this.processing = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    SignupComponent.prototype.toggleForm = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    SignupComponent.prototype.submit = function () {
        this.router.navigate(["/home"]);
    };
    SignupComponent.prototype.login = function () { };
    SignupComponent.prototype.register = function () { };
    SignupComponent.prototype.focusPassword = function () { };
    SignupComponent.prototype.focusConfirmPassword = function () { };
    SignupComponent.prototype.alert = function (message) {
        return alert({
            title: "APP NAME",
            okButtonText: "OK",
            message: message
        });
    };
    SignupComponent.ctorParameters = function () { return [
        { type: tns_core_modules_ui_page_page__WEBPACK_IMPORTED_MODULE_1__["Page"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("password", { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SignupComponent.prototype, "password", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("confirmPassword", { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SignupComponent.prototype, "confirmPassword", void 0);
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-signup",
            template: __importDefault(__webpack_require__("./app/components/pages/signup/signup.component.html")).default,
            styles: [__importDefault(__webpack_require__("./app/components/pages/signup/signup.component.css")).default]
        }),
        __metadata("design:paramtypes", [tns_core_modules_ui_page_page__WEBPACK_IMPORTED_MODULE_1__["Page"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./app/components/products/details/details.component.css":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".site-main-content {\n    margin: 12 24;\n}\n\n.site-main-container {\n    margin: 12 0;\n}\n\n.site-item-header {\n    font-size: 16;\n}\n\n.site-item-short-description {\n    font-size: 8;\n}\n\n.site-item-long-description {\n    margin: 12 0;\n    font-size: 10;\n}");

/***/ }),

/***/ "./app/components/products/details/details.component.html":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<GridLayout>\n    <ScrollView>\n        <GridLayout rows=\"auto, auto, auto, auto\">\n            <GridLayout height=\"200\" row=\"0\">\n\t\t\t\t<Image colSpan=\"4\" src=\"https://miro.medium.com/max/2880/1*UbVWCOuRgGWzUpyD6VFhvQ.png\" stretch=\"aspectFill\"></Image>\n            </GridLayout>\n\n            <StackLayout class=\"site-main-content\" row=\"1\">\n                <StackLayout>\n                    <Label class=\"site-item-header\" [text]=\"product.name\"></Label>\n                    <Label class=\"site-item-short-description\" [text]=\"product.shortDescription\"></Label>\n                </StackLayout>\n                <FlexLayout>\n                    <Label class=\"site-item-long-description\" [text]=\"product.longDescription\" textWrap=\"true\"></Label>\n                </FlexLayout>\n            </StackLayout>\n\n            <Button text=\"Edit\" (tap)=\"onEdit()\" row=\"2\"></Button>\n            <Button text=\"Go Back\" (tap)=\"onGoBack()\" row=\"3\"></Button>\n        </GridLayout>\n    </ScrollView>\n</GridLayout>\n");

/***/ }),

/***/ "./app/components/products/details/details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var DetailsComponent = /** @class */ (function () {
    function DetailsComponent() {
        this.goBack = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DetailsComponent.prototype.ngOnInit = function () {
    };
    DetailsComponent.prototype.onGoBack = function () {
        this.goBack.emit();
    };
    DetailsComponent.prototype.onEdit = function () {
        this.edit.emit(this.product);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DetailsComponent.prototype, "product", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DetailsComponent.prototype, "goBack", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DetailsComponent.prototype, "edit", void 0);
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'AppDetails',
            template: __importDefault(__webpack_require__("./app/components/products/details/details.component.html")).default,
            styles: [__importDefault(__webpack_require__("./app/components/products/details/details.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./app/components/products/edit/edit.component.css":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".site-main-content {\n    margin: 12 24;\n}\n\n.site-main-container {\n    margin: 12 0;\n}\n\n.site-item-header {\n    font-size: 16;\n}\n\n.site-item-short-description {\n    font-size: 8;\n}\n\n.site-item-long-description {\n    margin: 12 0;\n    font-size: 10;\n}");

/***/ }),

/***/ "./app/components/products/edit/edit.component.html":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<GridLayout>\n    <ScrollView>\n        <GridLayout rows=\"auto, auto, auto, auto\">\n            <GridLayout height=\"200\" row=\"0\">\n\t\t\t\t<Image colSpan=\"4\" src=\"https://miro.medium.com/max/2880/1*UbVWCOuRgGWzUpyD6VFhvQ.png\" stretch=\"aspectFill\"></Image>\n            </GridLayout>\n\n            <StackLayout class=\"site-main-content\" row=\"1\">\n                <FlexLayout>\n                    <Label text=\"Product Name:\"></Label>\n                    <TextField [text]=\"product.name\"></TextField>\n                </FlexLayout>\n                <FlexLayout>\n                    <Label text=\"Short description:\"></Label>\n                    <TextField [text]=\"product.shortDescription\"></TextField>\n                </FlexLayout>\n                <FlexLayout>\n                    <Label text=\"Lond description:\"></Label>\n                    <TextView [text]=\"product.longDescription\"></TextView>\n                </FlexLayout>\n            </StackLayout>\n\n            <Button text=\"Save\" (tap)=\"onSave()\" row=\"2\"></Button>\n            <Button text=\"Cancel\" (tap)=\"onCancel()\" row=\"3\"></Button>\n        </GridLayout>\n    </ScrollView>\n</GridLayout>\n");

/***/ }),

/***/ "./app/components/products/edit/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var EditComponent = /** @class */ (function () {
    function EditComponent() {
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    EditComponent.prototype.ngOnInit = function () {
    };
    EditComponent.prototype.onSave = function () {
    };
    EditComponent.prototype.onCancel = function () {
        this.cancel.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EditComponent.prototype, "product", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EditComponent.prototype, "cancel", void 0);
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'AppEdit',
            template: __importDefault(__webpack_require__("./app/components/products/edit/edit.component.html")).default,
            styles: [__importDefault(__webpack_require__("./app/components/products/edit/edit.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./app/components/products/list/list.component.css":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Add mobile styles for the component here.  */\n");

/***/ }),

/***/ "./app/components/products/list/list.component.html":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<GridLayout>\n    <ListView [items]=\"productsList\" *ngIf=\"!selectedProduct\" separatorColor=\"transparent\">\n        <ng-template let-item=\"item\">\n            <AppProductCard [product]=\"item\" (select)=\"onSelect($event)\"></AppProductCard>\n        </ng-template>\n    </ListView>\n\n    <AppDetails *ngIf=\"selectedProduct && !editedProduct\" [product]=\"selectedProduct\" (goBack)=\"onSelect()\" (edit)=\"onEdit($event)\"></AppDetails>\n    <AppEdit *ngIf=\"editedProduct\" [product]=\"editedProduct\" (cancel)=\"onEdit()\"></AppEdit>\n</GridLayout>");

/***/ }),

/***/ "./app/components/products/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _src_app_shared_services_products_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/shared/services/products/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var ListComponent = /** @class */ (function () {
    function ListComponent(productsService) {
        this.productsService = productsService;
        this.productsList = [];
        this.selectedProduct = undefined;
        this.editedProduct = undefined;
    }
    ListComponent.prototype.ngOnInit = function () {
        this.productsList = this.productsService.getAllProducts();
    };
    ListComponent.prototype.onSelect = function (event) {
        this.selectedProduct = event;
    };
    ListComponent.prototype.onEdit = function (event) {
        this.editedProduct = event;
    };
    ListComponent.ctorParameters = function () { return [
        { type: _src_app_shared_services_products_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"] }
    ]; };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'AppList',
            template: __importDefault(__webpack_require__("./app/components/products/list/list.component.html")).default,
            styles: [__importDefault(__webpack_require__("./app/components/products/list/list.component.css")).default]
        }),
        __metadata("design:paramtypes", [_src_app_shared_services_products_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./app/components/products/product-card/product-card.component.css":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".site-template-image {\n    border-radius: 100;\n    margin: 8 16;\n    width: 60;\n    height: 60;\n}\n\n.site-template-title {\n    margin: 0 0 6 0;\n    font-size: 18;\n}\n\n.site-template-description {\n    font-size: 11;\n}");

/***/ }),

/***/ "./app/components/products/product-card/product-card.component.html":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<GridLayout rows=\"*, auto\" columns=\"auto, *, auto\" (tap)=\"onSelect()\">\n    <Image stretch=\"aspectFill\" \n        col=\"0\"\n        class=\"site-template-image thumb-with-background\"\n        src=\"https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/21_Angular_logo_logos-512.png\" height=\"40\"></Image>\n    <StackLayout col=\"1\" verticalAlignment=\"center\">\n        <Label class=\"site-template-title\" [text]=\"product.name\"></Label>\n        <Label class=\"site-template-description\" [text]=\"product.shortDescription\"></Label>\n    </StackLayout>\n    <StackLayout margin=\"0,16,0,42\" row=\"1\" colSpan=\"2\" backgroundColor=\"lightGray\" height=\"1\"></StackLayout>\n</GridLayout>");

/***/ }),

/***/ "./app/components/products/product-card/product-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardComponent", function() { return ProductCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ProductCardComponent = /** @class */ (function () {
    function ProductCardComponent() {
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ProductCardComponent.prototype.ngOnInit = function () {
    };
    ProductCardComponent.prototype.onSelect = function () {
        this.select.emit(this.product);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductCardComponent.prototype, "product", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ProductCardComponent.prototype, "select", void 0);
    ProductCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'AppProductCard',
            template: __importDefault(__webpack_require__("./app/components/products/product-card/product-card.component.html")).default,
            styles: [__importDefault(__webpack_require__("./app/components/products/product-card/product-card.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ProductCardComponent);
    return ProductCardComponent;
}());



/***/ }),

/***/ "./app/shared/daos/products/products.dao.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsDaoService", function() { return ProductsDaoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ProductsDaoService = /** @class */ (function () {
    function ProductsDaoService() {
    }
    ProductsDaoService.prototype.getAll = function () {
        return [
            { id: 1, name: 'Product 1', shortDescription: 'Short description of the product', longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
            { id: 2, name: 'Product 2', shortDescription: 'Short description of the product', longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
            { id: 3, name: 'Product 3', shortDescription: 'Short description of the product', longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
            { id: 4, name: 'Product 4', shortDescription: 'Short description of the product', longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
            { id: 5, name: 'Product 5', shortDescription: 'Short description of the product', longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
            { id: 6, name: 'Product 6', shortDescription: 'Short description of the product', longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
            { id: 7, name: 'Product 7', shortDescription: 'Short description of the product', longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
            { id: 8, name: 'Product 8', shortDescription: 'Short description of the product', longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
            { id: 9, name: 'Product 9', shortDescription: 'Short description of the product', longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
            { id: 10, name: 'Product 10', shortDescription: 'Short description of the product', longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
        ];
    };
    ProductsDaoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ProductsDaoService);
    return ProductsDaoService;
}());



/***/ }),

/***/ "./app/shared/services/products/products.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _daos_products_products_dao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/shared/daos/products/products.dao.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var ProductsService = /** @class */ (function () {
    function ProductsService(productsDaoService) {
        this.productsDaoService = productsDaoService;
    }
    ProductsService.prototype.getAllProducts = function () {
        return this.productsDaoService.getAll();
    };
    ProductsService.ctorParameters = function () { return [
        { type: _daos_products_products_dao_service__WEBPACK_IMPORTED_MODULE_1__["ProductsDaoService"] }
    ]; };
    ProductsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_daos_products_products_dao_service__WEBPACK_IMPORTED_MODULE_1__["ProductsDaoService"]])
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "./app/shared/shared.module.tns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/common.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./main.tns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/angular/platform.js");
/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/app.module.tns.ts");

        let applicationCheckPlatform = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
__webpack_require__("../node_modules/@nativescript/core/ui/frame/activity.js");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-angular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            
        __webpack_require__("../node_modules/@nativescript/core/bundle-entry-points.js");
        var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var options_Generated = {};

if (true) {
    options_Generated = {
        hmrOptions: {
            moduleTypeFactory: function () { return __webpack_require__("./app/app.module.tns.ts").AppModule; },
            livesyncCallback: function (platformReboot) { setTimeout(platformReboot, 0); }
        }
    };
}

if (true) {
    module["hot"].accept(["./app/app.module.tns.ts"], function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _src_app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/app.module.tns.ts");
(function () {
        global["hmrRefresh"]({});
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this));
}
// A traditional NativeScript application starts by initializing global objects,
// setting up global CSS rules, creating, and navigating to the main page.
// Angular applications need to take care of their own initialization: modules, components, directives, routes, DI providers.
// A NativeScript Angular app needs to make both paradigms work together,
// so we provide a wrapper platform object, platformNativeScriptDynamic,
// that sets up a NativeScript application and can bootstrap the Angular framework.
nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__["platformNativeScriptDynamic"](Object.assign({}, options_Generated)).bootstrapModule(_src_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]);

    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = JSON.parse("{\"main\":\"main.tns.js\",\"android\":{\"v8Flags\":\"--expose_gc\",\"markingMode\":\"none\"}}");

/***/ })

},[["./main.tns.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC9hcHAtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5tb2R1bGUudG5zLnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAucm91dGVzLnRzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3BhZ2VzL3BheW1lbnQvcGF5bWVudC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3BhZ2VzL3BheW1lbnQvcGF5bWVudC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9wYWdlcy9wYXltZW50L3BheW1lbnQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3BhZ2VzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9wYWdlcy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3BhZ2VzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL2VkaXQvZWRpdC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL2VkaXQvZWRpdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9lZGl0L2VkaXQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL2xpc3QvbGlzdC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL2xpc3QvbGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9saXN0L2xpc3QuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3QtY2FyZC9wcm9kdWN0LWNhcmQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0LWNhcmQvcHJvZHVjdC1jYXJkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3QtY2FyZC9wcm9kdWN0LWNhcmQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9zaGFyZWQvZGFvcy9wcm9kdWN0cy9wcm9kdWN0cy5kYW8uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc2hhcmVkL3NlcnZpY2VzL3Byb2R1Y3RzL3Byb2R1Y3RzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NoYXJlZC9zaGFyZWQubW9kdWxlLnRucy50cyIsIndlYnBhY2s6Ly8vLi9tYWluLnRucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLDRDQUE0QyxXQUFXO0FBQ3ZEO0FBQ0E7QUFDQSx5RTs7Ozs7OztBQ1pBLCtHQUFpRSxtQkFBTyxDQUFDLDRIQUEwRjtBQUNuSyxnRUFBZ0UsbUJBQU8sQ0FBQyw0SEFBMEY7QUFDbEssaUVBQWlFLG1CQUFPLENBQUMsNEhBQTBGO0FBQ25LLGdFQUFnRSxtQkFBTyxDQUFDLDRIQUEwRixHQUFHLGtCQUFrQixrQ0FBa0MsVUFBVSwrREFBK0QsRUFBRSwrREFBK0Q7QUFDblcsUUFBUSxJQUFVO0FBQ2xCO0FBQ0E7QUFDQSwrQkFBK0IsbUNBQW1DO0FBQ2xFLFNBQVM7QUFDVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1R5QztBQUM4QjtBQUMxQjtBQU03QztJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLDhEQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQyxPQUFPLENBQUMsMERBQU0sQ0FBQyxDQUFDO1lBQ25ELE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDO1NBQ3BDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUE7QUFBSjs7Ozs7Ozs7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QU07U0FDbkIsQ0FBQzt5Q0FHd0Msc0ZBQWtCO09BRi9DLGVBQWUsQ0FPM0I7SUFBRCxzQkFBQztDQUFBO0FBUDJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ArQjtBQUNZO0FBV3ZFO0lBQUE7SUFBNEIsQ0FBQztJQUFoQixZQUFZO1FBUHhCLDhEQUFRLENBQUM7WUFDUixZQUFZLEVBQUUsRUFBRTtZQUNoQixPQUFPLEVBQUU7Z0JBQ1Asb0ZBQXdCO2FBQ3pCO1lBQ0QsT0FBTyxFQUFFLENBQUMsOERBQWdCLENBQUM7U0FDNUIsQ0FBQztPQUNXLFlBQVksQ0FBSTtJQUFELG1CQUFDO0NBQUE7QUFBSjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUekIsbUJBQU8sMERBQW1CLEVBQXNCOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRCxnRkFBZ0Y7QUFDaEYsa0NBQTBFO0FBQzFFLGlFQUE2SDtBQUM3SCxtQkFBeUU7QUFDekUsY0FBd0U7QUFDVztBQUNuRixzREFBeUQiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F1Z2h0IGV4Y2VwdGlvbiBwb3BwaW5nIHVwIGluIGRldnRvb2xzXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fSk7XG59XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gXCIuLi8kJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgcmVjdXJzaXZlXCI7IiwiZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9ibHVlLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9ibHVlLmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9ibHVlLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9ibHVlLmNzc1wiKSk7bW9kdWxlLmV4cG9ydHMgPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIid+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3MnXCJ9LHtcInR5cGVcIjpcImltcG9ydFwiLFwiaW1wb3J0XCI6XCInfkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2JsdWUuY3NzJ1wifV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tICdAc3JjL2FwcC9hcHAucm91dGVzJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxuIiwiZXhwb3J0IGRlZmF1bHQgXCIucGFnZSB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XCIiLCJleHBvcnQgZGVmYXVsdCBcIiAgPHBhZ2Utcm91dGVyLW91dGxldD48L3BhZ2Utcm91dGVyLW91dGxldD5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1yb290JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FwcC5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWRcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hcHAtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lnbnVwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL3NpZ251cC9zaWdudXAuY29tcG9uZW50JztcbmltcG9ydCB7IFBheW1lbnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMvcGF5bWVudC9wYXltZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3Byb2R1Y3RzL2xpc3QvbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi9zaGFyZWQvc2hhcmVkLm1vZHVsZS50bnMnO1xuaW1wb3J0IHsgRGV0YWlsc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wcm9kdWN0cy9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2R1Y3RDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3QtY2FyZC9wcm9kdWN0LWNhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IEVkaXRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcHJvZHVjdHMvZWRpdC9lZGl0LmNvbXBvbmVudCc7XG5cblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdHdvLXdheSBiaW5kaW5nXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zJztcblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyAgaWYgeW91IG5lZWQgdG8gdXNlIHRoZSBIVFRQIHdyYXBwZXJcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcENvbXBvbmVudCxcbiAgICBIb21lQ29tcG9uZW50LFxuICAgIExvZ2luQ29tcG9uZW50LFxuICAgIFNpZ251cENvbXBvbmVudCxcbiAgICBQYXltZW50Q29tcG9uZW50LFxuICAgIExpc3RDb21wb25lbnQsXG4gICAgRGV0YWlsc0NvbXBvbmVudCxcbiAgICBQcm9kdWN0Q2FyZENvbXBvbmVudCxcbiAgICBFZGl0Q29tcG9uZW50LFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgU2hhcmVkTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW10sXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IFNpZ251cENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgICAgcGF0aDogJycsXG4gICAgICByZWRpcmVjdFRvOiAnL2xvZ2luJyxcbiAgICAgIHBhdGhNYXRjaDogJ2Z1bGwnLFxuICB9LFxuICB7XG4gICAgICBwYXRoOiAnbG9naW4nLFxuICAgICAgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICdob21lJyxcbiAgICBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnc2lnblVwJyxcbiAgICBjb21wb25lbnQ6IFNpZ251cENvbXBvbmVudCxcbiAgfSxcbl07XG4iLCJleHBvcnQgZGVmYXVsdCBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcblwiIiwiZXhwb3J0IGRlZmF1bHQgXCI8U3RhY2tMYXlvdXQ+XFxuICAgIDxBcHBMaXN0PjwvQXBwTGlzdD5cXG48L1N0YWNrTGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1ob21lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZFxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICB9XG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IFwiLmZvcm0ge1xcbiAgbWFyZ2luLWxlZnQ6IDMwO1xcbiAgbWFyZ2luLXJpZ2h0OiAzMDtcXG4gIGZsZXgtZ3JvdzogMjtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi5sb2dvIHtcXG4gIG1hcmdpbi1ib3R0b206IDEyO1xcbiAgaGVpZ2h0OiA5MDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uaGVhZGVyIHtcXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbWFyZ2luLWJvdHRvbTogNzA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogI2Q1MWExYTtcXG59XFxuXFxuLmlucHV0LWZpZWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDI1O1xcbn1cXG5cXG4uaW5wdXQge1xcbiAgZm9udC1zaXplOiAxODtcXG4gIHBsYWNlaG9sZGVyLWNvbG9yOiAjYThhOGE4O1xcbn1cXG5cXG4uaW5wdXQ6ZGlzYWJsZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5idG4tcHJpbWFyeSB7XFxuICBtYXJnaW46IDMwIDUgMTUgNTtcXG59XFxuXFxuLmxvZ2luLWxhYmVsIHtcXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjYThhOGE4O1xcbiAgZm9udC1zaXplOiAxNjtcXG59XFxuXFxuLmJvbGQge1xcbiAgY29sb3I6ICMwMDAwMDA7XFxufVxcblwiIiwiZXhwb3J0IGRlZmF1bHQgXCI8RmxleGJveExheW91dCBjbGFzcz1cXFwicGFnZVxcXCI+XFxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiZm9ybVxcXCI+XFxuICAgICAgICA8SW1hZ2UgY2xhc3M9XFxcImxvZ29cXFwiIHNyYz1cXFwiaHR0cHM6Ly9jZG40Lmljb25maW5kZXIuY29tL2RhdGEvaWNvbnMvbG9nb3MtYW5kLWJyYW5kcy81MTIvMjFfQW5ndWxhcl9sb2dvX2xvZ29zLTUxMi5wbmdcXFwiPjwvSW1hZ2U+XFxuICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImhlYWRlclxcXCIgdGV4dD1cXFwiTWVkaWNhbCBhcHBcXFwiPjwvTGFiZWw+XFxuXFxuICAgICAgICA8UHJldmlvdXNOZXh0Vmlldz5cXG4gICAgICAgICAgICA8R3JpZExheW91dCByb3dzPVxcXCJhdXRvLCBhdXRvLCBhdXRvXFxcIj5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cXFwiMFxcXCIgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgY2xhc3M9XFxcImlucHV0XFxcIiBoaW50PVxcXCJFbWFpbFxcXCIgW2lzRW5hYmxlZF09XFxcIiFwcm9jZXNzaW5nXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkVHlwZT1cXFwiZW1haWxcXFwiIGF1dG9jb3JyZWN0PVxcXCJmYWxzZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVxcXCJub25lXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci5lbWFpbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlPVxcXCJuZXh0XFxcIiAocmV0dXJuUHJlc3MpPVxcXCJmb2N1c1Bhc3N3b3JkKClcXFwiPjwvVGV4dEZpZWxkPlxcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJoci1saWdodFxcXCI+PC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cXFwiMVxcXCIgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgI3Bhc3N3b3JkIGNsYXNzPVxcXCJpbnB1dFxcXCIgW2lzRW5hYmxlZF09XFxcIiFwcm9jZXNzaW5nXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XFxcIlBhc3N3b3JkXFxcIiBzZWN1cmU9XFxcInRydWVcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLnBhc3N3b3JkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtyZXR1cm5LZXlUeXBlXT1cXFwiaXNMb2dnaW5nSW4gPyAnZG9uZScgOiAnbmV4dCdcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgKHJldHVyblByZXNzKT1cXFwiZm9jdXNDb25maXJtUGFzc3dvcmQoKVxcXCI+PC9UZXh0RmllbGQ+XFxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhyLWxpZ2h0XFxcIj48L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIyXFxcIiAqbmdJZj1cXFwiIWlzTG9nZ2luZ0luXFxcIiBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCAjY29uZmlybVBhc3N3b3JkIGNsYXNzPVxcXCJpbnB1dFxcXCIgW2lzRW5hYmxlZF09XFxcIiFwcm9jZXNzaW5nXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XFxcIkNvbmZpcm0gcGFzc3dvcmRcXFwiIHNlY3VyZT1cXFwidHJ1ZVxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIuY29uZmlybVBhc3N3b3JkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU9XFxcImRvbmVcXFwiPjwvVGV4dEZpZWxkPlxcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJoci1saWdodFxcXCI+PC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG5cXG4gICAgICAgICAgICAgICAgPEFjdGl2aXR5SW5kaWNhdG9yIHJvd1NwYW49XFxcIjNcXFwiIFtidXN5XT1cXFwicHJvY2Vzc2luZ1xcXCI+PC9BY3Rpdml0eUluZGljYXRvcj5cXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICA8L1ByZXZpb3VzTmV4dFZpZXc+XFxuXFxuICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkxvZyBpblxcXCIgKHRhcCk9XFxcInN1Ym1pdCgpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IG0tdC0yMFxcXCI+PC9CdXR0b24+XFxuICAgICAgICA8TGFiZWwgdGV4dD1cXFwiU2lnbiB1cFxcXCIgY2xhc3M9XFxcImxvZ2luLWxhYmVsXFxcIlxcbiAgICAgICAgICAgICh0YXApPVxcXCJzaWduVXAoKVxcXCI+PC9MYWJlbD5cXG4gICAgPC9TdGFja0xheW91dD5cXG48L0ZsZXhib3hMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBhbGVydCwgcHJvbXB0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnQXBwTG9naW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWRcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xuICBpc0xvZ2dpbmdJbiA9IHRydWU7XG4gIHByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgdXNlcjogYW55O1xuICBAVmlld0NoaWxkKFwicGFzc3dvcmRcIiwge3N0YXRpYzogZmFsc2V9KSBwYXNzd29yZDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImNvbmZpcm1QYXNzd29yZFwiLCB7c3RhdGljOiBmYWxzZX0pIGNvbmZpcm1QYXNzd29yZDogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICB9XG5cbiAgdG9nZ2xlRm9ybSgpIHtcbiAgICAgIHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjtcbiAgfVxuXG4gIHN1Ym1pdCgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvaG9tZVwiXSk7XG4gIH1cblxuICBsb2dpbigpIHtcbiAgICBcbiAgfVxuXG4gIHJlZ2lzdGVyKCkge1xuICB9XG5cbiAgc2lnblVwKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9zaWduVXBcIl0pO1xuICB9XG5cbiAgZm9jdXNQYXNzd29yZCgpIHtcblxuICB9XG4gIGZvY3VzQ29uZmlybVBhc3N3b3JkKCkge1xuXG4gIH1cblxuICBhbGVydChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiBhbGVydCh7XG4gICAgICAgICAgdGl0bGU6IFwiQVBQIE5BTUVcIixcbiAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIixcbiAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXG5cIiIsImV4cG9ydCBkZWZhdWx0IFwiPEJ1dHRvbiB0ZXh0PVxcXCJwYXltZW50IHdvcmtzIVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+PC9CdXR0b24+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcGF5bWVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXltZW50LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGF5bWVudC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGF5bWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcbi5mb3JtIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMwO1xcbiAgICBmbGV4LWdyb3c6IDI7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB9XFxuICBcXG4gIC5sb2dvIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTI7XFxuICAgIGhlaWdodDogOTA7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfVxcbiAgLmhlYWRlciB7XFxuICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNzA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICNkNTFhMWE7XFxuICB9XFxuICBcXG4gIC5pbnB1dC1maWVsZCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDI1O1xcbiAgfVxcbiAgXFxuICAuaW5wdXQge1xcbiAgICBmb250LXNpemU6IDE4O1xcbiAgICBwbGFjZWhvbGRlci1jb2xvcjogI2E4YThhODtcXG4gIH1cXG4gIFxcbiAgLmlucHV0OmRpc2FibGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gIH1cXG4gIFxcbiAgLmJ0bi1wcmltYXJ5IHtcXG4gICAgbWFyZ2luOiAzMCA1IDE1IDU7XFxuICB9XFxuICBcXG4gIC5sb2dpbi1sYWJlbCB7XFxuICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICNhOGE4YTg7XFxuICAgIGZvbnQtc2l6ZTogMTY7XFxuICB9XFxuICBcXG4gIC5ib2xkIHtcXG4gICAgY29sb3I6ICMwMDAwMDA7XFxuICB9XFxuICBcIiIsImV4cG9ydCBkZWZhdWx0IFwiPEZsZXhib3hMYXlvdXQgY2xhc3M9XFxcInBhZ2VcXFwiPlxcbiAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJmb3JtXFxcIj5cXG4gICAgICA8SW1hZ2UgY2xhc3M9XFxcImxvZ29cXFwiIHNyYz1cXFwiaHR0cHM6Ly9jZG40Lmljb25maW5kZXIuY29tL2RhdGEvaWNvbnMvbG9nb3MtYW5kLWJyYW5kcy81MTIvMjFfQW5ndWxhcl9sb2dvX2xvZ29zLTUxMi5wbmdcXFwiPjwvSW1hZ2U+XFxuICAgICAgPExhYmVsIGNsYXNzPVxcXCJoZWFkZXJcXFwiIHRleHQ9XFxcIk1lZGljYWwgYXBwXFxcIj48L0xhYmVsPlxcblxcbiAgICAgIDxQcmV2aW91c05leHRWaWV3PlxcbiAgICAgICAgICA8R3JpZExheW91dCByb3dzPVxcXCJhdXRvLCBhdXRvLCBhdXRvXFxcIj5cXG4gICAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XFxcIjBcXFwiIGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjbGFzcz1cXFwiaW5wdXRcXFwiIGhpbnQ9XFxcIkVtYWlsXFxcIiBbaXNFbmFibGVkXT1cXFwiIXByb2Nlc3NpbmdcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkVHlwZT1cXFwiZW1haWxcXFwiIGF1dG9jb3JyZWN0PVxcXCJmYWxzZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cXFwibm9uZVxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIuZW1haWxcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU9XFxcIm5leHRcXFwiIChyZXR1cm5QcmVzcyk9XFxcImZvY3VzUGFzc3dvcmQoKVxcXCI+PC9UZXh0RmllbGQ+XFxuICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJoci1saWdodFxcXCI+PC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIxXFxcIiBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgI3Bhc3N3b3JkIGNsYXNzPVxcXCJpbnB1dFxcXCIgW2lzRW5hYmxlZF09XFxcIiFwcm9jZXNzaW5nXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICBoaW50PVxcXCJQYXNzd29yZFxcXCIgc2VjdXJlPVxcXCJ0cnVlXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci5wYXNzd29yZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgW3JldHVybktleVR5cGVdPVxcXCJpc0xvZ2dpbmdJbiA/ICdkb25lJyA6ICduZXh0J1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgKHJldHVyblByZXNzKT1cXFwiZm9jdXNDb25maXJtUGFzc3dvcmQoKVxcXCI+PC9UZXh0RmllbGQ+XFxuICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJoci1saWdodFxcXCI+PC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIyXFxcIiAqbmdJZj1cXFwiIWlzTG9nZ2luZ0luXFxcIiBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgI2NvbmZpcm1QYXNzd29yZCBjbGFzcz1cXFwiaW5wdXRcXFwiIFtpc0VuYWJsZWRdPVxcXCIhcHJvY2Vzc2luZ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgaGludD1cXFwiQ29uZmlybSBwYXNzd29yZFxcXCIgc2VjdXJlPVxcXCJ0cnVlXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci5jb25maXJtUGFzc3dvcmRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU9XFxcImRvbmVcXFwiPjwvVGV4dEZpZWxkPlxcbiAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaHItbGlnaHRcXFwiPjwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgPEFjdGl2aXR5SW5kaWNhdG9yIHJvd1NwYW49XFxcIjNcXFwiIFtidXN5XT1cXFwicHJvY2Vzc2luZ1xcXCI+PC9BY3Rpdml0eUluZGljYXRvcj5cXG4gICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgIDwvUHJldmlvdXNOZXh0Vmlldz5cXG5cXG4gICAgICA8QnV0dG9uIHRleHQ9XFxcIlJlZ2lzdGVyXFxcIiAodGFwKT1cXFwic3VibWl0KClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgbS10LTIwXFxcIj48L0J1dHRvbj5cXG4gIDwvU3RhY2tMYXlvdXQ+XFxuPC9GbGV4Ym94TGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJhcHAtc2lnbnVwXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vc2lnbnVwLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9zaWdudXAuY29tcG9uZW50LmNzc1wiXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZFxufSlcbmV4cG9ydCBjbGFzcyBTaWdudXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpc0xvZ2dpbmdJbiA9IHRydWU7XG4gIHByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgdXNlcjogYW55O1xuICBAVmlld0NoaWxkKFwicGFzc3dvcmRcIiwgeyBzdGF0aWM6IGZhbHNlIH0pIHBhc3N3b3JkOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiY29uZmlybVBhc3N3b3JkXCIsIHsgc3RhdGljOiBmYWxzZSB9KSBjb25maXJtUGFzc3dvcmQ6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICB9XG5cbiAgdG9nZ2xlRm9ybSgpIHtcbiAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XG4gIH1cblxuICBzdWJtaXQoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2hvbWVcIl0pO1xuICB9XG5cbiAgbG9naW4oKSB7fVxuXG4gIHJlZ2lzdGVyKCkge31cblxuICBmb2N1c1Bhc3N3b3JkKCkge31cbiAgZm9jdXNDb25maXJtUGFzc3dvcmQoKSB7fVxuXG4gIGFsZXJ0KG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHJldHVybiBhbGVydCh7XG4gICAgICB0aXRsZTogXCJBUFAgTkFNRVwiLFxuICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCIsXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IFwiLnNpdGUtbWFpbi1jb250ZW50IHtcXG4gICAgbWFyZ2luOiAxMiAyNDtcXG59XFxuXFxuLnNpdGUtbWFpbi1jb250YWluZXIge1xcbiAgICBtYXJnaW46IDEyIDA7XFxufVxcblxcbi5zaXRlLWl0ZW0taGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAxNjtcXG59XFxuXFxuLnNpdGUtaXRlbS1zaG9ydC1kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogODtcXG59XFxuXFxuLnNpdGUtaXRlbS1sb25nLWRlc2NyaXB0aW9uIHtcXG4gICAgbWFyZ2luOiAxMiAwO1xcbiAgICBmb250LXNpemU6IDEwO1xcbn1cIiIsImV4cG9ydCBkZWZhdWx0IFwiPEdyaWRMYXlvdXQ+XFxuICAgIDxTY3JvbGxWaWV3PlxcbiAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiYXV0bywgYXV0bywgYXV0bywgYXV0b1xcXCI+XFxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgaGVpZ2h0PVxcXCIyMDBcXFwiIHJvdz1cXFwiMFxcXCI+XFxuXFx0XFx0XFx0XFx0PEltYWdlIGNvbFNwYW49XFxcIjRcXFwiIHNyYz1cXFwiaHR0cHM6Ly9taXJvLm1lZGl1bS5jb20vbWF4LzI4ODAvMSpVYlZXQ091UmdHV3pVcHlENlZGaHZRLnBuZ1xcXCIgc3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCI+PC9JbWFnZT5cXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJzaXRlLW1haW4tY29udGVudFxcXCIgcm93PVxcXCIxXFxcIj5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJzaXRlLWl0ZW0taGVhZGVyXFxcIiBbdGV4dF09XFxcInByb2R1Y3QubmFtZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwic2l0ZS1pdGVtLXNob3J0LWRlc2NyaXB0aW9uXFxcIiBbdGV4dF09XFxcInByb2R1Y3Quc2hvcnREZXNjcmlwdGlvblxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgPEZsZXhMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcInNpdGUtaXRlbS1sb25nLWRlc2NyaXB0aW9uXFxcIiBbdGV4dF09XFxcInByb2R1Y3QubG9uZ0Rlc2NyaXB0aW9uXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPC9GbGV4TGF5b3V0PlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJFZGl0XFxcIiAodGFwKT1cXFwib25FZGl0KClcXFwiIHJvdz1cXFwiMlxcXCI+PC9CdXR0b24+XFxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJHbyBCYWNrXFxcIiAodGFwKT1cXFwib25Hb0JhY2soKVxcXCIgcm93PVxcXCIzXFxcIj48L0J1dHRvbj5cXG4gICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgPC9TY3JvbGxWaWV3PlxcbjwvR3JpZExheW91dD5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBQcm9kdWN0IGZyb20gJ0BzcmMvYXBwL3NoYXJlZC9tb2RlbHMvcHJvZHVjdCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ0FwcERldGFpbHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGV0YWlscy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RldGFpbHMuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogJ21vZHVsZS5pZCdcbn0pXG5leHBvcnQgY2xhc3MgRGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHByb2R1Y3Q6IFByb2R1Y3Q7XG4gIEBPdXRwdXQoKSBnb0JhY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZWRpdDogRXZlbnRFbWl0dGVyPFByb2R1Y3Q+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBvbkdvQmFjaygpIHtcbiAgICB0aGlzLmdvQmFjay5lbWl0KCk7XG4gIH1cblxuICBvbkVkaXQoKSB7XG4gICAgdGhpcy5lZGl0LmVtaXQodGhpcy5wcm9kdWN0KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgXCIuc2l0ZS1tYWluLWNvbnRlbnQge1xcbiAgICBtYXJnaW46IDEyIDI0O1xcbn1cXG5cXG4uc2l0ZS1tYWluLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMTIgMDtcXG59XFxuXFxuLnNpdGUtaXRlbS1oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDE2O1xcbn1cXG5cXG4uc2l0ZS1pdGVtLXNob3J0LWRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiA4O1xcbn1cXG5cXG4uc2l0ZS1pdGVtLWxvbmctZGVzY3JpcHRpb24ge1xcbiAgICBtYXJnaW46IDEyIDA7XFxuICAgIGZvbnQtc2l6ZTogMTA7XFxufVwiIiwiZXhwb3J0IGRlZmF1bHQgXCI8R3JpZExheW91dD5cXG4gICAgPFNjcm9sbFZpZXc+XFxuICAgICAgICA8R3JpZExheW91dCByb3dzPVxcXCJhdXRvLCBhdXRvLCBhdXRvLCBhdXRvXFxcIj5cXG4gICAgICAgICAgICA8R3JpZExheW91dCBoZWlnaHQ9XFxcIjIwMFxcXCIgcm93PVxcXCIwXFxcIj5cXG5cXHRcXHRcXHRcXHQ8SW1hZ2UgY29sU3Bhbj1cXFwiNFxcXCIgc3JjPVxcXCJodHRwczovL21pcm8ubWVkaXVtLmNvbS9tYXgvMjg4MC8xKlViVldDT3VSZ0dXelVweUQ2VkZodlEucG5nXFxcIiBzdHJldGNoPVxcXCJhc3BlY3RGaWxsXFxcIj48L0ltYWdlPlxcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInNpdGUtbWFpbi1jb250ZW50XFxcIiByb3c9XFxcIjFcXFwiPlxcbiAgICAgICAgICAgICAgICA8RmxleExheW91dD5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJQcm9kdWN0IE5hbWU6XFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBbdGV4dF09XFxcInByb2R1Y3QubmFtZVxcXCI+PC9UZXh0RmllbGQ+XFxuICAgICAgICAgICAgICAgIDwvRmxleExheW91dD5cXG4gICAgICAgICAgICAgICAgPEZsZXhMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiU2hvcnQgZGVzY3JpcHRpb246XFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBbdGV4dF09XFxcInByb2R1Y3Quc2hvcnREZXNjcmlwdGlvblxcXCI+PC9UZXh0RmllbGQ+XFxuICAgICAgICAgICAgICAgIDwvRmxleExheW91dD5cXG4gICAgICAgICAgICAgICAgPEZsZXhMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTG9uZCBkZXNjcmlwdGlvbjpcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8VGV4dFZpZXcgW3RleHRdPVxcXCJwcm9kdWN0LmxvbmdEZXNjcmlwdGlvblxcXCI+PC9UZXh0Vmlldz5cXG4gICAgICAgICAgICAgICAgPC9GbGV4TGF5b3V0PlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJTYXZlXFxcIiAodGFwKT1cXFwib25TYXZlKClcXFwiIHJvdz1cXFwiMlxcXCI+PC9CdXR0b24+XFxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJDYW5jZWxcXFwiICh0YXApPVxcXCJvbkNhbmNlbCgpXFxcIiByb3c9XFxcIjNcXFwiPjwvQnV0dG9uPlxcbiAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICA8L1Njcm9sbFZpZXc+XFxuPC9HcmlkTGF5b3V0PlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IFByb2R1Y3QgZnJvbSAnQHNyYy9hcHAvc2hhcmVkL21vZGVscy9wcm9kdWN0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnQXBwRWRpdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9lZGl0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZWRpdC5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWRcbn0pXG5leHBvcnQgY2xhc3MgRWRpdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHByb2R1Y3Q6IFByb2R1Y3Q7XG4gIEBPdXRwdXQoKSBjYW5jZWw6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBvblNhdmUoKSB7XG5cbiAgfVxuXG4gIG9uQ2FuY2VsKCkge1xuICAgIHRoaXMuY2FuY2VsLmVtaXQoKTtcbiAgfVxuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcblwiIiwiZXhwb3J0IGRlZmF1bHQgXCI8R3JpZExheW91dD5cXG4gICAgPExpc3RWaWV3IFtpdGVtc109XFxcInByb2R1Y3RzTGlzdFxcXCIgKm5nSWY9XFxcIiFzZWxlY3RlZFByb2R1Y3RcXFwiIHNlcGFyYXRvckNvbG9yPVxcXCJ0cmFuc3BhcmVudFxcXCI+XFxuICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxBcHBQcm9kdWN0Q2FyZCBbcHJvZHVjdF09XFxcIml0ZW1cXFwiIChzZWxlY3QpPVxcXCJvblNlbGVjdCgkZXZlbnQpXFxcIj48L0FwcFByb2R1Y3RDYXJkPlxcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgPC9MaXN0Vmlldz5cXG5cXG4gICAgPEFwcERldGFpbHMgKm5nSWY9XFxcInNlbGVjdGVkUHJvZHVjdCAmJiAhZWRpdGVkUHJvZHVjdFxcXCIgW3Byb2R1Y3RdPVxcXCJzZWxlY3RlZFByb2R1Y3RcXFwiIChnb0JhY2spPVxcXCJvblNlbGVjdCgpXFxcIiAoZWRpdCk9XFxcIm9uRWRpdCgkZXZlbnQpXFxcIj48L0FwcERldGFpbHM+XFxuICAgIDxBcHBFZGl0ICpuZ0lmPVxcXCJlZGl0ZWRQcm9kdWN0XFxcIiBbcHJvZHVjdF09XFxcImVkaXRlZFByb2R1Y3RcXFwiIChjYW5jZWwpPVxcXCJvbkVkaXQoKVxcXCI+PC9BcHBFZGl0PlxcbjwvR3JpZExheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0c1NlcnZpY2UgfSBmcm9tICdAc3JjL2FwcC9zaGFyZWQvc2VydmljZXMvcHJvZHVjdHMvcHJvZHVjdHMuc2VydmljZSc7XG5pbXBvcnQgUHJvZHVjdCBmcm9tICdAc3JjL2FwcC9zaGFyZWQvbW9kZWxzL3Byb2R1Y3QnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdBcHBMaXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9saXN0LmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6ICdtb2R1bGUuaWQnXG59KVxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcm9kdWN0c0xpc3Q6IFByb2R1Y3QgW10gPSBbXTtcbiAgc2VsZWN0ZWRQcm9kdWN0OiBQcm9kdWN0ID0gdW5kZWZpbmVkO1xuICBlZGl0ZWRQcm9kdWN0OiBQcm9kdWN0ID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJvZHVjdHNTZXJ2aWNlOiBQcm9kdWN0c1NlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucHJvZHVjdHNMaXN0ID0gdGhpcy5wcm9kdWN0c1NlcnZpY2UuZ2V0QWxsUHJvZHVjdHMoKTtcbiAgfVxuXG4gIG9uU2VsZWN0KGV2ZW50OiBQcm9kdWN0KSB7XG4gICAgdGhpcy5zZWxlY3RlZFByb2R1Y3QgPSBldmVudDtcbiAgfVxuXG4gIG9uRWRpdChldmVudDogUHJvZHVjdCkge1xuICAgIHRoaXMuZWRpdGVkUHJvZHVjdCA9IGV2ZW50O1xuICB9XG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IFwiLnNpdGUtdGVtcGxhdGUtaW1hZ2Uge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDA7XFxuICAgIG1hcmdpbjogOCAxNjtcXG4gICAgd2lkdGg6IDYwO1xcbiAgICBoZWlnaHQ6IDYwO1xcbn1cXG5cXG4uc2l0ZS10ZW1wbGF0ZS10aXRsZSB7XFxuICAgIG1hcmdpbjogMCAwIDYgMDtcXG4gICAgZm9udC1zaXplOiAxODtcXG59XFxuXFxuLnNpdGUtdGVtcGxhdGUtZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IDExO1xcbn1cIiIsImV4cG9ydCBkZWZhdWx0IFwiPEdyaWRMYXlvdXQgcm93cz1cXFwiKiwgYXV0b1xcXCIgY29sdW1ucz1cXFwiYXV0bywgKiwgYXV0b1xcXCIgKHRhcCk9XFxcIm9uU2VsZWN0KClcXFwiPlxcbiAgICA8SW1hZ2Ugc3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCIgXFxuICAgICAgICBjb2w9XFxcIjBcXFwiXFxuICAgICAgICBjbGFzcz1cXFwic2l0ZS10ZW1wbGF0ZS1pbWFnZSB0aHVtYi13aXRoLWJhY2tncm91bmRcXFwiXFxuICAgICAgICBzcmM9XFxcImh0dHBzOi8vY2RuNC5pY29uZmluZGVyLmNvbS9kYXRhL2ljb25zL2xvZ29zLWFuZC1icmFuZHMvNTEyLzIxX0FuZ3VsYXJfbG9nb19sb2dvcy01MTIucG5nXFxcIiBoZWlnaHQ9XFxcIjQwXFxcIj48L0ltYWdlPlxcbiAgICA8U3RhY2tMYXlvdXQgY29sPVxcXCIxXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj5cXG4gICAgICAgIDxMYWJlbCBjbGFzcz1cXFwic2l0ZS10ZW1wbGF0ZS10aXRsZVxcXCIgW3RleHRdPVxcXCJwcm9kdWN0Lm5hbWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICA8TGFiZWwgY2xhc3M9XFxcInNpdGUtdGVtcGxhdGUtZGVzY3JpcHRpb25cXFwiIFt0ZXh0XT1cXFwicHJvZHVjdC5zaG9ydERlc2NyaXB0aW9uXFxcIj48L0xhYmVsPlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8U3RhY2tMYXlvdXQgbWFyZ2luPVxcXCIwLDE2LDAsNDJcXFwiIHJvdz1cXFwiMVxcXCIgY29sU3Bhbj1cXFwiMlxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCJsaWdodEdyYXlcXFwiIGhlaWdodD1cXFwiMVxcXCI+PC9TdGFja0xheW91dD5cXG48L0dyaWRMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgUHJvZHVjdCBmcm9tICdAc3JjL2FwcC9zaGFyZWQvbW9kZWxzL3Byb2R1Y3QnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdBcHBQcm9kdWN0Q2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LWNhcmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wcm9kdWN0LWNhcmQuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogJ21vZHVsZS5pZCdcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdENhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBwcm9kdWN0OiBQcm9kdWN0O1xuICBAT3V0cHV0KCkgc2VsZWN0OiBFdmVudEVtaXR0ZXI8UHJvZHVjdD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG9uU2VsZWN0KCkge1xuICAgIHRoaXMuc2VsZWN0LmVtaXQodGhpcy5wcm9kdWN0KTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuLi8uLi9tb2RlbHMvcHJvZHVjdCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RzRGFvU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBnZXRBbGwoKSA6IFByb2R1Y3RbXXtcbiAgICByZXR1cm4gW1xuICAgICAgPFByb2R1Y3Q+e2lkOiAxLCBuYW1lOiAnUHJvZHVjdCAxJywgc2hvcnREZXNjcmlwdGlvbjogJ1Nob3J0IGRlc2NyaXB0aW9uIG9mIHRoZSBwcm9kdWN0JywgbG9uZ0Rlc2NyaXB0aW9uOiAnTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5XFwncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNjcmFtYmxlZCBpdCB0byBtYWtlIGEgdHlwZSBzcGVjaW1lbiBib29rLiBJdCBoYXMgc3Vydml2ZWQgbm90IG9ubHkgZml2ZSBjZW50dXJpZXMsIGJ1dCBhbHNvIHRoZSBsZWFwIGludG8gZWxlY3Ryb25pYyB0eXBlc2V0dGluZywgcmVtYWluaW5nIGVzc2VudGlhbGx5IHVuY2hhbmdlZC4gSXQgd2FzIHBvcHVsYXJpc2VkIGluIHRoZSAxOTYwcyB3aXRoIHRoZSByZWxlYXNlIG9mIExldHJhc2V0IHNoZWV0cyBjb250YWluaW5nIExvcmVtIElwc3VtIHBhc3NhZ2VzLCBhbmQgbW9yZSByZWNlbnRseSB3aXRoIGRlc2t0b3AgcHVibGlzaGluZyBzb2Z0d2FyZSBsaWtlIEFsZHVzIFBhZ2VNYWtlciBpbmNsdWRpbmcgdmVyc2lvbnMgb2YgTG9yZW0gSXBzdW0uJ30sXG4gICAgICA8UHJvZHVjdD57aWQ6IDIsIG5hbWU6ICdQcm9kdWN0IDInLCBzaG9ydERlc2NyaXB0aW9uOiAnU2hvcnQgZGVzY3JpcHRpb24gb2YgdGhlIHByb2R1Y3QnLCBsb25nRGVzY3JpcHRpb246ICdMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnlcXCdzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2suIEl0IGhhcyBzdXJ2aXZlZCBub3Qgb25seSBmaXZlIGNlbnR1cmllcywgYnV0IGFsc28gdGhlIGxlYXAgaW50byBlbGVjdHJvbmljIHR5cGVzZXR0aW5nLCByZW1haW5pbmcgZXNzZW50aWFsbHkgdW5jaGFuZ2VkLiBJdCB3YXMgcG9wdWxhcmlzZWQgaW4gdGhlIDE5NjBzIHdpdGggdGhlIHJlbGVhc2Ugb2YgTGV0cmFzZXQgc2hlZXRzIGNvbnRhaW5pbmcgTG9yZW0gSXBzdW0gcGFzc2FnZXMsIGFuZCBtb3JlIHJlY2VudGx5IHdpdGggZGVza3RvcCBwdWJsaXNoaW5nIHNvZnR3YXJlIGxpa2UgQWxkdXMgUGFnZU1ha2VyIGluY2x1ZGluZyB2ZXJzaW9ucyBvZiBMb3JlbSBJcHN1bS4nfSxcbiAgICAgIDxQcm9kdWN0PntpZDogMywgbmFtZTogJ1Byb2R1Y3QgMycsIHNob3J0RGVzY3JpcHRpb246ICdTaG9ydCBkZXNjcmlwdGlvbiBvZiB0aGUgcHJvZHVjdCcsIGxvbmdEZXNjcmlwdGlvbjogJ0xvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeVxcJ3Mgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGUgc3BlY2ltZW4gYm9vay4gSXQgaGFzIHN1cnZpdmVkIG5vdCBvbmx5IGZpdmUgY2VudHVyaWVzLCBidXQgYWxzbyB0aGUgbGVhcCBpbnRvIGVsZWN0cm9uaWMgdHlwZXNldHRpbmcsIHJlbWFpbmluZyBlc3NlbnRpYWxseSB1bmNoYW5nZWQuIEl0IHdhcyBwb3B1bGFyaXNlZCBpbiB0aGUgMTk2MHMgd2l0aCB0aGUgcmVsZWFzZSBvZiBMZXRyYXNldCBzaGVldHMgY29udGFpbmluZyBMb3JlbSBJcHN1bSBwYXNzYWdlcywgYW5kIG1vcmUgcmVjZW50bHkgd2l0aCBkZXNrdG9wIHB1Ymxpc2hpbmcgc29mdHdhcmUgbGlrZSBBbGR1cyBQYWdlTWFrZXIgaW5jbHVkaW5nIHZlcnNpb25zIG9mIExvcmVtIElwc3VtLid9LFxuICAgICAgPFByb2R1Y3Q+e2lkOiA0LCBuYW1lOiAnUHJvZHVjdCA0Jywgc2hvcnREZXNjcmlwdGlvbjogJ1Nob3J0IGRlc2NyaXB0aW9uIG9mIHRoZSBwcm9kdWN0JywgbG9uZ0Rlc2NyaXB0aW9uOiAnTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5XFwncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNjcmFtYmxlZCBpdCB0byBtYWtlIGEgdHlwZSBzcGVjaW1lbiBib29rLiBJdCBoYXMgc3Vydml2ZWQgbm90IG9ubHkgZml2ZSBjZW50dXJpZXMsIGJ1dCBhbHNvIHRoZSBsZWFwIGludG8gZWxlY3Ryb25pYyB0eXBlc2V0dGluZywgcmVtYWluaW5nIGVzc2VudGlhbGx5IHVuY2hhbmdlZC4gSXQgd2FzIHBvcHVsYXJpc2VkIGluIHRoZSAxOTYwcyB3aXRoIHRoZSByZWxlYXNlIG9mIExldHJhc2V0IHNoZWV0cyBjb250YWluaW5nIExvcmVtIElwc3VtIHBhc3NhZ2VzLCBhbmQgbW9yZSByZWNlbnRseSB3aXRoIGRlc2t0b3AgcHVibGlzaGluZyBzb2Z0d2FyZSBsaWtlIEFsZHVzIFBhZ2VNYWtlciBpbmNsdWRpbmcgdmVyc2lvbnMgb2YgTG9yZW0gSXBzdW0uJ30sXG4gICAgICA8UHJvZHVjdD57aWQ6IDUsIG5hbWU6ICdQcm9kdWN0IDUnLCBzaG9ydERlc2NyaXB0aW9uOiAnU2hvcnQgZGVzY3JpcHRpb24gb2YgdGhlIHByb2R1Y3QnLCBsb25nRGVzY3JpcHRpb246ICdMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnlcXCdzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2suIEl0IGhhcyBzdXJ2aXZlZCBub3Qgb25seSBmaXZlIGNlbnR1cmllcywgYnV0IGFsc28gdGhlIGxlYXAgaW50byBlbGVjdHJvbmljIHR5cGVzZXR0aW5nLCByZW1haW5pbmcgZXNzZW50aWFsbHkgdW5jaGFuZ2VkLiBJdCB3YXMgcG9wdWxhcmlzZWQgaW4gdGhlIDE5NjBzIHdpdGggdGhlIHJlbGVhc2Ugb2YgTGV0cmFzZXQgc2hlZXRzIGNvbnRhaW5pbmcgTG9yZW0gSXBzdW0gcGFzc2FnZXMsIGFuZCBtb3JlIHJlY2VudGx5IHdpdGggZGVza3RvcCBwdWJsaXNoaW5nIHNvZnR3YXJlIGxpa2UgQWxkdXMgUGFnZU1ha2VyIGluY2x1ZGluZyB2ZXJzaW9ucyBvZiBMb3JlbSBJcHN1bS4nfSxcbiAgICAgIDxQcm9kdWN0PntpZDogNiwgbmFtZTogJ1Byb2R1Y3QgNicsIHNob3J0RGVzY3JpcHRpb246ICdTaG9ydCBkZXNjcmlwdGlvbiBvZiB0aGUgcHJvZHVjdCcsIGxvbmdEZXNjcmlwdGlvbjogJ0xvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeVxcJ3Mgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGUgc3BlY2ltZW4gYm9vay4gSXQgaGFzIHN1cnZpdmVkIG5vdCBvbmx5IGZpdmUgY2VudHVyaWVzLCBidXQgYWxzbyB0aGUgbGVhcCBpbnRvIGVsZWN0cm9uaWMgdHlwZXNldHRpbmcsIHJlbWFpbmluZyBlc3NlbnRpYWxseSB1bmNoYW5nZWQuIEl0IHdhcyBwb3B1bGFyaXNlZCBpbiB0aGUgMTk2MHMgd2l0aCB0aGUgcmVsZWFzZSBvZiBMZXRyYXNldCBzaGVldHMgY29udGFpbmluZyBMb3JlbSBJcHN1bSBwYXNzYWdlcywgYW5kIG1vcmUgcmVjZW50bHkgd2l0aCBkZXNrdG9wIHB1Ymxpc2hpbmcgc29mdHdhcmUgbGlrZSBBbGR1cyBQYWdlTWFrZXIgaW5jbHVkaW5nIHZlcnNpb25zIG9mIExvcmVtIElwc3VtLid9LFxuICAgICAgPFByb2R1Y3Q+e2lkOiA3LCBuYW1lOiAnUHJvZHVjdCA3Jywgc2hvcnREZXNjcmlwdGlvbjogJ1Nob3J0IGRlc2NyaXB0aW9uIG9mIHRoZSBwcm9kdWN0JywgbG9uZ0Rlc2NyaXB0aW9uOiAnTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5XFwncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNjcmFtYmxlZCBpdCB0byBtYWtlIGEgdHlwZSBzcGVjaW1lbiBib29rLiBJdCBoYXMgc3Vydml2ZWQgbm90IG9ubHkgZml2ZSBjZW50dXJpZXMsIGJ1dCBhbHNvIHRoZSBsZWFwIGludG8gZWxlY3Ryb25pYyB0eXBlc2V0dGluZywgcmVtYWluaW5nIGVzc2VudGlhbGx5IHVuY2hhbmdlZC4gSXQgd2FzIHBvcHVsYXJpc2VkIGluIHRoZSAxOTYwcyB3aXRoIHRoZSByZWxlYXNlIG9mIExldHJhc2V0IHNoZWV0cyBjb250YWluaW5nIExvcmVtIElwc3VtIHBhc3NhZ2VzLCBhbmQgbW9yZSByZWNlbnRseSB3aXRoIGRlc2t0b3AgcHVibGlzaGluZyBzb2Z0d2FyZSBsaWtlIEFsZHVzIFBhZ2VNYWtlciBpbmNsdWRpbmcgdmVyc2lvbnMgb2YgTG9yZW0gSXBzdW0uJ30sXG4gICAgICA8UHJvZHVjdD57aWQ6IDgsIG5hbWU6ICdQcm9kdWN0IDgnLCBzaG9ydERlc2NyaXB0aW9uOiAnU2hvcnQgZGVzY3JpcHRpb24gb2YgdGhlIHByb2R1Y3QnLCBsb25nRGVzY3JpcHRpb246ICdMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnlcXCdzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2suIEl0IGhhcyBzdXJ2aXZlZCBub3Qgb25seSBmaXZlIGNlbnR1cmllcywgYnV0IGFsc28gdGhlIGxlYXAgaW50byBlbGVjdHJvbmljIHR5cGVzZXR0aW5nLCByZW1haW5pbmcgZXNzZW50aWFsbHkgdW5jaGFuZ2VkLiBJdCB3YXMgcG9wdWxhcmlzZWQgaW4gdGhlIDE5NjBzIHdpdGggdGhlIHJlbGVhc2Ugb2YgTGV0cmFzZXQgc2hlZXRzIGNvbnRhaW5pbmcgTG9yZW0gSXBzdW0gcGFzc2FnZXMsIGFuZCBtb3JlIHJlY2VudGx5IHdpdGggZGVza3RvcCBwdWJsaXNoaW5nIHNvZnR3YXJlIGxpa2UgQWxkdXMgUGFnZU1ha2VyIGluY2x1ZGluZyB2ZXJzaW9ucyBvZiBMb3JlbSBJcHN1bS4nfSxcbiAgICAgIDxQcm9kdWN0PntpZDogOSwgbmFtZTogJ1Byb2R1Y3QgOScsIHNob3J0RGVzY3JpcHRpb246ICdTaG9ydCBkZXNjcmlwdGlvbiBvZiB0aGUgcHJvZHVjdCcsIGxvbmdEZXNjcmlwdGlvbjogJ0xvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeVxcJ3Mgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGUgc3BlY2ltZW4gYm9vay4gSXQgaGFzIHN1cnZpdmVkIG5vdCBvbmx5IGZpdmUgY2VudHVyaWVzLCBidXQgYWxzbyB0aGUgbGVhcCBpbnRvIGVsZWN0cm9uaWMgdHlwZXNldHRpbmcsIHJlbWFpbmluZyBlc3NlbnRpYWxseSB1bmNoYW5nZWQuIEl0IHdhcyBwb3B1bGFyaXNlZCBpbiB0aGUgMTk2MHMgd2l0aCB0aGUgcmVsZWFzZSBvZiBMZXRyYXNldCBzaGVldHMgY29udGFpbmluZyBMb3JlbSBJcHN1bSBwYXNzYWdlcywgYW5kIG1vcmUgcmVjZW50bHkgd2l0aCBkZXNrdG9wIHB1Ymxpc2hpbmcgc29mdHdhcmUgbGlrZSBBbGR1cyBQYWdlTWFrZXIgaW5jbHVkaW5nIHZlcnNpb25zIG9mIExvcmVtIElwc3VtLid9LFxuICAgICAgPFByb2R1Y3Q+e2lkOiAxMCwgbmFtZTogJ1Byb2R1Y3QgMTAnLCBzaG9ydERlc2NyaXB0aW9uOiAnU2hvcnQgZGVzY3JpcHRpb24gb2YgdGhlIHByb2R1Y3QnLCBsb25nRGVzY3JpcHRpb246ICdMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnlcXCdzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2suIEl0IGhhcyBzdXJ2aXZlZCBub3Qgb25seSBmaXZlIGNlbnR1cmllcywgYnV0IGFsc28gdGhlIGxlYXAgaW50byBlbGVjdHJvbmljIHR5cGVzZXR0aW5nLCByZW1haW5pbmcgZXNzZW50aWFsbHkgdW5jaGFuZ2VkLiBJdCB3YXMgcG9wdWxhcmlzZWQgaW4gdGhlIDE5NjBzIHdpdGggdGhlIHJlbGVhc2Ugb2YgTGV0cmFzZXQgc2hlZXRzIGNvbnRhaW5pbmcgTG9yZW0gSXBzdW0gcGFzc2FnZXMsIGFuZCBtb3JlIHJlY2VudGx5IHdpdGggZGVza3RvcCBwdWJsaXNoaW5nIHNvZnR3YXJlIGxpa2UgQWxkdXMgUGFnZU1ha2VyIGluY2x1ZGluZyB2ZXJzaW9ucyBvZiBMb3JlbSBJcHN1bS4nfSxcbiAgICBdO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuLi8uLi9tb2RlbHMvcHJvZHVjdCc7XG5pbXBvcnQgeyBQcm9kdWN0c0Rhb1NlcnZpY2UgfSBmcm9tICcuLi8uLi9kYW9zL3Byb2R1Y3RzL3Byb2R1Y3RzLmRhby5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdHNTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByb2R1Y3RzRGFvU2VydmljZTogUHJvZHVjdHNEYW9TZXJ2aWNlKSB7IH1cblxuICBnZXRBbGxQcm9kdWN0cygpIDogUHJvZHVjdCBbXSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZHVjdHNEYW9TZXJ2aWNlLmdldEFsbCgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uJztcblxuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGVcbiAgXSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7IH1cbiIsIi8vIHRoaXMgaW1wb3J0IHNob3VsZCBiZSBmaXJzdCBpbiBvcmRlciB0byBsb2FkIHNvbWUgcmVxdWlyZWQgc2V0dGluZ3MgKGxpa2UgZ2xvYmFscyBhbmQgcmVmbGVjdC1tZXRhZGF0YSlcbmltcG9ydCB7IHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtJztcblxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnQHNyYy9hcHAvYXBwLm1vZHVsZSc7XG5cbi8vIEEgdHJhZGl0aW9uYWwgTmF0aXZlU2NyaXB0IGFwcGxpY2F0aW9uIHN0YXJ0cyBieSBpbml0aWFsaXppbmcgZ2xvYmFsIG9iamVjdHMsXG4vLyBzZXR0aW5nIHVwIGdsb2JhbCBDU1MgcnVsZXMsIGNyZWF0aW5nLCBhbmQgbmF2aWdhdGluZyB0byB0aGUgbWFpbiBwYWdlLlxuLy8gQW5ndWxhciBhcHBsaWNhdGlvbnMgbmVlZCB0byB0YWtlIGNhcmUgb2YgdGhlaXIgb3duIGluaXRpYWxpemF0aW9uOiBtb2R1bGVzLCBjb21wb25lbnRzLCBkaXJlY3RpdmVzLCByb3V0ZXMsIERJIHByb3ZpZGVycy5cbi8vIEEgTmF0aXZlU2NyaXB0IEFuZ3VsYXIgYXBwIG5lZWRzIHRvIG1ha2UgYm90aCBwYXJhZGlnbXMgd29yayB0b2dldGhlcixcbi8vIHNvIHdlIHByb3ZpZGUgYSB3cmFwcGVyIHBsYXRmb3JtIG9iamVjdCwgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljLFxuLy8gdGhhdCBzZXRzIHVwIGEgTmF0aXZlU2NyaXB0IGFwcGxpY2F0aW9uIGFuZCBjYW4gYm9vdHN0cmFwIHRoZSBBbmd1bGFyIGZyYW1ld29yay5cbnBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==