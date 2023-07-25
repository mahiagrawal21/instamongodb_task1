// Mongoose model for a collection --> Commment

import mongoose, { Document, Schema } from 'mongoose';

interface Comments extends Document {
    user_id: number;
    post_id: number;
    comment_description: string;
    replies: {
        user_id: number;
        description: string;
    }[];
}

const replySchema = new Schema({
    user_id: { type: Number, ref: 'User', required: true },
    // comment_id: { type: Number, ref: '', required: true },
    description: { type: String, required: true }
});

const commentSchema = new Schema<Comments>({
    user_id: { type: Number, ref: 'User', required: true },
    post_id: { type: Number, ref: 'Post', required: true },
    comment_description: { type: String, required: true },
    replies: [replySchema]
});  

export const CommentModel = mongoose.model<Comments>('Comments', commentSchema);