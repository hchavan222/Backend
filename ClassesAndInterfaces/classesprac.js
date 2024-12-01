var Cat = /** @class */ (function () {
    function Cat(name) {
        this.name = name;
        console.log('hello World by ', name);
    }
    Cat.prototype.walk = function (steps) {
        console.log("".concat(this.name, " walks a total of ").concat(steps, " steps"));
        return String(steps + this.name);
    };
    return Cat;
}());
var invoker = new Cat('hrishi');
var data = invoker.walk(10);
console.log(data);
