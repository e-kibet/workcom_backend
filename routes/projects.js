var express = require('express');
var router = express.Router();
const controller = require('../controllers/index')
const joi  = require('../joi/index')

/** 
 * @swagger 
 * /Projects: 
 *   get: 
 *     description: Get all Projects 
 *     responses:  
 *       200: 
 *         description: Success  
 *   
 */

router.post('/projects', joi.validateBody(joi.schemas.createproject), controller.project.create);

router.get('/projects', controller.project.fetch);

module.exports = router;
