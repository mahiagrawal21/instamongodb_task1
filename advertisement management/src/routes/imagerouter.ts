import express from "express";
import { image } from "../controllers/image.controller";
import authMiddleware from "../middlewares/authmiddleware";
import { upload } from "../middlewares/multerimage";
const imageRouter = express.Router();

imageRouter.get("/");
imageRouter.post("/addImage/:pid",authMiddleware,upload.array('images',5),image.addimages);
// productRoute.route('/addimages/:pid').post(authenticateToken,upload.array('images',5),setproductimagesController);

export {imageRouter};