(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main view/routes wrapper-->\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Company';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _company_search_company_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./company-search/company-search.component */ "./src/app/company-search/company-search.component.ts");
/* harmony import */ var _company_details_company_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./company-details/company-details.component */ "./src/app/company-details/company-details.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _company_search_company_search_component__WEBPACK_IMPORTED_MODULE_8__["CompanySearchComponent"],
                _company_details_company_details_component__WEBPACK_IMPORTED_MODULE_9__["CompanyDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_6__["ROUTES"]),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_10__["AppService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _company_search_company_search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./company-search/company-search.component */ "./src/app/company-search/company-search.component.ts");
/* harmony import */ var _company_details_company_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company-details/company-details.component */ "./src/app/company-details/company-details.component.ts");


var ROUTES = [
    // Main redirect
    { path: '', redirectTo: 'companysearch', pathMatch: 'full' },
    { path: 'companysearch', component: _company_search_company_search_component__WEBPACK_IMPORTED_MODULE_0__["CompanySearchComponent"] },
    { path: 'companydetails', component: _company_details_company_details_component__WEBPACK_IMPORTED_MODULE_1__["CompanyDetailsComponent"] }
];


/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppService = /** @class */ (function () {
    function AppService() {
        this.companyName = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.currentCompanyName = this.companyName.asObservable();
        this.companyIds = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.currentCompanyIds = this.companyIds.asObservable();
    }
    AppService.prototype.setCompanyName = function (companyName) {
        this.companyName.next(companyName);
        console.log(this.companyName);
    };
    AppService.prototype.setCompanyIds = function (companyIds) {
        this.companyIds.next(companyIds);
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/company-details/company-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/company-details/company-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/company-details/company-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/company-details/company-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<h2 class=\"text-center\">Company Details</h2>\n\t<table class=\"table\">\n\t\t<thead>\n\t\t\t<tr>\n\t\t\t\t<th>Company Name</th>\n\t\t\t\t<th>Company Ids</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr>\n\t\t\t\t<td>{{companyName}}</td>\n\t\t\t\t<td>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li *ngFor=\"let companyId of companyIdArr\"> {{companyId}}</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n</div>"

/***/ }),

/***/ "./src/app/company-details/company-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/company-details/company-details.component.ts ***!
  \**************************************************************/
/*! exports provided: CompanyDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyDetailsComponent", function() { return CompanyDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var CompanyDetailsComponent = /** @class */ (function () {
    function CompanyDetailsComponent(formBuilder, http, router, renderer, elementRef, document, appService) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.router = router;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.document = document;
        this.appService = appService;
    }
    CompanyDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.currentCompanyName.subscribe(function (companyName) { return _this.companyName = companyName; });
        this.appService.currentCompanyIds.subscribe(function (companyIds) { return _this.companyIds = companyIds; });
        if (this.companyName == undefined || this.companyName == '') {
            this.router.navigateByUrl('/companysearch');
        }
        this.companyIds = this.companyIds.substring(0, this.companyIds.length - 1);
        this.companyIdArr = this.companyIds.split(",");
        console.log(this.companyIdArr);
    };
    CompanyDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company-details',
            template: __webpack_require__(/*! ./company-details.component.html */ "./src/app/company-details/company-details.component.html"),
            styles: [__webpack_require__(/*! ./company-details.component.css */ "./src/app/company-details/company-details.component.css")]
        }),
        __param(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], Object, _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]])
    ], CompanyDetailsComponent);
    return CompanyDetailsComponent;
}());



/***/ }),

