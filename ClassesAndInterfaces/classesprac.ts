class Cat{
    name :  string

    constructor(name : string){
        this.name = name
        console.log('hello World by ', name)
    }
    
    walk(steps: number) : string {
        console.log(`${this.name} walks a total of ${steps} steps`)

        return String(steps+this.name)
         
    }
}


const invoker = new Cat('hrishi')

const data  = invoker.walk(10)

console.log(data);