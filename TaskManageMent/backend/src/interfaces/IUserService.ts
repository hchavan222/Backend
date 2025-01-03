import { User } from "../models/User";

export interface IUserService {
    registerUser(email:string , password:string) : Promise<User>;
    loginUser(email: string , password:string) : Promise<string>
    getUserById(id:number): Promise<User | null>;
}