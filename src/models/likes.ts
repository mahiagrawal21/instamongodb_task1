// Mongoose model for a collection --> likes

import mongoose, { Document, Schema } from 'mongoose';

interface Likes extends Document {
    user_id: number;
    post_id: number;
};

const likeSchema = new Schema<Likes>({
    user_id: { type: Number, ref: 'User', required: true },
    post_id: { type: Number, ref: 'Post', required: true },
});

export const LikesModel = mongoose.model<Likes>('Likes', likeSchema);