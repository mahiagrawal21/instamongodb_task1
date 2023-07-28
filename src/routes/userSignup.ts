import express from "express";

const router=express.Router();

//middleware
import {validateUser} from '../middlewares/authMIddleware'

//controller
import {userController} from '../controllers/UserController'

router.post('/signup',validateUser,userController);

export default router; 