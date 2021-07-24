var express = require('express');
var router = express.Router();
const controller = require('../controllers/index')
const helpers = require('../helpers/index')

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

router.get('/auth/checkPhone', helpers.jwt.checkAuth, controller.auth.checkPhone);

module.exports = router;
