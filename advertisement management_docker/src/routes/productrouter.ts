import { product } from "../controllers/product.controller";
import express from "express";
const productRouter = express.Router();
import authMiddleware from "../middlewares/authmiddleware";
//import { productValidator } from "../middleware/validation";

productRouter.get("/");
 productRouter.post("/addProduct",authMiddleware,product.addProduct);
 productRouter.get("/getProduct",authMiddleware,product.getProduct);
 productRouter.get("/getProduct/:pId",authMiddleware,product.getProduct);
 productRouter.post("/addBid/:pid",authMiddleware,product.addbid);

export {productRouter}