var express = require('express');
var router = express.Router();
const controller = require('../controllers/index')

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

// router.post('/users', joi.user.validateBody(joi.user.schemas.schema), modules.user.create);

// router.get('/users', jwt.checkAuth, modules.user.fetch);

module.exports = router;
