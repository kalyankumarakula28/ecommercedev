const express=require('express');
const dbConnect = require('./config/dbConnect');
const app=express();
const {notFound,errorHandler}=require("./middleware/errorHandler");
const authRouter=require('./routes/authRoutes');

const bodyParser = require('body-parser');
const dotenv=require('dotenv').config()
const PORT=process.env.PORT || 4000;

dbConnect();
/*app.use("/",(req,res)=>{
    res.send("Hello from server side")
})*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/api/user',authRouter);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`Server is Running at PORT ${PORT}`);
})
