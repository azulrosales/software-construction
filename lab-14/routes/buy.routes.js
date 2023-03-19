const express = require('express');
const app = express();
const bodyParser = require('body-parser');

let router = express.Router();

const buy_controller = require('../controllers/buy.controller');

router.get('/comprar', buy_controller.get_comprar);

router.get('/carrito', buy_controller.get_carrito);

router.post('/carrito', buy_controller.post_carrito);

module.exports = router;