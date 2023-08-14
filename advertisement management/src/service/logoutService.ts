import { createClient } from 'redis';

import User from '../models/Users';


const logoutService = async (id:string) => {
    
    try {
        const client = createClient();
        await client.connect();
        // console.log("id3:", id);
        const result= await client.del(id);
        return result;

    } catch (err) {
        console.log(err);
        throw new Error("Error in logout from the service.");
    } 
};

export default logoutService;