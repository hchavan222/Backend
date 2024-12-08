import { Repository } from "typeorm";
import { IEmployeeService } from "../interfaces/IEmployeeService";
import { Employee } from "../models/Employee";
import { AppDatasSource } from "../config/db";
import { IEmployee } from "../interfaces/IEmployee";

export class EmployeeService implements IEmployeeService{

    private empRepo : Repository<Employee>;

    constructor (){
        this.empRepo = AppDatasSource.getRepository(Employee)

    }

    async getAllEmp(): Promise<IEmployee[]> {
        return this.empRepo.find({
            relations : ['personalInfo' , 'jobInfo']
        })
    }

    async createEmp(empData: Partial<IEmployee>): Promise<IEmployee> {
        const newEmp =  this.empRepo.create(empData);
        return this.empRepo.save(newEmp)
    }

    async deleteEmp(empId: number): Promise<void> {
        const emp = await this.empRepo.findOneBy({id: empId})

        await this.empRepo.remove(emp)
    }
}