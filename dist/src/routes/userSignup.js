"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
//middleware
const authMIddleware_1 = require("../middlewares/authMIddleware");
//controller
const UserController_1 = require("../controllers/UserController");
router.post('/signup', authMIddleware_1.validateUser, UserController_1.userController);
exports.default = router;
//# sourceMappingURL=userSignup.js.map