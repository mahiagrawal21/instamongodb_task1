import redis from "redis";
import { createClient } from "redis";
import User from "../models/Users";
//import { authenticateToken } from "./auth";
import { Verify } from "./userValidate";

const client = createClient();

export class Redis{
    static async maintain_session_redis(User,device){
        await client.connect();
        client.on('error', err => console.log('Redis client error', err));
        try{
            if(User){
                await client.SET(User.username, JSON.stringify({
                    'user_id': User._id,
                    // 'device_id': device,
                    'status': true
                }));
                const session = await client.get(User.username);
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
    static async logout_session_redis(user){
        try{
            await client.SET(user.username, JSON.stringify({
                user_id: user.id,
                status: false
            }));
            const session = await client.get(user.username);
            console.log(session);
        }
        catch(err){
            console.log(err);
        }
    }
}
