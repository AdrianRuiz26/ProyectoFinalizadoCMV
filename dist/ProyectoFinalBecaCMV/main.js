(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\ProyectoFinal_BecaCMV\ProyectoFinalizadoCMV\src\main.ts */"zUnb");


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var src_app_services_galeria_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/galeria.service */ "XV9r");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HeaderComponent {
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([src_app_services_galeria_service__WEBPACK_IMPORTED_MODULE_0__["GaleriaService"]])], decls: 24, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", "justify-content-center"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], [1, "nav"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "titulo"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], ["href", "https://adrianruiz26.github.io/Publico_Final/ejercicios/primera_semana/primera_semana.html", "target", "_blank", 1, "dropdown-item"], ["href", "https://adrianruiz26.github.io/Publico_Final/ejercicios/segunda_semana/segunda_semana.html", "target", "_blank", 1, "dropdown-item"], ["href", "https://adrianruiz26.github.io/Publico_Final/ejercicios/tercera_semana_1/less.html", "target", "_blank", 1, "dropdown-item"], ["href", "https://adrianruiz26.github.io/Publico_Final/ejercicios/tercera_semana_2/bootstrap.html", "target", "_blank", 1, "dropdown-item"], ["href", "https://adrianruiz26.github.io/Publico_Final/ejercicios/cuarta_semana/cuarta_semana.html", "target", "_blank", 1, "dropdown-item"], ["href", "https://adrianruiz26.github.io/Publico_Final/ejercicios/quinta_semana/quinta_semana.html", "target", "_blank", 1, "dropdown-item"], [1, "nav-item"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Ejercicios semanales");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Primera Semana - 3 Imagenes Responsive");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Segunda Semana - Grid y Modo Noche");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Tercera Semana 1 - LESS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Tercera Semana 2 - Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Cuarta Semana - Galeria con XML y FlexBox");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Quinta Semana - Multimedia, Canvas y SVG");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: [".nav-link[_ngcontent-%COMP%]{\n    font-size: 25px;\n    margin-left: 20px;\n    margin-right: 20px;\n}\n.titulo[_ngcontent-%COMP%]{\n  font-size: 2rem;\n}\n@media screen and (max-width: 992px) {\n    .justify-content-center[_ngcontent-%COMP%] {\n        justify-content: flex-start;\n    }\n    .navbar[_ngcontent-%COMP%]{\n        display: block;\n    }\n}\n.botonModoNoche[_ngcontent-%COMP%] {\n    background-color: #07afcc; \n    border: none;\n    color: white;\n    padding: 10px 15px;\n    text-align: center;\n    text-decoration: none;\n    font-size: 16px;\n    transition-duration: 0.4s;\n    cursor: pointer;\n    width: 10rem;\n  }\n.botonModoNoche[_ngcontent-%COMP%]:hover {\n    background-color: white; \n    color: #07afcc;\n  }\n.iconoModoNoche[_ngcontent-%COMP%] {\n    width: 15%;\n  }\n#header.modoNoche[_ngcontent-%COMP%] {\n    background-color: rgba(0, 0, 0, 0.527);\n  }\n#pie.modoNoche[_ngcontent-%COMP%] {\n    color: white;\n  }\n#divParrafo.modoNoche[_ngcontent-%COMP%]:hover {\n    background-color: rgba(44, 38, 38, 0.418);\n  }\n#subtitulo.modoNoche[_ngcontent-%COMP%] {\n    background-color: rgba(0, 0, 0, 0.527);\n  }\n#botonModoNoche.modoNoche[_ngcontent-%COMP%] {\n    background-color: rgba(255, 255, 255, 0.418);\n  }\n#menuhorizontal.modoNoche[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    background-color: rgba(0, 0, 0, 0.527);\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtJQUNJO1FBR0ksMkJBQTJCO0lBQy9CO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0FBQ0o7QUFDQTtJQUNJLHlCQUF5QixFQUFFLFVBQVU7SUFDckMsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixZQUFZO0VBQ2Q7QUFFQTtJQUNFLHVCQUF1QixFQUFFLFVBQVU7SUFDbkMsY0FBYztFQUNoQjtBQUVGO0lBQ0ksVUFBVTtFQUNaO0FBRUE7SUFDRSxzQ0FBc0M7RUFDeEM7QUFFQTtJQUNFLFlBQVk7RUFDZDtBQUNBO0lBQ0UseUNBQXlDO0VBQzNDO0FBQ0E7SUFDRSxzQ0FBc0M7RUFDeEM7QUFDQTtJQUNFLDRDQUE0QztFQUM5QztBQUNBO0lBQ0Usc0NBQXNDO0VBQ3hDIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1saW5re1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4udGl0dWxve1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgLmp1c3RpZnktY29udGVudC1jZW50ZXIge1xuICAgICAgICAtd2Via2l0LWJveC1wYWNrOiBpbml0aWFsO1xuICAgICAgICAtbXMtZmxleC1wYWNrOiBpbml0aWFsO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgfVxuICAgIC5uYXZiYXJ7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbn1cbi5ib3Rvbk1vZG9Ob2NoZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA3YWZjYzsgLyogR3JlZW4gKi9cbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogMTByZW07XG4gIH1cbiAgXG4gIC5ib3Rvbk1vZG9Ob2NoZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IC8qIEdyZWVuICovXG4gICAgY29sb3I6ICMwN2FmY2M7XG4gIH1cbiAgXG4uaWNvbm9Nb2RvTm9jaGUge1xuICAgIHdpZHRoOiAxNSU7XG4gIH1cbiBcbiAgI2hlYWRlci5tb2RvTm9jaGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41MjcpO1xuICB9XG4gIFxuICAjcGllLm1vZG9Ob2NoZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gICNkaXZQYXJyYWZvLm1vZG9Ob2NoZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NCwgMzgsIDM4LCAwLjQxOCk7XG4gIH1cbiAgI3N1YnRpdHVsby5tb2RvTm9jaGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41MjcpO1xuICB9XG4gICNib3Rvbk1vZG9Ob2NoZS5tb2RvTm9jaGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MTgpO1xuICB9XG4gICNtZW51aG9yaXpvbnRhbC5tb2RvTm9jaGUgYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUyNyk7XG4gIH0iXX0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _services_galeria_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/galeria.service */ "XV9r");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_services_galeria_service__WEBPACK_IMPORTED_MODULE_0__["GaleriaService"]])], decls: 24, vars: 0, consts: [[1, "text-center", "text-white", 2, "background-color", "#f1f1f1"], [1, "container"], [1, "row"], [1, "col"], [1, "parrafoFooter"], ["href", "https://www.linkedin.com/in/adri%C3%A1n-ruiz-88a9201a8/", "target", "_blank", 1, "linkedinFooter"], ["xmlns", "http://www.w3.org/2000/svg", "width", "30", "height", "30", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-linkedin"], ["d", "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"], [1, "text-center", "text-dark", "p-3", 2, "background-color", "rgba(0, 0, 0, 0.2)"], [1, "text-dark"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Proyecto realizado por Adri\u00E1n Ruiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Realizado para la finalizaci\u00F3n de la beca cursada gracias a CMV Consultores.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Datos de contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Email: adrian.ruiz26@hotmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Telefono: 664759328");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\u00A0\u00A0LinkedIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " \u00A9 2021 Copyright: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Adrian Ruiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: [".col[_ngcontent-%COMP%]{\n    color: rgba(0,0,0,.5);\n    text-align: initial;\n    margin-left: 10%;\n}\n.parrafoFooter[_ngcontent-%COMP%]{\n    font-size: 1.3rem;\n}\n.linkedinFooter[_ngcontent-%COMP%]{\n    text-decoration: none;\n    color:rgba(0,0,0,.5);\n}\n.container[_ngcontent-%COMP%]{\n    padding-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNvbHtcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNSk7XG4gICAgdGV4dC1hbGlnbjogaW5pdGlhbDtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xufVxuLnBhcnJhZm9Gb290ZXJ7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG59XG4ubGlua2VkaW5Gb290ZXJ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOnJnYmEoMCwwLDAsLjUpO1xufVxuXG4uY29udGFpbmVye1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuIl19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_galeria_galeria_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/galeria/galeria.component */ "maDX");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");




