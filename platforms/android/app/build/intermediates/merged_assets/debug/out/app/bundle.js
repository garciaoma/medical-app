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
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./app/shared/shared.module.ts");
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
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]
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
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__);
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
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"] }
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
            nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"]])
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
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__);
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
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"] }
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
        __metadata("design:paramtypes", [tns_core_modules_ui_page_page__WEBPACK_IMPORTED_MODULE_1__["Page"], nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"]])
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

/***/ "./app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/common.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _daos_products_products_dao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/shared/daos/products/products.dao.service.ts");
/* harmony import */ var _services_products_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/shared/services/products/products.service.ts");
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
            declarations: [
                _services_products_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"],
                _daos_products_products_dao_service__WEBPACK_IMPORTED_MODULE_2__["ProductsDaoService"]
            ],
            imports: [
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"]
            ],
            exports: [
                _services_products_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"],
                _daos_products_products_dao_service__WEBPACK_IMPORTED_MODULE_2__["ProductsDaoService"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC9hcHAtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5tb2R1bGUudG5zLnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAucm91dGVzLnRzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3BhZ2VzL3BheW1lbnQvcGF5bWVudC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3BhZ2VzL3BheW1lbnQvcGF5bWVudC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9wYWdlcy9wYXltZW50L3BheW1lbnQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3BhZ2VzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9wYWdlcy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3BhZ2VzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL2VkaXQvZWRpdC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL2VkaXQvZWRpdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9lZGl0L2VkaXQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL2xpc3QvbGlzdC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL2xpc3QvbGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9saXN0L2xpc3QuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3QtY2FyZC9wcm9kdWN0LWNhcmQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0LWNhcmQvcHJvZHVjdC1jYXJkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3QtY2FyZC9wcm9kdWN0LWNhcmQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9zaGFyZWQvZGFvcy9wcm9kdWN0cy9wcm9kdWN0cy5kYW8uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc2hhcmVkL3NlcnZpY2VzL3Byb2R1Y3RzL3Byb2R1Y3RzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NoYXJlZC9zaGFyZWQubW9kdWxlLnRzIiwid2VicGFjazovLy8uL21haW4udG5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsNENBQTRDLFdBQVc7QUFDdkQ7QUFDQTtBQUNBLHlFOzs7Ozs7O0FDWkEsK0dBQWlFLG1CQUFPLENBQUMsNEhBQTBGO0FBQ25LLGdFQUFnRSxtQkFBTyxDQUFDLDRIQUEwRjtBQUNsSyxpRUFBaUUsbUJBQU8sQ0FBQyw0SEFBMEY7QUFDbkssZ0VBQWdFLG1CQUFPLENBQUMsNEhBQTBGLEdBQUcsa0JBQWtCLGtDQUFrQyxVQUFVLCtEQUErRCxFQUFFLCtEQUErRDtBQUNuVyxRQUFRLElBQVU7QUFDbEI7QUFDQTtBQUNBLCtCQUErQixtQ0FBbUM7QUFDbEUsU0FBUztBQUNUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVHlDO0FBQzhCO0FBQzFCO0FBTTdDO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFKNUIsOERBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDLE9BQU8sQ0FBQywwREFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUM7U0FDcEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQTtBQUFKOzs7Ozs7Ozs7QUNS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RUFBRSxNQUFNO1NBQ25CLENBQUM7eUNBR3dDLHNGQUFrQjtPQUYvQyxlQUFlLENBTzNCO0lBQUQsc0JBQUM7Q0FBQTtBQVAyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ArQjtBQUNZO0FBQ0c7QUFDSDtBQW9CdkU7SUFBQTtJQUE0QixDQUFDO0lBQWhCLFlBQVk7UUFoQnhCLDhEQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1osbUZBQWU7Z0JBRWYsc0ZBQWtCO2FBQ25CO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLG9GQUF3QjthQUN6QjtZQUNELE9BQU8sRUFBRTtnQkFDUCxtRkFBZTtnQkFFZixzRkFBa0I7YUFDbkI7WUFDRCxPQUFPLEVBQUUsQ0FBQyw4REFBZ0IsQ0FBQztTQUM1QixDQUFDO09BQ1csWUFBWSxDQUFJO0lBQUQsbUJBQUM7Q0FBQTtBQUFKOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCekIsbUJBQU8sMERBQW1CLEVBQXNCOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRCxnRkFBZ0Y7QUFDaEYsa0NBQTBFO0FBQzFFLGlFQUE2SDtBQUM3SCxtQkFBeUU7QUFDekUsY0FBd0U7QUFDVztBQUNuRixzREFBeUQiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F1Z2h0IGV4Y2VwdGlvbiBwb3BwaW5nIHVwIGluIGRldnRvb2xzXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fSk7XG59XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gXCIuLi8kJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgcmVjdXJzaXZlXCI7IiwiZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9ibHVlLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9ibHVlLmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9ibHVlLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9ibHVlLmNzc1wiKSk7bW9kdWxlLmV4cG9ydHMgPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIid+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3MnXCJ9LHtcInR5cGVcIjpcImltcG9ydFwiLFwiaW1wb3J0XCI6XCInfkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2JsdWUuY3NzJ1wifV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tICdAc3JjL2FwcC9hcHAucm91dGVzJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxuIiwiZXhwb3J0IGRlZmF1bHQgXCIucGFnZSB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XCIiLCJleHBvcnQgZGVmYXVsdCBcIiAgPHBhZ2Utcm91dGVyLW91dGxldD48L3BhZ2Utcm91dGVyLW91dGxldD5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1yb290JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FwcC5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWRcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hcHAtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lnbnVwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL3NpZ251cC9zaWdudXAuY29tcG9uZW50JztcbmltcG9ydCB7IFBheW1lbnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMvcGF5bWVudC9wYXltZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3Byb2R1Y3RzL2xpc3QvbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBEZXRhaWxzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3Byb2R1Y3RzL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZHVjdENhcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdC1jYXJkL3Byb2R1Y3QtY2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRWRpdENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wcm9kdWN0cy9lZGl0L2VkaXQuY29tcG9uZW50JztcblxuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0d28td2F5IGJpbmRpbmdcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXMnO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzICBpZiB5b3UgbmVlZCB0byB1c2UgdGhlIEhUVFAgd3JhcHBlclxuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwQ29tcG9uZW50LFxuICAgIEhvbWVDb21wb25lbnQsXG4gICAgTG9naW5Db21wb25lbnQsXG4gICAgU2lnbnVwQ29tcG9uZW50LFxuICAgIFBheW1lbnRDb21wb25lbnQsXG4gICAgTGlzdENvbXBvbmVudCxcbiAgICBEZXRhaWxzQ29tcG9uZW50LFxuICAgIFByb2R1Y3RDYXJkQ29tcG9uZW50LFxuICAgIEVkaXRDb21wb25lbnQsXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICBTaGFyZWRNb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXSxcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiIsImltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lnbnVwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL3NpZ251cC9zaWdudXAuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgICBwYXRoOiAnJyxcbiAgICAgIHJlZGlyZWN0VG86ICcvbG9naW4nLFxuICAgICAgcGF0aE1hdGNoOiAnZnVsbCcsXG4gIH0sXG4gIHtcbiAgICAgIHBhdGg6ICdsb2dpbicsXG4gICAgICBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50LFxuICB9LFxuICB7XG4gICAgcGF0aDogJ2hvbWUnLFxuICAgIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICdzaWduVXAnLFxuICAgIGNvbXBvbmVudDogU2lnbnVwQ29tcG9uZW50LFxuICB9LFxuXTtcbiIsImV4cG9ydCBkZWZhdWx0IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxuXCIiLCJleHBvcnQgZGVmYXVsdCBcIjxTdGFja0xheW91dD5cXG4gICAgPEFwcExpc3Q+PC9BcHBMaXN0PlxcbjwvU3RhY2tMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWhvbWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vaG9tZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gIH1cblxufVxuIiwiZXhwb3J0IGRlZmF1bHQgXCIuZm9ybSB7XFxuICBtYXJnaW4tbGVmdDogMzA7XFxuICBtYXJnaW4tcmlnaHQ6IDMwO1xcbiAgZmxleC1ncm93OiAyO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgbWFyZ2luLWJvdHRvbTogMTI7XFxuICBoZWlnaHQ6IDkwO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5oZWFkZXIge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyNTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBtYXJnaW4tYm90dG9tOiA3MDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjZDUxYTFhO1xcbn1cXG5cXG4uaW5wdXQtZmllbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogMjU7XFxufVxcblxcbi5pbnB1dCB7XFxuICBmb250LXNpemU6IDE4O1xcbiAgcGxhY2Vob2xkZXItY29sb3I6ICNhOGE4YTg7XFxufVxcblxcbi5pbnB1dDpkaXNhYmxlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLmJ0bi1wcmltYXJ5IHtcXG4gIG1hcmdpbjogMzAgNSAxNSA1O1xcbn1cXG5cXG4ubG9naW4tbGFiZWwge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICNhOGE4YTg7XFxuICBmb250LXNpemU6IDE2O1xcbn1cXG5cXG4uYm9sZCB7XFxuICBjb2xvcjogIzAwMDAwMDtcXG59XFxuXCIiLCJleHBvcnQgZGVmYXVsdCBcIjxGbGV4Ym94TGF5b3V0IGNsYXNzPVxcXCJwYWdlXFxcIj5cXG4gICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJmb3JtXFxcIj5cXG4gICAgICAgIDxJbWFnZSBjbGFzcz1cXFwibG9nb1xcXCIgc3JjPVxcXCJodHRwczovL2NkbjQuaWNvbmZpbmRlci5jb20vZGF0YS9pY29ucy9sb2dvcy1hbmQtYnJhbmRzLzUxMi8yMV9Bbmd1bGFyX2xvZ29fbG9nb3MtNTEyLnBuZ1xcXCI+PC9JbWFnZT5cXG4gICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiaGVhZGVyXFxcIiB0ZXh0PVxcXCJNZWRpY2FsIGFwcFxcXCI+PC9MYWJlbD5cXG5cXG4gICAgICAgIDxQcmV2aW91c05leHRWaWV3PlxcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcImF1dG8sIGF1dG8sIGF1dG9cXFwiPlxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIwXFxcIiBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjbGFzcz1cXFwiaW5wdXRcXFwiIGhpbnQ9XFxcIkVtYWlsXFxcIiBbaXNFbmFibGVkXT1cXFwiIXByb2Nlc3NpbmdcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlPVxcXCJlbWFpbFxcXCIgYXV0b2NvcnJlY3Q9XFxcImZhbHNlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XFxcIm5vbmVcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLmVtYWlsXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU9XFxcIm5leHRcXFwiIChyZXR1cm5QcmVzcyk9XFxcImZvY3VzUGFzc3dvcmQoKVxcXCI+PC9UZXh0RmllbGQ+XFxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhyLWxpZ2h0XFxcIj48L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIxXFxcIiBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCAjcGFzc3dvcmQgY2xhc3M9XFxcImlucHV0XFxcIiBbaXNFbmFibGVkXT1cXFwiIXByb2Nlc3NpbmdcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgaGludD1cXFwiUGFzc3dvcmRcXFwiIHNlY3VyZT1cXFwidHJ1ZVxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIucGFzc3dvcmRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgW3JldHVybktleVR5cGVdPVxcXCJpc0xvZ2dpbmdJbiA/ICdkb25lJyA6ICduZXh0J1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAocmV0dXJuUHJlc3MpPVxcXCJmb2N1c0NvbmZpcm1QYXNzd29yZCgpXFxcIj48L1RleHRGaWVsZD5cXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaHItbGlnaHRcXFwiPjwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XFxcIjJcXFwiICpuZ0lmPVxcXCIhaXNMb2dnaW5nSW5cXFwiIGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkICNjb25maXJtUGFzc3dvcmQgY2xhc3M9XFxcImlucHV0XFxcIiBbaXNFbmFibGVkXT1cXFwiIXByb2Nlc3NpbmdcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgaGludD1cXFwiQ29uZmlybSBwYXNzd29yZFxcXCIgc2VjdXJlPVxcXCJ0cnVlXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci5jb25maXJtUGFzc3dvcmRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuS2V5VHlwZT1cXFwiZG9uZVxcXCI+PC9UZXh0RmllbGQ+XFxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhyLWxpZ2h0XFxcIj48L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICA8QWN0aXZpdHlJbmRpY2F0b3Igcm93U3Bhbj1cXFwiM1xcXCIgW2J1c3ldPVxcXCJwcm9jZXNzaW5nXFxcIj48L0FjdGl2aXR5SW5kaWNhdG9yPlxcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgIDwvUHJldmlvdXNOZXh0Vmlldz5cXG5cXG4gICAgICAgIDxCdXR0b24gdGV4dD1cXFwiTG9nIGluXFxcIiAodGFwKT1cXFwic3VibWl0KClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgbS10LTIwXFxcIj48L0J1dHRvbj5cXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJTaWduIHVwXFxcIiBjbGFzcz1cXFwibG9naW4tbGFiZWxcXFwiXFxuICAgICAgICAgICAgKHRhcCk9XFxcInNpZ25VcCgpXFxcIj48L0xhYmVsPlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbjwvRmxleGJveExheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGFsZXJ0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ0FwcExvZ2luJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcbiAgaXNMb2dnaW5nSW4gPSB0cnVlO1xuICBwcm9jZXNzaW5nID0gZmFsc2U7XG4gIHVzZXI6IGFueTtcbiAgQFZpZXdDaGlsZChcInBhc3N3b3JkXCIsIHtzdGF0aWM6IGZhbHNlfSkgcGFzc3dvcmQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJjb25maXJtUGFzc3dvcmRcIiwge3N0YXRpYzogZmFsc2V9KSBjb25maXJtUGFzc3dvcmQ6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucykge1xuICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gIH1cblxuICB0b2dnbGVGb3JtKCkge1xuICAgICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xuICB9XG5cbiAgc3VibWl0KCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9ob21lXCJdKTtcbiAgfVxuXG4gIGxvZ2luKCkge1xuICAgIFxuICB9XG5cbiAgcmVnaXN0ZXIoKSB7XG4gIH1cblxuICBzaWduVXAoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3NpZ25VcFwiXSk7XG4gIH1cblxuICBmb2N1c1Bhc3N3b3JkKCkge1xuXG4gIH1cbiAgZm9jdXNDb25maXJtUGFzc3dvcmQoKSB7XG5cbiAgfVxuXG4gIGFsZXJ0KG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgcmV0dXJuIGFsZXJ0KHtcbiAgICAgICAgICB0aXRsZTogXCJBUFAgTkFNRVwiLFxuICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiLFxuICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICAgIH0pO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcblwiIiwiZXhwb3J0IGRlZmF1bHQgXCI8QnV0dG9uIHRleHQ9XFxcInBheW1lbnQgd29ya3MhXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj48L0J1dHRvbj5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1wYXltZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BheW1lbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wYXltZW50LmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZFxufSlcbmV4cG9ydCBjbGFzcyBQYXltZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxuLmZvcm0ge1xcbiAgICBtYXJnaW4tbGVmdDogMzA7XFxuICAgIG1hcmdpbi1yaWdodDogMzA7XFxuICAgIGZsZXgtZ3JvdzogMjtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIH1cXG4gIFxcbiAgLmxvZ28ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMjtcXG4gICAgaGVpZ2h0OiA5MDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxuICAuaGVhZGVyIHtcXG4gICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI1O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiA3MDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogI2Q1MWExYTtcXG4gIH1cXG4gIFxcbiAgLmlucHV0LWZpZWxkIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjU7XFxuICB9XFxuICBcXG4gIC5pbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMTg7XFxuICAgIHBsYWNlaG9sZGVyLWNvbG9yOiAjYThhOGE4O1xcbiAgfVxcbiAgXFxuICAuaW5wdXQ6ZGlzYWJsZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgfVxcbiAgXFxuICAuYnRuLXByaW1hcnkge1xcbiAgICBtYXJnaW46IDMwIDUgMTUgNTtcXG4gIH1cXG4gIFxcbiAgLmxvZ2luLWxhYmVsIHtcXG4gICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogI2E4YThhODtcXG4gICAgZm9udC1zaXplOiAxNjtcXG4gIH1cXG4gIFxcbiAgLmJvbGQge1xcbiAgICBjb2xvcjogIzAwMDAwMDtcXG4gIH1cXG4gIFwiIiwiZXhwb3J0IGRlZmF1bHQgXCI8RmxleGJveExheW91dCBjbGFzcz1cXFwicGFnZVxcXCI+XFxuICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImZvcm1cXFwiPlxcbiAgICAgIDxJbWFnZSBjbGFzcz1cXFwibG9nb1xcXCIgc3JjPVxcXCJodHRwczovL2NkbjQuaWNvbmZpbmRlci5jb20vZGF0YS9pY29ucy9sb2dvcy1hbmQtYnJhbmRzLzUxMi8yMV9Bbmd1bGFyX2xvZ29fbG9nb3MtNTEyLnBuZ1xcXCI+PC9JbWFnZT5cXG4gICAgICA8TGFiZWwgY2xhc3M9XFxcImhlYWRlclxcXCIgdGV4dD1cXFwiTWVkaWNhbCBhcHBcXFwiPjwvTGFiZWw+XFxuXFxuICAgICAgPFByZXZpb3VzTmV4dFZpZXc+XFxuICAgICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcImF1dG8sIGF1dG8sIGF1dG9cXFwiPlxcbiAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cXFwiMFxcXCIgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzPVxcXCJpbnB1dFxcXCIgaGludD1cXFwiRW1haWxcXFwiIFtpc0VuYWJsZWRdPVxcXCIhcHJvY2Vzc2luZ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlPVxcXCJlbWFpbFxcXCIgYXV0b2NvcnJlY3Q9XFxcImZhbHNlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVxcXCJub25lXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci5lbWFpbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuS2V5VHlwZT1cXFwibmV4dFxcXCIgKHJldHVyblByZXNzKT1cXFwiZm9jdXNQYXNzd29yZCgpXFxcIj48L1RleHRGaWVsZD5cXG4gICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhyLWxpZ2h0XFxcIj48L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG5cXG4gICAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XFxcIjFcXFwiIGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCAjcGFzc3dvcmQgY2xhc3M9XFxcImlucHV0XFxcIiBbaXNFbmFibGVkXT1cXFwiIXByb2Nlc3NpbmdcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XFxcIlBhc3N3b3JkXFxcIiBzZWN1cmU9XFxcInRydWVcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLnBhc3N3b3JkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICBbcmV0dXJuS2V5VHlwZV09XFxcImlzTG9nZ2luZ0luID8gJ2RvbmUnIDogJ25leHQnXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAocmV0dXJuUHJlc3MpPVxcXCJmb2N1c0NvbmZpcm1QYXNzd29yZCgpXFxcIj48L1RleHRGaWVsZD5cXG4gICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhyLWxpZ2h0XFxcIj48L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG5cXG4gICAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XFxcIjJcXFwiICpuZ0lmPVxcXCIhaXNMb2dnaW5nSW5cXFwiIGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCAjY29uZmlybVBhc3N3b3JkIGNsYXNzPVxcXCJpbnB1dFxcXCIgW2lzRW5hYmxlZF09XFxcIiFwcm9jZXNzaW5nXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICBoaW50PVxcXCJDb25maXJtIHBhc3N3b3JkXFxcIiBzZWN1cmU9XFxcInRydWVcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLmNvbmZpcm1QYXNzd29yZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuS2V5VHlwZT1cXFwiZG9uZVxcXCI+PC9UZXh0RmllbGQ+XFxuICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJoci1saWdodFxcXCI+PC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgICA8QWN0aXZpdHlJbmRpY2F0b3Igcm93U3Bhbj1cXFwiM1xcXCIgW2J1c3ldPVxcXCJwcm9jZXNzaW5nXFxcIj48L0FjdGl2aXR5SW5kaWNhdG9yPlxcbiAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgPC9QcmV2aW91c05leHRWaWV3PlxcblxcbiAgICAgIDxCdXR0b24gdGV4dD1cXFwiUmVnaXN0ZXJcXFwiICh0YXApPVxcXCJzdWJtaXQoKVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBtLXQtMjBcXFwiPjwvQnV0dG9uPlxcbiAgPC9TdGFja0xheW91dD5cXG48L0ZsZXhib3hMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2VcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJhcHAtc2lnbnVwXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vc2lnbnVwLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9zaWdudXAuY29tcG9uZW50LmNzc1wiXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZFxufSlcbmV4cG9ydCBjbGFzcyBTaWdudXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpc0xvZ2dpbmdJbiA9IHRydWU7XG4gIHByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgdXNlcjogYW55O1xuICBAVmlld0NoaWxkKFwicGFzc3dvcmRcIiwgeyBzdGF0aWM6IGZhbHNlIH0pIHBhc3N3b3JkOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiY29uZmlybVBhc3N3b3JkXCIsIHsgc3RhdGljOiBmYWxzZSB9KSBjb25maXJtUGFzc3dvcmQ6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucykge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgfVxuXG4gIHRvZ2dsZUZvcm0oKSB7XG4gICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xuICB9XG5cbiAgc3VibWl0KCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9ob21lXCJdKTtcbiAgfVxuXG4gIGxvZ2luKCkge31cblxuICByZWdpc3RlcigpIHt9XG5cbiAgZm9jdXNQYXNzd29yZCgpIHt9XG4gIGZvY3VzQ29uZmlybVBhc3N3b3JkKCkge31cblxuICBhbGVydChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gYWxlcnQoe1xuICAgICAgdGl0bGU6IFwiQVBQIE5BTUVcIixcbiAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiLFxuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBcIi5zaXRlLW1haW4tY29udGVudCB7XFxuICAgIG1hcmdpbjogMTIgMjQ7XFxufVxcblxcbi5zaXRlLW1haW4tY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAxMiAwO1xcbn1cXG5cXG4uc2l0ZS1pdGVtLWhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMTY7XFxufVxcblxcbi5zaXRlLWl0ZW0tc2hvcnQtZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IDg7XFxufVxcblxcbi5zaXRlLWl0ZW0tbG9uZy1kZXNjcmlwdGlvbiB7XFxuICAgIG1hcmdpbjogMTIgMDtcXG4gICAgZm9udC1zaXplOiAxMDtcXG59XCIiLCJleHBvcnQgZGVmYXVsdCBcIjxHcmlkTGF5b3V0PlxcbiAgICA8U2Nyb2xsVmlldz5cXG4gICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcImF1dG8sIGF1dG8sIGF1dG8sIGF1dG9cXFwiPlxcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IGhlaWdodD1cXFwiMjAwXFxcIiByb3c9XFxcIjBcXFwiPlxcblxcdFxcdFxcdFxcdDxJbWFnZSBjb2xTcGFuPVxcXCI0XFxcIiBzcmM9XFxcImh0dHBzOi8vbWlyby5tZWRpdW0uY29tL21heC8yODgwLzEqVWJWV0NPdVJnR1d6VXB5RDZWRmh2US5wbmdcXFwiIHN0cmV0Y2g9XFxcImFzcGVjdEZpbGxcXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwic2l0ZS1tYWluLWNvbnRlbnRcXFwiIHJvdz1cXFwiMVxcXCI+XFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwic2l0ZS1pdGVtLWhlYWRlclxcXCIgW3RleHRdPVxcXCJwcm9kdWN0Lm5hbWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcInNpdGUtaXRlbS1zaG9ydC1kZXNjcmlwdGlvblxcXCIgW3RleHRdPVxcXCJwcm9kdWN0LnNob3J0RGVzY3JpcHRpb25cXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDxGbGV4TGF5b3V0PlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJzaXRlLWl0ZW0tbG9uZy1kZXNjcmlwdGlvblxcXCIgW3RleHRdPVxcXCJwcm9kdWN0LmxvbmdEZXNjcmlwdGlvblxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDwvRmxleExheW91dD5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiRWRpdFxcXCIgKHRhcCk9XFxcIm9uRWRpdCgpXFxcIiByb3c9XFxcIjJcXFwiPjwvQnV0dG9uPlxcbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiR28gQmFja1xcXCIgKHRhcCk9XFxcIm9uR29CYWNrKClcXFwiIHJvdz1cXFwiM1xcXCI+PC9CdXR0b24+XFxuICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgIDwvU2Nyb2xsVmlldz5cXG48L0dyaWRMYXlvdXQ+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgUHJvZHVjdCBmcm9tICdAc3JjL2FwcC9zaGFyZWQvbW9kZWxzL3Byb2R1Y3QnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdBcHBEZXRhaWxzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RldGFpbHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kZXRhaWxzLmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZFxufSlcbmV4cG9ydCBjbGFzcyBEZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgcHJvZHVjdDogUHJvZHVjdDtcbiAgQE91dHB1dCgpIGdvQmFjazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBlZGl0OiBFdmVudEVtaXR0ZXI8UHJvZHVjdD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG9uR29CYWNrKCkge1xuICAgIHRoaXMuZ29CYWNrLmVtaXQoKTtcbiAgfVxuXG4gIG9uRWRpdCgpIHtcbiAgICB0aGlzLmVkaXQuZW1pdCh0aGlzLnByb2R1Y3QpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBcIi5zaXRlLW1haW4tY29udGVudCB7XFxuICAgIG1hcmdpbjogMTIgMjQ7XFxufVxcblxcbi5zaXRlLW1haW4tY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAxMiAwO1xcbn1cXG5cXG4uc2l0ZS1pdGVtLWhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMTY7XFxufVxcblxcbi5zaXRlLWl0ZW0tc2hvcnQtZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IDg7XFxufVxcblxcbi5zaXRlLWl0ZW0tbG9uZy1kZXNjcmlwdGlvbiB7XFxuICAgIG1hcmdpbjogMTIgMDtcXG4gICAgZm9udC1zaXplOiAxMDtcXG59XCIiLCJleHBvcnQgZGVmYXVsdCBcIjxHcmlkTGF5b3V0PlxcbiAgICA8U2Nyb2xsVmlldz5cXG4gICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcImF1dG8sIGF1dG8sIGF1dG8sIGF1dG9cXFwiPlxcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IGhlaWdodD1cXFwiMjAwXFxcIiByb3c9XFxcIjBcXFwiPlxcblxcdFxcdFxcdFxcdDxJbWFnZSBjb2xTcGFuPVxcXCI0XFxcIiBzcmM9XFxcImh0dHBzOi8vbWlyby5tZWRpdW0uY29tL21heC8yODgwLzEqVWJWV0NPdVJnR1d6VXB5RDZWRmh2US5wbmdcXFwiIHN0cmV0Y2g9XFxcImFzcGVjdEZpbGxcXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwic2l0ZS1tYWluLWNvbnRlbnRcXFwiIHJvdz1cXFwiMVxcXCI+XFxuICAgICAgICAgICAgICAgIDxGbGV4TGF5b3V0PlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlByb2R1Y3QgTmFtZTpcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIFt0ZXh0XT1cXFwicHJvZHVjdC5uYW1lXFxcIj48L1RleHRGaWVsZD5cXG4gICAgICAgICAgICAgICAgPC9GbGV4TGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8RmxleExheW91dD5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJTaG9ydCBkZXNjcmlwdGlvbjpcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIFt0ZXh0XT1cXFwicHJvZHVjdC5zaG9ydERlc2NyaXB0aW9uXFxcIj48L1RleHRGaWVsZD5cXG4gICAgICAgICAgICAgICAgPC9GbGV4TGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8RmxleExheW91dD5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJMb25kIGRlc2NyaXB0aW9uOlxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0VmlldyBbdGV4dF09XFxcInByb2R1Y3QubG9uZ0Rlc2NyaXB0aW9uXFxcIj48L1RleHRWaWV3PlxcbiAgICAgICAgICAgICAgICA8L0ZsZXhMYXlvdXQ+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG5cXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIlNhdmVcXFwiICh0YXApPVxcXCJvblNhdmUoKVxcXCIgcm93PVxcXCIyXFxcIj48L0J1dHRvbj5cXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkNhbmNlbFxcXCIgKHRhcCk9XFxcIm9uQ2FuY2VsKClcXFwiIHJvdz1cXFwiM1xcXCI+PC9CdXR0b24+XFxuICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgIDwvU2Nyb2xsVmlldz5cXG48L0dyaWRMYXlvdXQ+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgUHJvZHVjdCBmcm9tICdAc3JjL2FwcC9zaGFyZWQvbW9kZWxzL3Byb2R1Y3QnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdBcHBFZGl0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2VkaXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9lZGl0LmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZFxufSlcbmV4cG9ydCBjbGFzcyBFZGl0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgcHJvZHVjdDogUHJvZHVjdDtcbiAgQE91dHB1dCgpIGNhbmNlbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG9uU2F2ZSgpIHtcblxuICB9XG5cbiAgb25DYW5jZWwoKSB7XG4gICAgdGhpcy5jYW5jZWwuZW1pdCgpO1xuICB9XG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxuXCIiLCJleHBvcnQgZGVmYXVsdCBcIjxHcmlkTGF5b3V0PlxcbiAgICA8TGlzdFZpZXcgW2l0ZW1zXT1cXFwicHJvZHVjdHNMaXN0XFxcIiAqbmdJZj1cXFwiIXNlbGVjdGVkUHJvZHVjdFxcXCIgc2VwYXJhdG9yQ29sb3I9XFxcInRyYW5zcGFyZW50XFxcIj5cXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgPEFwcFByb2R1Y3RDYXJkIFtwcm9kdWN0XT1cXFwiaXRlbVxcXCIgKHNlbGVjdCk9XFxcIm9uU2VsZWN0KCRldmVudClcXFwiPjwvQXBwUHJvZHVjdENhcmQ+XFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICA8L0xpc3RWaWV3PlxcblxcbiAgICA8QXBwRGV0YWlscyAqbmdJZj1cXFwic2VsZWN0ZWRQcm9kdWN0ICYmICFlZGl0ZWRQcm9kdWN0XFxcIiBbcHJvZHVjdF09XFxcInNlbGVjdGVkUHJvZHVjdFxcXCIgKGdvQmFjayk9XFxcIm9uU2VsZWN0KClcXFwiIChlZGl0KT1cXFwib25FZGl0KCRldmVudClcXFwiPjwvQXBwRGV0YWlscz5cXG4gICAgPEFwcEVkaXQgKm5nSWY9XFxcImVkaXRlZFByb2R1Y3RcXFwiIFtwcm9kdWN0XT1cXFwiZWRpdGVkUHJvZHVjdFxcXCIgKGNhbmNlbCk9XFxcIm9uRWRpdCgpXFxcIj48L0FwcEVkaXQ+XFxuPC9HcmlkTGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3RzU2VydmljZSB9IGZyb20gJ0BzcmMvYXBwL3NoYXJlZC9zZXJ2aWNlcy9wcm9kdWN0cy9wcm9kdWN0cy5zZXJ2aWNlJztcbmltcG9ydCBQcm9kdWN0IGZyb20gJ0BzcmMvYXBwL3NoYXJlZC9tb2RlbHMvcHJvZHVjdCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ0FwcExpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xpc3QuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkXG59KVxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcm9kdWN0c0xpc3Q6IFByb2R1Y3QgW10gPSBbXTtcbiAgc2VsZWN0ZWRQcm9kdWN0OiBQcm9kdWN0ID0gdW5kZWZpbmVkO1xuICBlZGl0ZWRQcm9kdWN0OiBQcm9kdWN0ID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJvZHVjdHNTZXJ2aWNlOiBQcm9kdWN0c1NlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucHJvZHVjdHNMaXN0ID0gdGhpcy5wcm9kdWN0c1NlcnZpY2UuZ2V0QWxsUHJvZHVjdHMoKTtcbiAgfVxuXG4gIG9uU2VsZWN0KGV2ZW50OiBQcm9kdWN0KSB7XG4gICAgdGhpcy5zZWxlY3RlZFByb2R1Y3QgPSBldmVudDtcbiAgfVxuXG4gIG9uRWRpdChldmVudDogUHJvZHVjdCkge1xuICAgIHRoaXMuZWRpdGVkUHJvZHVjdCA9IGV2ZW50O1xuICB9XG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IFwiLnNpdGUtdGVtcGxhdGUtaW1hZ2Uge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDA7XFxuICAgIG1hcmdpbjogOCAxNjtcXG4gICAgd2lkdGg6IDYwO1xcbiAgICBoZWlnaHQ6IDYwO1xcbn1cXG5cXG4uc2l0ZS10ZW1wbGF0ZS10aXRsZSB7XFxuICAgIG1hcmdpbjogMCAwIDYgMDtcXG4gICAgZm9udC1zaXplOiAxODtcXG59XFxuXFxuLnNpdGUtdGVtcGxhdGUtZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IDExO1xcbn1cIiIsImV4cG9ydCBkZWZhdWx0IFwiPEdyaWRMYXlvdXQgcm93cz1cXFwiKiwgYXV0b1xcXCIgY29sdW1ucz1cXFwiYXV0bywgKiwgYXV0b1xcXCIgKHRhcCk9XFxcIm9uU2VsZWN0KClcXFwiPlxcbiAgICA8SW1hZ2Ugc3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCIgXFxuICAgICAgICBjb2w9XFxcIjBcXFwiXFxuICAgICAgICBjbGFzcz1cXFwic2l0ZS10ZW1wbGF0ZS1pbWFnZSB0aHVtYi13aXRoLWJhY2tncm91bmRcXFwiXFxuICAgICAgICBzcmM9XFxcImh0dHBzOi8vY2RuNC5pY29uZmluZGVyLmNvbS9kYXRhL2ljb25zL2xvZ29zLWFuZC1icmFuZHMvNTEyLzIxX0FuZ3VsYXJfbG9nb19sb2dvcy01MTIucG5nXFxcIiBoZWlnaHQ9XFxcIjQwXFxcIj48L0ltYWdlPlxcbiAgICA8U3RhY2tMYXlvdXQgY29sPVxcXCIxXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj5cXG4gICAgICAgIDxMYWJlbCBjbGFzcz1cXFwic2l0ZS10ZW1wbGF0ZS10aXRsZVxcXCIgW3RleHRdPVxcXCJwcm9kdWN0Lm5hbWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICA8TGFiZWwgY2xhc3M9XFxcInNpdGUtdGVtcGxhdGUtZGVzY3JpcHRpb25cXFwiIFt0ZXh0XT1cXFwicHJvZHVjdC5zaG9ydERlc2NyaXB0aW9uXFxcIj48L0xhYmVsPlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8U3RhY2tMYXlvdXQgbWFyZ2luPVxcXCIwLDE2LDAsNDJcXFwiIHJvdz1cXFwiMVxcXCIgY29sU3Bhbj1cXFwiMlxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCJsaWdodEdyYXlcXFwiIGhlaWdodD1cXFwiMVxcXCI+PC9TdGFja0xheW91dD5cXG48L0dyaWRMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgUHJvZHVjdCBmcm9tICdAc3JjL2FwcC9zaGFyZWQvbW9kZWxzL3Byb2R1Y3QnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdBcHBQcm9kdWN0Q2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LWNhcmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wcm9kdWN0LWNhcmQuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RDYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgcHJvZHVjdDogUHJvZHVjdDtcbiAgQE91dHB1dCgpIHNlbGVjdDogRXZlbnRFbWl0dGVyPFByb2R1Y3Q+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBvblNlbGVjdCgpIHtcbiAgICB0aGlzLnNlbGVjdC5lbWl0KHRoaXMucHJvZHVjdCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi4vLi4vbW9kZWxzL3Byb2R1Y3QnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0c0Rhb1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgZ2V0QWxsKCkgOiBQcm9kdWN0W117XG4gICAgcmV0dXJuIFtcbiAgICAgIDxQcm9kdWN0PntpZDogMSwgbmFtZTogJ1Byb2R1Y3QgMScsIHNob3J0RGVzY3JpcHRpb246ICdTaG9ydCBkZXNjcmlwdGlvbiBvZiB0aGUgcHJvZHVjdCcsIGxvbmdEZXNjcmlwdGlvbjogJ0xvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeVxcJ3Mgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGUgc3BlY2ltZW4gYm9vay4gSXQgaGFzIHN1cnZpdmVkIG5vdCBvbmx5IGZpdmUgY2VudHVyaWVzLCBidXQgYWxzbyB0aGUgbGVhcCBpbnRvIGVsZWN0cm9uaWMgdHlwZXNldHRpbmcsIHJlbWFpbmluZyBlc3NlbnRpYWxseSB1bmNoYW5nZWQuIEl0IHdhcyBwb3B1bGFyaXNlZCBpbiB0aGUgMTk2MHMgd2l0aCB0aGUgcmVsZWFzZSBvZiBMZXRyYXNldCBzaGVldHMgY29udGFpbmluZyBMb3JlbSBJcHN1bSBwYXNzYWdlcywgYW5kIG1vcmUgcmVjZW50bHkgd2l0aCBkZXNrdG9wIHB1Ymxpc2hpbmcgc29mdHdhcmUgbGlrZSBBbGR1cyBQYWdlTWFrZXIgaW5jbHVkaW5nIHZlcnNpb25zIG9mIExvcmVtIElwc3VtLid9LFxuICAgICAgPFByb2R1Y3Q+e2lkOiAyLCBuYW1lOiAnUHJvZHVjdCAyJywgc2hvcnREZXNjcmlwdGlvbjogJ1Nob3J0IGRlc2NyaXB0aW9uIG9mIHRoZSBwcm9kdWN0JywgbG9uZ0Rlc2NyaXB0aW9uOiAnTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5XFwncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNjcmFtYmxlZCBpdCB0byBtYWtlIGEgdHlwZSBzcGVjaW1lbiBib29rLiBJdCBoYXMgc3Vydml2ZWQgbm90IG9ubHkgZml2ZSBjZW50dXJpZXMsIGJ1dCBhbHNvIHRoZSBsZWFwIGludG8gZWxlY3Ryb25pYyB0eXBlc2V0dGluZywgcmVtYWluaW5nIGVzc2VudGlhbGx5IHVuY2hhbmdlZC4gSXQgd2FzIHBvcHVsYXJpc2VkIGluIHRoZSAxOTYwcyB3aXRoIHRoZSByZWxlYXNlIG9mIExldHJhc2V0IHNoZWV0cyBjb250YWluaW5nIExvcmVtIElwc3VtIHBhc3NhZ2VzLCBhbmQgbW9yZSByZWNlbnRseSB3aXRoIGRlc2t0b3AgcHVibGlzaGluZyBzb2Z0d2FyZSBsaWtlIEFsZHVzIFBhZ2VNYWtlciBpbmNsdWRpbmcgdmVyc2lvbnMgb2YgTG9yZW0gSXBzdW0uJ30sXG4gICAgICA8UHJvZHVjdD57aWQ6IDMsIG5hbWU6ICdQcm9kdWN0IDMnLCBzaG9ydERlc2NyaXB0aW9uOiAnU2hvcnQgZGVzY3JpcHRpb24gb2YgdGhlIHByb2R1Y3QnLCBsb25nRGVzY3JpcHRpb246ICdMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnlcXCdzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2suIEl0IGhhcyBzdXJ2aXZlZCBub3Qgb25seSBmaXZlIGNlbnR1cmllcywgYnV0IGFsc28gdGhlIGxlYXAgaW50byBlbGVjdHJvbmljIHR5cGVzZXR0aW5nLCByZW1haW5pbmcgZXNzZW50aWFsbHkgdW5jaGFuZ2VkLiBJdCB3YXMgcG9wdWxhcmlzZWQgaW4gdGhlIDE5NjBzIHdpdGggdGhlIHJlbGVhc2Ugb2YgTGV0cmFzZXQgc2hlZXRzIGNvbnRhaW5pbmcgTG9yZW0gSXBzdW0gcGFzc2FnZXMsIGFuZCBtb3JlIHJlY2VudGx5IHdpdGggZGVza3RvcCBwdWJsaXNoaW5nIHNvZnR3YXJlIGxpa2UgQWxkdXMgUGFnZU1ha2VyIGluY2x1ZGluZyB2ZXJzaW9ucyBvZiBMb3JlbSBJcHN1bS4nfSxcbiAgICAgIDxQcm9kdWN0PntpZDogNCwgbmFtZTogJ1Byb2R1Y3QgNCcsIHNob3J0RGVzY3JpcHRpb246ICdTaG9ydCBkZXNjcmlwdGlvbiBvZiB0aGUgcHJvZHVjdCcsIGxvbmdEZXNjcmlwdGlvbjogJ0xvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeVxcJ3Mgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGUgc3BlY2ltZW4gYm9vay4gSXQgaGFzIHN1cnZpdmVkIG5vdCBvbmx5IGZpdmUgY2VudHVyaWVzLCBidXQgYWxzbyB0aGUgbGVhcCBpbnRvIGVsZWN0cm9uaWMgdHlwZXNldHRpbmcsIHJlbWFpbmluZyBlc3NlbnRpYWxseSB1bmNoYW5nZWQuIEl0IHdhcyBwb3B1bGFyaXNlZCBpbiB0aGUgMTk2MHMgd2l0aCB0aGUgcmVsZWFzZSBvZiBMZXRyYXNldCBzaGVldHMgY29udGFpbmluZyBMb3JlbSBJcHN1bSBwYXNzYWdlcywgYW5kIG1vcmUgcmVjZW50bHkgd2l0aCBkZXNrdG9wIHB1Ymxpc2hpbmcgc29mdHdhcmUgbGlrZSBBbGR1cyBQYWdlTWFrZXIgaW5jbHVkaW5nIHZlcnNpb25zIG9mIExvcmVtIElwc3VtLid9LFxuICAgICAgPFByb2R1Y3Q+e2lkOiA1LCBuYW1lOiAnUHJvZHVjdCA1Jywgc2hvcnREZXNjcmlwdGlvbjogJ1Nob3J0IGRlc2NyaXB0aW9uIG9mIHRoZSBwcm9kdWN0JywgbG9uZ0Rlc2NyaXB0aW9uOiAnTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5XFwncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNjcmFtYmxlZCBpdCB0byBtYWtlIGEgdHlwZSBzcGVjaW1lbiBib29rLiBJdCBoYXMgc3Vydml2ZWQgbm90IG9ubHkgZml2ZSBjZW50dXJpZXMsIGJ1dCBhbHNvIHRoZSBsZWFwIGludG8gZWxlY3Ryb25pYyB0eXBlc2V0dGluZywgcmVtYWluaW5nIGVzc2VudGlhbGx5IHVuY2hhbmdlZC4gSXQgd2FzIHBvcHVsYXJpc2VkIGluIHRoZSAxOTYwcyB3aXRoIHRoZSByZWxlYXNlIG9mIExldHJhc2V0IHNoZWV0cyBjb250YWluaW5nIExvcmVtIElwc3VtIHBhc3NhZ2VzLCBhbmQgbW9yZSByZWNlbnRseSB3aXRoIGRlc2t0b3AgcHVibGlzaGluZyBzb2Z0d2FyZSBsaWtlIEFsZHVzIFBhZ2VNYWtlciBpbmNsdWRpbmcgdmVyc2lvbnMgb2YgTG9yZW0gSXBzdW0uJ30sXG4gICAgICA8UHJvZHVjdD57aWQ6IDYsIG5hbWU6ICdQcm9kdWN0IDYnLCBzaG9ydERlc2NyaXB0aW9uOiAnU2hvcnQgZGVzY3JpcHRpb24gb2YgdGhlIHByb2R1Y3QnLCBsb25nRGVzY3JpcHRpb246ICdMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnlcXCdzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2suIEl0IGhhcyBzdXJ2aXZlZCBub3Qgb25seSBmaXZlIGNlbnR1cmllcywgYnV0IGFsc28gdGhlIGxlYXAgaW50byBlbGVjdHJvbmljIHR5cGVzZXR0aW5nLCByZW1haW5pbmcgZXNzZW50aWFsbHkgdW5jaGFuZ2VkLiBJdCB3YXMgcG9wdWxhcmlzZWQgaW4gdGhlIDE5NjBzIHdpdGggdGhlIHJlbGVhc2Ugb2YgTGV0cmFzZXQgc2hlZXRzIGNvbnRhaW5pbmcgTG9yZW0gSXBzdW0gcGFzc2FnZXMsIGFuZCBtb3JlIHJlY2VudGx5IHdpdGggZGVza3RvcCBwdWJsaXNoaW5nIHNvZnR3YXJlIGxpa2UgQWxkdXMgUGFnZU1ha2VyIGluY2x1ZGluZyB2ZXJzaW9ucyBvZiBMb3JlbSBJcHN1bS4nfSxcbiAgICAgIDxQcm9kdWN0PntpZDogNywgbmFtZTogJ1Byb2R1Y3QgNycsIHNob3J0RGVzY3JpcHRpb246ICdTaG9ydCBkZXNjcmlwdGlvbiBvZiB0aGUgcHJvZHVjdCcsIGxvbmdEZXNjcmlwdGlvbjogJ0xvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeVxcJ3Mgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGUgc3BlY2ltZW4gYm9vay4gSXQgaGFzIHN1cnZpdmVkIG5vdCBvbmx5IGZpdmUgY2VudHVyaWVzLCBidXQgYWxzbyB0aGUgbGVhcCBpbnRvIGVsZWN0cm9uaWMgdHlwZXNldHRpbmcsIHJlbWFpbmluZyBlc3NlbnRpYWxseSB1bmNoYW5nZWQuIEl0IHdhcyBwb3B1bGFyaXNlZCBpbiB0aGUgMTk2MHMgd2l0aCB0aGUgcmVsZWFzZSBvZiBMZXRyYXNldCBzaGVldHMgY29udGFpbmluZyBMb3JlbSBJcHN1bSBwYXNzYWdlcywgYW5kIG1vcmUgcmVjZW50bHkgd2l0aCBkZXNrdG9wIHB1Ymxpc2hpbmcgc29mdHdhcmUgbGlrZSBBbGR1cyBQYWdlTWFrZXIgaW5jbHVkaW5nIHZlcnNpb25zIG9mIExvcmVtIElwc3VtLid9LFxuICAgICAgPFByb2R1Y3Q+e2lkOiA4LCBuYW1lOiAnUHJvZHVjdCA4Jywgc2hvcnREZXNjcmlwdGlvbjogJ1Nob3J0IGRlc2NyaXB0aW9uIG9mIHRoZSBwcm9kdWN0JywgbG9uZ0Rlc2NyaXB0aW9uOiAnTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5XFwncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNjcmFtYmxlZCBpdCB0byBtYWtlIGEgdHlwZSBzcGVjaW1lbiBib29rLiBJdCBoYXMgc3Vydml2ZWQgbm90IG9ubHkgZml2ZSBjZW50dXJpZXMsIGJ1dCBhbHNvIHRoZSBsZWFwIGludG8gZWxlY3Ryb25pYyB0eXBlc2V0dGluZywgcmVtYWluaW5nIGVzc2VudGlhbGx5IHVuY2hhbmdlZC4gSXQgd2FzIHBvcHVsYXJpc2VkIGluIHRoZSAxOTYwcyB3aXRoIHRoZSByZWxlYXNlIG9mIExldHJhc2V0IHNoZWV0cyBjb250YWluaW5nIExvcmVtIElwc3VtIHBhc3NhZ2VzLCBhbmQgbW9yZSByZWNlbnRseSB3aXRoIGRlc2t0b3AgcHVibGlzaGluZyBzb2Z0d2FyZSBsaWtlIEFsZHVzIFBhZ2VNYWtlciBpbmNsdWRpbmcgdmVyc2lvbnMgb2YgTG9yZW0gSXBzdW0uJ30sXG4gICAgICA8UHJvZHVjdD57aWQ6IDksIG5hbWU6ICdQcm9kdWN0IDknLCBzaG9ydERlc2NyaXB0aW9uOiAnU2hvcnQgZGVzY3JpcHRpb24gb2YgdGhlIHByb2R1Y3QnLCBsb25nRGVzY3JpcHRpb246ICdMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnlcXCdzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2suIEl0IGhhcyBzdXJ2aXZlZCBub3Qgb25seSBmaXZlIGNlbnR1cmllcywgYnV0IGFsc28gdGhlIGxlYXAgaW50byBlbGVjdHJvbmljIHR5cGVzZXR0aW5nLCByZW1haW5pbmcgZXNzZW50aWFsbHkgdW5jaGFuZ2VkLiBJdCB3YXMgcG9wdWxhcmlzZWQgaW4gdGhlIDE5NjBzIHdpdGggdGhlIHJlbGVhc2Ugb2YgTGV0cmFzZXQgc2hlZXRzIGNvbnRhaW5pbmcgTG9yZW0gSXBzdW0gcGFzc2FnZXMsIGFuZCBtb3JlIHJlY2VudGx5IHdpdGggZGVza3RvcCBwdWJsaXNoaW5nIHNvZnR3YXJlIGxpa2UgQWxkdXMgUGFnZU1ha2VyIGluY2x1ZGluZyB2ZXJzaW9ucyBvZiBMb3JlbSBJcHN1bS4nfSxcbiAgICAgIDxQcm9kdWN0PntpZDogMTAsIG5hbWU6ICdQcm9kdWN0IDEwJywgc2hvcnREZXNjcmlwdGlvbjogJ1Nob3J0IGRlc2NyaXB0aW9uIG9mIHRoZSBwcm9kdWN0JywgbG9uZ0Rlc2NyaXB0aW9uOiAnTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5XFwncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNjcmFtYmxlZCBpdCB0byBtYWtlIGEgdHlwZSBzcGVjaW1lbiBib29rLiBJdCBoYXMgc3Vydml2ZWQgbm90IG9ubHkgZml2ZSBjZW50dXJpZXMsIGJ1dCBhbHNvIHRoZSBsZWFwIGludG8gZWxlY3Ryb25pYyB0eXBlc2V0dGluZywgcmVtYWluaW5nIGVzc2VudGlhbGx5IHVuY2hhbmdlZC4gSXQgd2FzIHBvcHVsYXJpc2VkIGluIHRoZSAxOTYwcyB3aXRoIHRoZSByZWxlYXNlIG9mIExldHJhc2V0IHNoZWV0cyBjb250YWluaW5nIExvcmVtIElwc3VtIHBhc3NhZ2VzLCBhbmQgbW9yZSByZWNlbnRseSB3aXRoIGRlc2t0b3AgcHVibGlzaGluZyBzb2Z0d2FyZSBsaWtlIEFsZHVzIFBhZ2VNYWtlciBpbmNsdWRpbmcgdmVyc2lvbnMgb2YgTG9yZW0gSXBzdW0uJ30sXG4gICAgXTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi4vLi4vbW9kZWxzL3Byb2R1Y3QnO1xuaW1wb3J0IHsgUHJvZHVjdHNEYW9TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZGFvcy9wcm9kdWN0cy9wcm9kdWN0cy5kYW8uc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RzU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwcm9kdWN0c0Rhb1NlcnZpY2U6IFByb2R1Y3RzRGFvU2VydmljZSkgeyB9XG5cbiAgZ2V0QWxsUHJvZHVjdHMoKSA6IFByb2R1Y3QgW10ge1xuICAgIHJldHVybiB0aGlzLnByb2R1Y3RzRGFvU2VydmljZS5nZXRBbGwoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBQcm9kdWN0c0Rhb1NlcnZpY2UgfSBmcm9tICcuL2Rhb3MvcHJvZHVjdHMvcHJvZHVjdHMuZGFvLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdHNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9wcm9kdWN0cy9wcm9kdWN0cy5zZXJ2aWNlJztcblxuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFByb2R1Y3RzU2VydmljZSxcblxuICAgIFByb2R1Y3RzRGFvU2VydmljZVxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBQcm9kdWN0c1NlcnZpY2UsXG5cbiAgICBQcm9kdWN0c0Rhb1NlcnZpY2VcbiAgXSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7IH1cbiIsIi8vIHRoaXMgaW1wb3J0IHNob3VsZCBiZSBmaXJzdCBpbiBvcmRlciB0byBsb2FkIHNvbWUgcmVxdWlyZWQgc2V0dGluZ3MgKGxpa2UgZ2xvYmFscyBhbmQgcmVmbGVjdC1tZXRhZGF0YSlcbmltcG9ydCB7IHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtJztcblxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnQHNyYy9hcHAvYXBwLm1vZHVsZSc7XG5cbi8vIEEgdHJhZGl0aW9uYWwgTmF0aXZlU2NyaXB0IGFwcGxpY2F0aW9uIHN0YXJ0cyBieSBpbml0aWFsaXppbmcgZ2xvYmFsIG9iamVjdHMsXG4vLyBzZXR0aW5nIHVwIGdsb2JhbCBDU1MgcnVsZXMsIGNyZWF0aW5nLCBhbmQgbmF2aWdhdGluZyB0byB0aGUgbWFpbiBwYWdlLlxuLy8gQW5ndWxhciBhcHBsaWNhdGlvbnMgbmVlZCB0byB0YWtlIGNhcmUgb2YgdGhlaXIgb3duIGluaXRpYWxpemF0aW9uOiBtb2R1bGVzLCBjb21wb25lbnRzLCBkaXJlY3RpdmVzLCByb3V0ZXMsIERJIHByb3ZpZGVycy5cbi8vIEEgTmF0aXZlU2NyaXB0IEFuZ3VsYXIgYXBwIG5lZWRzIHRvIG1ha2UgYm90aCBwYXJhZGlnbXMgd29yayB0b2dldGhlcixcbi8vIHNvIHdlIHByb3ZpZGUgYSB3cmFwcGVyIHBsYXRmb3JtIG9iamVjdCwgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljLFxuLy8gdGhhdCBzZXRzIHVwIGEgTmF0aXZlU2NyaXB0IGFwcGxpY2F0aW9uIGFuZCBjYW4gYm9vdHN0cmFwIHRoZSBBbmd1bGFyIGZyYW1ld29yay5cbnBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==