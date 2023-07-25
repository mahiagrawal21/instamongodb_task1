import { FollowerModel } from "../models/follower";
import {statusEnum} from '../models/follower'

const newUser={
    sender: "64b674eba177ac64572b4a33",
    receiver: "64b67c9f77b4ddc1246c3f91",
    status:statusEnum.pending
  }

export const ffController = async()=>{
  try{
    const savedUser = await FollowerModel.create(newUser);
    console.log('User saved:', savedUser);
  }
  catch(error) {
    console.error('Error saving user:', error);
  }
};