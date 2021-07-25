const models = require('../models/index');

exports.login = async (req) => {
    return new Promise(async (resolve, reject) => {
        await models.users.findOne({ where: { email: req.body.email } }).then(async (results) => {
            resolve(results);
        }, async (error) => {
            reject(error);
        })
    })
}
exports.checkPhone = async (req)=>{
    return new Promise(async (resolve, reject)=>{
        await models.users.findOne({ where: { msisdn: req.body.msisdn }, attributes: ['first_name', 'last_name', 'msisdn', 'last_login'] }).then(async (user) => {
            resolve(user);
        }, async (error) => {
            reject(error);
        })
    })
}