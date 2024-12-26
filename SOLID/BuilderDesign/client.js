"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student_1 = require("./Student");
var Client = /** @class */ (function () {
    function Client() {
        var build = Student_1.Student.createBuilder();
        build.setName('John');
        build.setAge(25);
        build.setAddress('New York');
        var stud = build.build();
        console.log(stud.getName());
    }
    return Client;
}());
var cli = new Client();
