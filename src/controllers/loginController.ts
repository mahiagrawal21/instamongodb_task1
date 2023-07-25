// import { userModel } from "../models/users";
// import {Request,Response} from "express";
// import jwt from "jsonwebtoken"
// import dotenv from 'dotenv';
// dotenv.config();
// export const loginController=(req:Request,res:Response)=>{
//   const newUser=req.body;
//   let token:string="sd";
//   userModel.find({
//     name:req.body.name,
//     password:req.body.password
//   })
//   .then((savedUser) => {
//             console.log('User saved:', savedUser);
//             const secretKey:string= "s1h2a3";
//             token=jwt.sign(JSON.stringify( savedUser),secretKey)
//         // token=jwt.sign({mahi:"Mahi"},"s1h2a3")
//         res.end(token)
//   })
//   .catch((error) => {
//     console.error('Error saving user:', error);
//   });
// }


import { userModel } from "../models/users";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

const secretKey: string = "s1h2a3";
    // token=jwt.sign({mahi:"Mahi"},"s1h2a3")

export const loginController = async (req: Request, res: Response) => {
  try {
    const newUser = req.body;
    let token: string = "sd";

    const savedUser = await userModel.findOne({
      name: req.body.name,
      password: req.body.password
    });
    
    

    if (!savedUser) {
      // If the user is not found, return an error response
      console.log('User saved:', savedUser);
      return res.status(401).json({ message: 'Invalid credentials' });
    }    token = jwt.sign(JSON.stringify(savedUser), secretKey);


    

    res.end(token);
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

