webpackHotUpdate("bundle",{

/***/ "./app/app-routing.module.tns.ts":
false,

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

/***/ "./app/app.component.tns.ts":
false,

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

/***/ "./app/components/pages/home/home.component.tns.ts":
false,

/***/ "./app/components/pages/login/login.component.tns.ts":
false,

/***/ "./app/components/pages/signup/signup.component.tns.ts":
false,

/***/ "./app/components/products/details/details.component.tns.ts":
false,

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

/***/ "./app/components/products/edit/edit.component.tns.ts":
false,

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
    }
    EditComponent.prototype.ngOnInit = function () {
    };
    EditComponent.prototype.onSave = function () {
    };
    EditComponent.prototype.onCancel = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EditComponent.prototype, "product", void 0);
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

/***/ "./app/components/products/list/list.component.tns.ts":
false,

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

/***/ "./app/components/products/product-card/product-card.component.tns.ts":
false,

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



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYXBwLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAubW9kdWxlLnRucy50cyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL2VkaXQvZWRpdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvcHJvZHVjdHMvbGlzdC9saXN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0LWNhcmQvcHJvZHVjdC1jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDOEI7QUFDMUI7QUFNN0M7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1Qiw4REFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUMsT0FBTyxDQUFDLDBEQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQztTQUNwQyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBO0FBQUo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JxQjtBQVFsRDtJQUNFO0lBQ0EsQ0FBQztJQUVELCtCQUFRLEdBQVI7SUFDQSxDQUFDO0lBTFUsWUFBWTtRQU54QiwrREFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsa0ZBQW1DOztTQUdwQyxDQUFDOztPQUNXLFlBQVksQ0FNeEI7SUFBRCxtQkFBQztDQUFBO0FBTndCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUmtDO0FBQ21CO0FBRXRCO0FBQ1Q7QUFDd0I7QUFDRztBQUNHO0FBQ0c7QUFDTjtBQUNoQjtBQUN5QjtBQUNjO0FBQ3ZCO0FBRzFFLDJFQUEyRTtBQUMzRSx3RUFBd0U7QUFFeEUsNkVBQTZFO0FBQzdFLG1GQUFtRjtBQXVCbkY7SUFBQTtJQUF5QixDQUFDO0lBQWIsU0FBUztRQXJCckIsOERBQVEsQ0FBQztZQUNSLFlBQVksRUFBRTtnQkFDWiwyREFBWTtnQkFDWixtRkFBYTtnQkFDYixzRkFBYztnQkFDZCx5RkFBZTtnQkFDZiw0RkFBZ0I7Z0JBQ2hCLHNGQUFhO2dCQUNiLGdHQUFnQjtnQkFDaEIsOEdBQW9CO2dCQUNwQix1RkFBYTthQUNkO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLDJGQUFrQjtnQkFDbEIsb0VBQWdCO2dCQUNoQixzRUFBWTthQUNiO1lBQ0QsU0FBUyxFQUFFLEVBQUU7WUFDYixTQUFTLEVBQUUsQ0FBQywyREFBWSxDQUFDO1lBQ3pCLE9BQU8sRUFBRSxDQUFDLDhEQUFnQixDQUFDO1NBQzVCLENBQUM7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBO0FBQUo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDeUQ7QUFTL0U7SUFLRTtRQUhVLFdBQU0sR0FBc0IsSUFBSSwwREFBWSxFQUFFLENBQUM7UUFDL0MsU0FBSSxHQUEwQixJQUFJLDBEQUFZLEVBQUUsQ0FBQztJQUUzQyxDQUFDO0lBRWpCLG1DQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsbUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELGlDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQWZRO1FBQVIsMkRBQUssRUFBRTs7cURBQWtCO0lBQ2hCO1FBQVQsNERBQU0sRUFBRTtrQ0FBUywwREFBWTtvREFBMkI7SUFDL0M7UUFBVCw0REFBTSxFQUFFO2tDQUFPLDBEQUFZO2tEQUErQjtJQUhoRCxnQkFBZ0I7UUFONUIsK0RBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxZQUFZO1lBQ3RCLGtIQUF1Qzs7U0FHeEMsQ0FBQzs7T0FDVyxnQkFBZ0IsQ0FpQjVCO0lBQUQsdUJBQUM7Q0FBQTtBQWpCNEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1Q0QjtBQVN6RDtJQUdFO0lBQWdCLENBQUM7SUFFakIsZ0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCw4QkFBTSxHQUFOO0lBRUEsQ0FBQztJQUVELGdDQUFRLEdBQVI7SUFFQSxDQUFDO0lBYlE7UUFBUiwyREFBSyxFQUFFOztrREFBa0I7SUFEZixhQUFhO1FBTnpCLCtEQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQiw0R0FBb0M7O1NBR3JDLENBQUM7O09BQ1csYUFBYSxDQWdCekI7SUFBRCxvQkFBQztDQUFBO0FBaEJ5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1R3QjtBQUNtQztBQVNyRjtJQUtFLHVCQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFKcEQsaUJBQVksR0FBZSxFQUFFLENBQUM7UUFDOUIsb0JBQWUsR0FBWSxTQUFTLENBQUM7UUFDckMsa0JBQWEsR0FBWSxTQUFTLENBQUM7SUFFcUIsQ0FBQztJQUV6RCxnQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzVELENBQUM7SUFFRCxnQ0FBUSxHQUFSLFVBQVMsS0FBYztRQUNyQixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBRUQsOEJBQU0sR0FBTixVQUFPLEtBQWM7UUFDbkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQzs7Z0JBWm9DLGtHQUFlOztJQUx6QyxhQUFhO1FBTnpCLCtEQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQiw0R0FBb0M7O1NBR3JDLENBQUM7eUNBTXFDLGtHQUFlO09BTHpDLGFBQWEsQ0FtQnpCO0lBQUQsb0JBQUM7Q0FBQTtBQW5CeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZxRDtBQVMvRTtJQUlFO1FBRlUsV0FBTSxHQUEwQixJQUFJLDBEQUFZLEVBQUUsQ0FBQztJQUU3QyxDQUFDO0lBRWpCLHVDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsdUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBVlE7UUFBUiwyREFBSyxFQUFFOzt5REFBa0I7SUFDaEI7UUFBVCw0REFBTSxFQUFFO2tDQUFTLDBEQUFZO3dEQUErQjtJQUZsRCxvQkFBb0I7UUFOaEMsK0RBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsNEhBQTRDOztTQUc3QyxDQUFDOztPQUNXLG9CQUFvQixDQWFoQztJQUFELDJCQUFDO0NBQUE7QUFiZ0MiLCJmaWxlIjoiYnVuZGxlLjczMzQ5YTg1ODA4NjkxZTEwZmIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gJ0BzcmMvYXBwL2FwcC5yb3V0ZXMnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcm9vdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hcHAuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcblxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gJy4vYXBwLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IFNpZ251cENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYXltZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL3BheW1lbnQvcGF5bWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wcm9kdWN0cy9saXN0L2xpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4vc2hhcmVkL3NoYXJlZC5tb2R1bGUudG5zJztcbmltcG9ydCB7IERldGFpbHNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcHJvZHVjdHMvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9kdWN0Q2FyZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0LWNhcmQvcHJvZHVjdC1jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFZGl0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3Byb2R1Y3RzL2VkaXQvZWRpdC5jb21wb25lbnQnO1xuXG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHR3by13YXkgYmluZGluZ1xuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtcyc7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSFRUUCB3cmFwcGVyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb21wb25lbnQsXG4gICAgSG9tZUNvbXBvbmVudCxcbiAgICBMb2dpbkNvbXBvbmVudCxcbiAgICBTaWdudXBDb21wb25lbnQsXG4gICAgUGF5bWVudENvbXBvbmVudCxcbiAgICBMaXN0Q29tcG9uZW50LFxuICAgIERldGFpbHNDb21wb25lbnQsXG4gICAgUHJvZHVjdENhcmRDb21wb25lbnQsXG4gICAgRWRpdENvbXBvbmVudCxcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgIFNoYXJlZE1vZHVsZVxuICBdLFxuICBwcm92aWRlcnM6IFtdLFxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IFByb2R1Y3QgZnJvbSAnQHNyYy9hcHAvc2hhcmVkL21vZGVscy9wcm9kdWN0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnQXBwRGV0YWlscycsXG4gIHRlbXBsYXRlVXJsOiAnLi9kZXRhaWxzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGV0YWlscy5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiAnbW9kdWxlLmlkJ1xufSlcbmV4cG9ydCBjbGFzcyBEZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgcHJvZHVjdDogUHJvZHVjdDtcbiAgQE91dHB1dCgpIGdvQmFjazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBlZGl0OiBFdmVudEVtaXR0ZXI8UHJvZHVjdD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG9uR29CYWNrKCkge1xuICAgIHRoaXMuZ29CYWNrLmVtaXQoKTtcbiAgfVxuXG4gIG9uRWRpdCgpIHtcbiAgICB0aGlzLmVkaXQuZW1pdCh0aGlzLnByb2R1Y3QpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBQcm9kdWN0IGZyb20gJ0BzcmMvYXBwL3NoYXJlZC9tb2RlbHMvcHJvZHVjdCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ0FwcEVkaXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZWRpdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2VkaXQuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkXG59KVxuZXhwb3J0IGNsYXNzIEVkaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBwcm9kdWN0OiBQcm9kdWN0O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBvblNhdmUoKSB7XG5cbiAgfVxuXG4gIG9uQ2FuY2VsKCkge1xuICAgIFxuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0c1NlcnZpY2UgfSBmcm9tICdAc3JjL2FwcC9zaGFyZWQvc2VydmljZXMvcHJvZHVjdHMvcHJvZHVjdHMuc2VydmljZSc7XG5pbXBvcnQgUHJvZHVjdCBmcm9tICdAc3JjL2FwcC9zaGFyZWQvbW9kZWxzL3Byb2R1Y3QnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdBcHBMaXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9saXN0LmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6ICdtb2R1bGUuaWQnXG59KVxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcm9kdWN0c0xpc3Q6IFByb2R1Y3QgW10gPSBbXTtcbiAgc2VsZWN0ZWRQcm9kdWN0OiBQcm9kdWN0ID0gdW5kZWZpbmVkO1xuICBlZGl0ZWRQcm9kdWN0OiBQcm9kdWN0ID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJvZHVjdHNTZXJ2aWNlOiBQcm9kdWN0c1NlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucHJvZHVjdHNMaXN0ID0gdGhpcy5wcm9kdWN0c1NlcnZpY2UuZ2V0QWxsUHJvZHVjdHMoKTtcbiAgfVxuXG4gIG9uU2VsZWN0KGV2ZW50OiBQcm9kdWN0KSB7XG4gICAgdGhpcy5zZWxlY3RlZFByb2R1Y3QgPSBldmVudDtcbiAgfVxuXG4gIG9uRWRpdChldmVudDogUHJvZHVjdCkge1xuICAgIHRoaXMuZWRpdGVkUHJvZHVjdCA9IGV2ZW50O1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBQcm9kdWN0IGZyb20gJ0BzcmMvYXBwL3NoYXJlZC9tb2RlbHMvcHJvZHVjdCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ0FwcFByb2R1Y3RDYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtY2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Byb2R1Y3QtY2FyZC5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiAnbW9kdWxlLmlkJ1xufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0Q2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHByb2R1Y3Q6IFByb2R1Y3Q7XG4gIEBPdXRwdXQoKSBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxQcm9kdWN0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgb25TZWxlY3QoKSB7XG4gICAgdGhpcy5zZWxlY3QuZW1pdCh0aGlzLnByb2R1Y3QpO1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=