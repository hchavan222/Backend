interface Proto {
    clone (): this
}


class MyClass implements Proto {

    name : string[]

    constructor(data : string[]){
        this.name = data
    }

    clone(){
        return Object.assign({} , this)

    }
}

const MyclassImp = new MyClass(["1" , "2" , "3"])

console.log(`obj1 : ${JSON.stringify(MyclassImp)}`)

const MyclassImp2 = MyclassImp.clone()

console.log(`obj2 : ${JSON.stringify(MyclassImp2)}`)

MyclassImp2.name[1] = "41"
console.log(`obj1 : ${JSON.stringify(MyclassImp)}`)
console.log(`obj2 : ${JSON.stringify(MyclassImp2)}`)

