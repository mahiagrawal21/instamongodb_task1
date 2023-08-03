"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressRouter = void 0;
const express_1 = __importDefault(require("express"));
const address_controller_1 = require("../controllers/address.controller");
const authmiddleware_1 = __importDefault(require("../middlewares/authmiddleware"));
const addressRouter = express_1.default.Router();
exports.addressRouter = addressRouter;
addressRouter.get("/");
addressRouter.post("/addAddress", authmiddleware_1.default, address_controller_1.Address.addAddress);
