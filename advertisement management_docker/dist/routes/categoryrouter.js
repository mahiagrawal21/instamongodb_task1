"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categRouter = void 0;
const express_1 = __importDefault(require("express"));
const category_controller_1 = __importDefault(require("../controllers/category.controller"));
const authmiddleware_1 = __importDefault(require("../middlewares/authmiddleware"));
const categRouter = express_1.default.Router();
exports.categRouter = categRouter;
categRouter.get("/");
categRouter.get("/getCategory", authmiddleware_1.default, category_controller_1.default);
