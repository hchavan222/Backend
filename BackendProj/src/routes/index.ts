import { Router } from "express";
import { createUser, getallUsers, getallUsersbyID } from "../Handlers";

const route = Router()

route.get('/' ,getallUsers);

route.get('/getid/:id', getallUsersbyID);

route.post('/' , createUser)


export default route