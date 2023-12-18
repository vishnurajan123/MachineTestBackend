require('dotenv').config()
const express=require('express')
const cors=require('cors')
const router=require('./routes/router')
require('./DB/connection')

const rentServer=express()

rentServer.use(cors())
rentServer.use(express.json())
rentServer.use(router)

const PORT=4000 || process.env.PORT
rentServer.listen(PORT,()=>{
    console.log(`Car server started at port : ${PORT} and waiting for client requests`);
})

rentServer.get('/',(req,res)=>{
    res.send(`<h1>Car server started and waiting for client requests !!!`)
})

