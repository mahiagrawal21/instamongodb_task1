"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userrouter = express_1.default.Router();
// //middleware
const joivalidation_1 = require("../middlewares/joivalidation");
const joivalidation_2 = require("../middlewares/joivalidation");
const authmiddleware_1 = __importDefault(require("../middlewares/authmiddleware"));
const joivalidation_3 = require("../middlewares/joivalidation");
const joivalidation_4 = require("../middlewares/joivalidation");
//controller
const UserController_1 = require("../controllers/UserController");
const UserController_2 = require("../controllers/UserController");
const UserController_3 = require("../controllers/UserController");
//import { userValidate } from "../middleware/validation";
const UserController_4 = require("../controllers/UserController");
const UserController_5 = require("../controllers/UserController");
const UserController_6 = require("../controllers/UserController");
const UserController_7 = require("../controllers/UserController");
//userrouter.get("/signup",signUpJoiMiddleware , signupController);
userrouter.post('/signup', joivalidation_1.signUpJoiMiddleware, UserController_1.signupController);
userrouter.post('/login', joivalidation_2.loginJoiMiddleware, UserController_2.loginController);
userrouter.get('/logout', authmiddleware_1.default, UserController_3.logoutController);
userrouter.post('/generateotp', joivalidation_3.generateOtpJoiMiddleware, authmiddleware_1.default, UserController_4.generateOtpController);
userrouter.post('/newpassword', joivalidation_3.newPasswordJoiMiddleware, authmiddleware_1.default, UserController_5.newPasswordController);
userrouter.delete('/deleteprofile', authmiddleware_1.default, UserController_6.deleteProfileController);
userrouter.post('/updateprofile', joivalidation_4.updateProfileJoiMiddleware, authmiddleware_1.default, UserController_7.updateProfileController);
exports.default = userrouter;
