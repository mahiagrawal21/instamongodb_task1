"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const users_1 = require("../models/users");
const userController = (req, res) => {
    const newUser = req.body;
    users_1.userModel.create(newUser)
        .then((savedUser) => {
        res.status(201).send(savedUser);
        res.end();
    })
        .catch((error) => {
        console.error('Error saving user:', error);
    });
};
exports.userController = userController;
//# sourceMappingURL=UserController.js.map