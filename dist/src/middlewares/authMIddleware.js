"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = void 0;
const joi_1 = __importDefault(require("joi"));
const validateUser = (req, res, next) => {
    // This one is for nested details of some collection-->
    // const validateAddress=Joi.object({
    //     city:Joi.string().required(),
    //     state:Joi.string().required(),
    //     country:Joi.string().required()
    //   });
    const userSchema = joi_1.default.object({
        user_id: joi_1.default.number().required(),
        username: joi_1.default.string().required(),
        first_name: joi_1.default.string().required(),
        last_name: joi_1.default.string().required(),
        email: joi_1.default.string().regex(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
        password: joi_1.default.string().min(8).required(),
        follower_count: joi_1.default.number().required(),
        following_count: joi_1.default.number().required(),
        bio: joi_1.default.string().required(),
        createdAt: joi_1.default.date().required(),
        updatedAt: joi_1.default.date().required(),
    });
    const result = userSchema.validate(req.body);
    console.log(result);
    if (result.error) {
        res.status(400).send("Enter the valid details");
    }
    else {
        next();
    }
};
exports.validateUser = validateUser;
//# sourceMappingURL=authMIddleware.js.map