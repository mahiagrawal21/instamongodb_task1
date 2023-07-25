"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actionController = void 0;
const actions_1 = require("../models/actions");
const actions_2 = require("../models/actions");
const postData = {
    UserId: "64b6751da177ac64572b4a35",
    PostId: "64b67ee6013b2d16ec8533e9",
    type: actions_2.typrEnum.like,
};
const actionController = () => {
    actions_1.ActionModel.create(postData)
        .then((savedUser) => {
        console.log('User saved:', savedUser);
    })
        .catch((error) => {
        console.error('Error saving user:', error);
    });
};
exports.actionController = actionController;
//# sourceMappingURL=actionController.js.map