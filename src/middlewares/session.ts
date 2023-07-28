import {SessionModel} from '../models/session'
import { Request,Response } from 'express'
import redisclient from '../provider/redis'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config();
export const sessionCheck=async (req:Request,res:Response,next:()=>void)=>{
  //secretKey
  let secretKey=""+process.env.SECRET_KEY
  //JWT Token
  let token=""+req.headers.authorization
  let decode:any;
  try{ 
        decode= jwt.verify(token,secretKey)
        let redisData=await redisclient.get(`${decode?._id}`)
        if(!(redisData==="true")){
            console.log("cache miss")
        let data=await SessionModel.find({
            userId:decode._id,
            isActive:true,
        })
            if(data.length>0)
            {
              redisclient.setEx(`${decode?._id}`,3600,"true")
                next()
            }else{
                res.send("Authentication error")
            }
        }else {
            console.log("cache hit")
            next()
        }
    }catch(err){
    res.status(400).send(err)
  }
}