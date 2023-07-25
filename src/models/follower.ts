//Mongoose model for a collection --> Follower

import mongoose, { Document, Schema } from 'mongoose';
export enum statusEnum {
    accepted= "accepted",
    rejected="rejected",
    pending="pending",
  }
interface Follower extends Document {
    sender_id: number;
    receiver_id: number;
    status: 'accept' | 'reject' | 'pending';
    createdAt: Date;
    updatedAt: Date;
}

const followerSchema = new Schema<Follower>({
    sender_id: { type: Number, ref: 'User', required: true },
    receiver_id: { type: Number, ref: 'User', required: true },
    status: { type: String, enum: ['accept', 'reject', 'pending'], required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
  });

  export const FollowerModel = mongoose.model<Follower>('Follower', followerSchema);
