import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express()
app.use(express.json());


const port = process.env.PORT || 3000;


import Routes from './routes/user.route.js';
app.use("/", Routes);
app.listen( port, ()=>{
    console.log(` I am running on port ${port}`) 
});