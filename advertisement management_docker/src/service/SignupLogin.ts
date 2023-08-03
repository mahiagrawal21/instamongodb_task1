// signup and login service

import bcrypt from 'bcrypt';
import User from '../models/Users';
import jwt from "jsonwebtoken";

const signupService = async (username: string, email: string, password: string, phone_number: number, gender: string) => {
    console.log(password);
    const hashedPassword = await bcrypt.hash(password, 2);

    const newUser = new User({
        username,
        email,
        password: hashedPassword,
        phone_number,
        gender,
        
    });
    await newUser.save();
    return newUser;
};

const loginService = async (email: string, password: string) => {
    try {
        const user: any = await User.findOne({ where: { email } });

        if (!user) {
            return { error: "Invalid email" };
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return { error: "Invalid password" };
        }

        const secret = "this is my secret";
        const accessToken = jwt.sign({ userId: user.id }, secret, { expiresIn: '1h' });

        return { message: "Login successful ", token: accessToken };
    } catch (err) {
        throw new Error("Error occurred");
    }
};

export { signupService, loginService };













































// import { error} from "console";
// import User from "../models/Users";

// //import  User  from "../models/Users";


// async function ifProfileExists(email: string) {
//     const user = await User.findOne({ where: { email } });
//     console.log(user);
//     return user;
//   }

// async function add(username: string, email: string, password: string, phone: string, gender: string) {
    
//     await User.create({

      
//       username,
//        email,
//       password,
//       phone,
//       gender
//     });
//   }
// class signupService {
//     async signup(username: string, email: string,password: string,  phone: string, gender: string) {
//         //console.log("-----------------signup called")
//         const user = ifProfileExists(email);
//         console.log(`this is result ${user}`);
//         if (user != null) {
//             try {
//                 add(username, email, password, phone, gender);
//                 console.log("signup success")
//             }
//             catch(error)
//             {
//                 console.log(error);
//             }
//         }
//         else
//         {
//             console.log("already exist")
//             return("already exist")
//         }
//     }
// }
// export default signupService;