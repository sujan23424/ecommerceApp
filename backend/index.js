import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import pluginRoute from './routes/plugins.route.js'
dotenv.config();
const app = express();

// middleware
app.use(express.json());
app.use(cors());

app.use('/plugins', pluginRoute);

const port = process.env.PORT || 3000;

const URI = process.env.mongodbURI;




mongoose.connect(URI).then(()=>{
    console.log("connected to mongodb")
}).catch(()=>{
    console.log("error")
})

app.listen( port, ()=>{
    console.log(` I am running on port ${port}`) 
});