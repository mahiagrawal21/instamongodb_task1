"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const product_controller_1 = require("../controllers/product.controller");
const express_1 = __importDefault(require("express"));
const productRouter = express_1.default.Router();
exports.productRouter = productRouter;
const authmiddleware_1 = __importDefault(require("../middlewares/authmiddleware"));
//import { productValidator } from "../middleware/validation";
productRouter.get("/");
productRouter.post("/addProduct", authmiddleware_1.default, product_controller_1.product.addProduct);
productRouter.get("/getProduct", authmiddleware_1.default, product_controller_1.product.getProduct);
productRouter.get("/getProduct/:pId", authmiddleware_1.default, product_controller_1.product.getProduct);
productRouter.post("/addBid/:pid", authmiddleware_1.default, product_controller_1.product.addbid);
