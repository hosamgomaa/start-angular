"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MoviesService = void 0;
var core_1 = require("@angular/core");
var MoviesService = /** @class */ (function () {
    function MoviesService(_HttpClient) {
        this._HttpClient = _HttpClient;
    }
    MoviesService.prototype.getTrending = function () {
        return this._HttpClient.get("https://api.themoviedb.org/3/trending/all/day?api_key=5cad67567f494396e62c2c1691400568");
    };
    MoviesService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], MoviesService);
    return MoviesService;
}());
exports.MoviesService = MoviesService;
