import {Request,Response} from "express";
import Joi from "joi";


export const validateUser=(req:Request,res:Response,next: () => void)=>{
    
    // This one is for nested details of some collection-->
    // const validateAddress=Joi.object({
    //     city:Joi.string().required(),
    //     state:Joi.string().required(),
    //     country:Joi.string().required()
    //   });
      
    const userSchema =Joi.object({
    user_id: Joi.number().required(),
    username: Joi.string().required(),
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email:Joi.string().regex(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
    password:Joi.string().min(8).required(),
    follower_count: Joi.number().required(),
    following_count: Joi.number().required(),
    bio: Joi.string().required(),
    createdAt: Joi.date().required(),
    updatedAt: Joi.date().required(),
    
  });
    
    const result=userSchema.validate(req.body)
    console.log(result)
    if(result.error)
    {
        res.status(400).send("Enter the valid details");
    }
    else
    {
        next();
    }
}