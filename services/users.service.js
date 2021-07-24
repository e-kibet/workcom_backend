const models = require('../models/index');

exports.create = async (req, res) => {
    return new Promise(async function (resolve, reject) {
        const t = await models.sequelize.transaction();
        await models.users.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            group_id: req.body.group_id,
        }, { transaction: t, raw: true, truncate: true }).then(async (user) => {
            await t.commit();
            resolve(user);
        }, async (error) => {
            await t.rollback();
            reject(error);
        })
    })
}
exports.fetch = async (req) => {
    const { page_number, page_size } = req.query;
    let where = req.query;
    ["page_number", "page_size", "filter_value", "sort_order"].forEach(i => delete where[i]);
    return new Promise(async function (resolve, reject) {
        await models.users.count({ where: where }).then(async (data) => {
            await models.users.findAll({
                where: where,
                limit: page_size ? +page_size : 10,
                offset: page_number ? page_size * (page_number - 1) : 0,
            }).then(async (rows) => {
                resolve({ total: data, page_number: page_number ? parseInt(page_number) : 1, page_size: page_size ? +page_size : 10, data: rows });
            }).then(async (err) => {
                reject(err);
            })
        }).then(async (err) => {
            reject(err);
        })
    })
}