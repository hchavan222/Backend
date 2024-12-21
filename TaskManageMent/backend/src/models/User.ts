
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Project } from "./Project";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @Column({default: 'user'})
    role: string;

   @OneToMany(()=> Project, (project)=> project.owner)
   projects: Project[];

   
   @OneToMany(()=> Task, (task)=> task.assignee)
   task: Task[];


}