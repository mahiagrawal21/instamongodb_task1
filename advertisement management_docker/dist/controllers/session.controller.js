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
exports.Sessions = void 0;
const session_1 = __importDefault(require("../models/session"));
class Sessions {
    static maintain_session(req, res, device, User, userSession) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (User) {
                    if (!userSession) {
                        const session_details = yield session_1.default.create({
                            user_id: User.id,
                            device_id: device,
                            status: true
                        });
                        //const session = await session_details.save();
                        console.log("Session stored successfully");
                        console.log(session_details);
                    }
                    else if (userSession) {
                        if (!userSession.status) {
                            yield session_1.default.update({ status: !userSession.status }, { where: { user_id: User.id } });
                            console.log("Session Activate");
                        }
                    }
                    // await Redis.maintain_session_redis(token,user);
                }
                else {
                    res.status(404).json({ message: "User Not Found" });
                    console.log("User not found");
                }
            }
            catch (err) {
                res.status(500).json({ message: "Server Error", err });
                console.log("Server Error");
            }
        });
    }
}
exports.Sessions = Sessions;
