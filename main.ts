interface hrishi {
    hellowordl() : void
}

interface hrishi2{
    hellootherworld():void
}


class noClass implements hrishi , hrishi2{

    hrishi1 : string

    constructor(hrishi1:string){

        this.hrishi1 = hrishi1
    }

    hellowordl(): void {
        console.log("hello World")
    }

    hellootherworld(): void {
        console.log("hellow from another world")
    }

}


class veryclassy{

    name : string

    noclass : hrishi 
    noclass1 : noClass

    constructor(name:string , noclass: hrishi , noclass1:noClass){
        this.name = name

        this.noclass = noclass
        this.noclass1 = noclass1
    }

    salutations():void{

        console.log(this.name)
        this.noclass.hellowordl()
        this.noclass1.hellootherworld()
        console.log(this.noclass1.hrishi1)
        this.noclass1.hellowordl()


    
    }



}


const noclassobj = new noClass("hello")

const vclassy = new veryclassy("Hrishikesh" , noclassobj , noclassobj)

vclassy.salutations()