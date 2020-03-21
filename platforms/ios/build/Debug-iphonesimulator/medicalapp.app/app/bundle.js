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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC9hcHAtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5tb2R1bGUudG5zLnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAucm91dGVzLnRzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3BhZ2VzL3BheW1lbnQvcGF5bWVudC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3BhZ2VzL3BheW1lbnQvcGF5bWVudC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9wYWdlcy9wYXltZW50L3BheW1lbnQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3BhZ2VzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9wYWdlcy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3BhZ2VzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL2VkaXQvZWRpdC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL2VkaXQvZWRpdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9lZGl0L2VkaXQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL2xpc3QvbGlzdC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL2xpc3QvbGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9saXN0L2xpc3QuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3QtY2FyZC9wcm9kdWN0LWNhcmQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0LWNhcmQvcHJvZHVjdC1jYXJkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3QtY2FyZC9wcm9kdWN0LWNhcmQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9zaGFyZWQvZGFvcy9wcm9kdWN0cy9wcm9kdWN0cy5kYW8uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc2hhcmVkL3NlcnZpY2VzL3Byb2R1Y3RzL3Byb2R1Y3RzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NoYXJlZC9zaGFyZWQubW9kdWxlLnRzIiwid2VicGFjazovLy8uL21haW4udG5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsNENBQTRDLFdBQVc7QUFDdkQ7QUFDQTtBQUNBLHlFOzs7Ozs7O0FDWkEsK0dBQWlFLG1CQUFPLENBQUMsNEhBQTBGO0FBQ25LLGdFQUFnRSxtQkFBTyxDQUFDLDRIQUEwRjtBQUNsSyxpRUFBaUUsbUJBQU8sQ0FBQyw0SEFBMEY7QUFDbkssZ0VBQWdFLG1CQUFPLENBQUMsNEhBQTBGLEdBQUcsa0JBQWtCLGtDQUFrQyxVQUFVLCtEQUErRCxFQUFFLCtEQUErRDtBQUNuVyxRQUFRLElBQVU7QUFDbEI7QUFDQTtBQUNBLCtCQUErQixtQ0FBbUM7QUFDbEUsU0FBUztBQUNUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVHlDO0FBQzhCO0FBQzFCO0FBTTdDO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFKNUIsOERBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDLE9BQU8sQ0FBQywwREFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUM7U0FDcEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQTtBQUFKOzs7Ozs7Ozs7QUNS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RUFBRSxNQUFNO1NBQ25CLENBQUM7eUNBR3dDLHNGQUFrQjtPQUYvQyxlQUFlLENBTzNCO0lBQUQsc0JBQUM7Q0FBQTtBQVAyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ArQjtBQUNZO0FBQ0c7QUFDSDtBQW9CdkU7SUFBQTtJQUE0QixDQUFDO0lBQWhCLFlBQVk7UUFoQnhCLDhEQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1osbUZBQWU7Z0JBRWYsc0ZBQWtCO2FBQ25CO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLG9GQUF3QjthQUN6QjtZQUNELE9BQU8sRUFBRTtnQkFDUCxtRkFBZTtnQkFFZixzRkFBa0I7YUFDbkI7WUFDRCxPQUFPLEVBQUUsQ0FBQyw4REFBZ0IsQ0FBQztTQUM1QixDQUFDO09BQ1csWUFBWSxDQUFJO0lBQUQsbUJBQUM7Q0FBQTtBQUFKOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCekIsT0FBTyxFQUFFLE9BQVcsR0FBNEI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhELHdCQUFnRjtBQUNoRixTQUEwRTtBQUMxRSxRQUE2SDtBQUM3SCxZQUF5RTtBQUN6RSx5RkFBd0U7QUFDeEUsMEZBQW1GO0FBQ25GLDREQUF5RCIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQocmVxKSB7XG5cdC8vIEhlcmUgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigpIGlzIHVzZWQgaW5zdGVhZCBvZiBuZXcgUHJvbWlzZSgpIHRvIHByZXZlbnRcblx0Ly8gdW5jYXVnaHQgZXhjZXB0aW9uIHBvcHBpbmcgdXAgaW4gZGV2dG9vbHNcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9KTtcbn1cbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQuaWQgPSBcIi4uLyQkX2xhenlfcm91dGVfcmVzb3VyY2UgbGF6eSByZWN1cnNpdmVcIjsiLCJnbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwiQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2JsdWUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2JsdWUuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2JsdWUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2JsdWUuY3NzXCIpKTttb2R1bGUuZXhwb3J0cyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOlt7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiJ35AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzcydcIn0se1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIid+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvYmx1ZS5jc3MnXCJ9XSxcInBhcnNpbmdFcnJvcnNcIjpbXX19OztcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9hcHAuY3NzJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gJ0BzcmMvYXBwL2FwcC5yb3V0ZXMnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XG4iLCJleHBvcnQgZGVmYXVsdCBcIi5wYWdlIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cIiIsImV4cG9ydCBkZWZhdWx0IFwiICA8cGFnZS1yb3V0ZXItb3V0bGV0PjwvcGFnZS1yb3V0ZXItb3V0bGV0PlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXJvb3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYXBwLmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZSc7XG5cbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FwcC1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWdudXBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGF5bWVudENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9wYXltZW50L3BheW1lbnQuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcHJvZHVjdHMvbGlzdC9saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IERldGFpbHNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcHJvZHVjdHMvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9kdWN0Q2FyZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0LWNhcmQvcHJvZHVjdC1jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFZGl0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3Byb2R1Y3RzL2VkaXQvZWRpdC5jb21wb25lbnQnO1xuXG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHR3by13YXkgYmluZGluZ1xuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtcyc7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSFRUUCB3cmFwcGVyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb21wb25lbnQsXG4gICAgSG9tZUNvbXBvbmVudCxcbiAgICBMb2dpbkNvbXBvbmVudCxcbiAgICBTaWdudXBDb21wb25lbnQsXG4gICAgUGF5bWVudENvbXBvbmVudCxcbiAgICBMaXN0Q29tcG9uZW50LFxuICAgIERldGFpbHNDb21wb25lbnQsXG4gICAgUHJvZHVjdENhcmRDb21wb25lbnQsXG4gICAgRWRpdENvbXBvbmVudCxcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgIFNoYXJlZE1vZHVsZVxuICBdLFxuICBwcm92aWRlcnM6IFtdLFxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWdudXBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICAgIHBhdGg6ICcnLFxuICAgICAgcmVkaXJlY3RUbzogJy9sb2dpbicsXG4gICAgICBwYXRoTWF0Y2g6ICdmdWxsJyxcbiAgfSxcbiAge1xuICAgICAgcGF0aDogJ2xvZ2luJyxcbiAgICAgIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnaG9tZScsXG4gICAgY29tcG9uZW50OiBIb21lQ29tcG9uZW50LFxuICB9LFxuICB7XG4gICAgcGF0aDogJ3NpZ25VcCcsXG4gICAgY29tcG9uZW50OiBTaWdudXBDb21wb25lbnQsXG4gIH0sXG5dO1xuIiwiZXhwb3J0IGRlZmF1bHQgXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXG5cIiIsImV4cG9ydCBkZWZhdWx0IFwiPFN0YWNrTGF5b3V0PlxcbiAgICA8QXBwTGlzdD48L0FwcExpc3Q+XFxuPC9TdGFja0xheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtaG9tZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9ob21lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaG9tZS5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWRcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgfVxuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBcIi5mb3JtIHtcXG4gIG1hcmdpbi1sZWZ0OiAzMDtcXG4gIG1hcmdpbi1yaWdodDogMzA7XFxuICBmbGV4LWdyb3c6IDI7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBtYXJnaW4tYm90dG9tOiAxMjtcXG4gIGhlaWdodDogOTA7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmhlYWRlciB7XFxuICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDI1O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIG1hcmdpbi1ib3R0b206IDcwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICNkNTFhMWE7XFxufVxcblxcbi5pbnB1dC1maWVsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAyNTtcXG59XFxuXFxuLmlucHV0IHtcXG4gIGZvbnQtc2l6ZTogMTg7XFxuICBwbGFjZWhvbGRlci1jb2xvcjogI2E4YThhODtcXG59XFxuXFxuLmlucHV0OmRpc2FibGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4uYnRuLXByaW1hcnkge1xcbiAgbWFyZ2luOiAzMCA1IDE1IDU7XFxufVxcblxcbi5sb2dpbi1sYWJlbCB7XFxuICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogI2E4YThhODtcXG4gIGZvbnQtc2l6ZTogMTY7XFxufVxcblxcbi5ib2xkIHtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbn1cXG5cIiIsImV4cG9ydCBkZWZhdWx0IFwiPEZsZXhib3hMYXlvdXQgY2xhc3M9XFxcInBhZ2VcXFwiPlxcbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImZvcm1cXFwiPlxcbiAgICAgICAgPEltYWdlIGNsYXNzPVxcXCJsb2dvXFxcIiBzcmM9XFxcImh0dHBzOi8vY2RuNC5pY29uZmluZGVyLmNvbS9kYXRhL2ljb25zL2xvZ29zLWFuZC1icmFuZHMvNTEyLzIxX0FuZ3VsYXJfbG9nb19sb2dvcy01MTIucG5nXFxcIj48L0ltYWdlPlxcbiAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJoZWFkZXJcXFwiIHRleHQ9XFxcIk1lZGljYWwgYXBwXFxcIj48L0xhYmVsPlxcblxcbiAgICAgICAgPFByZXZpb3VzTmV4dFZpZXc+XFxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiYXV0bywgYXV0bywgYXV0b1xcXCI+XFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XFxcIjBcXFwiIGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzPVxcXCJpbnB1dFxcXCIgaGludD1cXFwiRW1haWxcXFwiIFtpc0VuYWJsZWRdPVxcXCIhcHJvY2Vzc2luZ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZFR5cGU9XFxcImVtYWlsXFxcIiBhdXRvY29ycmVjdD1cXFwiZmFsc2VcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cXFwibm9uZVxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIuZW1haWxcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuS2V5VHlwZT1cXFwibmV4dFxcXCIgKHJldHVyblByZXNzKT1cXFwiZm9jdXNQYXNzd29yZCgpXFxcIj48L1RleHRGaWVsZD5cXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaHItbGlnaHRcXFwiPjwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XFxcIjFcXFwiIGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkICNwYXNzd29yZCBjbGFzcz1cXFwiaW5wdXRcXFwiIFtpc0VuYWJsZWRdPVxcXCIhcHJvY2Vzc2luZ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBoaW50PVxcXCJQYXNzd29yZFxcXCIgc2VjdXJlPVxcXCJ0cnVlXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci5wYXNzd29yZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBbcmV0dXJuS2V5VHlwZV09XFxcImlzTG9nZ2luZ0luID8gJ2RvbmUnIDogJ25leHQnXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIChyZXR1cm5QcmVzcyk9XFxcImZvY3VzQ29uZmlybVBhc3N3b3JkKClcXFwiPjwvVGV4dEZpZWxkPlxcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJoci1saWdodFxcXCI+PC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cXFwiMlxcXCIgKm5nSWY9XFxcIiFpc0xvZ2dpbmdJblxcXCIgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgI2NvbmZpcm1QYXNzd29yZCBjbGFzcz1cXFwiaW5wdXRcXFwiIFtpc0VuYWJsZWRdPVxcXCIhcHJvY2Vzc2luZ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBoaW50PVxcXCJDb25maXJtIHBhc3N3b3JkXFxcIiBzZWN1cmU9XFxcInRydWVcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLmNvbmZpcm1QYXNzd29yZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlPVxcXCJkb25lXFxcIj48L1RleHRGaWVsZD5cXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaHItbGlnaHRcXFwiPjwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgICAgIDxBY3Rpdml0eUluZGljYXRvciByb3dTcGFuPVxcXCIzXFxcIiBbYnVzeV09XFxcInByb2Nlc3NpbmdcXFwiPjwvQWN0aXZpdHlJbmRpY2F0b3I+XFxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgPC9QcmV2aW91c05leHRWaWV3PlxcblxcbiAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJMb2cgaW5cXFwiICh0YXApPVxcXCJzdWJtaXQoKVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBtLXQtMjBcXFwiPjwvQnV0dG9uPlxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcIlNpZ24gdXBcXFwiIGNsYXNzPVxcXCJsb2dpbi1sYWJlbFxcXCJcXG4gICAgICAgICAgICAodGFwKT1cXFwic2lnblVwKClcXFwiPjwvTGFiZWw+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuPC9GbGV4Ym94TGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgYWxlcnQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnQXBwTG9naW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWRcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xuICBpc0xvZ2dpbmdJbiA9IHRydWU7XG4gIHByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgdXNlcjogYW55O1xuICBAVmlld0NoaWxkKFwicGFzc3dvcmRcIiwge3N0YXRpYzogZmFsc2V9KSBwYXNzd29yZDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImNvbmZpcm1QYXNzd29yZFwiLCB7c3RhdGljOiBmYWxzZX0pIGNvbmZpcm1QYXNzd29yZDogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG4gICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgfVxuXG4gIHRvZ2dsZUZvcm0oKSB7XG4gICAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XG4gIH1cblxuICBzdWJtaXQoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2hvbWVcIl0pO1xuICB9XG5cbiAgbG9naW4oKSB7XG4gICAgXG4gIH1cblxuICByZWdpc3RlcigpIHtcbiAgfVxuXG4gIHNpZ25VcCgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc2lnblVwXCJdKTtcbiAgfVxuXG4gIGZvY3VzUGFzc3dvcmQoKSB7XG5cbiAgfVxuICBmb2N1c0NvbmZpcm1QYXNzd29yZCgpIHtcblxuICB9XG5cbiAgYWxlcnQobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gYWxlcnQoe1xuICAgICAgICAgIHRpdGxlOiBcIkFQUCBOQU1FXCIsXG4gICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCIsXG4gICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxuXCIiLCJleHBvcnQgZGVmYXVsdCBcIjxCdXR0b24gdGV4dD1cXFwicGF5bWVudCB3b3JrcyFcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPjwvQnV0dG9uPlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXBheW1lbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGF5bWVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BheW1lbnQuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkXG59KVxuZXhwb3J0IGNsYXNzIFBheW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiZXhwb3J0IGRlZmF1bHQgXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXG4uZm9ybSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzMDtcXG4gICAgZmxleC1ncm93OiAyO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgfVxcbiAgXFxuICAubG9nbyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEyO1xcbiAgICBoZWlnaHQ6IDkwO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG4gIC5oZWFkZXIge1xcbiAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjU7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDcwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjZDUxYTFhO1xcbiAgfVxcbiAgXFxuICAuaW5wdXQtZmllbGQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyNTtcXG4gIH1cXG4gIFxcbiAgLmlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxODtcXG4gICAgcGxhY2Vob2xkZXItY29sb3I6ICNhOGE4YTg7XFxuICB9XFxuICBcXG4gIC5pbnB1dDpkaXNhYmxlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICB9XFxuICBcXG4gIC5idG4tcHJpbWFyeSB7XFxuICAgIG1hcmdpbjogMzAgNSAxNSA1O1xcbiAgfVxcbiAgXFxuICAubG9naW4tbGFiZWwge1xcbiAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjYThhOGE4O1xcbiAgICBmb250LXNpemU6IDE2O1xcbiAgfVxcbiAgXFxuICAuYm9sZCB7XFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcbiAgfVxcbiAgXCIiLCJleHBvcnQgZGVmYXVsdCBcIjxGbGV4Ym94TGF5b3V0IGNsYXNzPVxcXCJwYWdlXFxcIj5cXG4gIDxTdGFja0xheW91dCBjbGFzcz1cXFwiZm9ybVxcXCI+XFxuICAgICAgPEltYWdlIGNsYXNzPVxcXCJsb2dvXFxcIiBzcmM9XFxcImh0dHBzOi8vY2RuNC5pY29uZmluZGVyLmNvbS9kYXRhL2ljb25zL2xvZ29zLWFuZC1icmFuZHMvNTEyLzIxX0FuZ3VsYXJfbG9nb19sb2dvcy01MTIucG5nXFxcIj48L0ltYWdlPlxcbiAgICAgIDxMYWJlbCBjbGFzcz1cXFwiaGVhZGVyXFxcIiB0ZXh0PVxcXCJNZWRpY2FsIGFwcFxcXCI+PC9MYWJlbD5cXG5cXG4gICAgICA8UHJldmlvdXNOZXh0Vmlldz5cXG4gICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiYXV0bywgYXV0bywgYXV0b1xcXCI+XFxuICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIwXFxcIiBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgY2xhc3M9XFxcImlucHV0XFxcIiBoaW50PVxcXCJFbWFpbFxcXCIgW2lzRW5hYmxlZF09XFxcIiFwcm9jZXNzaW5nXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZFR5cGU9XFxcImVtYWlsXFxcIiBhdXRvY29ycmVjdD1cXFwiZmFsc2VcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XFxcIm5vbmVcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLmVtYWlsXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlPVxcXCJuZXh0XFxcIiAocmV0dXJuUHJlc3MpPVxcXCJmb2N1c1Bhc3N3b3JkKClcXFwiPjwvVGV4dEZpZWxkPlxcbiAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaHItbGlnaHRcXFwiPjwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cXFwiMVxcXCIgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkICNwYXNzd29yZCBjbGFzcz1cXFwiaW5wdXRcXFwiIFtpc0VuYWJsZWRdPVxcXCIhcHJvY2Vzc2luZ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgaGludD1cXFwiUGFzc3dvcmRcXFwiIHNlY3VyZT1cXFwidHJ1ZVxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIucGFzc3dvcmRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgIFtyZXR1cm5LZXlUeXBlXT1cXFwiaXNMb2dnaW5nSW4gPyAnZG9uZScgOiAnbmV4dCdcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgIChyZXR1cm5QcmVzcyk9XFxcImZvY3VzQ29uZmlybVBhc3N3b3JkKClcXFwiPjwvVGV4dEZpZWxkPlxcbiAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaHItbGlnaHRcXFwiPjwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cXFwiMlxcXCIgKm5nSWY9XFxcIiFpc0xvZ2dpbmdJblxcXCIgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkICNjb25maXJtUGFzc3dvcmQgY2xhc3M9XFxcImlucHV0XFxcIiBbaXNFbmFibGVkXT1cXFwiIXByb2Nlc3NpbmdcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XFxcIkNvbmZpcm0gcGFzc3dvcmRcXFwiIHNlY3VyZT1cXFwidHJ1ZVxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIuY29uZmlybVBhc3N3b3JkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlPVxcXCJkb25lXFxcIj48L1RleHRGaWVsZD5cXG4gICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhyLWxpZ2h0XFxcIj48L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG5cXG4gICAgICAgICAgICAgIDxBY3Rpdml0eUluZGljYXRvciByb3dTcGFuPVxcXCIzXFxcIiBbYnVzeV09XFxcInByb2Nlc3NpbmdcXFwiPjwvQWN0aXZpdHlJbmRpY2F0b3I+XFxuICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICA8L1ByZXZpb3VzTmV4dFZpZXc+XFxuXFxuICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJSZWdpc3RlclxcXCIgKHRhcCk9XFxcInN1Ym1pdCgpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IG0tdC0yMFxcXCI+PC9CdXR0b24+XFxuICA8L1N0YWNrTGF5b3V0PlxcbjwvRmxleGJveExheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImFwcC1zaWdudXBcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9zaWdudXAuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL3NpZ251cC5jb21wb25lbnQuY3NzXCJdLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkXG59KVxuZXhwb3J0IGNsYXNzIFNpZ251cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGlzTG9nZ2luZ0luID0gdHJ1ZTtcbiAgcHJvY2Vzc2luZyA9IGZhbHNlO1xuICB1c2VyOiBhbnk7XG4gIEBWaWV3Q2hpbGQoXCJwYXNzd29yZFwiLCB7IHN0YXRpYzogZmFsc2UgfSkgcGFzc3dvcmQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJjb25maXJtUGFzc3dvcmRcIiwgeyBzdGF0aWM6IGZhbHNlIH0pIGNvbmZpcm1QYXNzd29yZDogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICB9XG5cbiAgdG9nZ2xlRm9ybSgpIHtcbiAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XG4gIH1cblxuICBzdWJtaXQoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2hvbWVcIl0pO1xuICB9XG5cbiAgbG9naW4oKSB7fVxuXG4gIHJlZ2lzdGVyKCkge31cblxuICBmb2N1c1Bhc3N3b3JkKCkge31cbiAgZm9jdXNDb25maXJtUGFzc3dvcmQoKSB7fVxuXG4gIGFsZXJ0KG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHJldHVybiBhbGVydCh7XG4gICAgICB0aXRsZTogXCJBUFAgTkFNRVwiLFxuICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCIsXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IFwiLnNpdGUtbWFpbi1jb250ZW50IHtcXG4gICAgbWFyZ2luOiAxMiAyNDtcXG59XFxuXFxuLnNpdGUtbWFpbi1jb250YWluZXIge1xcbiAgICBtYXJnaW46IDEyIDA7XFxufVxcblxcbi5zaXRlLWl0ZW0taGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAxNjtcXG59XFxuXFxuLnNpdGUtaXRlbS1zaG9ydC1kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogODtcXG59XFxuXFxuLnNpdGUtaXRlbS1sb25nLWRlc2NyaXB0aW9uIHtcXG4gICAgbWFyZ2luOiAxMiAwO1xcbiAgICBmb250LXNpemU6IDEwO1xcbn1cIiIsImV4cG9ydCBkZWZhdWx0IFwiPEdyaWRMYXlvdXQ+XFxuICAgIDxTY3JvbGxWaWV3PlxcbiAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiYXV0bywgYXV0bywgYXV0bywgYXV0b1xcXCI+XFxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgaGVpZ2h0PVxcXCIyMDBcXFwiIHJvdz1cXFwiMFxcXCI+XFxuXFx0XFx0XFx0XFx0PEltYWdlIGNvbFNwYW49XFxcIjRcXFwiIHNyYz1cXFwiaHR0cHM6Ly9taXJvLm1lZGl1bS5jb20vbWF4LzI4ODAvMSpVYlZXQ091UmdHV3pVcHlENlZGaHZRLnBuZ1xcXCIgc3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCI+PC9JbWFnZT5cXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJzaXRlLW1haW4tY29udGVudFxcXCIgcm93PVxcXCIxXFxcIj5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJzaXRlLWl0ZW0taGVhZGVyXFxcIiBbdGV4dF09XFxcInByb2R1Y3QubmFtZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwic2l0ZS1pdGVtLXNob3J0LWRlc2NyaXB0aW9uXFxcIiBbdGV4dF09XFxcInByb2R1Y3Quc2hvcnREZXNjcmlwdGlvblxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgPEZsZXhMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcInNpdGUtaXRlbS1sb25nLWRlc2NyaXB0aW9uXFxcIiBbdGV4dF09XFxcInByb2R1Y3QubG9uZ0Rlc2NyaXB0aW9uXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPC9GbGV4TGF5b3V0PlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJFZGl0XFxcIiAodGFwKT1cXFwib25FZGl0KClcXFwiIHJvdz1cXFwiMlxcXCI+PC9CdXR0b24+XFxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJHbyBCYWNrXFxcIiAodGFwKT1cXFwib25Hb0JhY2soKVxcXCIgcm93PVxcXCIzXFxcIj48L0J1dHRvbj5cXG4gICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgPC9TY3JvbGxWaWV3PlxcbjwvR3JpZExheW91dD5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBQcm9kdWN0IGZyb20gJ0BzcmMvYXBwL3NoYXJlZC9tb2RlbHMvcHJvZHVjdCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ0FwcERldGFpbHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGV0YWlscy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RldGFpbHMuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkXG59KVxuZXhwb3J0IGNsYXNzIERldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBwcm9kdWN0OiBQcm9kdWN0O1xuICBAT3V0cHV0KCkgZ29CYWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGVkaXQ6IEV2ZW50RW1pdHRlcjxQcm9kdWN0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgb25Hb0JhY2soKSB7XG4gICAgdGhpcy5nb0JhY2suZW1pdCgpO1xuICB9XG5cbiAgb25FZGl0KCkge1xuICAgIHRoaXMuZWRpdC5lbWl0KHRoaXMucHJvZHVjdCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IFwiLnNpdGUtbWFpbi1jb250ZW50IHtcXG4gICAgbWFyZ2luOiAxMiAyNDtcXG59XFxuXFxuLnNpdGUtbWFpbi1jb250YWluZXIge1xcbiAgICBtYXJnaW46IDEyIDA7XFxufVxcblxcbi5zaXRlLWl0ZW0taGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAxNjtcXG59XFxuXFxuLnNpdGUtaXRlbS1zaG9ydC1kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogODtcXG59XFxuXFxuLnNpdGUtaXRlbS1sb25nLWRlc2NyaXB0aW9uIHtcXG4gICAgbWFyZ2luOiAxMiAwO1xcbiAgICBmb250LXNpemU6IDEwO1xcbn1cIiIsImV4cG9ydCBkZWZhdWx0IFwiPEdyaWRMYXlvdXQ+XFxuICAgIDxTY3JvbGxWaWV3PlxcbiAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiYXV0bywgYXV0bywgYXV0bywgYXV0b1xcXCI+XFxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgaGVpZ2h0PVxcXCIyMDBcXFwiIHJvdz1cXFwiMFxcXCI+XFxuXFx0XFx0XFx0XFx0PEltYWdlIGNvbFNwYW49XFxcIjRcXFwiIHNyYz1cXFwiaHR0cHM6Ly9taXJvLm1lZGl1bS5jb20vbWF4LzI4ODAvMSpVYlZXQ091UmdHV3pVcHlENlZGaHZRLnBuZ1xcXCIgc3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCI+PC9JbWFnZT5cXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJzaXRlLW1haW4tY29udGVudFxcXCIgcm93PVxcXCIxXFxcIj5cXG4gICAgICAgICAgICAgICAgPEZsZXhMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiUHJvZHVjdCBOYW1lOlxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgW3RleHRdPVxcXCJwcm9kdWN0Lm5hbWVcXFwiPjwvVGV4dEZpZWxkPlxcbiAgICAgICAgICAgICAgICA8L0ZsZXhMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDxGbGV4TGF5b3V0PlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlNob3J0IGRlc2NyaXB0aW9uOlxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgW3RleHRdPVxcXCJwcm9kdWN0LnNob3J0RGVzY3JpcHRpb25cXFwiPjwvVGV4dEZpZWxkPlxcbiAgICAgICAgICAgICAgICA8L0ZsZXhMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDxGbGV4TGF5b3V0PlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkxvbmQgZGVzY3JpcHRpb246XFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPFRleHRWaWV3IFt0ZXh0XT1cXFwicHJvZHVjdC5sb25nRGVzY3JpcHRpb25cXFwiPjwvVGV4dFZpZXc+XFxuICAgICAgICAgICAgICAgIDwvRmxleExheW91dD5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiU2F2ZVxcXCIgKHRhcCk9XFxcIm9uU2F2ZSgpXFxcIiByb3c9XFxcIjJcXFwiPjwvQnV0dG9uPlxcbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiQ2FuY2VsXFxcIiAodGFwKT1cXFwib25DYW5jZWwoKVxcXCIgcm93PVxcXCIzXFxcIj48L0J1dHRvbj5cXG4gICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgPC9TY3JvbGxWaWV3PlxcbjwvR3JpZExheW91dD5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBQcm9kdWN0IGZyb20gJ0BzcmMvYXBwL3NoYXJlZC9tb2RlbHMvcHJvZHVjdCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ0FwcEVkaXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZWRpdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2VkaXQuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkXG59KVxuZXhwb3J0IGNsYXNzIEVkaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBwcm9kdWN0OiBQcm9kdWN0O1xuICBAT3V0cHV0KCkgY2FuY2VsOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgb25TYXZlKCkge1xuXG4gIH1cblxuICBvbkNhbmNlbCgpIHtcbiAgICB0aGlzLmNhbmNlbC5lbWl0KCk7XG4gIH1cblxufVxuIiwiZXhwb3J0IGRlZmF1bHQgXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXG5cIiIsImV4cG9ydCBkZWZhdWx0IFwiPEdyaWRMYXlvdXQ+XFxuICAgIDxMaXN0VmlldyBbaXRlbXNdPVxcXCJwcm9kdWN0c0xpc3RcXFwiICpuZ0lmPVxcXCIhc2VsZWN0ZWRQcm9kdWN0XFxcIiBzZXBhcmF0b3JDb2xvcj1cXFwidHJhbnNwYXJlbnRcXFwiPlxcbiAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICA8QXBwUHJvZHVjdENhcmQgW3Byb2R1Y3RdPVxcXCJpdGVtXFxcIiAoc2VsZWN0KT1cXFwib25TZWxlY3QoJGV2ZW50KVxcXCI+PC9BcHBQcm9kdWN0Q2FyZD5cXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgIDwvTGlzdFZpZXc+XFxuXFxuICAgIDxBcHBEZXRhaWxzICpuZ0lmPVxcXCJzZWxlY3RlZFByb2R1Y3QgJiYgIWVkaXRlZFByb2R1Y3RcXFwiIFtwcm9kdWN0XT1cXFwic2VsZWN0ZWRQcm9kdWN0XFxcIiAoZ29CYWNrKT1cXFwib25TZWxlY3QoKVxcXCIgKGVkaXQpPVxcXCJvbkVkaXQoJGV2ZW50KVxcXCI+PC9BcHBEZXRhaWxzPlxcbiAgICA8QXBwRWRpdCAqbmdJZj1cXFwiZWRpdGVkUHJvZHVjdFxcXCIgW3Byb2R1Y3RdPVxcXCJlZGl0ZWRQcm9kdWN0XFxcIiAoY2FuY2VsKT1cXFwib25FZGl0KClcXFwiPjwvQXBwRWRpdD5cXG48L0dyaWRMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdHNTZXJ2aWNlIH0gZnJvbSAnQHNyYy9hcHAvc2hhcmVkL3NlcnZpY2VzL3Byb2R1Y3RzL3Byb2R1Y3RzLnNlcnZpY2UnO1xuaW1wb3J0IFByb2R1Y3QgZnJvbSAnQHNyYy9hcHAvc2hhcmVkL21vZGVscy9wcm9kdWN0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnQXBwTGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGlzdC5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWRcbn0pXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByb2R1Y3RzTGlzdDogUHJvZHVjdCBbXSA9IFtdO1xuICBzZWxlY3RlZFByb2R1Y3Q6IFByb2R1Y3QgPSB1bmRlZmluZWQ7XG4gIGVkaXRlZFByb2R1Y3Q6IFByb2R1Y3QgPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwcm9kdWN0c1NlcnZpY2U6IFByb2R1Y3RzU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wcm9kdWN0c0xpc3QgPSB0aGlzLnByb2R1Y3RzU2VydmljZS5nZXRBbGxQcm9kdWN0cygpO1xuICB9XG5cbiAgb25TZWxlY3QoZXZlbnQ6IFByb2R1Y3QpIHtcbiAgICB0aGlzLnNlbGVjdGVkUHJvZHVjdCA9IGV2ZW50O1xuICB9XG5cbiAgb25FZGl0KGV2ZW50OiBQcm9kdWN0KSB7XG4gICAgdGhpcy5lZGl0ZWRQcm9kdWN0ID0gZXZlbnQ7XG4gIH1cblxufVxuIiwiZXhwb3J0IGRlZmF1bHQgXCIuc2l0ZS10ZW1wbGF0ZS1pbWFnZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMDtcXG4gICAgbWFyZ2luOiA4IDE2O1xcbiAgICB3aWR0aDogNjA7XFxuICAgIGhlaWdodDogNjA7XFxufVxcblxcbi5zaXRlLXRlbXBsYXRlLXRpdGxlIHtcXG4gICAgbWFyZ2luOiAwIDAgNiAwO1xcbiAgICBmb250LXNpemU6IDE4O1xcbn1cXG5cXG4uc2l0ZS10ZW1wbGF0ZS1kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMTE7XFxufVwiIiwiZXhwb3J0IGRlZmF1bHQgXCI8R3JpZExheW91dCByb3dzPVxcXCIqLCBhdXRvXFxcIiBjb2x1bW5zPVxcXCJhdXRvLCAqLCBhdXRvXFxcIiAodGFwKT1cXFwib25TZWxlY3QoKVxcXCI+XFxuICAgIDxJbWFnZSBzdHJldGNoPVxcXCJhc3BlY3RGaWxsXFxcIiBcXG4gICAgICAgIGNvbD1cXFwiMFxcXCJcXG4gICAgICAgIGNsYXNzPVxcXCJzaXRlLXRlbXBsYXRlLWltYWdlIHRodW1iLXdpdGgtYmFja2dyb3VuZFxcXCJcXG4gICAgICAgIHNyYz1cXFwiaHR0cHM6Ly9jZG40Lmljb25maW5kZXIuY29tL2RhdGEvaWNvbnMvbG9nb3MtYW5kLWJyYW5kcy81MTIvMjFfQW5ndWxhcl9sb2dvX2xvZ29zLTUxMi5wbmdcXFwiIGhlaWdodD1cXFwiNDBcXFwiPjwvSW1hZ2U+XFxuICAgIDxTdGFja0xheW91dCBjb2w9XFxcIjFcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPlxcbiAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJzaXRlLXRlbXBsYXRlLXRpdGxlXFxcIiBbdGV4dF09XFxcInByb2R1Y3QubmFtZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgIDxMYWJlbCBjbGFzcz1cXFwic2l0ZS10ZW1wbGF0ZS1kZXNjcmlwdGlvblxcXCIgW3RleHRdPVxcXCJwcm9kdWN0LnNob3J0RGVzY3JpcHRpb25cXFwiPjwvTGFiZWw+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDxTdGFja0xheW91dCBtYXJnaW49XFxcIjAsMTYsMCw0MlxcXCIgcm93PVxcXCIxXFxcIiBjb2xTcGFuPVxcXCIyXFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcImxpZ2h0R3JheVxcXCIgaGVpZ2h0PVxcXCIxXFxcIj48L1N0YWNrTGF5b3V0PlxcbjwvR3JpZExheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBQcm9kdWN0IGZyb20gJ0BzcmMvYXBwL3NoYXJlZC9tb2RlbHMvcHJvZHVjdCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ0FwcFByb2R1Y3RDYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtY2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Byb2R1Y3QtY2FyZC5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWRcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdENhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBwcm9kdWN0OiBQcm9kdWN0O1xuICBAT3V0cHV0KCkgc2VsZWN0OiBFdmVudEVtaXR0ZXI8UHJvZHVjdD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG9uU2VsZWN0KCkge1xuICAgIHRoaXMuc2VsZWN0LmVtaXQodGhpcy5wcm9kdWN0KTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuLi8uLi9tb2RlbHMvcHJvZHVjdCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RzRGFvU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBnZXRBbGwoKSA6IFByb2R1Y3RbXXtcbiAgICByZXR1cm4gW1xuICAgICAgPFByb2R1Y3Q+e2lkOiAxLCBuYW1lOiAnUHJvZHVjdCAxJywgc2hvcnREZXNjcmlwdGlvbjogJ1Nob3J0IGRlc2NyaXB0aW9uIG9mIHRoZSBwcm9kdWN0JywgbG9uZ0Rlc2NyaXB0aW9uOiAnTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5XFwncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNjcmFtYmxlZCBpdCB0byBtYWtlIGEgdHlwZSBzcGVjaW1lbiBib29rLiBJdCBoYXMgc3Vydml2ZWQgbm90IG9ubHkgZml2ZSBjZW50dXJpZXMsIGJ1dCBhbHNvIHRoZSBsZWFwIGludG8gZWxlY3Ryb25pYyB0eXBlc2V0dGluZywgcmVtYWluaW5nIGVzc2VudGlhbGx5IHVuY2hhbmdlZC4gSXQgd2FzIHBvcHVsYXJpc2VkIGluIHRoZSAxOTYwcyB3aXRoIHRoZSByZWxlYXNlIG9mIExldHJhc2V0IHNoZWV0cyBjb250YWluaW5nIExvcmVtIElwc3VtIHBhc3NhZ2VzLCBhbmQgbW9yZSByZWNlbnRseSB3aXRoIGRlc2t0b3AgcHVibGlzaGluZyBzb2Z0d2FyZSBsaWtlIEFsZHVzIFBhZ2VNYWtlciBpbmNsdWRpbmcgdmVyc2lvbnMgb2YgTG9yZW0gSXBzdW0uJ30sXG4gICAgICA8UHJvZHVjdD57aWQ6IDIsIG5hbWU6ICdQcm9kdWN0IDInLCBzaG9ydERlc2NyaXB0aW9uOiAnU2hvcnQgZGVzY3JpcHRpb24gb2YgdGhlIHByb2R1Y3QnLCBsb25nRGVzY3JpcHRpb246ICdMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnlcXCdzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2suIEl0IGhhcyBzdXJ2aXZlZCBub3Qgb25seSBmaXZlIGNlbnR1cmllcywgYnV0IGFsc28gdGhlIGxlYXAgaW50byBlbGVjdHJvbmljIHR5cGVzZXR0aW5nLCByZW1haW5pbmcgZXNzZW50aWFsbHkgdW5jaGFuZ2VkLiBJdCB3YXMgcG9wdWxhcmlzZWQgaW4gdGhlIDE5NjBzIHdpdGggdGhlIHJlbGVhc2Ugb2YgTGV0cmFzZXQgc2hlZXRzIGNvbnRhaW5pbmcgTG9yZW0gSXBzdW0gcGFzc2FnZXMsIGFuZCBtb3JlIHJlY2VudGx5IHdpdGggZGVza3RvcCBwdWJsaXNoaW5nIHNvZnR3YXJlIGxpa2UgQWxkdXMgUGFnZU1ha2VyIGluY2x1ZGluZyB2ZXJzaW9ucyBvZiBMb3JlbSBJcHN1bS4nfSxcbiAgICAgIDxQcm9kdWN0PntpZDogMywgbmFtZTogJ1Byb2R1Y3QgMycsIHNob3J0RGVzY3JpcHRpb246ICdTaG9ydCBkZXNjcmlwdGlvbiBvZiB0aGUgcHJvZHVjdCcsIGxvbmdEZXNjcmlwdGlvbjogJ0xvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeVxcJ3Mgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGUgc3BlY2ltZW4gYm9vay4gSXQgaGFzIHN1cnZpdmVkIG5vdCBvbmx5IGZpdmUgY2VudHVyaWVzLCBidXQgYWxzbyB0aGUgbGVhcCBpbnRvIGVsZWN0cm9uaWMgdHlwZXNldHRpbmcsIHJlbWFpbmluZyBlc3NlbnRpYWxseSB1bmNoYW5nZWQuIEl0IHdhcyBwb3B1bGFyaXNlZCBpbiB0aGUgMTk2MHMgd2l0aCB0aGUgcmVsZWFzZSBvZiBMZXRyYXNldCBzaGVldHMgY29udGFpbmluZyBMb3JlbSBJcHN1bSBwYXNzYWdlcywgYW5kIG1vcmUgcmVjZW50bHkgd2l0aCBkZXNrdG9wIHB1Ymxpc2hpbmcgc29mdHdhcmUgbGlrZSBBbGR1cyBQYWdlTWFrZXIgaW5jbHVkaW5nIHZlcnNpb25zIG9mIExvcmVtIElwc3VtLid9LFxuICAgICAgPFByb2R1Y3Q+e2lkOiA0LCBuYW1lOiAnUHJvZHVjdCA0Jywgc2hvcnREZXNjcmlwdGlvbjogJ1Nob3J0IGRlc2NyaXB0aW9uIG9mIHRoZSBwcm9kdWN0JywgbG9uZ0Rlc2NyaXB0aW9uOiAnTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5XFwncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNjcmFtYmxlZCBpdCB0byBtYWtlIGEgdHlwZSBzcGVjaW1lbiBib29rLiBJdCBoYXMgc3Vydml2ZWQgbm90IG9ubHkgZml2ZSBjZW50dXJpZXMsIGJ1dCBhbHNvIHRoZSBsZWFwIGludG8gZWxlY3Ryb25pYyB0eXBlc2V0dGluZywgcmVtYWluaW5nIGVzc2VudGlhbGx5IHVuY2hhbmdlZC4gSXQgd2FzIHBvcHVsYXJpc2VkIGluIHRoZSAxOTYwcyB3aXRoIHRoZSByZWxlYXNlIG9mIExldHJhc2V0IHNoZWV0cyBjb250YWluaW5nIExvcmVtIElwc3VtIHBhc3NhZ2VzLCBhbmQgbW9yZSByZWNlbnRseSB3aXRoIGRlc2t0b3AgcHVibGlzaGluZyBzb2Z0d2FyZSBsaWtlIEFsZHVzIFBhZ2VNYWtlciBpbmNsdWRpbmcgdmVyc2lvbnMgb2YgTG9yZW0gSXBzdW0uJ30sXG4gICAgICA8UHJvZHVjdD57aWQ6IDUsIG5hbWU6ICdQcm9kdWN0IDUnLCBzaG9ydERlc2NyaXB0aW9uOiAnU2hvcnQgZGVzY3JpcHRpb24gb2YgdGhlIHByb2R1Y3QnLCBsb25nRGVzY3JpcHRpb246ICdMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnlcXCdzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2suIEl0IGhhcyBzdXJ2aXZlZCBub3Qgb25seSBmaXZlIGNlbnR1cmllcywgYnV0IGFsc28gdGhlIGxlYXAgaW50byBlbGVjdHJvbmljIHR5cGVzZXR0aW5nLCByZW1haW5pbmcgZXNzZW50aWFsbHkgdW5jaGFuZ2VkLiBJdCB3YXMgcG9wdWxhcmlzZWQgaW4gdGhlIDE5NjBzIHdpdGggdGhlIHJlbGVhc2Ugb2YgTGV0cmFzZXQgc2hlZXRzIGNvbnRhaW5pbmcgTG9yZW0gSXBzdW0gcGFzc2FnZXMsIGFuZCBtb3JlIHJlY2VudGx5IHdpdGggZGVza3RvcCBwdWJsaXNoaW5nIHNvZnR3YXJlIGxpa2UgQWxkdXMgUGFnZU1ha2VyIGluY2x1ZGluZyB2ZXJzaW9ucyBvZiBMb3JlbSBJcHN1bS4nfSxcbiAgICAgIDxQcm9kdWN0PntpZDogNiwgbmFtZTogJ1Byb2R1Y3QgNicsIHNob3J0RGVzY3JpcHRpb246ICdTaG9ydCBkZXNjcmlwdGlvbiBvZiB0aGUgcHJvZHVjdCcsIGxvbmdEZXNjcmlwdGlvbjogJ0xvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeVxcJ3Mgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGUgc3BlY2ltZW4gYm9vay4gSXQgaGFzIHN1cnZpdmVkIG5vdCBvbmx5IGZpdmUgY2VudHVyaWVzLCBidXQgYWxzbyB0aGUgbGVhcCBpbnRvIGVsZWN0cm9uaWMgdHlwZXNldHRpbmcsIHJlbWFpbmluZyBlc3NlbnRpYWxseSB1bmNoYW5nZWQuIEl0IHdhcyBwb3B1bGFyaXNlZCBpbiB0aGUgMTk2MHMgd2l0aCB0aGUgcmVsZWFzZSBvZiBMZXRyYXNldCBzaGVldHMgY29udGFpbmluZyBMb3JlbSBJcHN1bSBwYXNzYWdlcywgYW5kIG1vcmUgcmVjZW50bHkgd2l0aCBkZXNrdG9wIHB1Ymxpc2hpbmcgc29mdHdhcmUgbGlrZSBBbGR1cyBQYWdlTWFrZXIgaW5jbHVkaW5nIHZlcnNpb25zIG9mIExvcmVtIElwc3VtLid9LFxuICAgICAgPFByb2R1Y3Q+e2lkOiA3LCBuYW1lOiAnUHJvZHVjdCA3Jywgc2hvcnREZXNjcmlwdGlvbjogJ1Nob3J0IGRlc2NyaXB0aW9uIG9mIHRoZSBwcm9kdWN0JywgbG9uZ0Rlc2NyaXB0aW9uOiAnTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5XFwncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNjcmFtYmxlZCBpdCB0byBtYWtlIGEgdHlwZSBzcGVjaW1lbiBib29rLiBJdCBoYXMgc3Vydml2ZWQgbm90IG9ubHkgZml2ZSBjZW50dXJpZXMsIGJ1dCBhbHNvIHRoZSBsZWFwIGludG8gZWxlY3Ryb25pYyB0eXBlc2V0dGluZywgcmVtYWluaW5nIGVzc2VudGlhbGx5IHVuY2hhbmdlZC4gSXQgd2FzIHBvcHVsYXJpc2VkIGluIHRoZSAxOTYwcyB3aXRoIHRoZSByZWxlYXNlIG9mIExldHJhc2V0IHNoZWV0cyBjb250YWluaW5nIExvcmVtIElwc3VtIHBhc3NhZ2VzLCBhbmQgbW9yZSByZWNlbnRseSB3aXRoIGRlc2t0b3AgcHVibGlzaGluZyBzb2Z0d2FyZSBsaWtlIEFsZHVzIFBhZ2VNYWtlciBpbmNsdWRpbmcgdmVyc2lvbnMgb2YgTG9yZW0gSXBzdW0uJ30sXG4gICAgICA8UHJvZHVjdD57aWQ6IDgsIG5hbWU6ICdQcm9kdWN0IDgnLCBzaG9ydERlc2NyaXB0aW9uOiAnU2hvcnQgZGVzY3JpcHRpb24gb2YgdGhlIHByb2R1Y3QnLCBsb25nRGVzY3JpcHRpb246ICdMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnlcXCdzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2suIEl0IGhhcyBzdXJ2aXZlZCBub3Qgb25seSBmaXZlIGNlbnR1cmllcywgYnV0IGFsc28gdGhlIGxlYXAgaW50byBlbGVjdHJvbmljIHR5cGVzZXR0aW5nLCByZW1haW5pbmcgZXNzZW50aWFsbHkgdW5jaGFuZ2VkLiBJdCB3YXMgcG9wdWxhcmlzZWQgaW4gdGhlIDE5NjBzIHdpdGggdGhlIHJlbGVhc2Ugb2YgTGV0cmFzZXQgc2hlZXRzIGNvbnRhaW5pbmcgTG9yZW0gSXBzdW0gcGFzc2FnZXMsIGFuZCBtb3JlIHJlY2VudGx5IHdpdGggZGVza3RvcCBwdWJsaXNoaW5nIHNvZnR3YXJlIGxpa2UgQWxkdXMgUGFnZU1ha2VyIGluY2x1ZGluZyB2ZXJzaW9ucyBvZiBMb3JlbSBJcHN1bS4nfSxcbiAgICAgIDxQcm9kdWN0PntpZDogOSwgbmFtZTogJ1Byb2R1Y3QgOScsIHNob3J0RGVzY3JpcHRpb246ICdTaG9ydCBkZXNjcmlwdGlvbiBvZiB0aGUgcHJvZHVjdCcsIGxvbmdEZXNjcmlwdGlvbjogJ0xvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeVxcJ3Mgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGUgc3BlY2ltZW4gYm9vay4gSXQgaGFzIHN1cnZpdmVkIG5vdCBvbmx5IGZpdmUgY2VudHVyaWVzLCBidXQgYWxzbyB0aGUgbGVhcCBpbnRvIGVsZWN0cm9uaWMgdHlwZXNldHRpbmcsIHJlbWFpbmluZyBlc3NlbnRpYWxseSB1bmNoYW5nZWQuIEl0IHdhcyBwb3B1bGFyaXNlZCBpbiB0aGUgMTk2MHMgd2l0aCB0aGUgcmVsZWFzZSBvZiBMZXRyYXNldCBzaGVldHMgY29udGFpbmluZyBMb3JlbSBJcHN1bSBwYXNzYWdlcywgYW5kIG1vcmUgcmVjZW50bHkgd2l0aCBkZXNrdG9wIHB1Ymxpc2hpbmcgc29mdHdhcmUgbGlrZSBBbGR1cyBQYWdlTWFrZXIgaW5jbHVkaW5nIHZlcnNpb25zIG9mIExvcmVtIElwc3VtLid9LFxuICAgICAgPFByb2R1Y3Q+e2lkOiAxMCwgbmFtZTogJ1Byb2R1Y3QgMTAnLCBzaG9ydERlc2NyaXB0aW9uOiAnU2hvcnQgZGVzY3JpcHRpb24gb2YgdGhlIHByb2R1Y3QnLCBsb25nRGVzY3JpcHRpb246ICdMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnlcXCdzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2suIEl0IGhhcyBzdXJ2aXZlZCBub3Qgb25seSBmaXZlIGNlbnR1cmllcywgYnV0IGFsc28gdGhlIGxlYXAgaW50byBlbGVjdHJvbmljIHR5cGVzZXR0aW5nLCByZW1haW5pbmcgZXNzZW50aWFsbHkgdW5jaGFuZ2VkLiBJdCB3YXMgcG9wdWxhcmlzZWQgaW4gdGhlIDE5NjBzIHdpdGggdGhlIHJlbGVhc2Ugb2YgTGV0cmFzZXQgc2hlZXRzIGNvbnRhaW5pbmcgTG9yZW0gSXBzdW0gcGFzc2FnZXMsIGFuZCBtb3JlIHJlY2VudGx5IHdpdGggZGVza3RvcCBwdWJsaXNoaW5nIHNvZnR3YXJlIGxpa2UgQWxkdXMgUGFnZU1ha2VyIGluY2x1ZGluZyB2ZXJzaW9ucyBvZiBMb3JlbSBJcHN1bS4nfSxcbiAgICBdO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuLi8uLi9tb2RlbHMvcHJvZHVjdCc7XG5pbXBvcnQgeyBQcm9kdWN0c0Rhb1NlcnZpY2UgfSBmcm9tICcuLi8uLi9kYW9zL3Byb2R1Y3RzL3Byb2R1Y3RzLmRhby5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdHNTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByb2R1Y3RzRGFvU2VydmljZTogUHJvZHVjdHNEYW9TZXJ2aWNlKSB7IH1cblxuICBnZXRBbGxQcm9kdWN0cygpIDogUHJvZHVjdCBbXSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZHVjdHNEYW9TZXJ2aWNlLmdldEFsbCgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFByb2R1Y3RzRGFvU2VydmljZSB9IGZyb20gJy4vZGFvcy9wcm9kdWN0cy9wcm9kdWN0cy5kYW8uc2VydmljZSc7XG5pbXBvcnQgeyBQcm9kdWN0c1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3Byb2R1Y3RzL3Byb2R1Y3RzLnNlcnZpY2UnO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgUHJvZHVjdHNTZXJ2aWNlLFxuXG4gICAgUHJvZHVjdHNEYW9TZXJ2aWNlXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFByb2R1Y3RzU2VydmljZSxcblxuICAgIFByb2R1Y3RzRGFvU2VydmljZVxuICBdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHsgfVxuIiwiLy8gdGhpcyBpbXBvcnQgc2hvdWxkIGJlIGZpcnN0IGluIG9yZGVyIHRvIGxvYWQgc29tZSByZXF1aXJlZCBzZXR0aW5ncyAobGlrZSBnbG9iYWxzIGFuZCByZWZsZWN0LW1ldGFkYXRhKVxuaW1wb3J0IHsgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm0nO1xuXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICdAc3JjL2FwcC9hcHAubW9kdWxlJztcblxuLy8gQSB0cmFkaXRpb25hbCBOYXRpdmVTY3JpcHQgYXBwbGljYXRpb24gc3RhcnRzIGJ5IGluaXRpYWxpemluZyBnbG9iYWwgb2JqZWN0cyxcbi8vIHNldHRpbmcgdXAgZ2xvYmFsIENTUyBydWxlcywgY3JlYXRpbmcsIGFuZCBuYXZpZ2F0aW5nIHRvIHRoZSBtYWluIHBhZ2UuXG4vLyBBbmd1bGFyIGFwcGxpY2F0aW9ucyBuZWVkIHRvIHRha2UgY2FyZSBvZiB0aGVpciBvd24gaW5pdGlhbGl6YXRpb246IG1vZHVsZXMsIGNvbXBvbmVudHMsIGRpcmVjdGl2ZXMsIHJvdXRlcywgREkgcHJvdmlkZXJzLlxuLy8gQSBOYXRpdmVTY3JpcHQgQW5ndWxhciBhcHAgbmVlZHMgdG8gbWFrZSBib3RoIHBhcmFkaWdtcyB3b3JrIHRvZ2V0aGVyLFxuLy8gc28gd2UgcHJvdmlkZSBhIHdyYXBwZXIgcGxhdGZvcm0gb2JqZWN0LCBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMsXG4vLyB0aGF0IHNldHMgdXAgYSBOYXRpdmVTY3JpcHQgYXBwbGljYXRpb24gYW5kIGNhbiBib290c3RyYXAgdGhlIEFuZ3VsYXIgZnJhbWV3b3JrLlxucGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XG4iXSwic291cmNlUm9vdCI6IiJ9