const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

// Define routes
router.get('/', indexController.getHome);

module.exports = router;
