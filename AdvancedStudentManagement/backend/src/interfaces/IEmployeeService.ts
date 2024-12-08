import { IEmployee } from "./IEmployee";

export interface IEmployeeService {

    getAllEmp() : Promise<IEmployee[]>,
    createEmp(empData : Partial<IEmployee[]>) : Promise<IEmployee>,
    deleteEmp(empId: number): Promise<void>
}