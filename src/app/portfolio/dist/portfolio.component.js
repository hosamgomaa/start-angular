"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PortfolioComponent = void 0;
var core_1 = require("@angular/core");
var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
        this.imgPath = "assets/images/img";
        this.newSrc = "";
    }
    PortfolioComponent.prototype.displayImg = function (img, dis) {
        dis.style.display = "block";
        this.newSrc = img.src;
    };
    PortfolioComponent.prototype.hideCard = function (card) {
        card.style.display = "none";
    };
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = __decorate([
        core_1.Component({
            selector: 'app-portfolio',
            templateUrl: './portfolio.component.html',
            styleUrls: ['./portfolio.component.css']
        })
    ], PortfolioComponent);
    return PortfolioComponent;
}());
exports.PortfolioComponent = PortfolioComponent;
