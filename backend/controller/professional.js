const express = require('express');

const professionalController = require('../controllers/professional');

const router = express.Router();

// GET /feed/posts
router.get('/', professionalController.getData);
// localhost:8080/professional/
module.exports = router;

//this might be wrong i have no idea what is going on here