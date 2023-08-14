
// merged.ts

import { Request, Response } from "express";
import {signupService} from "../service/SignupLogin";
import {loginService }from "../service/SignupLogin";
import  logoutService  from "../service/logoutService";
import generateOtpService from "../service/generateOtpService";
import newPasswordService from "../service/newPasswordService";
import  deleteProfileService  from '../service/deleteProfileService';
import updateProfileService from '../service/updateProfileService';

const signupController = async (req: Request, res: Response) => {
    try {
        const { username, email, password, phone_number, gender} = req.body;
     
        const user = await signupService(username, email, password,  phone_number, gender);

        res.status(201).json({ message: "Signup completed ", user });
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: err });
    }
};

const loginController = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const result = await loginService(email, password);
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error occurred" });
    }
};

const logoutController = async (req:Request, res:Response) => {
    const {id} = req.body;
    // console.log("id:",id)
    const stringId = JSON.stringify(id);
    // console.log("id1:",stringId);
    try {
        const result = await logoutService(stringId);
        res.status(200).json({message: "logout successful"});
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error occurred" });
    }
};

const generateOtpController = async(req: Request, res: Response) => {
    try {
      const { email } = req.body;
      const otp = await generateOtpService(email);
      if (!otp) {
        res.send("Invalid Credentials");
      } else {
        res.status(201).json({message: "OTP generated", OTP: otp});
      }
    } catch (error) {
      console.log(error);
      res.send("Error in OTP Generation ");
    }
  };

  const newPasswordController = async(req: Request, res: Response) => {
    try {
      const { email, otp, newPassword } = req.body;
      const user = await newPasswordService(email,otp,newPassword );
      if (!user) {
        res.send("Invalid OTP or Email or OPT expired");
      } else {
        res.status(201).json({
          message: "OTP Correct",
          user:user.email,
          newPassword
        });
      }
    } catch (error) {
      console.log(error);
      res.send("Unable to Generate OTP to some error!");
    }
  };

  const deleteProfileController = async (req: Request, res: Response) => {
    const { id } = req.body;
  
    try {
      const result = await deleteProfileService(id);
      res.status(200).json({ message: "profile deleted", result });
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: "error in deleting profile" });
    }
  };

  const updateProfileController = async (req: Request, res: Response) => {
    const { id, username, email, name, phoneNumber } = req.body;
  
    try {
      const result = await updateProfileService(id, username, email, name, phoneNumber);
      console.log(result);
      res.status(200).json({ message: "profile updated", result });
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: "error in profile upadating" });
    }
  };





export { signupController, loginController , logoutController, generateOtpController, newPasswordController, deleteProfileController,updateProfileController};




























// import {Request,Response} from "express";
// import signupService from '../service/signup';
// //import { any } from "joi";

// export async function signup(req: Request, res: Response) {
//   try {
//     const { username, email, password,phone,gender } = req.body;
//     const signup = new signupService();
//     console.log("========signup=========",signup)
//     signup.signup(username,email,password,phone,gender);
//     res.send("signup success")
//     }
//    catch (error) {
//     res.send("some error occured")
//   }
// }

//  const user_Signup = async (req:Request,res:Response)=>{
//   const newUser=req.body;

//   let user = await User.findOne({
//     name:req.body.name,
//     password:req.body.password
//   })
//   if(user==undefined)
//   {
//     //new user created
//     User.create(newUser).then((savedUser) => {
//       res.status(201).send("User Created")
//     }).catch((error) => {
//       res.status(400).send(error)
//     });
//   }else{
//     res.send("already Registered go back to login")
//   }
// }
//....................................................................................


//LOGIN-

// const loginUser = async(req: any, res: any)=> {
//     const details = req.body;
//     try{
//         const isUser = await User.findOne({where:{username: details.username}});
//         if(isUser!=null){
//             console.log(isUser);
//             res.status(200).json({status: "loggedIn Successfully"});
//         }
//         else{
//             res.status(404).json({status: "not found"});
//         }
//     }
//     catch(err){
//         res.status(500).json({status: "Server Error"});
//     }
// }

// export {loginUser,user_Signup};