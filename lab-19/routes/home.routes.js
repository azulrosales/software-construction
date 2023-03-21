const express = require('express');
const app = express();

let router = express.Router();

const home_controller = require('../controllers/home.controller');

router.get('/', home_controller.get_home);

module.exports = router;