import express from "express";
import cors from 'cors';
import { adminRouter } from "./Route/AdminRoute.js";
const app = express();
app.use(cors({
  origin:["http://localhost:5173"],
  methods:['GET','POST','PUT'],
  credentials:true
}))
app.use(express.json())

app.use('/auth',adminRouter);
app.use(express.static('publics'))
app.listen(3000,()=>{
 console.log("server is running");
})