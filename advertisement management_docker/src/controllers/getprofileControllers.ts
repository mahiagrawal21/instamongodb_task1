import { Request, Response } from "express";
import  getProfileService  from '../service/getprofile';

const getProfileController = async (req: Request, res: Response) => {
  const { id } = req.body;

  try {
    const result = await getProfileService(id);
    res.status(200).json({ message: "profile fetch from database", result });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "error in post fetching" });
  }
};

export default getProfileController;