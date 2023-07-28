"use strict";
// import { ActionModel } from "../models/actions";
// import {typrEnum} from '../models/actions'
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
exports.actionController = void 0;
// const postData={
//     UserId:"64b6751da177ac64572b4a35",
//     PostId: "64b67ee6013b2d16ec8533e9",
//     type:typrEnum.like,
//     }
// export const actionController=()=>{ActionModel.create(postData)
//   .then((savedUser) => {
//     console.log('User saved:', savedUser);
//   })
//   .catch((error) => {
//     console.error('Error saving user:', error);
//   });
// }
const actions_1 = require("../models/actions");
const actions_2 = require("../models/actions");
const postData = {
    UserId: "64b6751da177ac64572b4a35",
    PostId: "64b67ee6013b2d16ec8533e9",
    type: actions_2.typrEnum.like,
};
const actionController = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const savedUser = yield actions_1.ActionModel.create(postData);
        console.log('User saved:', savedUser);
    }
    catch (error) {
        console.error('Error saving user:', error);
    }
});
exports.actionController = actionController;
//# sourceMappingURL=actionController.js.map