import { getRandomData } from "./random";

export type objwithID = {
    id : string

}

export class Data<T extends objwithID> {
    private elements = new Array<T>()

    public async insert(arg : T){
        arg.id = getRandomData();
        this.elements.push(arg)
        return arg.id
    }

    public async getele(argName : keyof T , argvalue : string) : Promise< T |undefined >{
        const ele : T | undefined = this.elements.find(x=>x[argName] == argvalue);

        if(ele){
            return ele
        }
    }

    public async getall(argName: keyof T , argvalue : string) {
        
        return this.elements.filter(x=>x[argName] == argvalue)
    }

    

}
