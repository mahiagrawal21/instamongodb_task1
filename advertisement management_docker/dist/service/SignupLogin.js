"use strict";
// signup and login service
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
exports.loginService = exports.signupService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const Users_1 = __importDefault(require("../models/Users"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const signupService = (username, email, password, phone_number, gender) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(password);
    const hashedPassword = yield bcrypt_1.default.hash(password, 2);
    const newUser = new Users_1.default({
        username,
        email,
        password: hashedPassword,
        phone_number,
        gender,
    });
    yield newUser.save();
    return newUser;
});
exports.signupService = signupService;
const loginService = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield Users_1.default.findOne({ where: { email } });
        if (!user) {
            return { error: "Invalid email" };
        }
        const match = yield bcrypt_1.default.compare(password, user.password);
        if (!match) {
            return { error: "Invalid password" };
        }
        const secret = "this is my secret";
        const accessToken = jsonwebtoken_1.default.sign({ userId: user.id }, secret, { expiresIn: '1h' });
        return { message: "Login successful ", token: accessToken };
    }
    catch (err) {
        throw new Error("Error occurred");
    }
});
exports.loginService = loginService;
// import { error} from "console";
// import User from "../models/Users";
// //import  User  from "../models/Users";
// async function ifProfileExists(email: string) {
//     const user = await User.findOne({ where: { email } });
//     console.log(user);
//     return user;
//   }
// async function add(username: string, email: string, password: string, phone: string, gender: string) {
//     await User.create({
//       username,
//        email,
//       password,
//       phone,
//       gender
//     });
//   }
// class signupService {
//     async signup(username: string, email: string,password: string,  phone: string, gender: string) {
//         //console.log("-----------------signup called")
//         const user = ifProfileExists(email);
//         console.log(`this is result ${user}`);
//         if (user != null) {
//             try {
//                 add(username, email, password, phone, gender);
//                 console.log("signup success")
//             }
//             catch(error)
//             {
//                 console.log(error);
//             }
//         }
//         else
//         {
//             console.log("already exist")
//             return("already exist")
//         }
//     }
// }
// export default signupService;
