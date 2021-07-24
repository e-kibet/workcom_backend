var express = require('express');
var router = express.Router();
const controller = require('../controllers/index')
const helpers = require('../helpers/index')
const joi  = require('../joi/index')

/** 
 * @swagger 
 * /Users: 
 *   get: 
 *     description: Get all Users 
 *     responses:  
 *       200: 
 *         description: Success  
 *   
 */

router.post('/users', joi.validateBody(joi.schemas.registeruser), controller.user.create);

router.get('/users', controller.user.fetch);

module.exports = router;
