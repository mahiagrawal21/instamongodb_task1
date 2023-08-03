//import redis from "redis";
import { createClient } from "redis";
import User from "../models/Users";
//import { authenticateToken } from "./auth";
import { Verify } from "./userValidate";
import { any } from "joi";

const client = createClient();
client.connect();
client.on('error', err => console.log('Redis client error', err));

export class Redis{
    static async maintain_session_redis(client:any,User:any,device:any){
        await client.connect();
        client.on('error', (err: any) => console.log('Redis client error', err));
        try{
            if(User){
                await client.SET(User.email, JSON.stringify({
                    'user_id': User._id,
                     'device_id': device,
                    'status': true
                }));
                const session = await client.get(User.email);
                console.log(session);
            }
            else{
                console.log("User not found");
            }
        }
        catch(err){
            console.log("Redis not set successfully",err);
        }
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
static async logout_session_redis(client:any, User:any) {
    console.log(User.email);
    try {
        // console.log(user.username);
        await client.del(User.email);
        // const redisSessions = await client.get(user.username);
        console.log("delete successfully");
    }
    catch (err) {
        console.log("error in deleting", err);
    }
}
}