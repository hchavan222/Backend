import { Repository } from "typeorm";
import { ITaskService } from "../interfaces/ITaskService";
import { Task } from "../models/Task";

export class TaskService implements ITaskService{
    private TaskRepo = Repository<Task>


    constructor(){
        this.TaskRepo = AppDataSource.getRepository(Task);

    }

    async createTask(title: string, description: string, assigneeId: string, projectId: number): Promise<Task> {
        const newTask = await this.TaskRepo.create({title , description , assignee : {id: assigneeId} , project: {id: projectId}})
        return this.TaskRepo.save(newTask)
    }

    async updateTask(id: number, updates: Partial<Task>): Promise<Task> {
        const task = await this.TaskRepo.findOne({where : {id}});
        Object.assign(task , updates)

        return this.TaskRepo.save(task)

    }

    async deleteTask(id: number): Promise<void> {
        const task = await this.TaskRepo.findOne({where : {id}})

        await this.TaskRepo.remove(task)
    }
}