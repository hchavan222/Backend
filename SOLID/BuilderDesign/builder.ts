import { Student } from "./Student";

export class Builder {
    private name : string;
    private age : number;
    private address : string;

    setName(name: string) {
        this.name = name;
    }

    setAge(age: number) {
        this.age = age;
    }

    setAddress(address: string) {
        this.address = address;
    }
    
    getAge() {
        return this.age;
    }

    getName() {
        return this.name;
    }       

    getAddress() {
        return this.address;
    }

    public build (): Student{
        return Student.studentConstructor(this);
    }

    

}