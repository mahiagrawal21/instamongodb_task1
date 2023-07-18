//Mongoose model for a collection --> POst

import mongoose, { Document, Schema } from 'mongoose';

interface Post extends Document {
    post_id: number;
    user_id: number;
    photo_url: string;
    caption: string;
    createdAt: Date;
    updatedAt: Date;
}
const postSchema = new Schema<Post>({
    post_id: { type: Number, required: true },
    user_id: { type: Number, ref: 'User', required: true },
    photo_url: { type: String, required: true },
    caption: { type: String, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
  });

  export const PostModel = mongoose.model<Post>('Post', postSchema);