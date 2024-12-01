import express, { Express, Request , Response } from "express";

const port = 3000

export class Server{
    private app = express()

    startserver(){
        this.app.get('/hello' , (req:Request , res: Response )=>{
            res.send('Hello Boysss')
        })

        this.app.listen(port , ()=>{
            console.log('listening on port 3000')

        })
    }
}

new Server().startserver()