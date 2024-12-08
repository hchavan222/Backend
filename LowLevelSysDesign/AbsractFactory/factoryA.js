"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactoryA = void 0;
var FactoryAa = /** @class */ (function () {
    function FactoryAa() {
        this.name = "";
        this.name = "Factory Method Aa";
    }
    return FactoryAa;
}());
var FactoryAb = /** @class */ (function () {
    function FactoryAb() {
        this.name = "";
        this.name = "Factory Method Ab";
    }
    return FactoryAb;
}());
var FactoryAc = /** @class */ (function () {
    function FactoryAc() {
        this.name = "";
        this.name = "Factory Method Ac";
    }
    return FactoryAc;
}());
var FactoryA = /** @class */ (function () {
    function FactoryA() {
    }
    FactoryA.getObj = function (val) {
        if (val === 'a') {
            return new FactoryAa();
        }
        if (val === 'b') {
            return new FactoryAb();
        }
        return new FactoryAc();
    };
    return FactoryA;
}());
exports.FactoryA = FactoryA;
