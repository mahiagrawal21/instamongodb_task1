"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterProductJoiMiddleware = exports.reviewProductJoiMiddleware = exports.newPasswordJoiMiddleware = exports.generateOtpJoiMiddleware = exports.loginJoiMiddleware = exports.updateProfileJoiMiddleware = exports.signUpJoiMiddleware = void 0;
const joi_1 = __importDefault(require("joi"));
const signUpSchema = joi_1.default.object({
    username: joi_1.default.string().alphanum().min(3).max(30).required(),
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().required(),
    name: joi_1.default.string().required(),
    address: joi_1.default.string().required(),
    profileImage: joi_1.default.string(),
    gender: joi_1.default.string(),
    dob: joi_1.default.date()
});
const updateProfileSchema = joi_1.default.object({
    username: joi_1.default.string().alphanum().min(3).max(30),
    email: joi_1.default.string().email(),
    name: joi_1.default.string(),
    phoneNumber: joi_1.default.string()
});
const generateOtpSchema = joi_1.default.object({
    email: joi_1.default.string().email().required(),
});
const newPasswordSchema = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    otp: joi_1.default.string().required(),
    newPassword: joi_1.default.string().required()
});
const reviewProductSchema = joi_1.default.object({
    productId: joi_1.default.string().required(),
    review: joi_1.default.string().required()
});
const filterProductSchema = joi_1.default.object({
    minPrice: joi_1.default.number().required(),
    maxPrice: joi_1.default.number().required()
});
const loginSchema = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().required()
});
const signUpJoiMiddleware = (req, res, next) => {
    const { error } = signUpSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};
exports.signUpJoiMiddleware = signUpJoiMiddleware;
const updateProfileJoiMiddleware = (req, res, next) => {
    const { error } = updateProfileSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};
exports.updateProfileJoiMiddleware = updateProfileJoiMiddleware;
const loginJoiMiddleware = (req, res, next) => {
    const { error } = loginSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};
exports.loginJoiMiddleware = loginJoiMiddleware;
const generateOtpJoiMiddleware = (req, res, next) => {
    const { error } = generateOtpSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};
exports.generateOtpJoiMiddleware = generateOtpJoiMiddleware;
const newPasswordJoiMiddleware = (req, res, next) => {
    const { error } = newPasswordSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};
exports.newPasswordJoiMiddleware = newPasswordJoiMiddleware;
const reviewProductJoiMiddleware = (req, res, next) => {
    const { error } = reviewProductSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};
exports.reviewProductJoiMiddleware = reviewProductJoiMiddleware;
const filterProductJoiMiddleware = (req, res, next) => {
    const { error } = filterProductSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};
exports.filterProductJoiMiddleware = filterProductJoiMiddleware;
