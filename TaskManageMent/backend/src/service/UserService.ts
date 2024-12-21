import { Repository } from "typeorm";
import { IUserService } from "../interfaces/IUserService";
import { User } from "../models/User";
import { comparePassword, hashPassword } from "../utils/hashUtils";
import jwt from 'jsonwebtoken'


export class UserService implements IUserService{

    private userRepo = Repository<User>;

    constructor(){
        this.userRepo = AppDataSource.getRepository(User);
    }

    async registerUser(email: string, password: string): Promise<User> {

        const hashPass = await hashPassword(password)
        const nUser = this.userRepo.create({email , password: hashPass})
        return this.userRepo.save(nUser)
        
    }

    async loginUser(email: string, password: string): Promise<string> {
        
        const userDetails = await this.Repo.findOne({where: {email}});
        if(!user || !await comparePassword(password , user.password)){
            throw new Error('Invalid Credentials');
        }

        return jwt.sign({ id: userDetails.id , role: userDetails.role } , process.env.JWT_SECRET! , {expiresIn : '1h'})
    }

    async getUserById(id: number): Promise<User | null> {
        return this.userRepo.findOne({where: {id}})
    }




}