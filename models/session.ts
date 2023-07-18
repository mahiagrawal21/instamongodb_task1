//Mongoose model for a collection --> Session


import mongoose, { Document, Schema } from 'mongoose';

interface Session extends Document {
    user_id: number;
    session_id: number;
    device_id: number;
    device_token: string;
    device_type: string;
    createdAt: Date;
    updatedAt: Date;
  }

  const SessionSchema = new Schema<Session>({
   user_id: { type: Number, required: true },
    session_id: { type: Number, required: true },
    device_id: { type: Number, required: true },
    device_token: { type: String, required: true },
    device_type: { type: String, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
  });

  export const SessionModel = mongoose.model<Session>('Session', SessionSchema);