"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageRouter = void 0;
const express_1 = __importDefault(require("express"));
const image_controller_1 = require("../controllers/image.controller");
const authmiddleware_1 = __importDefault(require("../middlewares/authmiddleware"));
const multerimage_1 = require("../middlewares/multerimage");
const imageRouter = express_1.default.Router();
exports.imageRouter = imageRouter;
imageRouter.get("/");
imageRouter.post("/addImage/:pid", authmiddleware_1.default, multerimage_1.upload.array('images', 5), image_controller_1.image.addimages);
