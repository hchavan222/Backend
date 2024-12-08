export interface IAbsFactorB{
    name : string
}

class FactoryBa implements IAbsFactorB{
    name = ""
    constructor(){
        this.name  = "Factory Method Ba"


    }

}

class FactoryBb implements IAbsFactorB{
    name = ""
    constructor(){
        this.name  = "Factory Method Bb"


    }

}

class FactoryBc implements IAbsFactorB{
    name = ""
    constructor(){
        this.name  = "Factory Method Bc"


    }

}

export class FactoryB {
    static getObj(val: string) : IAbsFactorB {

        if(val === 'a'){
            return new FactoryBa()
        }

        if(val === 'b'){
            return new FactoryBb()
        }

        
            return new FactoryBc()
    }
}