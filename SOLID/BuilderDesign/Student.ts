import { Builder } from "./builder";

export class Student {
    private name : string;
    private age : number;
    private address : string;

    // Student(name: string, age: number, address: string) {
    //     this.name = name;
    //     this.age = age;
    //     this.address = address;
    // }

    private constructor(Builder: Builder) {
        this.name = Builder.getName();
        this.age = Builder.getAge();
        this.address = Builder.getAddress();
    }

    static studentConstructor(Builder: Builder) {
        return new Student(Builder);
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

    static createBuilder () : Builder {
        return new Builder();
    }


}