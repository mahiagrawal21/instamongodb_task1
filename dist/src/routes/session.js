"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
//controller
const sessionController_1 = require("../controllers/sessionController");
router.post('/session', sessionController_1.sessionController);
exports.default = router;
//# sourceMappingURL=session.js.map