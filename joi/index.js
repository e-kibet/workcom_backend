const Joi = require('joi');

module.exports = {
    schemas: {
        login: Joi.object().keys({
            email: Joi.string().email().required(),
            password: Joi.string().required(),
        }),
        checkphone: Joi.object().keys({
            msisdn: Joi.string().required(),
        }),
        registeruser: Joi.object().keys({
            first_name: Joi.string().required(),
            last_name: Joi.string().required(),
            msisdn: Joi.string().required(),
            group_id: Joi.string().valid('1', '2').required(),
            password: Joi.string().required()
        })
    },

    validateBody: (schema) => {
        return (req, res, next) => {
            const result = Joi.validate(req.body, schema);
            if (result.error) {
                return res.status(400).json({
                    status: false,
                    status_code: 400,
                    status_message: result.error.details[0].message
                })
            } else {
                if (!req.value) {
                    req.value = {}
                }
                req.value['body'] = result.value;
                next();
            }
        }
    }
}