/***/ "./src/app/company-search/company-search.component.css":
/*!*************************************************************!*\
  !*** ./src/app/company-search/company-search.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/company-search/company-search.component.html":
/*!**************************************************************!*\
  !*** ./src/app/company-search/company-search.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<h2 class=\"text-center\">Company Search</h2>\n\t<form class=\"form-horizontal\" [formGroup]='companySearchForm' (ngSubmit)='onSubmit(companySearchForm)' novalidate>\n\t\t<div class=\"form-group\">\n\t\t\t<label class=\"col-sm-2 control-label\">Company Name <label class=\"text-danger\">*</label></label>\n\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t<input type='hidden' formControlName='companyName' class='form-control'>\n\t\t\t\t<div class=\"autocomplete\" style=\"width:100%;\" [ngClass]=\"{ 'autocomplete': isAutoComplete,\n\t\t\t\t'autocomplete-items': !isAutoComplete }\">\n\t\t\t\t\t<input type='text' class='form-control' id=\"autoCompleteValue\" placeholder='Enter Company Name'\n\t\t\t\t\t\t(keyup)=\"getCompanyDetails($event)\" value=\"{{companyNameValue}}\">\n\t\t\t\t\t<div #autoCompleteDiv class=\"autoCompleteDivClass\" *ngIf=\"showAutoComplete\"></div>\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"companyName.invalid && (companyName.dirty || isSubmitted)\" class=\"text-danger\">\n\t\t\t\t\tCompany Name is required.\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<div class=\"col-sm-4 col-sm-offset-2\">\n\t\t\t\t<button class=\"btn btn-primary\" type=\"submit\">Submit</button>\n\t\t\t</div>\n\t\t</div>\n\t</form>\n</div>"

/***/ }),

/***/ "./src/app/company-search/company-search.component.ts":
/*!************************************************************!*\
  !*** ./src/app/company-search/company-search.component.ts ***!
  \************************************************************/
