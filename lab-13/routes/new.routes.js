const express = require('express');
const app = express();

let router = express.Router();

const new_controller = require('../controllers/new.controller');

router.get('/nuevo-producto', new_controller.get_nuevo);

router.post('/nuevo-producto', new_controller.post_nuevo);

module.exports = router;