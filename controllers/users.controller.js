const service = require('../services/index');

exports.create = async (req, res) => {
    try {
        await service.user.create(req, res).then(async (results) => {
            res.status(200).json({ status: true, status_code: 200, status_message: 'User created successfully' });
        }, async (error) => {
            res.status(500).json({ status: false, status_code: 500, status_message: error.errors[0].message.split('.') });
        })
    } catch (e) {
        res.status(500).json({ status: false, status_code: 500, status_message: e.message })
    }
}
exports.fetch = async (req, res) => {
    try {
        await service.user.fetch(req).then(async (results)=> {
            res.status(200).json(results);
        }, async (error) => {
            console.log(error);
            res.status(500).json({ status: false, status_code: 500, status_message: JSON.stringify(error) });
        })
    } catch (e) {
        res.status(500).json({ status: false, status_code: 500, status_message: e.message });
    }
}