var express = require('express');
var router = express.Router();
const controller = require('../controllers/index')
const helpers = require('../helpers/index')
const joi = require('../joi/index')

/** 
 * @swagger 
 * /Auth: 
 *   get: 
 *     description: Get all Auth 
 *     responses:  
 *       200: 
 *         description: Success  
 *   
 */

router.post('/auth/checkphone', joi.validateBody(joi.schemas.checkphone), controller.auth.checkPhone);

module.exports = router;
