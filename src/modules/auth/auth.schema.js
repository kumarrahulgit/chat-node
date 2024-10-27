import Joi from "joi";

export const loginSchema = Joi.object({
    mobileNumber: Joi.string().label("Mobile number").max(15).trim().required(),
    password: Joi.string().label("Password").length(4).trim().required()
});
