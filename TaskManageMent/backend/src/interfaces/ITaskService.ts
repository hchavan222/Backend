import { Task } from "../models/Task";

export interface ITaskService {
    createTask(title: string , description: string , assigneeId : string , projectId : number): Promise<Task>;
    updateTask(id:number , updates: Partial<Task>) : Promise<Task>
    deleteTask(id:number): Promise<void> 
}