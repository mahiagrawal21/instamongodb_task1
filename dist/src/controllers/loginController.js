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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = void 0;
const users_1 = require("../models/users");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const session_1 = require("../models/session");
const redis_1 = __importDefault(require("../provider/redis"));
dotenv_1.default.config();
//const secretKey: string = "s1h2a3";
// token=jwt.sign({mahi:"Mahi"},"s1h2a3")
// export const loginController = async (req: Request, res: Response) => {
//   try {
//     const newUser = req.body;
//     let token: string = "sd";
//     const savedUser = await userModel.findOne({
//       name: req.body.name,
//       password: req.body.password
//     });
//     if (!savedUser) {
//       // If the user is not found, return an error response
//       console.log('User saved:', savedUser);
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }    token = jwt.sign(JSON.stringify(savedUser), secretKey);
//     res.end(token);
//   } catch (error) {
//     console.error('Error saving user:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };
const loginController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user = yield users_1.userModel.findOne({
            name: req.body.name,
            password: req.body.password
        });
        if (user == undefined) {
            res.status(400).send("User doen't Exist");
        }
        else {
            user = Object.assign({}, JSON.parse(JSON.stringify(user)));
            let secretKey = "" + process.env.SECRET_KEY;
            //token generation
            req.headers.authorization = jsonwebtoken_1.default.sign({ _id: user === null || user === void 0 ? void 0 : user._id }, secretKey, { expiresIn: '1h' });
            let redisData = yield redis_1.default.get(`${user === null || user === void 0 ? void 0 : user._id}`);
            if (!redisData) {
                console.log("Cache miss");
                //Session creation if not exist
                let data = yield session_1.SessionModel.find({
                    userId: user === null || user === void 0 ? void 0 : user._id,
                    isActive: true,
                });
                if (!(data.length > 0)) {
                    yield session_1.SessionModel.create({
                        userId: user === null || user === void 0 ? void 0 : user._id,
                        isActive: true,
                        loginAt: new Date()
                    });
                }
                redis_1.default.setEx(`${user === null || user === void 0 ? void 0 : user._id}`, 3600, "true");
            }
            else {
                console.log("cache hit");
            }
            res.send(req.headers.authorization);
        }
    }
    catch (e) {
        res.send(e);
    }
    next();
});
exports.loginController = loginController;
//# sourceMappingURL=loginController.js.map