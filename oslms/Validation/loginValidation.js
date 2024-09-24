
import Joi from "joi";

// Define a Joi schema
export const loginValidation = {
    body: Joi.object({
        userName: Joi.string().required().messages({
            'any.required': 'username is a required field.',
            'string.empty': 'username cannot be empty.'
        }),
        password: Joi.string().min(6).required().messages({
            'string.min': 'Password must be at least 6 characters long.',
            'any.required': 'Password is a required field.'
        }),
    }),
};

