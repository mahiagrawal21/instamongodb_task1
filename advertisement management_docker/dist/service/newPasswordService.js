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
const console_1 = require("console");
const redis_1 = require("redis");
const Users_1 = __importDefault(require("../models/Users"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const newPasswordService = (email, otp, newPassword) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = (0, redis_1.createClient)();
        client.on("error", (err) => console.log("redis Client Error", err));
        yield client.connect();
        if (otp == (yield client.get(email))) {
            const user = yield Users_1.default.findOne({ where: { email: email } });
            if (user) {
                const hashedPassword = yield bcrypt_1.default.hash(newPassword, 2);
                user.password = hashedPassword;
                yield user.save();
            }
            else {
                throw (0, console_1.error)("Error updating Password");
            }
            return user;
        }
        else {
            throw (0, console_1.error)("Invalid OTP");
        }
    }
    catch (error) {
        return error;
    }
});
exports.default = newPasswordService;
