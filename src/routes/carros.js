var express = require('express');
const carroController = require('../controllers/carroController');
const carroMiddleware = require('../middleware/carroMiddleware');
var router = express.Router();

// Gets
router.get('/list', carroController.list);
router.get('/new', carroController.form);

// Posts
router.post('/new', carroMiddleware.validate, carroController.create)
router.post('/edit', carroMiddleware.validate, carroMiddleware.validateid, carroController.edit)
module.exports = router;