class AppComponent {
    constructor() {
        this.title = 'ProyectoFinalBecaCMV';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-galeria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _components_galeria_galeria_component__WEBPACK_IMPORTED_MODULE_2__["GaleriaComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "XV9r":
/*!*********************************************!*\
  !*** ./src/app/services/galeria.service.ts ***!
  \*********************************************/
/*! exports provided: GaleriaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaleriaService", function() { return GaleriaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class GaleriaService {
    activarModoNoche(modoNocheActivo) {
        if (modoNocheActivo) {
            return false;
        }
        return true;
    }
}
GaleriaService.ɵfac = function GaleriaService_Factory(t) { return new (t || GaleriaService)(); };
GaleriaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GaleriaService, factory: GaleriaService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_galeria_galeria_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/galeria/galeria.component */ "maDX");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
        _components_galeria_galeria_component__WEBPACK_IMPORTED_MODULE_3__["GaleriaComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();


/***/ }),

/***/ "maDX":
/*!*********************************************************!*\
  !*** ./src/app/components/galeria/galeria.component.ts ***!
  \*********************************************************/
/*! exports provided: GaleriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaleriaComponent", function() { return GaleriaComponent; });
/* harmony import */ var _assets_imagenes_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/imagenes.json */ "v30H");
var _assets_imagenes_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/imagenes.json */ "v30H", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function GaleriaComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GaleriaComponent_li_12_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const imagen_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.rotate(imagen_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const imagen_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("darkMode", ctx_r0.modoNocheActivo == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", imagen_r1._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("font-size", ctx_r0.fontSize, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](imagen_r1.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", imagen_r1.picture, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](imagen_r1.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](imagen_r1.pieDeFoto);
} }
const DEFAULT_FONT_SIZE = 12;
class GaleriaComponent {
    constructor() {
        this.imagenes = _assets_imagenes_json__WEBPACK_IMPORTED_MODULE_0__;
        this.fontSize = DEFAULT_FONT_SIZE;
    }
    decrease() {
        if (this.fontSize < 8) {
            alert('Puede dañarse la vista, aumente el tamaño o reinicielo');
            return;
        }
        this.fontSize = (this.fontSize * 0.8);
    }
    increase() {
        if (this.fontSize > 18) {
            alert('No va a ver nada, por favor reduzca el tamaño o reinicialo');
            return;
        }
        this.fontSize = (this.fontSize * 1.05);
    }
    reset() {
        this.fontSize = DEFAULT_FONT_SIZE;
    }
    rotate(imagen) {
        var img = document.getElementById(imagen._id);
        if (!imagen.canRotate) {
            img.setAttribute("class", "card rotateImg");
            imagen.canRotate = true;
            return;
        }
        imagen.canRotate = false;
        img.setAttribute("class", "card rotateImg2");
    }
}
GaleriaComponent.ɵfac = function GaleriaComponent_Factory(t) { return new (t || GaleriaComponent)(); };
GaleriaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GaleriaComponent, selectors: [["app-galeria"]], decls: 13, vars: 1, consts: [[2, "display", "flex", "background-color", "#333333bb!important"], ["type", "button", "color", "warn", 1, "btn", "btn-danger", "m-2", 3, "click"], [1, "list-group", "d-inline-block"], [1, "row", "m-auto", "w-90"], ["class", "my-3 mx-auto", 3, "darkMode", 4, "ngFor", "ngForOf"], [1, "my-3", "mx-auto"], [3, "click"], [1, "card", 3, "id"], [1, "flip-box-back"], [1, "flip-box-front"], ["alt", "", 1, "card-img-top", 3, "src"], [1, "card-body"]], template: function GaleriaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GaleriaComponent_Template_button_click_1_listener() { return ctx.increase(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Aumentar Letra\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GaleriaComponent_Template_button_click_4_listener() { return ctx.decrease(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Disminuir Letra\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GaleriaComponent_Template_button_click_7_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Reiniciar\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, GaleriaComponent_li_12_Template, 13, 9, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.imagenes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["ul[_ngcontent-%COMP%] {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    background-color: #333333bb;\n    width: 100%;\n}\n\n\nli[_ngcontent-%COMP%] {\n    float: left;\n    width: 22%;\n}\n\n\n.w-90[_ngcontent-%COMP%] {\n    width:90%;\n}\n\n\nimg[_ngcontent-%COMP%]{\n    max-width: 500px; min-height: 394px;\n}\n\n\n@media (max-width: 1600px){\n        li[_ngcontent-%COMP%]{\n            width: 30%;\n        }\n        img[_ngcontent-%COMP%]{\n            min-width: 176px;\n            max-height: 190px;\n        }\n    }\n\n\n@media (max-width: 1250px){\n        li[_ngcontent-%COMP%]{\n            width: 55%;\n    }\n}\n\n\n.card[_ngcontent-%COMP%]:hover{\n   \n      \n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.8);\n      \n    z-index: 10;\n}\n\n\n.rotateImg[_ngcontent-%COMP%] {\n    transition: transform 1s;\n    transform: rotateY(180deg);\n\n}\n\n\n.rotateImg2[_ngcontent-%COMP%] {\n    transition: transform 1s;\n    transform: rotateY(0deg);\n\n}\n\n\n.card-body[_ngcontent-%COMP%]{\n    background-color: #bbb;\n}\n\n\n.card[_ngcontent-%COMP%] {\n    text-align: center;\n    \n    transform-style: preserve-3d;\n    cursor: pointer;\n}\n\n\n.flip-box-front[_ngcontent-%COMP%], .flip-box-back[_ngcontent-%COMP%] {\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n}\n\n\n.flip-box-front[_ngcontent-%COMP%] {\n    \n    color: black;\n}\n\n\n.flip-box-back[_ngcontent-%COMP%] {\n    transform: rotateY(180deg);\n    position: absolute;;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbGVyaWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQixXQUFXO0FBQ2Y7OztBQUdBO0lBQ0ksV0FBVztJQUNYLFVBQVU7QUFDZDs7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7OztBQUVBO0lBQ0ksZ0JBQWdCLEVBQUUsaUJBQWlCO0FBQ3ZDOzs7QUFHQTtRQUNRO1lBQ0ksVUFBVTtRQUNkO1FBQ0E7WUFDSSxnQkFBZ0I7WUFDaEIsaUJBQWlCO1FBQ3JCO0lBQ0o7OztBQUNKO1FBQ1E7WUFDSSxVQUFVO0lBQ2xCO0FBQ0o7OztBQUVBOzs7SUFHSSx5Q0FBeUM7O0lBRXpDLFdBQVc7QUFDZjs7O0FBR0E7SUFDSSx3QkFBd0I7SUFDeEIsMEJBQTBCOztBQUU5Qjs7O0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsd0JBQXdCOztBQUU1Qjs7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7OztBQUVBO0lBQ0ksa0JBQWtCOztJQUVsQiw0QkFBNEI7SUFDNUIsZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsMkJBQTJCO0FBQy9COzs7QUFFQTs7SUFFSSxZQUFZO0FBQ2hCOzs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoiZ2FsZXJpYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbnVsIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzYmI7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cblxubGkge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAyMiU7XG59XG5cbi53LTkwIHtcbiAgICB3aWR0aDo5MCU7XG59XG5cbmltZ3tcbiAgICBtYXgtd2lkdGg6IDUwMHB4OyBtaW4taGVpZ2h0OiAzOTRweDtcbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogMTYwMHB4KXtcbiAgICAgICAgbGl7XG4gICAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICB9XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTc2cHg7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxOTBweDtcbiAgICAgICAgfVxuICAgIH1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjUwcHgpe1xuICAgICAgICBsaXtcbiAgICAgICAgICAgIHdpZHRoOiA1NSU7XG4gICAgfVxufVxuXG4uY2FyZDpob3ZlcntcbiAgIFxuICAgICAgXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgICBcbiAgICB6LWluZGV4OiAxMDtcbn1cblxuXG4ucm90YXRlSW1nIHtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG5cbn1cbi5yb3RhdGVJbWcyIHtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuXG59XG5cbi5jYXJkLWJvZHl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JiYjtcbn1cblxuLmNhcmQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiAgXG4uZmxpcC1ib3gtZnJvbnQsIC5mbGlwLWJveC1iYWNrIHtcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG4gIFxuLmZsaXAtYm94LWZyb250IHtcbiAgICBcbiAgICBjb2xvcjogYmxhY2s7XG59XG4gIFxuLmZsaXAtYm94LWJhY2sge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTs7XG59XG4iXX0= */"] });


/***/ }),

