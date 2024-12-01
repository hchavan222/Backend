import express from 'express'
import route from './routes/index'

const app = express()
app.use('/api/users' , route)

const port = 3000

app.listen(port , ()=>{
    console.log('Listening on port 3000');
})