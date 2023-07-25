"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentModel = exports.LikesModel = exports.ActionModel = exports.FollowerModel = exports.SessionModel = exports.PostModel = exports.userModel = void 0;
var users_1 = require("./users");
Object.defineProperty(exports, "userModel", { enumerable: true, get: function () { return users_1.userModel; } });
var posts_1 = require("./posts");
Object.defineProperty(exports, "PostModel", { enumerable: true, get: function () { return posts_1.PostModel; } });
var session_1 = require("./session");
Object.defineProperty(exports, "SessionModel", { enumerable: true, get: function () { return session_1.SessionModel; } });
var follower_1 = require("./follower");
Object.defineProperty(exports, "FollowerModel", { enumerable: true, get: function () { return follower_1.FollowerModel; } });
var actions_1 = require("./actions");
Object.defineProperty(exports, "ActionModel", { enumerable: true, get: function () { return actions_1.ActionModel; } });
var likes_1 = require("./likes");
Object.defineProperty(exports, "LikesModel", { enumerable: true, get: function () { return likes_1.LikesModel; } });
var comments_1 = require("./comments");
Object.defineProperty(exports, "CommentModel", { enumerable: true, get: function () { return comments_1.CommentModel; } });
//# sourceMappingURL=app.js.map