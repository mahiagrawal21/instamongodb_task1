import { userModel } from "../models/users";
import {Request,Response} from "express";

export const userController=(req:Request,res:Response)=>{
  const newUser=req.body;
  userModel.create(newUser)
  .then((savedUser) => {
    res.status(201).send(savedUser)
    res.end()
  })
  .catch((error) => {
    console.error('Error saving user:', error);
  });
}