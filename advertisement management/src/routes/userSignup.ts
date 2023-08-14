import express from "express";


const userrouter=express.Router();

// //middleware
import { signUpJoiMiddleware } from "../middlewares/joivalidation";
import { loginJoiMiddleware } from '../middlewares/joivalidation';
import authMiddleware from "../middlewares/authmiddleware";
import { generateOtpJoiMiddleware, newPasswordJoiMiddleware } from '../middlewares/joivalidation';
import { updateProfileJoiMiddleware } from "../middlewares/joivalidation";
//controller
import { signupController } from "../controllers/UserController";
import { loginController } from "../controllers/UserController";
import { logoutController } from "../controllers/UserController";
//import { userValidate } from "../middleware/validation";
import {generateOtpController} from "../controllers/UserController"
import {newPasswordController} from "../controllers/UserController";
import {deleteProfileController} from "../controllers/UserController";
import {updateProfileController} from "../controllers/UserController";


userrouter.post('/signup', signUpJoiMiddleware , signupController);
userrouter.post('/login',loginJoiMiddleware,loginController);
userrouter.get('/logout',authMiddleware,logoutController);

userrouter.post('/generateotp', generateOtpJoiMiddleware, authMiddleware,  generateOtpController);
userrouter.post('/newpassword', newPasswordJoiMiddleware, authMiddleware, newPasswordController);
userrouter.delete('/deleteprofile',authMiddleware,deleteProfileController);
userrouter.post('/updateprofile',updateProfileJoiMiddleware,authMiddleware,updateProfileController);
export default userrouter;