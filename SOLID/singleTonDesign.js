var myClass = /** @class */ (function () {
    function myClass() {
        console.log('constructor called');
    }
    myClass.getInstance = function () {
        if (!myClass.instance) {
            myClass.instance = new myClass();
        }
        return myClass.instance;
    };
    return myClass;
}());
var obj1 = myClass.getInstance();
var obj2 = myClass.getInstance();
console.log(obj1 === obj2); // true
