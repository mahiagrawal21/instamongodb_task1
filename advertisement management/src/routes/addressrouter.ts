import express from "express";
import { Address} from "../controllers/address.controller";
import  authMiddleware from "../middlewares/authmiddleware";

const addressRouter = express.Router();

addressRouter.get("/");
addressRouter.post("/addAddress",authMiddleware,Address.addAddress);

export {addressRouter}