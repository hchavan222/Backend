var MyClass = /** @class */ (function () {
    function MyClass(data) {
        this.name = data;
    }
    MyClass.prototype.clone = function () {
        return Object.assign({}, this);
    };
    return MyClass;
}());
var MyclassImp = new MyClass(["1", "2", "3"]);
console.log("obj1 : ".concat(JSON.stringify(MyclassImp)));
var MyclassImp2 = MyclassImp.clone();
console.log("obj2 : ".concat(JSON.stringify(MyclassImp2)));
MyclassImp2.name[1] = "41";
console.log("obj1 : ".concat(JSON.stringify(MyclassImp)));
console.log("obj2 : ".concat(JSON.stringify(MyclassImp2)));
