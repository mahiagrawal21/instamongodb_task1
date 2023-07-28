import express from "express";

const router=express.Router();


//middleware
import {loginCridentials} from '../middlewares/authMIddleware'

//controller
import {loginController} from '../controllers/loginController'


/** 
 * @swagger 
 * /auth/signin:
 *   post: 
 *     description: Allow user to login 
 *     responses:  
 *       200: 
 *         description: Success  
 *   
 */ 

router.post('/signin',loginController);

export default router;