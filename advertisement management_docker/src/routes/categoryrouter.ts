import express from "express";
import getCategoriesController  from "../controllers/category.controller";
import authMiddleware from '../middlewares/authmiddleware';


const categRouter = express.Router();

categRouter.get("/");

categRouter.get("/getCategory",authMiddleware,getCategoriesController);
// cateRouter.get("/getSubCategory",category.getSubCategory);
// cateRouter.get("/subSubCategory",category.getSubSubCategory);

export{categRouter};