import  address  from "../models/address";

export class Address{
    static async addAddress(req:any,res:any){
        const detail =req.body;
        try {
            
            await address.create(detail);
            res.status(201).json({ message: "Address registered successfully" }); 
        } catch (error) {
            res.status(500).json({ message: "Server Error" });
            console.log(error);
        }
    }
}