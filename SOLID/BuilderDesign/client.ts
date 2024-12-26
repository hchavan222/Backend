import { Builder } from "./builder";
import { Student } from "./Student";

class Client{

    constructor(){
        let build = Student.createBuilder();
        build.setName('John');
        build.setAge(25);
        build.setAddress('New York');

        let stud = build.build();

        console.log(stud.getName());
    }
}

let cli = new Client();