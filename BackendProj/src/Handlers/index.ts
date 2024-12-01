import { request, Request, Response } from "express";
import { createUser, queryUser, User } from "../dtos/createuser";

export function getallUsers(req: Request ,  res: Response){
    res.send([])
}


export function getallUsersbyID(req: Request ,  res: Response){
    res.send({})
}


export function createUser(req: Request<{} , {} , createUser , queryUser> ,  res : Response<User>){
    res.status(200).send({
        id: 123,
        name: 'hrisshi',
        email: 'hjachjah@ghGA.COM'
    })
    
}
