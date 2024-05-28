const Joi = require("joi");

exports.loginValidation = (req, res, next) => {
  const schema = Joi.object({
    phone_no: Joi.string().email().required().messages({
      "any.required": "Email is required",
      "string.email": "Invalid email format",
    }),
    otp: Joi.string().min(6).required().messages({
      "any.required": "OTP is required",
      "string.min": "OTP must be at least 6 characters",
    }),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    const errorMessage = error.details[0].message.replace(/['"]+/g, "");
    return res.status(400).json({ status: false, message: errorMessage });
  }

  next();
};
