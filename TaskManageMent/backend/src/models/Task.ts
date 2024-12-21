
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Project } from "./Project";
import { User } from "./User";

@Entity()
export class Task{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column({default: 'user'})
    role: string;

   @OneToMany(()=> User, (project)=> project.task)
   assignee: User;

   
   @OneToMany(()=> Project, (task)=> task.task)
   project: Project;

   @Column({default: false})
   isCompleted : boolean


}