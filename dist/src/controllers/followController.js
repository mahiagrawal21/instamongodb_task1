"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffController = void 0;
const follower_1 = require("../models/follower");
const follower_2 = require("../models/follower");
const newUser = {
    sender: "64b674eba177ac64572b4a33",
    receiver: "64b67c9f77b4ddc1246c3f91",
    status: follower_2.statusEnum.pending
};
const ffController = () => {
    follower_1.FollowerModel.create(newUser)
        .then((savedUser) => {
        console.log('User saved:', savedUser);
    })
        .catch((error) => {
        console.error('Error saving user:', error);
    });
};
exports.ffController = ffController;
//# sourceMappingURL=followController.js.map