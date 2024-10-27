import Joi from "joi";

export const createUserSchema = Joi.object({
    name: Joi.string().label("Name").max(15).trim().required(),
    email: Joi.string().label("Email").email().trim().required(),
    password: Joi.string().label("Password").min(8).max(16).trim().required(),
    role: Joi.string().label("Role").valid("USER", "ADMIN").trim().optional(),
});

export const updateUserSchema = Joi.object({
    name: Joi.string().label("Name").max(15).trim().optional(),
    email: Joi.string().label("Email").email().trim().optional(),
    password: Joi.string().label("Password").min(8).max(16).trim().optional(),
    role: Joi.string().label("Role").valid("USER", "ADMIN").trim().optional(),
});
