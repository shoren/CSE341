//const { Router } = require('express');
const express = require('express');
// const routes = require ('express').Router();
const router = express.Router();
const contactsController = require('../controller/contacts');

// Get all of the documents in the contacts collection
router.get('/', contactsController.getAll);

// Get one of the documents in the contacts collection
router.get('/:id', contactsController.getSingle);

// routes.get('/',(req, res) =>{
//     res.send('Caleb Brownie');
// });

module.exports = router;