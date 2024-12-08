
interface IProduct {
    name : string

}

class ConcreateProduct implements IProduct{
    name = ''
}

class ConcreateProductA extends ConcreateProduct{

    constructor(){
        super()
        this.name = 'CON-A'
    }

}


class ConcreateProductB extends ConcreateProduct{
    constructor(){
        super()
        this.name = 'CON-B'
    }


}


class CreatorObj {
    static createObj (obj : string) : IProduct {

        if(obj == "a"){
            return new ConcreateProductA()
        }

        if(obj == "b"){
            return new ConcreateProductB()
        }

        return new ConcreateProduct()

        }
}


const data = CreatorObj.createObj("a")

console.log(data.name)