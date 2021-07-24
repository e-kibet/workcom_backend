var express = require('express');
var router = express.Router();

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
router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
