"use strict";
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
const Users_1 = __importDefault(require("../models/Users"));
const redis_1 = require("redis");
const generateOtpService = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield Users_1.default.findOne({ where: { email } });
        if (!user) {
            throw new Error("User not found");
        }
        else {
            const otp = Math.floor(100000 + Math.random() * 900000); // 6 number opt generated
            console.log(otp);
            const client = (0, redis_1.createClient)();
            client.on("error", (err) => console.log("redis Client Error", err)); // on method is used to listen the "error" event when occur 
            yield client.connect();
            const options = { EX: 30 }; // 30 sec expiry
            yield client.set(user.email, otp, options); // third parameter is optional
            return otp;
        }
    }
    catch (error) {
        throw new Error("OTP Generation failed");
    }
});
exports.default = generateOtpService;
