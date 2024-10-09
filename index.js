const express=require('express');
const connectMongoDb=require('./connection');
const fetchCoinData=require('./routines/backgroundJob');
const apiRouter=require('./routes/apiRouter');

const app=express();
PORT=8000;

//CONNECTION TO MONGODB
connectMongoDb('mongodb://127.0.0.1:27017/KoinXassignment')
.then(()=>{console.log('connected to mongodb')})
.catch((err)=>{console.log('error connecting to mongodb'+err)});

//ROUTER FOR CLEANER CODE
app.use('/',apiRouter);

//START THE BACKGROUND JOB ROUTINE
fetchCoinData();

app.listen(PORT,()=>{
    console.log('server is running PORT: '+PORT);
})