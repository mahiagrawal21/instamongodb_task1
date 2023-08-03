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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Redis = void 0;
//import redis from "redis";
const redis_1 = require("redis");
const client = (0, redis_1.createClient)();
client.connect();
client.on('error', err => console.log('Redis client error', err));
class Redis {
    static maintain_session_redis(client, User, device) {
        return __awaiter(this, void 0, void 0, function* () {
            yield client.connect();
            client.on('error', (err) => console.log('Redis client error', err));
            try {
                if (User) {
                    yield client.SET(User.email, JSON.stringify({
                        'user_id': User._id,
                        'device_id': device,
                        'status': true
                    }));
                    const session = yield client.get(User.email);
                    console.log(session);
                }
                else {
                    console.log("User not found");
                }
            }
            catch (err) {
                console.log("Redis not set successfully", err);
            }
        });
    }
    // static async logout_session_redis(client,user:any){
    //         try{
    //             await client.SET(user.username, JSON.stringify({
    //                 user_id: user.id,
    //                 status: false
    //             }));
    //             const session = await client.get(user.username);
    //             console.log(session);
    //         }
    //         catch(err){
    //             console.log(err);
    //         }
    //     }
    // }
    static logout_session_redis(client, User) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(User.email);
            try {
                // console.log(user.username);
                yield client.del(User.email);
                // const redisSessions = await client.get(user.username);
                console.log("delete successfully");
            }
            catch (err) {
                console.log("error in deleting", err);
            }
        });
    }
}
exports.Redis = Redis;
