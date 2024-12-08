var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ConcreateProduct = /** @class */ (function () {
    function ConcreateProduct() {
        this.name = '';
    }
    return ConcreateProduct;
}());
var ConcreateProductA = /** @class */ (function (_super) {
    __extends(ConcreateProductA, _super);
    function ConcreateProductA() {
        var _this = _super.call(this) || this;
        _this.name = 'CON-A';
        return _this;
    }
    return ConcreateProductA;
}(ConcreateProduct));
var ConcreateProductB = /** @class */ (function (_super) {
    __extends(ConcreateProductB, _super);
    function ConcreateProductB() {
        var _this = _super.call(this) || this;
        _this.name = 'CON-B';
        return _this;
    }
    return ConcreateProductB;
}(ConcreateProduct));
var CreatorObj = /** @class */ (function () {
    function CreatorObj() {
    }
    CreatorObj.createObj = function (obj) {
        if (obj == "a") {
            return new ConcreateProductA();
        }
        if (obj == "b") {
            return new ConcreateProductB();
        }
        return new ConcreateProduct();
    };
    return CreatorObj;
}());
var data = CreatorObj.createObj("a");
console.log(data.name);
