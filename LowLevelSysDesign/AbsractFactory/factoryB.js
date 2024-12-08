"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactoryB = void 0;
var FactoryBa = /** @class */ (function () {
    function FactoryBa() {
        this.name = "";
        this.name = "Factory Method Ba";
    }
    return FactoryBa;
}());
var FactoryBb = /** @class */ (function () {
    function FactoryBb() {
        this.name = "";
        this.name = "Factory Method Bb";
    }
    return FactoryBb;
}());
var FactoryBc = /** @class */ (function () {
    function FactoryBc() {
        this.name = "";
        this.name = "Factory Method Bc";
    }
    return FactoryBc;
}());
var FactoryB = /** @class */ (function () {
    function FactoryB() {
    }
    FactoryB.getObj = function (val) {
        if (val === 'a') {
            return new FactoryBa();
        }
        if (val === 'b') {
            return new FactoryBb();
        }
        return new FactoryBc();
    };
    return FactoryB;
}());
exports.FactoryB = FactoryB;
