"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postController = void 0;
const posts_1 = require("../models/posts");
//import { object } from "joi";
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const postController = (req, res) => {
    const token = "" + req.headers.authorization;
    try {
        let decoded = jsonwebtoken_1.default.verify(token, 's1h2a3');
        decoded = Object.values(decoded)[0];
        let postData = {
            usrId: decoded._id,
            postId: req.body.postId,
            caption: req.body.caption,
            hashTags: [req.body.hashtag]
        };
        posts_1.PostModel.create(postData)
            .then((savedUser) => {
            console.log('User saved:', savedUser);
        })
            .catch((error) => {
            console.error('Error saving user:', error);
        });
    }
    catch (err) {
        console.log("Error Data is Crupted");
    }
};
exports.postController = postController;
//# sourceMappingURL=postController.js.map