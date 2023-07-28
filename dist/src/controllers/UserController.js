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
exports.userController = void 0;
const users_1 = require("../models/users");
const userController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = req.body;
    let user = yield users_1.userModel.findOne({
        name: req.body.name,
        password: req.body.password
    });
    if (user == undefined) {
        //new user created
        users_1.userModel.create(newUser).then((savedUser) => {
            res.status(201).send("User Created");
        }).catch((error) => {
            res.status(400).send(error);
        });
    }
    else {
        res.send("already Registered go back to login");
    }
});
exports.userController = userController;
//   userModel.create(newUser)
//   .then((savedUser) => {
//     res.status(201).send(savedUser)
//     res.end()
//   })
//   .catch((error) => {
//     console.error('Error saving user:', error);
//   });
// }
//# sourceMappingURL=UserController.js.map