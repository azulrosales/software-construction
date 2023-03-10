const express = require('express');
const path = require('path');

let router = express.Router();

const usersController = require('../controllers/user.controller');

router.get('/logout', usersController.logout);

module.exports = router;