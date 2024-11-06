const Joi = require("joi");

const studentValidate = {
  body: Joi.object().keys({
    name: Joi.string()
      .trim()
      .min(3)
      .pattern(/^[a-zA-Z\s]+$/)
      .required()
      .messages({
        "string.base": "Name must be a string",
        "string.pattern.base":
          "Name cannot contain special characters or numbers",
        "any.required": "Name is masum sir required",
      }),
    city: Joi.string()
      .trim()
      .min(4)
      .pattern(/^[a-zA-Z\s]+$/)
      .required()
      .messages({
        "string.base": "City must be a string",
        "string.pattern.base":
          "City cannot contain special characters or numbers",
        "any.required": "City is required",
      }),
    schoolName: Joi.string()
      .trim()
      .min(4)
      .pattern(/^[a-zA-Z\s]+$/)
      .required()
      .messages({
        "string.base": "School name must be a string",
        "string.pattern.base":
          "School name cannot contain special characters or numbers",
        "any.required": "School name is required",
      }),
    section: Joi.string()
      .trim()
      .min(1)
      .pattern(/^[a-zA-Z\s]+$/)
      .required()
      .messages({
        "string.base": "Section must be a string",
        "string.pattern.base":
          "Section cannot contain special characters or numbers",
        "any.required": "Section is required",
      }),
    studntage: Joi.number().min(1).max(17).required().messages({
      "number.base": "Student age must be a number",
      "any.required": "Student age is required",
    }),
  })
};

const allStudentValidate = {};

const updateStudentValidate = {
  params: Joi.object().keys({
    id: Joi.number().required().messages({
      "number.base": "ID must be a number",
      "any.required": "ID is required",
    }),
  }),
  body: Joi.object().keys({
    name: Joi.string()
      .trim()
      .min(3)
      .pattern(/^[a-zA-Z\s]+$/)
      .optional()
      .messages({
        "string.base": "Name must be a string",
        "string.pattern.base":
          "Name cannot contain special characters or numbers",
        "string.min": "Name must have at least 3 characters",
      }),
    city: Joi.string()
      .trim()
      .min(4)
      .pattern(/^[a-zA-Z\s]+$/)
      .optional()
      .messages({
        "string.base": "City must be a string",
        "string.pattern.base":
          "City cannot contain special characters or numbers",
        "string.min": "City must have at least 4 characters",
      }),
    schoolName: Joi.string()
      .trim()
      .min(4)
      .pattern(/^[a-zA-Z\s]+$/)
      .optional()
      .messages({
        "string.base": "School name must be a string",
        "string.pattern.base":
          "School name cannot contain special characters or numbers",
        "string.min": "School name must have at least 4 characters",
      }),
    section: Joi.string()
      .trim()
      .min(1)
      .pattern(/^[a-zA-Z\s]+$/)
      .optional()
      .messages({
        "string.base": "Section must be a string",
        "string.pattern.base":
          "Section cannot contain special characters or numbers",
        "string.min": "Section must have at least 1 character",
      }),
    studntage: Joi.number().min(1).max(17).optional().messages({
      "number.base": "Student age must be a number",
      "number.min": "Student age must be at least 1",
      "number.max": "Student age must be at most 17",
    }),
  }),
};

const deleteValidation = {
  params: Joi.object().keys({
    id: Joi.number().required().messages({
      "number.base": "ID must be a number",
      "any.required": "ID is required",
    }),
  }),
};

module.exports = {
  studentValidate,
  allStudentValidate,
  updateStudentValidate,
  deleteValidation,
};
