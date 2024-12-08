import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employee{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    hireDate : string;

    @Column()
    endDate: string;

    @Column()
    email : string;
}