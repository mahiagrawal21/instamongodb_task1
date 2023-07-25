"use strict";
//Mongoose model for a collection --> Follower
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FollowerModel = exports.statusEnum = void 0;
const mongoose_1 = __importStar(require("mongoose"));
var statusEnum;
(function (statusEnum) {
    statusEnum["accepted"] = "accepted";
    statusEnum["rejected"] = "rejected";
    statusEnum["pending"] = "pending";
})(statusEnum || (exports.statusEnum = statusEnum = {}));
const followerSchema = new mongoose_1.Schema({
    sender_id: { type: Number, ref: 'User', required: true },
    receiver_id: { type: Number, ref: 'User', required: true },
    status: { type: String, enum: ['accept', 'reject', 'pending'], required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
});
exports.FollowerModel = mongoose_1.default.model('Follower', followerSchema);
//# sourceMappingURL=follower.js.map