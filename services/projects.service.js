const models = require('../models/index');
const { v4: uuidv4 } = require('uuid');

exports.create = async (req, res) => {
    return new Promise(async function (resolve, reject) {
        const t = await models.sequelize.transaction();
        await models.projects.create({
            project_id: uuidv4(),
            project_name: req.body.project_name,
            owner_id: req.body.owner_id,
            start_date: req.body.start_date,
            end_date: req.body.end_date
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
        await models.projects.count({ where: where }).then(async (data) => {
            await models.projects.findAll({
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