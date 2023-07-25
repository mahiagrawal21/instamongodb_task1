"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
//controller
const postController_1 = require("../controllers/postController");
router.post('/post', postController_1.postController);
exports.default = router;
//# sourceMappingURL=post.js.map