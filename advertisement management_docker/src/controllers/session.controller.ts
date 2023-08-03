import  Session from "../models/session";

export class Sessions{
    static async maintain_session(req:any, res:any, device:any, User:any,userSession:any){
        try{

            if(User){
                if(!userSession){
                    const session_details = await Session.create({
                        user_id: User.id,
                        device_id:device,
                        status: true
                    });
                    //const session = await session_details.save();
                    console.log("Session stored successfully");
                    console.log(session_details);
                }
                else if(userSession){
                    if(!userSession.status){
                        await Session.update({status: !userSession.status},{where:{user_id: User.id}});
                        console.log("Session Activate");
                    }
                }
                // await Redis.maintain_session_redis(token,user);
            }
            else{
                res.status(404).json({message: "User Not Found"});
                console.log("User not found");
            }
        }
        catch(err){
             res.status(500).json({message: "Server Error", err});
            console.log("Server Error")
        }
    }
}