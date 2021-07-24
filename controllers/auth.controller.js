require('dotenv').config();
const jwt = require('jsonwebtoken');
const service = require('../services/index');
const helpers = require('../helpers/index');

exports.login = async (req, res, next) => {
    try {
        await service.auth.attemptLogin(req).then(async (user) => {
            if (!user) {
                return helpers.response.ErrorResponse(res, "Email is not present in our records");
            } else if (!await user.validPassword(req.body.password)) {
                return helpers.response.unauthorizedResponse(res, "Wrong email or password!");
            } else {
                const payload = {
                    id: user.id,
                    email: user.email,
                    group_id: user.group_id,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    expires_in: process.env.JWT_EXPIRATION_TIME,
                    time: new Date()
                };
                var token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
                    expiresIn: process.env.JWT_EXPIRATION_TIME
                });
                return helpers.response.successResponseWithData(res, 'login success', { user: payload, auth: { strategy: 'local', token: token } });
            }
        }, async (error) => {
            res.status(500).json({ status: false, status_code: 500, status_message: JSON.stringify(error) });
        })
    } catch (e) {
        res.status(500).json({ status: false, status_code: 500, status_message: e.message })
    }
}
exports.checkPhone = async (req, res, next) => {
    try {
        await service.auth.checkPhone(req).then(async (user) => {
            if(!user){
                return helpers.response.ErrorResponse(res, "User not present in our records");
            }else{
                return helpers.response.successResponseWithData(res, 'success', user);
            }
        }, async error => {
            res.status(500).json({ status: false, status_code: 500, status_message: JSON.stringify(error) });
        })
    } catch (e) {
        res.status(500).json({ status: false, status_code: 500, status_message: e.message })
    }
}
