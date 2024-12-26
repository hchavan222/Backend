"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var builder_1 = require("./builder");
var Student = /** @class */ (function () {
    // Student(name: string, age: number, address: string) {
    //     this.name = name;
    //     this.age = age;
    //     this.address = address;
    // }
    function Student(Builder) {
        this.name = Builder.getName();
        this.age = Builder.getAge();
        this.address = Builder.getAddress();
    }
    Student.studentConstructor = function (Builder) {
        return new Student(Builder);
    };
    Student.prototype.getAge = function () {
        return this.age;
    };
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.getAddress = function () {
        return this.address;
    };
    Student.createBuilder = function () {
        return new builder_1.Builder();
    };
    return Student;
}());
exports.Student = Student;
