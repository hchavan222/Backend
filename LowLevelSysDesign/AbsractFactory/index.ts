import { FactoryA, IAbsFactorA } from "./factoryA"
import { FactoryB, IAbsFactorB } from "./factoryB"

interface IAbsFactor extends IAbsFactorA, IAbsFactorB{

}

class AbsFactory{

    static createFactory (factory: string) : IAbsFactor | undefined {
        try {

            if(["aa" , "ab" , "ac"].indexOf(factory) > -1){
                return FactoryA.getObj(factory[1])
            }
            if(["ba" , "bb" , "bc"].indexOf(factory) > -1){
                return FactoryB.getObj(factory[1])
            }
           
            return FactoryB.getObj(factory[1])
            
        } catch (error) {
            console.log(error)
        }
    }


}


let prod = AbsFactory.createFactory("aa")
console.log(prod?.name)


let prod1 = AbsFactory.createFactory("ba")
console.log(prod1?.name)