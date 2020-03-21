webpackHotUpdate("bundle",{

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
            providedIn: 'shared'
        }),
        __metadata("design:paramtypes", [_daos_products_products_dao_service__WEBPACK_IMPORTED_MODULE_1__["ProductsDaoService"]])
    ], ProductsService);
    return ProductsService;
}());



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvc2hhcmVkL3NlcnZpY2VzL3Byb2R1Y3RzL3Byb2R1Y3RzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEyQztBQUVtQztBQUs5RTtJQUVFLHlCQUFvQixrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtJQUFJLENBQUM7SUFFL0Qsd0NBQWMsR0FBZDtRQUNFLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzFDLENBQUM7O2dCQUp1QyxzRkFBa0I7O0lBRi9DLGVBQWU7UUFIM0IsZ0VBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxRQUFRO1NBQ3JCLENBQUM7eUNBR3dDLHNGQUFrQjtPQUYvQyxlQUFlLENBTzNCO0lBQUQsc0JBQUM7Q0FBQTtBQVAyQiIsImZpbGUiOiJidW5kbGUuZTk3OGUxNTA2NDBmMGRhM2Y5ODkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBQcm9kdWN0IGZyb20gJy4uLy4uL21vZGVscy9wcm9kdWN0JztcbmltcG9ydCB7IFByb2R1Y3RzRGFvU2VydmljZSB9IGZyb20gJy4uLy4uL2Rhb3MvcHJvZHVjdHMvcHJvZHVjdHMuZGFvLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdzaGFyZWQnXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RzU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwcm9kdWN0c0Rhb1NlcnZpY2U6IFByb2R1Y3RzRGFvU2VydmljZSkgeyB9XG5cbiAgZ2V0QWxsUHJvZHVjdHMoKSA6IFByb2R1Y3QgW10ge1xuICAgIHJldHVybiB0aGlzLnByb2R1Y3RzRGFvU2VydmljZS5nZXRBbGwoKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==