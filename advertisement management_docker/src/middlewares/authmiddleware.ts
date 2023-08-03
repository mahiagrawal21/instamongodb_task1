import { Request, Response ,NextFunction } from "express";
import jwt, { JwtPayload }  from "jsonwebtoken";


const authMiddleware = async (req: Request, res: Response, next:NextFunction) => {
    const header = req.headers.authorization;
    if(!header){
        return res.status(401).json({error: "Header not found"});
    }

    const token = header.split(' ')[1];

    try{
        
        const decodedToken = <JwtPayload>jwt.verify(token, 'this is my secret') ;
        req.body.id = decodedToken?.userId;  
        console.log(decodedToken);   
                      
        next();

    }catch(error){
        res.status(403).json({error: "Authentication fail. Invalid token"});
    }

}

export default authMiddleware;