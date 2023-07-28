"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
//controller
const loginController_1 = require("../controllers/loginController");
/**
 * @swagger
 * /auth/signin:
 *   post:
 *     description: Allow user to login
 *     responses:
 *       200:
 *         description: Success
 *
 */
router.post('/signin', loginController_1.loginController);
exports.default = router;
//# sourceMappingURL=login.js.map