/***/ "v30H":
/*!**********************************!*\
  !*** ./src/assets/imagenes.json ***!
  \**********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"_id\":\"1\",\"picture\":\"https://www.carlogos.org/car-logos/ferrari-logo-750x1100-show.png\",\"titulo\":\"Ferrari\",\"pieDeFoto\":\"Compañía de automóviles deportivos con sede en Maranello (Módena) Italia.\",\"descripcion\":\"Este fabricante es el resultante de la idea de su fundador Enzo Ferrari de crear una marca de automóviles de turismo con prestaciones lujosas y deportivas, basándose en los éxitos obtenidos a partir de la creación de su Scuderia Ferrari de automovilismo en 1929. Sus mejores autos fueron realizados en el taller de Abasto.\",\"canRotate\":false},{\"_id\":\"2\",\"picture\":\"https://www.carlogos.org/car-logos/honda-logo-1700x1150-show.png\",\"titulo\":\"Honda\",\"pieDeFoto\":\"Honda es una empresa de origen japonés que fabrica automóviles\",\"descripcion\":\"Propulsores para vehículos terrestres, acuáticos y aéreos, motocicletas, robots y componentes para la industria automotriz.\",\"canRotate\":false},{\"_id\":\"3\",\"picture\":\"https://www.carlogos.org/car-logos/lamborghini-logo-1000x1100-show.png\",\"titulo\":\"Lamborghini\",\"pieDeFoto\":\"Lamborghinies un fabricante italiano de superdeportivos fundado en 1963\",\"descripcion\":\"Con sede en Bolognese y que actualmente es parte de la matriz de Volkswagen. Algunos de los nombres de sus automóviles hacen referencia a nombres de toros bravos de lidia indultados (Murciélago), famosos o históricos (Diablo, Aventador), o simplemente palabras relacionadas con la tauromaquia.\",\"canRotate\":false},{\"_id\":\"10\",\"picture\":\"https://www.carlogos.org/logo/Mazda-logo-1997-640x550.jpg\",\"titulo\":\"Mazda\",\"pieDeFoto\":\"Mazda Motor Corporation es un fabricante de automóviles japonés\",\"descripcion\":\"Fundada en 1920, con sede principal en Hiroshima, y con plantas en las localidades de Hiroshima (factoría de Ujina), Nishinoura, Nakanoseki (Hofu) y Miyoshi, Japón. En 2010, produjo 1.307.540 automóviles con ventas en China, Japón, Europa, América del Sur y Norteamérica.\",\"canRotate\":false},{\"_id\":\"6\",\"picture\":\"https://www.carlogos.org/car-logos/tesla-logo-2200x2800-show.png\",\"titulo\":\"Tesla\",\"pieDeFoto\":\"Tesla,es una empresa estadounidense con sede en Palo Alto, California, y liderada por Elon Musk, que diseña, fabrica y vende automóviles eléctricos.​\",\"descripcion\":\"Fue fundada en julio de 2003 por los ingenieros Martin Eberhard y Marc Tarpenning como Tesla Motors. El nombre de la empresa es un tributo al inventor e ingeniero eléctrico Nikola Tesla. Los siguientes tres empleados fueron Ian Wright, Elon Musk y JB Straubel, quienes fueron nombrados co-fundadores de la compañía\",\"canRotate\":false},{\"_id\":\"7\",\"picture\":\"https://www.carlogos.org/car-logos/ford-logo-2017-show.png\",\"titulo\":\"Ford\",\"pieDeFoto\":\"Ford Motor Company, más conocida como Ford, es una empresa multinacional de origen estadounidense, especializada en la industria automotriz.\",\"descripcion\":\"Con su sede central ubicada en Dearborn, Estado de Míchigan, la empresa se expandió a nivel mundial destacándose principalmente en el rubro de producción de automóviles. La compañía tiene presencia a nivel mundial, gracias a sus filiales ubicadas en Alemania, Argentina, Canadá, Chile, España, India, México, Reino Unido y Tailandia, entre otros.\",\"canRotate\":false},{\"_id\":\"9\",\"picture\":\"https://www.carlogos.org/logo/Alfa-Romeo-logo-2015-640x550.jpg\",\"titulo\":\"Alfa Romeo\",\"pieDeFoto\":\"Alfa Romeo es una marca italiana de automóviles fundada en 1910 en Milán, Italia. Actualmente es propiedad del conglomerado Stellantis.\",\"descripcion\":\"A lo largo de su historia, la marca se caracterizó por la calidad de sus productos, siendo reconocida por sus automóviles de turismo de alta gama y por sus coches deportivos. En esta última materia, sus coches supieron ser protagonistas en diferentes competiciones internacionales, llegando entre otras cosas a conquistar los dos primeros campeonatos de pilotos de Fórmula 1, en 1950 y 1951\",\"canRotate\":false},{\"_id\":\"4\",\"picture\":\"https://www.carlogos.org/car-logos/nissan-logo-2020-black-show.png\",\"titulo\":\"Nissan\",\"pieDeFoto\":\"Nissan Motor es un fabricante japonés de automóviles, con base en Yokohama. Su nombre común, Nissan, es un acrónimo de Nippon Sangyo.​\",\"descripcion\":\"En 2018, Nissan se convirtió en el mayor fabricante de vehículos eléctricos a nivel mundial, habiendo vendido más de 320.000 unidades1. El vehículo más vendido de su gama eléctrica es el Nissan LEAF\",\"canRotate\":false},{\"_id\":\"11\",\"picture\":\"https://www.carlogos.org/logo/Volvo-logo-2014-640x550.jpg\",\"titulo\":\"Volvo\",\"pieDeFoto\":\"Volvo Cars es una marca de automóviles sueca con sede en Gotemburgo, Suecia subsidiaria de la compañía automotriz china Geely.3\",\"descripcion\":\"Fue originalmente fundada en 1927 por el ingeniero Gustav Larson, como una empresa subsidiaria de la fabricante de rodamientos SKF. A pesar de que se suele confundir con el conglomerado de propiedad sueca AB Volvo (fabricante de vehículos industriales, camiones, autobuses y equipamiento de construcción) las dos firmas han sido independientes desde que AB Volvo vendió Volvo Cars en 1999 a Ford Motor Company para ser parte del grupo llamado Premier Automotive Group\",\"canRotate\":false},{\"_id\":\"12\",\"picture\":\"https://www.carlogos.org/logo/Rolls-Royce-logo-640x550.jpg\",\"titulo\":\"Rolls Royce\",\"pieDeFoto\":\"Rolls-Royce Motor Cars es una empresa de automóviles de lujo británica, fundada en 1904, pero que desde 1998 pertenece al Grupo BMW.\",\"descripcion\":\"Rolls-Royce tiene sobrenombres como Rolls, Roller o Doble R, aunque en Derby (localidad donde se ubica su casa matriz) la empresa es conocida como Royces. Por otra parte, la frase El Rolls-Royce de X fue utilizada por otras marcas para describir cierto grado de excelencia en calidad de alguno de sus productos, sin embargo, Rolls-Royce se muestra reacia al uso indiscriminado de este dicho y es muy estricta cuando se trata de defender el derecho de su nombre, en frases como esta.\",\"canRotate\":false}]");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map