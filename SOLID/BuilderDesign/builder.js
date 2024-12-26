"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Builder = void 0;
var Student_1 = require("./Student");
var Builder = /** @class */ (function () {
    function Builder() {
    }
    Builder.prototype.setName = function (name) {
        this.name = name;
    };
    Builder.prototype.setAge = function (age) {
        this.age = age;
    };
    Builder.prototype.setAddress = function (address) {
        this.address = address;
    };
    Builder.prototype.getAge = function () {
        return this.age;
    };
    Builder.prototype.getName = function () {
        return this.name;
    };
    Builder.prototype.getAddress = function () {
        return this.address;
    };
    Builder.prototype.build = function () {
        return Student_1.Student.studentConstructor(this);
    };
    return Builder;
}());
exports.Builder = Builder;
