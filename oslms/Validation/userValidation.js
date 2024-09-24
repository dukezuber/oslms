
import Joi from "joi";

// Define a Joi schema
export const userValidation = {
    body: Joi.object({
        name: Joi.string().max(30).required().messages({
            'any.required': 'name is a required field.',
            'string.empty': 'name cannot be empty.'
        }),
        userName: Joi.string().min(3).max(30).required().messages({
            'any.required': 'username is a required field.',
            'string.empty': 'username cannot be empty.'
        }),
        password: Joi.string().min(6).required().messages({
            'string.min': 'Password must be at least 6 characters long.',
            'any.required': 'Password is a required field.'
        }),
        number: Joi.string().max(10).required().messages({
            'any.required': 'phone number is a required field.',
            'string.empty': 'phone number cannot be empty.'
        }),
        email: Joi.string().max(30).required().messages({
            'any.required': 'email is a required field.',
            'string.empty': 'email cannot be empty.'
        }),
        postcode: Joi.string().max(7).required().messages({
            'any.required': 'postcode is a required field.',
            'string.empty': 'postcode cannot be empty.'
        }),
    }),
};

