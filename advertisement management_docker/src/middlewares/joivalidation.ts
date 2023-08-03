import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const signUpSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    name: Joi.string().required(),
    address: Joi.string().required(),
    profileImage: Joi.string(),
    gender: Joi.string(),
    dob: Joi.date()
});

const updateProfileSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30),
    email: Joi.string().email(),
    name: Joi.string(),
    phoneNumber: Joi.string()
});

const generateOtpSchema = Joi.object({
    email: Joi.string().email().required(),

});

const newPasswordSchema = Joi.object({
    email: Joi.string().email().required(),
    otp: Joi.string().required(),
    newPassword: Joi.string().required()

});
const reviewProductSchema = Joi.object({
    productId: Joi.string().required(),
    review: Joi.string().required()
});

const filterProductSchema = Joi.object({
    minPrice: Joi.number().required(),
    maxPrice: Joi.number().required()
});


const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});

export const signUpJoiMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { error } = signUpSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

export const updateProfileJoiMiddleware = (req:Request, res:Response, next:NextFunction) => {
    const { error } = updateProfileSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

export const loginJoiMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { error } = loginSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

export const generateOtpJoiMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { error } = generateOtpSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

export const newPasswordJoiMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { error } = newPasswordSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

export const reviewProductJoiMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { error } = reviewProductSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

export const filterProductJoiMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { error } = filterProductSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};