/*! exports provided: CompanySearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanySearchComponent", function() { return CompanySearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var CompanySearchComponent = /** @class */ (function () {
    function CompanySearchComponent(formBuilder, http, router, renderer, elementRef, document, appService) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.router = router;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.document = document;
        this.appService = appService;
        this.isSubmitted = false;
        this.isRunning = 0;
        this.isAutoComplete = true;
        this.companyNameValue = '';
    }
    CompanySearchComponent.prototype.ngOnInit = function () {
        this.companySearchForm = this.formBuilder.group({
            companyName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    Object.defineProperty(CompanySearchComponent.prototype, "companyName", {
        get: function () { return this.companySearchForm.get('companyName'); },
        enumerable: true,
        configurable: true
    });
    CompanySearchComponent.prototype.onSubmit = function (companyFormModel) {
        this.isSubmitted = true;
        if (!this.companySearchForm.valid)
            return;
        this.router.navigateByUrl('/companydetails');
    };
    CompanySearchComponent.prototype.getCompanyDetails = function (event) {
        var _this = this;
        var searchText;
        searchText = event.target.value;
        this.showAutoComplete = true;
        if (searchText.length >= 3) {
            this.isRunning = 1;
            this.isAutoComplete = false;
            var data = { "search_results": [{ "company_ids": ["1000040"], "company_name": "Amazon.com, Inc" }, { "company_ids": ["1000143"], "company_name": "CH2M Hill Companies Ltd" }, { "company_ids": ["1010033", "1141612"], "company_name": "Comcast Corp" }, { "company_ids": ["1000174"], "company_name": "Comerica, Inc" }, { "company_ids": ["1000189"], "company_name": "Computer Sciences Corp" }, { "company_ids": ["10533156"], "company_name": "Deere & Company" }, { "company_ids": ["1217674"], "company_name": "Fidelity Investments Institutional Operations Company, Inc" }, { "company_ids": ["1000382"], "company_name": "Kellogg Company" }, { "company_ids": ["1000410"], "company_name": "Level 3 Communications, Inc" }, { "company_ids": ["7359580"], "company_name": "New York City Sports Commission" }, { "company_ids": ["1000557"], "company_name": "Qualcomm, Inc" }, { "company_ids": ["1010161"], "company_name": "Temple University - Of The Commonwealth System Of Higher Education" }, { "company_ids": ["1000232"], "company_name": "The Jones Financial Companies, LLLP" }, { "company_ids": ["1010192"], "company_name": "Virginia Commonwealth University" }, { "company_ids": ["10013201"], "company_name": "Virginia, Commonwealth Of" }] };
            this.companyData = data['search_results'];
            console.log(data['search_results']);
            if (this.companyData.length > 0) {
                for (var i = 0; i < this.companyData.length; i++) {
                    var companyName = this.companyData[i]['company_name'];
                    var companyIds = void 0;
                    for (var j = 0; j < this.companyData[i]['company_ids'].length; j++) {
                        if (companyIds == undefined)
                            companyIds = this.companyData[i]['company_ids'][j] + ',';
                        else
                            companyIds += this.companyData[i]['company_ids'][j] + ',';
                    }
                    var div = this.renderer.createElement('div');
                    var text = this.renderer.createText(companyName);
                    var comment = this.renderer.createComment(companyIds);
                    var className = this.renderer.addClass(div, 'companyDiv');
                    this.renderer.appendChild(div, text);
                    this.renderer.appendChild(div, comment);
                    this.renderer.appendChild(this.autoCompleteDiv.nativeElement, div);
                }
                // Listen to click events in the component
                this.renderer.listen(this.elementRef.nativeElement, 'click', function (event) {
                    if (event.target.childNodes[1] != '' && event.target.childNodes[1] != undefined) {
                        _this.companySearchForm.patchValue({ companyName: event.target.textContent });
                        _this.companyNameValue = event.target.textContent;
                        _this.appService.setCompanyName(event.target.textContent);
                        _this.appService.setCompanyIds(event.target.childNodes[1].data);
                        _this.isAutoComplete = true;
                        _this.showAutoComplete = false;
                    }
                });
            }
            /*
            this.http
                .get('https://daas-qa-sig-api.circleback.com/service/contactcloud/companies/autocomplete?company_name=' + searchText)
                .toPromise()
                .then(res => {
                    this.companyData = res['search_results'];
                    if (this.companyData.length > 0) {
                        for (let i = 0; i < this.companyData.length; i++) {
                            let companyName = this.companyData[i]['company_name'];
                            let companyIds;
                            for (let j = 0; j < this.companyData[i]['company_ids'].length; j++) {
                                if (companyIds == undefined)
                                    companyIds = this.companyData[i]['company_ids'][j] + ',';
                                else
                                    companyIds += this.companyData[i]['company_ids'][j] + ',';
                            }
                            let div = this.renderer.createElement('div');
                            const text = this.renderer.createText(companyName);
                            const comment = this.renderer.createComment(companyIds);
                            const className = this.renderer.addClass(div, 'companyDiv');
                            this.renderer.appendChild(div, text);
                            this.renderer.appendChild(div, comment);
                            this.renderer.appendChild(this.autoCompleteDiv.nativeElement, div);
                        }

                        // Listen to click events in the component
                        this.renderer.listen(this.elementRef.nativeElement, 'click', (event) => {
                            if (event.target.childNodes[1] != '' && event.target.childNodes[1] != undefined) {
                                this.companySearchForm.patchValue({ companyName: event.target.textContent })
                                this.companyNameValue = event.target.textContent;
                                this.appService.setCompanyName(event.target.textContent);
                                this.appService.setCompanyIds(event.target.childNodes[1].data);
                                this.isAutoComplete = true;
                                this.showAutoComplete = false;
                            }
                        });
                    }
                });
            this.isRunning = 0;
            */
        }
    };
    ;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("autoCompleteDiv", { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CompanySearchComponent.prototype, "autoCompleteDiv", void 0);
    CompanySearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company-search',
            template: __webpack_require__(/*! ./company-search.component.html */ "./src/app/company-search/company-search.component.html"),
            styles: [__webpack_require__(/*! ./company-search.component.css */ "./src/app/company-search/company-search.component.css")]
        }),
        __param(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], Object, _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]])
    ], CompanySearchComponent);
    return CompanySearchComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/search/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map