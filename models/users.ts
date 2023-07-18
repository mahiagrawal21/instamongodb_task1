//Mongoose model for a collection --> user

import mongoose, { Document, Schema } from 'mongoose';

interface User extends Document {
  user_id:number;
  username: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  bio: string;
  profileImage: string;
  following_count: number;
  follower_count: number;
  createdAt: Date;
  updatedAt: Date;
  
}

const userSchema = new Schema<User>({
    user_id: { type: Number, required: true },
    username: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    follower_count: { type: Number, required: true },
    following_count: { type: Number, required: true },
    password: { type: String, required: true },
    bio: { type: String, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
  });

export const userModel = mongoose.model<User>('User', userSchema);


// export default mongoose.model<User>('User', userSchema);

