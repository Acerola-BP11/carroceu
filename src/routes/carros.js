var express = require('express');
const carroController = require('../controllers/carroController');
const carroMiddleware = require('../middleware/carroMiddleware');
var router = express.Router();

// Gets
router.get('/list', carroController.list);
router.get('/new', carroController.form);

// Posts
router.post('/new', carroController.create)
router.post('/edit', carroController.edit)
router.post('/delete', carroController.delete)
module.exports = router;
