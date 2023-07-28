import { userModel } from "../models/users";
import {Request,Response} from "express";



export const userController= async (req:Request,res:Response)=>{
  const newUser=req.body;

  let user = await userModel.findOne({
    name:req.body.name,
    password:req.body.password
  })
  if(user==undefined)
  {
    //new user created
    userModel.create(newUser).then((savedUser) => {
      res.status(201).send("User Created")
    }).catch((error) => {
      res.status(400).send(error)
    });
  }else{
    res.send("already Registered go back to login")
  }
}



//   userModel.create(newUser)
//   .then((savedUser) => {
//     res.status(201).send(savedUser)
//     res.end()
//   })
//   .catch((error) => {
//     console.error('Error saving user:', error);
//   });
// }