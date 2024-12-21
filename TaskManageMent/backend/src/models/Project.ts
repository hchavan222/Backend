import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Project{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

   @OneToMany(()=> User, (user)=> user.projects)
   owner: User;

   
   @OneToMany(()=> Task, (task)=> task.project)
   task: Task[];


}
