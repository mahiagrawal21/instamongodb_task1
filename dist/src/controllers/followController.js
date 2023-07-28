"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffController = void 0;
const follower_1 = require("../models/follower");
const follower_2 = require("../models/follower");
const newUser = {
    sender: "64b674eba177ac64572b4a33",
    receiver: "64b67c9f77b4ddc1246c3f91",
    status: follower_2.statusEnum.pending
};
const ffController = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const savedUser = yield follower_1.FollowerModel.create(newUser);
        console.log('User saved:', savedUser);
    }
    catch (error) {
        console.error('Error saving user:', error);
    }
});
exports.ffController = ffController;
//# sourceMappingURL=followController.js.map