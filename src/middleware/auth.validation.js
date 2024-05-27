//* validators/register.validator.js
const Joi = require("joi")


//Sign In
exports.loginValidation = (req, res, next) => {
  const schema = Joi.object({
    phone_no: Joi.number().min(10).required().messages({
      "any.required": "Phone number is required",
    }),
  })

  const { error } = schema.validate(req.body)

  if (error) {
    const errorMessage = error.details[0].message.replace(/['"]+/g, "")
    return res.status(400).json({ status: false, message: errorMessage })
  }

  next()
}

