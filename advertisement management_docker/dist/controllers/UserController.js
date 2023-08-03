"use strict";
// merged.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProfileController = exports.deleteProfileController = exports.newPasswordController = exports.generateOtpController = exports.logoutController = exports.loginController = exports.signupController = void 0;
const SignupLogin_1 = require("../service/SignupLogin");
const SignupLogin_2 = require("../service/SignupLogin");
const logoutService_1 = __importDefault(require("../service/logoutService"));
const generateOtpService_1 = __importDefault(require("../service/generateOtpService"));
const newPasswordService_1 = __importDefault(require("../service/newPasswordService"));
const deleteProfileService_1 = __importDefault(require("../service/deleteProfileService"));
const updateProfileService_1 = __importDefault(require("../service/updateProfileService"));
const signupController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password, phone_number, gender } = req.body;
        const user = yield (0, SignupLogin_1.signupService)(username, email, password, phone_number, gender);
        res.status(201).json({ message: "Signup completed ", user });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: err });
    }
});
exports.signupController = signupController;
const loginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const result = yield (0, SignupLogin_2.loginService)(email, password);
        res.status(200).json(result);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error occurred" });
    }
});
exports.loginController = loginController;
const logoutController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    // console.log("id:",id)
    const stringId = JSON.stringify(id);
    // console.log("id1:",stringId);
    try {
        const result = yield (0, logoutService_1.default)(stringId);
        res.status(200).json({ message: "logout successful" });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error occurred" });
    }
});
exports.logoutController = logoutController;
const generateOtpController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        const otp = yield (0, generateOtpService_1.default)(email);
        if (!otp) {
            res.send("Invalid Credentials");
        }
        else {
            res.status(201).json({ message: "OTP generated", OTP: otp });
        }
    }
    catch (error) {
        console.log(error);
        res.send("Error in OTP Generation ");
    }
});
exports.generateOtpController = generateOtpController;
const newPasswordController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, otp, newPassword } = req.body;
        const user = yield (0, newPasswordService_1.default)(email, otp, newPassword);
        if (!user) {
            res.send("Invalid OTP or Email or OPT expired");
        }
        else {
            res.status(201).json({
                message: "OTP Correct",
                user: user.email,
                newPassword
            });
        }
    }
    catch (error) {
        console.log(error);
        res.send("Unable to Generate OTP to some error!");
    }
});
exports.newPasswordController = newPasswordController;
const deleteProfileController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const result = yield (0, deleteProfileService_1.default)(id);
        res.status(200).json({ message: "profile deleted", result });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: "error in deleting profile" });
    }
});
exports.deleteProfileController = deleteProfileController;
const updateProfileController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, username, email, name, phoneNumber } = req.body;
    try {
        const result = yield (0, updateProfileService_1.default)(id, username, email, name, phoneNumber);
        console.log(result);
        res.status(200).json({ message: "profile updated", result });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: "error in profile upadating" });
    }
});
exports.updateProfileController = updateProfileController;
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
