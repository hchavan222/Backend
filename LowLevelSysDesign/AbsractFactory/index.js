"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var factoryA_1 = require("./factoryA");
var factoryB_1 = require("./factoryB");
var AbsFactory = /** @class */ (function () {
    function AbsFactory() {
    }
    AbsFactory.createFactory = function (factory) {
        try {
            if (["aa", "ab", "ac"].indexOf(factory) > -1) {
                return factoryA_1.FactoryA.getObj(factory[1]);
            }
            if (["ba", "bb", "bc"].indexOf(factory) > -1) {
                return factoryB_1.FactoryB.getObj(factory[1]);
            }
            return factoryB_1.FactoryB.getObj(factory[1]);
        }
        catch (error) {
            console.log(error);
        }
    };
    return AbsFactory;
}());
var prod = AbsFactory.createFactory("aa");
console.log(prod === null || prod === void 0 ? void 0 : prod.name);
var prod1 = AbsFactory.createFactory("ba");
console.log(prod1 === null || prod1 === void 0 ? void 0 : prod1.name);
