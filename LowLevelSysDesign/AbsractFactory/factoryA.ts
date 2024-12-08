export interface IAbsFactorA{
    name : string
}

class FactoryAa implements IAbsFactorA{
    name = ""
    constructor(){
        this.name  = "Factory Method Aa"


    }

}

class FactoryAb implements IAbsFactorA{
    name = ""
    constructor(){
        this.name  = "Factory Method Ab"


    }

}

class FactoryAc implements IAbsFactorA{
    name = ""
    constructor(){
        this.name  = "Factory Method Ac"


    }

}

export class FactoryA {
    static getObj(val: string) : IAbsFactorA {

        if(val === 'a'){
            return new FactoryAa()
        }

        if(val === 'b'){
            return new FactoryAb()
        }

        
            return new FactoryAc()
    }
}