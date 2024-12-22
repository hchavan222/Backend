class myClass {
    private static instance: myClass;
    private constructor() {
        console.log('constructor called');
    }
    public static getInstance() {
        if (!myClass.instance) {
            myClass.instance = new myClass();
        }
        return myClass.instance;
    }
}


let obj1 = myClass.getInstance();
let obj2 = myClass.getInstance();

console.log(obj1 === obj2); // true
