import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';


dotenv.config();
const app = express()
app.use(express.json());


const port = process.env.PORT || 3000;




app.use("/");




mongoose.connect(URI).then(()=>{
    console.log("connected to mongodb")
}).catch(()=>{
    console.log("error")
})

app.listen( port, ()=>{
    console.log(` I am running on port ${port}`) 
});