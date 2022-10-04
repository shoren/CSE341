//const { Router } = require('express');
const express = require('express');
// const routes = require ('express').Router();
const router = express.Router();
const contactsController = require('../controller/contacts');

// Get all of the documents in the contacts collection
router.get('/', contactsController.getAll);

// Get one of the documents in the contacts collection
//GET REQUEST
router.get('/:id', contactsController.getSingle);
//POST
router.post('/', contactsController.createContact);
//PUT
router.put('/:id', contactsController.updateContact);
//DELETE
router.delete('/:id', contactsController.deleteContact);

module.exports = router;