const express=require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const cors=require('cors')
const router = require('./Routers/chartRouter')

dotenv.config()

const app=express()

app.use(cors());
app.use(express.json());
app.use('/',router)

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
  console.log("connected successfully");
  
}).catch((err)=>console.log(err))



app.listen(process.env.PORT,()=>{
  console.log(`server is runnig on port ${process.env.PORT}`);
  
})