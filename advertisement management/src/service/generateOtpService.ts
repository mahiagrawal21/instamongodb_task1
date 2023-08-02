import User from "../models/Users";
import { createClient, SetOptions } from "redis";

const generateOtpService = async (email: string): Promise<any> => {

  try {
    const user: any = await User.findOne({ where: { email } });

    if (!user) {
      throw new Error("User not found");
    } else {
      const otp = Math.floor(100000 + Math.random() * 900000);       // 6 number opt generated
      console.log(otp);

      const client = createClient();
      client.on("error", (err) => console.log("redis Client Error", err));    // on method is used to listen the "error" event when occur 
      await client.connect();

      const options: SetOptions = { EX: 30 };        // 30 sec expiry
      await client.set(user.email, otp, options);     // third parameter is optional
      return otp;
    }
  } catch (error) {
    throw new Error("OTP Generation failed");
  }
}

export default generateOtpService;