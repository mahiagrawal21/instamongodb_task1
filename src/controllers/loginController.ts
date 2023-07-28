

import { userModel } from "../models/users";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
import {SessionModel} from '../models/session'
import redisclient from '../provider/redis'

dotenv.config();

//const secretKey: string = "s1h2a3";
    // token=jwt.sign({mahi:"Mahi"},"s1h2a3")

// export const loginController = async (req: Request, res: Response) => {
//   try {
//     const newUser = req.body;
//     let token: string = "sd";

//     const savedUser = await userModel.findOne({
//       name: req.body.name,
//       password: req.body.password
//     });
    
    

//     if (!savedUser) {
//       // If the user is not found, return an error response
//       console.log('User saved:', savedUser);
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }    token = jwt.sign(JSON.stringify(savedUser), secretKey);


    

//     res.end(token);
//   } catch (error) {
//     console.error('Error saving user:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };

export const loginController=async(req:Request,res:Response,next:()=>void)=>{
  try{

    let user = await userModel.findOne({
      name:req.body.name,
      password:req.body.password
    })
    if(user==undefined)
    {
      res.status(400).send("User doen't Exist")
    }
    else{

        user={...JSON.parse(JSON.stringify(user))}
        let secretKey=""+process.env.SECRET_KEY
        //token generation
        req.headers.authorization = jwt.sign({_id:user?._id},secretKey,{expiresIn:'1h'});
        let redisData=await redisclient.get(`${user?._id}`)
        if(!redisData){
            console.log("Cache miss")
            //Session creation if not exist
          let data=await SessionModel.find({
            userId:user?._id,
            isActive:true,
          })
          if(!(data.length>0))
          {
            await SessionModel.create(
              {
                userId:user?._id,
                isActive:true,
                loginAt:new Date()
              }
            )
          }
          redisclient.setEx(`${user?._id}`,3600,"true")
        }else{
          console.log("cache hit")
        }
        res.send(req.headers.authorization)
      }
    }catch(e:any){
    res.send(e)
  }
  next()
}